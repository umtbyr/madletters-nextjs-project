import { openai } from "@/lib/openai";
import { prisma } from "@/lib/prisma";
import type { ChatCompletionMessageParam } from "openai/resources";
import { Quiz } from "../models/quiz";

const AtoZ = [..."ABCDEFGHIJKLMNOPRSTUVYZ"];

async function generateQuizFromOenAI(
  retries = 1
): Promise<{ question: string; answer: string }[]> {
  const messages: ChatCompletionMessageParam[] = [
    {
      role: "system",
      content:
        "Sen tıp öğrencileri için günlük bilgi yarışması soruları hazırlayan deneyimli bir profesörsün.",
    },
    {
      role: "user",
      content: `
  Aşağıdaki kurallara uygun olarak **23 adet benzersiz tıbbi bilgi sorusu ve cevabı** üret:
  
  Kurallar:
  - Her soru yalnızca **tek bir doğru cevaba** sahip olmalıdır.
  - İlk cevabın "A", ikinci "B", üçüncü "C" harfiyle başlamalı... 23. soru "Z" harfiyle başlamalıdır.
  - Türk alfabesinde olmayan karakterler (örneğin "Q", "W", "X") kullanılmamalıdır.
  - Tüm içerik **Türkçe** olmalıdır.
  - Sorular, tıp öğrencileri için uygun zorlukta ve **klinik olarak anlamlı** olmalıdır.
  - Format: **Sadece JSON dizisi**, örneğin:
  
  [
    {
      "question": "Hipofiz bezinde en sık görülen tümör tipi nedir?",
      "answer": "Adenom"
    },
    ...
  ]
  
   **Açıklama ekleme. Sadece JSON çıktısı ver.**
      `.trim(),
    },
  ];

  const res = await openai.chat.completions.create({
    model: "gpt-4o",
    messages,
    temperature: 0.7,
    max_tokens: 3000,
  });

  const content = res.choices[0]?.message?.content;

  if (!content) throw new Error("No content returned from OpenAI");

  try {
    const parsed = JSON.parse(content);
    if (!Array.isArray(parsed) || parsed.length !== 23)
      throw new Error("Invalid question array");
    const validated = parsed.every(
      (q, i) => q.answer[0].toUpperCase() === AtoZ[i]
    );
    if (!validated) {
      return generateQuizFromOenAI(retries - 1);
    }
    return parsed;
  } catch (e) {
    if (retries > 0) {
      console.warn("OpenAI call failed, retrying...", e);
      await new Promise((res) => setTimeout(res, 2000));
      return generateQuizFromOenAI(retries - 1);
    }
    console.error("Failed to parse OpenAI JSON:", e);
    console.error("Content:", content);
    throw e;
  }
}

export async function generateQuestionsForLetters(
  missingKeys: string[]
): Promise<{ question: string; answer: string }[]> {
  const letters = missingKeys.join(", ");

  const messages: ChatCompletionMessageParam[] = [
    {
      role: "system",
      content:
        "Sen tıp öğrencileri için günlük bilgi yarışması soruları hazırlayan deneyimli bir profesörsün.",
    },
    {
      role: "user",
      content: `
Aşağıdaki kurallara uygun olarak **${missingKeys.length} adet benzersiz tıbbi bilgi sorusu ve cevabı** üret:

Kurallar:
- Her soru yalnızca **tek bir doğru cevaba** sahip olmalıdır.
- Soruların cevapları şu harflerle başlamalı: ${letters}
- Cevaplar belirtilen sırayla olmalı (1. ${missingKeys[0]}, 2. ${missingKeys[1]}, ...)
- Türk alfabesinde olmayan karakterler (örneğin "Q", "W", "X") kullanılmamalıdır.
- Tüm içerik **Türkçe** olmalıdır.
- Sorular, tıp öğrencileri için uygun zorlukta ve **klinik olarak anlamlı** olmalıdır.
- Format: **Sadece JSON dizisi**, örneğin:

[
  {
    "question": "Hipofiz bezinde en sık görülen tümör tipi nedir?",
    "answer": "Adenom"
  },
  ...
]

⛔️ **Açıklama ekleme. Sadece JSON çıktısı ver.**
      `.trim(),
    },
  ];

  const res = await openai.chat.completions.create({
    model: "gpt-4o",
    messages,
    temperature: 0.7,
    max_tokens: 2000,
  });

  const content = res.choices[0]?.message?.content;

  if (!content) throw new Error("OpenAI'dan içerik alınamadı.");

  try {
    const parsed = JSON.parse(content);
    if (!Array.isArray(parsed)) throw new Error("Geçersiz JSON yapısı.");

    return parsed;
  } catch (e) {
    console.error("🛑 JSON parse hatası:", e);
    console.error("🔍 İçerik:", content);
    throw e;
  }
}

export async function checkGeneratedQuizAndSave() {
  const generatedQuiz = await generateQuizFromOenAI();

  const lastTenQuizes: Quiz[] = await prisma.quiz.findMany({
    orderBy: { date: "desc" },
    take: 10,
    include: { questions: true },
  });

  const RecentQuestionsSet = new Set(
    lastTenQuizes.flatMap((q) =>
      q.questions.map((question) => question.question.toLowerCase().trim())
    )
  );

  function isDuplicate(text: string): boolean {
    const normalized = text.toLowerCase().trim();
    return [...RecentQuestionsSet].some(
      (prev) => prev.includes(normalized) || normalized.includes(prev)
    );
  }
  const uniqueQuestions = generatedQuiz.filter((q) => !isDuplicate(q.question));
  const duplicatedQuestions = generatedQuiz.filter((q) =>
    isDuplicate(q.question)
  );

  const DUPLICATE_TOLERANCE = 5;

  if (duplicatedQuestions.length > DUPLICATE_TOLERANCE) {
    let missingKeys = AtoZ.filter(
      (key) => !uniqueQuestions.some((q) => q.answer[0] === key)
    );

    let retires = 0;
    const MAX_RETRIES = 2;
    while (missingKeys.length > 0 && retires < MAX_RETRIES) {
      const regeneratedDuplicatedQuestions = await generateQuestionsForLetters(
        missingKeys
      );

      const filtered = regeneratedDuplicatedQuestions.filter(
        (q) => !isDuplicate(q.question)
      );
      uniqueQuestions.push(...filtered);

      missingKeys = AtoZ.filter((key) =>
        uniqueQuestions.some((question) => question.answer[0] === key)
      );
      retires++;
    }

    if (missingKeys.length > 0) {
      console.warn("⚠️ Still missing keys after retries:", missingKeys);
    }
  }

  let finalQuizQuestions;

  if (uniqueQuestions.length === 23) {
    finalQuizQuestions = uniqueQuestions
      .sort((a, b) => a.answer[0].localeCompare(b.answer[0]))
      .map((q) => ({
        question: q.question,
        answer: q.answer,
        questionKey: q.answer[0],
      }));
  } else {
    finalQuizQuestions = generatedQuiz
      .sort((a, b) => a.answer[0].localeCompare(b.answer[0]))
      .map((q) => ({
        question: q.question,
        answer: q.answer,
        questionKey: q.answer[0],
      }));
  }

  await prisma.quiz.create({
    data: {
      title: "Günün Tıp Soruları - " + new Date().toLocaleDateString("tr-TR"),
      date: new Date(),
      questions: {
        create: finalQuizQuestions,
      },
    },
  });
  return {
    success: true,
    createdAt: new Date(),
    questionCount: finalQuizQuestions.length,
    duplicatedCount: duplicatedQuestions.length,
    usedFallback: duplicatedQuestions.length > DUPLICATE_TOLERANCE,
  };
}

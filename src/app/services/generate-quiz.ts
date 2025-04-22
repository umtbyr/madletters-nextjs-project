import { openai } from "@/lib/openai";
import { prisma } from "@/lib/prisma";
import type { ChatCompletionMessageParam } from "openai/resources";
/* import { Quiz } from "../models/quiz"; */

/* const AtoZ = [..."ABCDEFGHIJKLMNOPRSTUVYZ"]; */

async function generateQuizFromOenAI(
  retries = 1
): Promise<{ question: string; answer: string }[]> {
  const messages: ChatCompletionMessageParam[] = [
    {
      role: "system",
      content:
        "Sen tıp öğrencileri için günlük bilgi yarışması soruları hazırlayan deneyimli bir profesörsün fakat soruları bazı kurallar çerçevesinde hazırlaman gerek.",
    },
    {
      role: "user",
      content: `
  Aşağıdaki kurallara göre **28 adet Türkçe tıbbi bilgi sorusu** üret ve çıktıyı sadece JSON formatında ver:
  
  Kurallar:
  - Her soru yalnızca **tek bir doğru cevaba** sahip olmalıdır.
  - Cevaplar **yalnızca 1 ya da 2 kelime** uzunluğunda olmalıdır.
  - Cevabı aynı harfle başlayan 2 veya daha fazla cevap olmamalıdır Örnek olarak: Atelektazi ve Adrenalin cevaplarından yalnızca biri bulunmalıdır. soruların farklı olmasının haricinde cevapların ilk harfleri de birbirinden farklı olmalıdır.
  - Her sorunun cevabı şu harflerle başlamalıdır ve ALFABETİK sırayla olmalıdır:
  - Her cevabın **ilk harfi aşağıdaki sıraya uygun olmalıdır**:

  1. A ile başlayan cevap  
  2. B ile başlayan cevap  
  3. C ile başlayan cevap  
  4. Ç ile başlayan cevap  
  5. D ile başlayan cevap  
  6. E ile başlayan cevap  
  7. F ile başlayan cevap  
  8. G ile başlayan cevap  
  9. H ile başlayan cevap  
  10. I ile başlayan cevap  
  11. İ ile başlayan cevap  
  12. J ile başlayan cevap  
  13. K ile başlayan cevap  
  14. L ile başlayan cevap  
  15. M ile başlayan cevap  
  16. N ile başlayan cevap  
  17. O ile başlayan cevap  
  18. Ö ile başlayan cevap  
  19. P ile başlayan cevap  
  20. R ile başlayan cevap  
  21. S ile başlayan cevap  
  22. Ş ile başlayan cevap  
  23. T ile başlayan cevap  
  24. U ile başlayan cevap  
  25. Ü ile başlayan cevap  
  26. V ile başlayan cevap  
  27. Y ile başlayan cevap  
  28. Z ile başlayan cevap 
  bu sırayı asla bozmamalısın.
  - Her sorunun "question" ve "answer" alanı olmalıdır.
  - Format: **SADECE JSON DİZİSİ**, açıklama veya markdown biçimlendirmesi (örneğin \\\`\\\`\\\`) OLMAMALI.
  - Örnek format:
  [
    {
      "question": "Akciğer grafisinde en sık görülen patoloji nedir?",
      "answer": "Atelektazi"
    },
    ...
  ]
  
  ⛔️ Açıklama ekleme. Markdown, \\\`\\\`\\\`, kod bloğu, anlatım veya başka hiçbir şey ekleme. Sadece JSON çıktısı üret.
      `.trim(),
    },
  ];

  const res = await openai.chat.completions.create({
    model: "gpt-4o",
    messages,
    temperature: 0.7,
    max_tokens: 3000,
  });

  const content = res.choices[0]?.message?.content ?? "";
  const cleanedContent = content
    .replace(/^```json\s*/, "")
    .replace(/^```\s*/, "")
    .replace(/```$/, "");

  if (!cleanedContent) throw new Error("No content returned from OpenAI");

  try {
    const parsed = JSON.parse(cleanedContent);
    /*     if (!Array.isArray(parsed) || parsed.length !== 23)
      throw new Error("Invalid question array"); */
    /*     const validated = parsed.every(
      (q, i) => q.answer[0].toUpperCase() === AtoZ[i]
    );
    if (!validated) {
      return generateQuizFromOenAI(retries - 1);
    } */
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
    temperature: 0.2,
    max_tokens: 1000,
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
  console.log("🟢 Calling OpenAI...");
  const generatedQuiz = await generateQuizFromOenAI();
  console.log(generatedQuiz);

  /* const lastTenQuizes: Quiz[] = await prisma.quiz.findMany({
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
 */
  const finalQuizQuestions = generatedQuiz
    .sort((a, b) => a.answer[0].localeCompare(b.answer[0]))
    .map((q) => ({
      question: q.question,
      answer: q.answer,
      questionKey: q.answer[0],
    }));

  /*   if (uniqueQuestions.length === 23) {
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
  } */

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
    /*     duplicatedCount: duplicatedQuestions.length,
    usedFallback: duplicatedQuestions.length > DUPLICATE_TOLERANCE, */
  };
}

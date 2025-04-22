import { openai } from "@/lib/openai";
import { prisma } from "@/lib/prisma";
import type { ChatCompletionMessageParam } from "openai/resources";
/* import { Quiz } from "../models/quiz"; */

/* const AtoZ = [..."ABCDEFGHIJKLMNOPRSTUVYZ"]; */
const alphabet = [
  "A",
  "B",
  "C",
  "Ç",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "İ",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "Ö",
  "P",
  "R",
  "S",
  "Ş",
  "T",
  "U",
  "Ü",
  "V",
  "Y",
  "Z",
];

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
  Aşağıda 28 adet Türkçe tıbbi bilgi sorusu ve cevabı üret.
  Kurallar:
  - Her cevabın baş harfi sırasıyla aşağıdaki harflerle başlamalı:
  ${alphabet.map((char, index) => `${index + 1}. ${char}`).join(", ")}
  - Cevaplar sadece 1-2 kelime uzunluğunda olmalı.
  - Her soru nesnesi şu formatta olmalı:
    {
      "question": "......?",
      "answer": "..."
    }
    örnek çıktı:[
  {
    question: "Hipofiz bezinde en sık görülen tümör tipi nedir?",
    answer: "Adenom",
  },
  {
    question: "Kalp atım hızının 60’ın altına düşmesine ne ad verilir?",
    answer: "Bradikardi",
  },
  {
    question: "Aşırı kortizol salgısı ile karakterize sendrom nedir?",
    answer: "C...",
  },
  {
    question: "Çocuklarda en sık görülen kanser türü nedir?",
    answer: "Ç...",
  },
  {
    question: "...?",
    answer: "D...",
  },
    {
    question: "...?",
    answer: "E...",
  },
    {
    question: "...?",
    answer: "F...",
  },
    {
    question: "...?",
    answer: "G...",
  },
    {
    question: "...?",
    answer: "H...",
  },
    {
    question: "...?",
    answer: "I...",
  },
    {
    question: "...?",
    answer: "İ...",
  },
    {
    question: "...?",
    answer: "J...",
  },
    {
    question: "...?",
    answer: "K...",
  },
    {
    question: "...?",
    answer: "L...",
  },
    {
    question: "...?",
    answer: "M...",
  },
    {
    question: "...?",
    answer: "N...",
  },
    {
    question: "...?",
    answer: "O...",
  },
    {
    question: "...?",
    answer: "Ö...",
  },
    {
    question: "...?",
    answer: "P...",
  },
    {
    question: "...?",
    answer: "R...",
  },
    {
    question: "...?",
    answer: "S...",
  },
    {
    question: "...?",
    answer: "Ş...",
  },
    {
    question: "...?",
    answer: "T...",
  },
    {
    question: "...?",
    answer: "U...",
  },
    {
    question: "...?",
    answer: "Ü...",
  },
    {
    question: "...?",
    answer: "V...",
  },
    {
    question: "...?",
    answer: "Y...",
  },  {
    question: "...?",
    answer: "Z...",
  },

  ...
];
  - Çıktı sadece geçerli bir JSON dizisi olmalı. Markdown, açıklama veya \`\`\` gibi şeyler kullanma.
  
  ⛔️ Format dışı hiçbir içerik istemiyorum. Sadece saf JSON dizisi ver.
      `.trim(),
    },
  ];

  const res = await openai.chat.completions.create({
    model: "gpt-4.1",
    messages,
    temperature: 0.7,
    max_tokens: 2000,
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
  const messages: ChatCompletionMessageParam[] = [
    {
      role: "system",
      content:
        "Sen tıp öğrencileri için günlük bilgi yarışması soruları hazırlayan deneyimli bir profesörsün.",
    },
    {
      role: "user",
      content: `
Aşağıdaki kurallara uygun olarak **${
        missingKeys.length
      } adet benzersiz tıbbi bilgi sorusu ve cevabı** üret:

Kurallar:
 - Her cevabın baş harfi sırasıyla aşağıdaki harflerle başlamalı:
  ${missingKeys
    .map(
      (char, index) =>
        `${index + 1} numaralı sorunun cevabının ilk harfi: ${char}`
    )
    .join(", ")}
  - Cevaplar sadece 1-2 kelime uzunluğunda olmalı.
  - Her soru nesnesi şu formatta olmalı:
    {
      "question": "......?",
      "answer": "..."
    }
    örnek çıktı:[
  {
    "question": "Hipofiz bezinde en sık görülen tümör tipi nedir?",
    "answer": "Adenom"
  },
  ...
]
- Türk alfabesinde olmayan karakterler (örneğin "Q", "W", "X") kullanılmamalıdır.
- Tüm içerik **Türkçe** olmalıdır.
- Sorular, tıp öğrencileri için uygun zorlukta ve **klinik olarak anlamlı** olmalıdır.
- Format: **Sadece JSON dizisi**, örneğin:



⛔️ **Açıklama ekleme. Sadece JSON çıktısı ver.**
      `.trim(),
    },
  ];

  const res = await openai.chat.completions.create({
    model: "gpt-4.1",
    messages,
    temperature: 0.7,
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

  function removeDuplicatesByFirstWord(
    arr: { question: string; answer: string }[]
  ) {
    const seen = new Set<string>();

    return arr.filter((item) => {
      const firstWord = item.answer[0].toLowerCase();
      if (seen.has(firstWord)) return false;
      seen.add(firstWord);
      return true;
    });
  }

  let quizWithUniqueQuestions = removeDuplicatesByFirstWord(generatedQuiz);
  let missingKeys = alphabet.filter(
    (key) => !quizWithUniqueQuestions.some((quiz) => quiz.answer[0] === key)
  );

  let retires = 0;
  const MAX_RETRIES = 3;
  while (missingKeys.length > 0 && retires < MAX_RETRIES) {
    console.log(missingKeys);

    const regeneratedQuestions = await generateQuestionsForLetters(missingKeys);
    console.log(retires, regeneratedQuestions);

    quizWithUniqueQuestions = [
      ...quizWithUniqueQuestions,
      ...regeneratedQuestions,
    ];
    console.log("birleştirilmiş :", quizWithUniqueQuestions);

    quizWithUniqueQuestions = removeDuplicatesByFirstWord(
      quizWithUniqueQuestions
    );

    missingKeys = alphabet.filter(
      (key) =>
        !quizWithUniqueQuestions.some((question) => question.answer[0] === key)
    );
    retires++;
  }

  if (missingKeys.length > 0) {
    console.warn("⚠️ Still missing keys after retries:", missingKeys);
  }
  const finalQuizQuestions = quizWithUniqueQuestions
    .sort((a, b) => a.answer[0].localeCompare(b.answer[0]))
    .map((q) => ({
      question: q.question,
      answer: q.answer,
      questionKey: q.answer[0],
    }));
  console.log(
    "sorted array",
    finalQuizQuestions.map((question) => question.answer[0])
  );

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

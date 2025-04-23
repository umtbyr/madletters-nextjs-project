import { openai } from "@/lib/openai";
import { prisma } from "@/lib/prisma";
import { alphabet, generateMissingKeysPrompt } from "./constants";
import { initialGetQuizPrompt } from "./constants";
import { removeDuplicatesByFirstWord } from "./utils";

async function generateQuizFromOenAI(
  retries = 1
): Promise<{ question: string; answer: string }[]> {
  const messages = initialGetQuizPrompt(alphabet);
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
  const messages = generateMissingKeysPrompt(missingKeys);

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
  console.log("initial quiz generated");

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

  let quizWithUniqueQuestions = removeDuplicatesByFirstWord(generatedQuiz);
  let missingKeys = alphabet.filter(
    (key) => !quizWithUniqueQuestions.some((quiz) => quiz.answer[0] === key)
  );

  let retires = 0;
  const MAX_RETRIES = 4;
  while (missingKeys.length > 0 && retires < MAX_RETRIES) {
    console.log(`iteration ${retires}: `, missingKeys);

    const regeneratedQuestions = await generateQuestionsForLetters(missingKeys);
    console.log(retires, regeneratedQuestions);

    quizWithUniqueQuestions = [
      ...quizWithUniqueQuestions,
      ...regeneratedQuestions,
    ];
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

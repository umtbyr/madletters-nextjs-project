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
    questionKey: "A",
    question: "Hipofiz bezinde en sık görülen tümör tipi nedir?",
    answer: "Adenom",
  },
  {
    questionKey: "B",
    question: "Kalp atım hızının 60’ın altına düşmesine ne ad verilir?",
    answer: "Bradikardi",
  },
  {
    questionKey: "C",
    question: "Aşırı kortizol salgısı ile karakterize sendrom nedir?",
    answer: "Cushing",
  },
  {
    questionKey: "Ç",
    question: "Çocuklarda en sık görülen kanser türü nedir?",
    answer: "Çocuklukça",
  },
  {
    questionKey: "D",
    question: "Kan şekeri yüksekliği ile karakterize hastalık nedir?",
    answer: "Diyabet",
  },
  {
    questionKey: "E",
    question: "Beyin dokusunun iltihabı olan hastalık nedir?",
    answer: "Ensefalit",
  },
  {
    questionKey: "F",
    question: "Akciğer dokusunda bağ dokusu artışıyla seyreden hastalık nedir?",
    answer: "Fibrozis",
  },
  {
    questionKey: "G",
    question: "Böbrekte iltihapla seyreden glomerül hastalığı nedir?",
    answer: "Glomerülit",
  },
  {
    questionKey: "H",
    question: "Tiroid bezinin az çalışması ile ortaya çıkan durum nedir?",
    answer: "Hipotiroidi",
  },
  {
    questionKey: "I",
    question: "Işığa karşı aşırı duyarlılık hangi kelimeyle tanımlanır?",
    answer: "Işıkfobi",
  },
  {
    questionKey: "İ",
    question: "Beyindeki damar tıkanıklığı sonucu gelişen ani tablo nedir?",
    answer: "İnme",
  },
  {
    questionKey: "J",
    question: "Sarılıkla birlikte ortaya çıkan bilirubin artışına ne ad verilir?",
    answer: "Jaundice",
  },
  {
    questionKey: "K",
    question: "Kalp kası iltihabına ne ad verilir?",
    answer: "Kardit",
  },
  {
    questionKey: "L",
    question: "Lökosit artışı ile seyreden kanser nedir?",
    answer: "Lösemi",
  },
  {
    questionKey: "M",
    question: "Sinir sisteminde miyelin kaybı ile seyreden hastalık nedir?",
    answer: "Multipl",
  },
  {
    questionKey: "N",
    question: "Beyinde doğuştan oluşan sıvı dolu kese nedir?",
    answer: "Nörosistik",
  },
  {
    questionKey: "O",
    question: "Vücutta oksijen yetersizliğine verilen ad nedir?",
    answer: "Oksijensizlik",
  },
  {
    questionKey: "Ö",
    question: "Göğüs boşluğunda sıvı birikmesiyle oluşan durum nedir?",
    answer: "Ödem",
  },
  {
    questionKey: "P",
    question: "Pankreasın iltihaplanmasıyla oluşan hastalık nedir?",
    answer: "Pankreatit",
  },
  {
    questionKey: "R",
    question: "Tedaviye dirençli anemi türüne ne ad verilir?",
    answer: "Refrakter",
  },
  {
    questionKey: "S",
    question: "Bağışıklık sisteminin kendi dokularına saldırdığı hastalık nedir?",
    answer: "SLE",
  },
  {
    questionKey: "Ş",
    question: "Aşırı kan kaybı sonrası gelişen bilinç bozukluğu nedir?",
    answer: "Şok",
  },
  {
    questionKey: "T",
    question: "Vücut sıcaklığının 38°C üstüne çıkmasıyla oluşan durum nedir?",
    answer: "Tefrik",
  },
  {
    questionKey: "U",
    question: "İdrar yolu enfeksiyonuna bağlı gelişen iltihap nedir?",
    answer: "Uretrit",
  },
  {
    questionKey: "Ü",
    question: "Soğuk algınlığı halk arasında hangi isimle anılır?",
    answer: "Üşütme",
  },
  {
    questionKey: "V",
    question: "Damarların genişlemesiyle oluşan durum nedir?",
    answer: "Varis",
  },
  {
    questionKey: "Y",
    question: "Hücrelerin enerji ihtiyacı için yıkım işlemi nedir?",
    answer: "Yıkım",
  },
  {
    questionKey: "Z",
    question: "Kuduz virüsü hangi yapıya sahip virüs sınıfına girer?",
    answer: "Zarflı",
  },
];
  - Çıktı sadece geçerli bir JSON dizisi olmalı. Markdown, açıklama veya \`\`\` gibi şeyler kullanma.
  
  ⛔️ Format dışı hiçbir içerik istemiyorum. Sadece saf JSON dizisi ver.
      `.trim(),
    },
  ];

  const res = await openai.chat.completions.create({
    model: "gpt-4o",
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

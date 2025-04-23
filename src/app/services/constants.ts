import { ChatCompletionMessageParam } from "openai/resources.mjs";

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

const initialGetQuizPrompt = (
  alphabet: string[]
): ChatCompletionMessageParam[] => {
  return [
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
};

const generateMissingKeysPrompt = (
  missingKeys: string[]
): ChatCompletionMessageParam[] => {
  return [
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
};

export { alphabet, initialGetQuizPrompt, generateMissingKeysPrompt };

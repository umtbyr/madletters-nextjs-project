const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  // Cleanup existing data (optional)
  await prisma.question.deleteMany({});
  await prisma.quiz.deleteMany({});

  // Create a sample quiz
  await prisma.quiz.create({
    data: {
      title: "Sample Quiz",
      date: new Date(), // uses current date
      questions: {
        create: [
          {
            question: "Hipofiz bezinde en sık görülen tümör tipi nedir?",
            answer: "Adenom",
            questionKey: "A",
          },
          {
            question: "Kalp atım hızının 60’ın altına düşmesine ne ad verilir?",
            answer: "Bradikardi",
            questionKey: "B",
          },
          {
            question: "Aşırı kortizol salgısı ile karakterize sendrom nedir?",
            answer: "Cushing",
            questionKey: "C",
          },
          {
            question: "Çocuklarda en sık görülen kanser türü nedir?",
            answer: "Çocuklukça",
            questionKey: "Ç",
          },
          {
            question: "Kan şekeri yüksekliği ile karakterize hastalık nedir?",
            answer: "Diyabet",
            questionKey: "D",
          },
          {
            question: "Beyin dokusunun iltihabı olan hastalık nedir?",
            answer: "Ensefalit",
            questionKey: "E",
          },
          {
            question:
              "Akciğer dokusunda bağ dokusu artışıyla seyreden hastalık nedir?",
            answer: "Fibrozis",
            questionKey: "F",
          },
          {
            question: "Böbrekte iltihapla seyreden glomerül hastalığı nedir?",
            answer: "Glomerülit",
            questionKey: "G",
          },
          {
            question:
              "Tiroid bezinin az çalışması ile ortaya çıkan durum nedir?",
            answer: "Hipotiroidi",
            questionKey: "H",
          },
          {
            question:
              "Beyindeki damar tıkanıklığı sonucu gelişen ani tablo nedir?",
            answer: "İnme",
            questionKey: "İ",
          },
          {
            question: "Kalp kası iltihabına ne ad verilir?",
            answer: "Kardit",
            questionKey: "K",
          },
          {
            question: "Lökosit artışı ile seyreden kanser nedir?",
            answer: "Lösemi",
            questionKey: "L",
          },
          {
            question:
              "Sinir sisteminde miyelin kaybı ile seyreden hastalık nedir?",
            answer: "Multipl",
            questionKey: "M",
          },
          {
            question: "Beyinde doğuştan oluşan sıvı dolu kese nedir?",
            answer: "Nörosistik",
            questionKey: "N",
          },
          {
            question: "Vücutta oksijen yetersizliğine verilen ad nedir?",
            answer: "Oksijensizlik",
            questionKey: "O",
          },
          {
            question: "Göğüs boşluğunda sıvı birikmesiyle oluşan durum nedir?",
            answer: "Ödem",
            questionKey: "Ö",
          },
          {
            question: "Pankreasın iltihaplanmasıyla oluşan hastalık nedir?",
            answer: "Pankreatit",
            questionKey: "P",
          },
          {
            question: "Tedaviye dirençli anemi türüne ne ad verilir?",
            answer: "Refrakter",
            questionKey: "R",
          },
          {
            question:
              "Bağışıklık sisteminin kendi dokularına saldırdığı hastalık nedir?",
            answer: "SLE",
            questionKey: "S",
          },
          {
            question: "Aşırı kan kaybı sonrası gelişen bilinç bozukluğu nedir?",
            answer: "Şok",
            questionKey: "Ş",
          },
          {
            question:
              "Vücut sıcaklığının 38°C üstüne çıkmasıyla oluşan durum nedir?",
            answer: "Tefrik",
            questionKey: "T",
          },
          {
            question: "İdrar yolu enfeksiyonuna bağlı gelişen iltihap nedir?",
            answer: "Uretrit",
            questionKey: "U",
          },
          {
            question: "Soğuk algınlığı halk arasında hangi isimle anılır?",
            answer: "Üşütme",
            questionKey: "Ü",
          },
          {
            question: "Damarların genişlemesiyle oluşan durum nedir?",
            answer: "Varis",
            questionKey: "V",
          },
          {
            question: "Hücrelerin enerji ihtiyacı için yıkım işlemi nedir?",
            answer: "Yıkım",
            questionKey: "Y",
          },
          {
            question: "Kuduz virüsü hangi yapıya sahip virüs sınıfına girer?",
            answer: "Zarflı",
            questionKey: "Z",
          },
        ],
      },
    },
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

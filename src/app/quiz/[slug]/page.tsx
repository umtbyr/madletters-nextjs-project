import { QuestionKeyBox, QuestionContainer } from "./components";
import { Quiz } from "@/app/models/quiz";
import { prisma } from "@/lib/prisma";
type QuestionPageProps = {
  params: Promise<{ slug: string }>;
};

export default async function Page(props: QuestionPageProps) {
  const { slug } = await props.params;
  const quiz = await prisma.quiz.findUnique({
    where: {
      id: slug,
    },
    include: {
      questions: true,
    },
  });

  //database call with quiz-id to get Questions

  /*   const mockQuizData: Quiz = {
    title: "quiz-1",
    id: 1,
    questions: [
      {
        question_id: "1",
        question_index: 0,
        questionKey: "A",
        question: "Hipofiz bezinde en sık görülen tümör tipi nedir?",
        answer: "Adenom",
      },
      {
        question_id: "2",
        question_index: 1,
        questionKey: "B",
        question: "Kalp atım hızının 60’ın altına düşmesine ne ad verilir?",
        answer: "Bradikardi",
      },
      {
        question_id: "3",
        question_index: 2,
        questionKey: "C",
        question: "Aşırı kortizol salgısı ile karakterize sendrom nedir?",
        answer: "Cushing",
      },
      {
        question_id: "4",
        question_index: 3,
        questionKey: "Ç",
        question: "Çocuklarda en sık görülen kanser türü nedir?",
        answer: "Çocuklukça",
      },
      {
        question_id: "5",
        question_index: 4,
        questionKey: "D",
        question: "Kan şekeri yüksekliği ile karakterize hastalık nedir?",
        answer: "Diyabet",
      },
      {
        question_id: "6",
        question_index: 5,
        questionKey: "E",
        question: "Beyin dokusunun iltihabı olan hastalık nedir?",
        answer: "Ensefalit",
      },
      {
        question_id: "7",
        question_index: 6,
        questionKey: "F",
        question:
          "Akciğer dokusunda bağ dokusu artışıyla seyreden hastalık nedir?",
        answer: "Fibrozis",
      },
      {
        question_id: "8",
        question_index: 7,
        questionKey: "G",
        question: "Böbrekte iltihapla seyreden glomerül hastalığı nedir?",
        answer: "Glomerülit",
      },
      {
        question_id: "9",
        question_index: 8,
        questionKey: "H",
        question: "Tiroid bezinin az çalışması ile ortaya çıkan durum nedir?",
        answer: "Hipotiroidi",
      },
      {
        question_id: "10",
        question_index: 9,
        questionKey: "İ",
        question: "Beyindeki damar tıkanıklığı sonucu gelişen ani tablo nedir?",
        answer: "İnme",
      },
      {
        question_id: "11",
        question_index: 10,
        questionKey: "K",
        question: "Kalp kası iltihabına ne ad verilir?",
        answer: "Kardit",
      },
      {
        question_id: "12",
        question_index: 11,
        questionKey: "L",
        question: "Lökosit artışı ile seyreden kanser nedir?",
        answer: "Lösemi",
      },
      {
        question_id: "13",
        question_index: 12,
        questionKey: "M",
        question: "Sinir sisteminde miyelin kaybı ile seyreden hastalık nedir?",
        answer: "Multipl",
      },
      {
        question_id: "14",
        question_index: 13,
        questionKey: "N",
        question: "Beyinde doğuştan oluşan sıvı dolu kese nedir?",
        answer: "Nörosistik",
      },
      {
        question_id: "15",
        question_index: 14,
        questionKey: "O",
        question: "Vücutta oksijen yetersizliğine verilen ad nedir?",
        answer: "Oksijensizlik",
      },
      {
        question_id: "16",
        question_index: 15,
        questionKey: "Ö",
        question: "Göğüs boşluğunda sıvı birikmesiyle oluşan durum nedir?",
        answer: "Ödem",
      },
      {
        question_id: "17",
        question_index: 16,
        questionKey: "P",
        question: "Pankreasın iltihaplanmasıyla oluşan hastalık nedir?",
        answer: "Pankreatit",
      },
      {
        question_id: "18",
        question_index: 17,
        questionKey: "R",
        question: "Tedaviye dirençli anemi türüne ne ad verilir?",
        answer: "Refrakter",
      },
      {
        question_id: "19",
        question_index: 18,
        questionKey: "S",
        question:
          "Bağışıklık sisteminin kendi dokularına saldırdığı hastalık nedir?",
        answer: "SLE",
      },
      {
        question_id: "20",
        question_index: 19,
        questionKey: "Ş",
        question: "Aşırı kan kaybı sonrası gelişen bilinç bozukluğu nedir?",
        answer: "Şok",
      },
      {
        question_id: "21",
        question_index: 20,
        questionKey: "T",
        question:
          "Vücut sıcaklığının 38°C üstüne çıkmasıyla oluşan durum nedir?",
        answer: "Tefrik",
      },
      {
        question_id: "22",
        question_index: 21,
        questionKey: "U",
        question: "İdrar yolu enfeksiyonuna bağlı gelişen iltihap nedir?",
        answer: "Uretrit",
      },
      {
        question_id: "23",
        question_index: 22,
        questionKey: "Ü",
        question: "Soğuk algınlığı halk arasında hangi isimle anılır?",
        answer: "Üşütme",
      },
      {
        question_id: "24",
        question_index: 23,
        questionKey: "V",
        question: "Damarların genişlemesiyle oluşan durum nedir?",
        answer: "Varis",
      },
      {
        question_id: "25",
        question_index: 24,
        questionKey: "Y",
        question: "Hücrelerin enerji ihtiyacı için yıkım işlemi nedir?",
        answer: "Yıkım",
      },
      {
        question_id: "26",
        question_index: 25,
        questionKey: "Z",
        question: "Kuduz virüsü hangi yapıya sahip virüs sınıfına girer?",
        answer: "Zarflı",
      },
    ],
  }; */
  return (
    <main className="flex flex-col items-center h-screen gap-4 my-12">
      <section>
        <header>
          <h1 className="text-center mb-6 font-bold text-4xl">Quesitons</h1>
        </header>
      </section>
      <section>
        <div>
          <ul className="grid grid-cols-6 gap-8 mx-4">
            {quiz?.questions.map((item) => (
              <QuestionKeyBox key={item.id} question={item} />
            ))}
          </ul>
        </div>
      </section>
      <section className="m-8 px-4 sm:px-6 md:px-8 w-full ">
        <QuestionContainer questions={quiz?.questions ?? []} />
      </section>
      <section></section>
    </main>
  );
}

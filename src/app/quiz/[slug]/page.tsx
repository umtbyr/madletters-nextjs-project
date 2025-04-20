import { QuestionKeyBox, QuestionContainer } from "./components";
import { Quiz } from "@/app/models/quiz";
type QuestionPageProps = {
  params: Promise<{ slug: string }>;
};

export default async function Page(props: QuestionPageProps) {
  //const { slug } = await props.params;

  //database call with quiz-id to get Questions

  const mockQuizData: Quiz = {
    id: 1,
    questions: [
      {
        question_id: "1",
        question_index: 0,
        quesiton_key: "A",
        question: "Hipofiz bezinde en sık görülen tümör tipi nedir?",
        answer: "Adenom",
      },
      {
        question_id: "2",
        question_index: 1,
        quesiton_key: "B",
        question: "Kalp atım hızının 60’ın altına düşmesine ne ad verilir?",
        answer: "Bradikardi",
      },
      {
        question_id: "3",
        question_index: 2,
        quesiton_key: "C",
        question: "Aşırı kortizol salgısı ile karakterize sendrom nedir?",
        answer: "Cushing",
      },
      {
        question_id: "4",
        question_index: 3,
        quesiton_key: "Ç",
        question: "Çocuklarda en sık görülen kanser türü nedir?",
        answer: "Çocuklukça",
      },
      {
        question_id: "5",
        question_index: 4,
        quesiton_key: "D",
        question: "Kan şekeri yüksekliği ile karakterize hastalık nedir?",
        answer: "Diyabet",
      },
      {
        question_id: "6",
        question_index: 5,
        quesiton_key: "E",
        question: "Beyin dokusunun iltihabı olan hastalık nedir?",
        answer: "Ensefalit",
      },
      {
        question_id: "7",
        question_index: 6,
        quesiton_key: "F",
        question:
          "Akciğer dokusunda bağ dokusu artışıyla seyreden hastalık nedir?",
        answer: "Fibrozis",
      },
      {
        question_id: "8",
        question_index: 7,
        quesiton_key: "G",
        question: "Böbrekte iltihapla seyreden glomerül hastalığı nedir?",
        answer: "Glomerülit",
      },
      {
        question_id: "9",
        question_index: 8,
        quesiton_key: "H",
        question: "Tiroid bezinin az çalışması ile ortaya çıkan durum nedir?",
        answer: "Hipotiroidi",
      },
      {
        question_id: "10",
        question_index: 9,
        quesiton_key: "İ",
        question: "Beyindeki damar tıkanıklığı sonucu gelişen ani tablo nedir?",
        answer: "İnme",
      },
      {
        question_id: "11",
        question_index: 10,
        quesiton_key: "K",
        question: "Kalp kası iltihabına ne ad verilir?",
        answer: "Kardit",
      },
      {
        question_id: "12",
        question_index: 11,
        quesiton_key: "L",
        question: "Lökosit artışı ile seyreden kanser nedir?",
        answer: "Lösemi",
      },
      {
        question_id: "13",
        question_index: 12,
        quesiton_key: "M",
        question: "Sinir sisteminde miyelin kaybı ile seyreden hastalık nedir?",
        answer: "Multipl",
      },
      {
        question_id: "14",
        question_index: 13,
        quesiton_key: "N",
        question: "Beyinde doğuştan oluşan sıvı dolu kese nedir?",
        answer: "Nörosistik",
      },
      {
        question_id: "15",
        question_index: 14,
        quesiton_key: "O",
        question: "Vücutta oksijen yetersizliğine verilen ad nedir?",
        answer: "Oksijensizlik",
      },
      {
        question_id: "16",
        question_index: 15,
        quesiton_key: "Ö",
        question: "Göğüs boşluğunda sıvı birikmesiyle oluşan durum nedir?",
        answer: "Ödem",
      },
      {
        question_id: "17",
        question_index: 16,
        quesiton_key: "P",
        question: "Pankreasın iltihaplanmasıyla oluşan hastalık nedir?",
        answer: "Pankreatit",
      },
      {
        question_id: "18",
        question_index: 17,
        quesiton_key: "R",
        question: "Tedaviye dirençli anemi türüne ne ad verilir?",
        answer: "Refrakter",
      },
      {
        question_id: "19",
        question_index: 18,
        quesiton_key: "S",
        question:
          "Bağışıklık sisteminin kendi dokularına saldırdığı hastalık nedir?",
        answer: "SLE",
      },
      {
        question_id: "20",
        question_index: 19,
        quesiton_key: "Ş",
        question: "Aşırı kan kaybı sonrası gelişen bilinç bozukluğu nedir?",
        answer: "Şok",
      },
      {
        question_id: "21",
        question_index: 20,
        quesiton_key: "T",
        question:
          "Vücut sıcaklığının 38°C üstüne çıkmasıyla oluşan durum nedir?",
        answer: "Tefrik",
      },
      {
        question_id: "22",
        question_index: 21,
        quesiton_key: "U",
        question: "İdrar yolu enfeksiyonuna bağlı gelişen iltihap nedir?",
        answer: "Uretrit",
      },
      {
        question_id: "23",
        question_index: 22,
        quesiton_key: "Ü",
        question: "Soğuk algınlığı halk arasında hangi isimle anılır?",
        answer: "Üşütme",
      },
      {
        question_id: "24",
        question_index: 23,
        quesiton_key: "V",
        question: "Damarların genişlemesiyle oluşan durum nedir?",
        answer: "Varis",
      },
      {
        question_id: "25",
        question_index: 24,
        quesiton_key: "Y",
        question: "Hücrelerin enerji ihtiyacı için yıkım işlemi nedir?",
        answer: "Yıkım",
      },
      {
        question_id: "26",
        question_index: 25,
        quesiton_key: "Z",
        question: "Kuduz virüsü hangi yapıya sahip virüs sınıfına girer?",
        answer: "Zarflı",
      },
    ],
  };
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
            {mockQuizData.questions.map((item) => (
              <QuestionKeyBox key={item.question_id} question={item} />
            ))}
          </ul>
        </div>
      </section>
      <section className="m-8 px-4 sm:px-6 md:px-8 w-full ">
        <QuestionContainer questions={mockQuizData.questions} />
      </section>
      <section></section>
    </main>
  );
}

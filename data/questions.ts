const terms = {
  A: [
    "Abdominal aort anevrizması",
    "Abdominal travma",
    "Abortus",
    "Abse",
    "Açlık hipoglisemisi",
    "Açık açılı glokom",
    "Açlık ketozu",
    "Adacık hücre tümörü",
    "Adrenal adenom",
    "Adrenal karsinom",
    "Adrenal yetmezlik",
    "Ağız kanseri",
    "Ağrılı mesane sendromu",
    "Agranülositoz",
    "Akalazya",
    "Akaliptik lösemi",
    "Akciğer embolisi",
    "Akciğer kanseri",
    "Akciğer fibrozisi",
    "Akciğer ödemi",
    "Akciğer enfeksiyonu",
    "Akne vulgaris",
    "Akondroplazi",
    "Akut apandisit",
    "Akut bronşit",
    "Akut gastrit",
    "Akut glomerülonefrit",
    "Akut hepatit",
    "Akut iskemik inme",
    "Akut koroner sendrom",
    "Akut lenfoblastik lösemi",
    "Akut miyeloid lösemi",
    "Akut otitis media",
    "Akut pankreatit",
    "Akut perikardit",
    "Akut romatizmal ateş",
    "Akut tonsillit",
    "Alerjik astım",
    "Alerjik rinit",
    "Alfa talasemi",
    "Alkolik hepatit",
    "Alzheimer hastalığı",
    "Amfizem",
    "Amiloidoz",
    "Amniyotik sıvı embolisi",
    "Anemi",
    "Anencefali",
    "Anjina pektoris",
    "Ankilozan spondilit",
    "Anoreksiya nevroza",
    "Antifosfolipid sendromu",
    "Aort koarktasyonu",
    "Aort diseksiyonu",
    "Aort yetmezliği",
    "Aplastik anemi",
    "Apse",
    "Artrit",
    "Artrial fibrilasyon",
    "Arterioskleroz",
    "Arterit",
    "Asbestozis",
    "Asemptomatik bakteriüri",
    "Aseptik menenjit",
    "Aspirasyon pnömonisi",
    "Astım",
    "Ataksi telanjiektazi",
    "Aterosklerotik kalp hastalığı",
    "Atrial septal defekt",
    "Atripik pnömoni",
    "Aural migren",
    "Avitaminoz",
  ],
  B: [
    "Bademcik iltihabı",
    "Bakteriyel menenjit",
    "Bakteriyel pnömoni",
    "Balantidiyazis",
    "Barrett özofagusu",
    "Bartolin apsesi",
    "Bartolin kisti",
    "Bazal hücreli karsinom",
    "Bazofili",
    "Behçet hastalığı",
    "Bel fıtığı",
    "Belsoğukluğu",
    "Benign prostat hiperplazisi",
    "Beriberi",
    "Beta talasemi",
    "Beşinci hastalık (Parvovirüs B19 enfeksiyonu)",
    "Beyin apsesi",
    "Beyin tümörü",
    "Beyin kanaması",
    "Beyin damar tıkanıklığı",
    "Beyin enfarktüsü",
    "Beyin sarsıntısı",
    "Bilateral hidronefroz",
    "Biliyer siroz",
    "Bipolar bozukluk",
    "Biyopsi yerinde enfeksiyon",
    "Blastomikozis",
    "Blefarit",
    "Blefarospazm",
    "Boğmaca",
    "Boğulma",
    "Botulizm",
    "Boyun fıtığı",
    "Boyun travması",
    "Brakiyal pleksus yaralanması",
    "Bradikardi",
    "Brakiterapi yan etkileri",
    "Bruselloz",
    "Bronşiolit",
    "Bronşit",
    "Bronşiektazi",
    "Bronşiyal astım",
    "Brugada sendromu",
    "Bruselloz artriti",
    "Bulimia nevroza",
    "Böbrek apsesi",
    "Böbrek kanseri",
    "Böbrek taşı",
    "Böbrek yetmezliği",
    "Böcek alerjisi",
    "Burkitt lenfoması",
    "Buerger hastalığı",
    "Buz yanığı",
    "Büyüme hormonu eksikliği",
  ],
  C: [
    "Campylobacter enfeksiyonu",
    "Candida enfeksiyonu",
    "Carpal tunnel sendromu",
    "Cartilage tümörleri",
    "Celiac hastalığı (Çölyak hastalığı)",
    "Central retinal ven tıkanıklığı",
    "Cervikal disk hernisi",
    "Cervisit",
    "Chagas hastalığı",
    "Chikungunya enfeksiyonu",
    "Chlamydia enfeksiyonu",
    "Choledocholithiasis (Safra kanalı taşı)",
    "Cholesteatoma (Kulak kolesteatomu)",
    "Cholelithiasis (Safra taşı hastalığı)",
    "Chron hastalığı",
    "Churg-Strauss sendromu (Eozinofilik granülomatoz)",
    "Cilt kanseri",
    "Cilt lenfoması",
    "Cilt mantar enfeksiyonu",
    "Cilt tüberkülozu",
    "Clostridium difficile enfeksiyonu",
    "Clostridial miyonekroz (Gazlı gangren)",
    "Colles kırığı",
    "Colon kanseri",
    "Congenital kalp hastalıkları",
    "Conjunctivitis (Göz nezlesi)",
    "COPD (Kronik obstrüktif akciğer hastalığı)",
    "Cor pulmonale",
    "Coxsackie virüs enfeksiyonu",
    "Craniosynostosis (Kafatası kemiklerinin erken kapanması)",
    "Creutzfeldt-Jakob hastalığı",
    "Crohn hastalığı",
    "Cryptococcal menenjit",
    "Cryptosporidiosis",
    "Cushing hastalığı",
    "Cushing sendromu",
    "Cyanosis (Morarma)",
    "Cystic fibrosis (Kistik fibrozis)",
    "Cystitis (İdrar torbası iltihabı)",
    "Cytomegalovirus enfeksiyonu",
  ],
  D: [
    "Dalak büyümesi (Splenomegali)",
    "Dalak yırtılması",
    "Dalak apsesi",
    "Dalga hastalığı (Deniz hastalığı)",
    "Damar tıkanıklığı",
    "Damar malformasyonları",
    "Damar tümörleri",
    "Danışmanlık gerektiren depresyon",
    "Dar açılı glokom",
    "Dehidrasyon",
    "Deliryum",
    "Demans",
    "Demir eksikliği anemisi",
    "Denge bozukluğu",
    "Deri kanseri",
    "Deri lenfoması",
    "Deri tüberkülozu",
    "Deri enfeksiyonu",
    "Dermatit",
    "Dermatomiyozit",
    "Desidua hastalıkları",
    "Detoksifikasyon sendromu",
    "Dewdrop enfeksiyonu",
    "Diabetik ayak enfeksiyonu",
    "Diabetik ketoasidoz",
    "Diabetik nöropati",
    "Difterit",
    "Dijitalis zehirlenmesi",
    "Diyabet",
    "Diyabetik retinopati",
    "Diyabetik nefropati",
    "Diyabetik ensefalopati",
    "Diyabetik kardiyomiyopati",
    "Diz bağ yaralanması",
    "Diz burkulması",
    "Diz kırığı",
    "Diz osteoartriti",
    "Diz protezi enfeksiyonu",
    "Diz tendiniti",
    "Diyafram hernisi",
    "Diyafram paralizisi",
    "Diyare (İshal)",
    "Diş apsesi",
    "Diş eti iltihabı (Gingivit)",
    "Diş travması",
    "Diş çürüğü",
    "Divertikülit",
    "Divertikülozis",
    "Dizanteri",
    "Disk hernisi",
    "Disfaji",
    "Dismenore",
    "Dış gebelik (Ektopik gebelik)",
    "Dispepsi",
    "Distal renal tübüler asidoz",
    "Distoni",
    "Diyastolik kalp yetmezliği",
    "Doku reddi (Organ nakli sonrası)",
  ],
  E: [
    "Ebola virüs hastalığı",
    "Ektopik gebelik",
    "Ekzema",
    "Ekstrapiramidal bozukluklar",
    "Elefantiyazis",
    "Elektrolit dengesizliği",
    "Embriyonik tümörler",
    "Emfizem",
    "Emosyonel bozukluklar",
    "Emphysematous pyelonephritis (Gazlı piyelonefrit)",
    "Endokardit",
    "Endokrin bozukluklar",
    "Endometriozis",
    "Endometriyal kanser",
    "Enfarktüs",
    "Enfekte kist",
    "Enfekte yara enfeksiyonu",
    "Enfeksiyöz endokardit",
    "Enfeksiyöz hepatit",
    "Enflamatuvar bağırsak hastalığı",
    "Enflamatuvar miyopatiler",
    "Enflamatuvar sinüzit",
    "Enflamasyonlu akne",
    "Engelleyici akciğer hastalıkları",
    "Enkefalit",
    "Enkondrom",
    "Enterik ateş (Tifo)",
    "Enterit",
    "Enterovirüs enfeksiyonu",
    "Eozinofili",
    "Eozinofilik özofajit",
    "Eozinofilik pnömoni",
    "Eozinofilik granülom",
    "Epiglottit",
    "Epilepsi",
    "Epidermoid kist",
    "Epididimit",
    "Epidural hematom",
    "Epistaksis (Burun kanaması)",
    "Epstein-Barr virüs enfeksiyonu",
    "Erektil disfonksiyon",
    "Eritema nodosum",
    "Eritrasma",
    "Eritrositoz",
    "Erken doğum",
    "Erizipel",
    "Erişkin Still hastalığı",
    "Eroin bağımlılığı",
    "Eşlik eden hipertansiyon",
    "Esofagus kanseri",
    "Esofagus varis kanaması",
    "Esofajit",
    "Estetik cerrahi komplikasyonları",
    "Etanol zehirlenmesi",
    "Ewing sarkomu",
  ],
  F: [
    "Farenjit",
    "Febril nöbet",
    "Felç",
    "Femur boyun kırığı",
    "Fibrilasyon",
    "Fibrokistik meme hastalığı",
    "Fibrom",
    "Fibromiyalji",
    "Fibrosarkom",
    "Fissür",
    "Flebit",
    "Fokal segmental glomerüloskleroz",
    "Folikülit",
    "Food poisoning (Gıda zehirlenmesi)",
    "Fraktür",
    "Frontal sinüzit",
    "Fulminan hepatit",
    "Fungal beyin enfeksiyonu",
    "Fungal endokardit",
    "Fungal pnömoni",
    "Fungal sinüzit",
    "Fungal menenjit",
    "Fungal cilt enfeksiyonu",
    "Fungal artrit",
    "Fungal osteomiyelit",
    "Fungal keratit",
    "Fungemi",
    "Furunkül",
    "Furunküloz",
    "Fetal alkol sendromu",
    "Fetal hidrops",
    "Fibröz displazi",
    "Fonksiyonel dispepsi",
    "Fonksiyonel bağırsak bozuklukları",
    "Fonksiyonel baş ağrısı",
    "Fıtık",
    "Flebotromboz",
    "Farklılaşmamış lösemi",
    "Fosfor zehirlenmesi",
    "Fokal epilepsi",
    "Fungal sepsis",
    "Fungal prostatit",
    "Frengi (Sifiliz)",
    "Frontal lob tümörü",
    "Fasiyal paralizi (Yüz felci)",
    "Fungal endoftalmi",
    "Fasiyal enfeksiyonlar",
    "Farengeal apse",
    "Fibröz histiyositom",
    "Fokal nodüler hiperplazi",
    "Fibrokistik akciğer hastalığı",
  ],
  G: [
    "Galaktozemi",
    "Gastrit",
    "Gastroenterit",
    "Gastroözofageal reflü hastalığı",
    "Gastrointestinal kanama",
    "Gastrointestinal stromal tümör (GIST)",
    "Gastroparezi",
    "Gebelik diyabeti",
    "Gebelik zehirlenmesi (Preeklampsi)",
    "Gebeliğe bağlı hipertansiyon",
    "Gebelikte anemi",
    "Gebelikte idrar yolu enfeksiyonu",
    "Gebelik kolestazı",
    "Gebelikte tromboz",
    "Genetik epilepsi sendromları",
    "Genetik kardiyomiyopatiler",
    "Genetik nöromüsküler hastalıklar",
    "Genetik polikistik böbrek hastalığı",
    "Genital herpes",
    "Genital siğiller (HPV enfeksiyonu)",
    "Genital ülser",
    "Gerstmann sendromu",
    "Gestasyonel trofoblastik hastalıklar",
    "Giardiazis",
    "Glaukom (Göz tansiyonu)",
    "Glomerülonefrit",
    "Glomerüler hastalıklar",
    "Glukoz-6-fosfat dehidrogenaz eksikliği (G6PD eksikliği)",
    "Gonore (Bel soğukluğu)",
    "Goodpasture sendromu",
    "Göz apsesi",
    "Göz enfeksiyonları",
    "Göz travması",
    "Göz tümörleri",
    "Göz içi kanama",
    "Göz nezlesi (Konjonktivit)",
    "Granülomatoz hastalıklar",
    "Granülomatöz hepatit",
    "Granülomatöz tiroidit",
    "Graves hastalığı",
    "Gribal enfeksiyon",
    "Guatr",
    "Guillain-Barre sendromu",
    "Gut hastalığı",
    "Göz kuruluğu",
    "Göz kanseri",
    "Göz kapağı tümörleri",
    "Göz içi iltihap (Üveit)",
    "Günlük baş ağrısı",
    "Güvenli olmayan düşük komplikasyonları",
    "Göz kası felçleri",
    "Gastrik ülser",
    "Göz enfeksiyonu sonrası endoftalmi",
  ],
  H: [
    "Haemophilus influenzae enfeksiyonu",
    "Hamilelik hipertansiyonu",
    "Hamilelik kolestazı",
    "Hamilelikte idrar yolu enfeksiyonu",
    "Hamilelik diyabeti",
    "Hamilelik anemisi",
    "Hamilelikte preeklampsi",
    "Hamilelikte tromboz",
    "Hansen hastalığı (Cüzzam)",
    "Haşimato tiroiditi",
    "Hemofili A",
    "Hemofili B",
    "Hemokromatoz",
    "Hemolitik anemi",
    "Hemolitik üremik sendrom",
    "Hemoptizi (Kan tükürme)",
    "Hemoroid",
    "Hemotoraks",
    "Hemipleji",
    "Hemianopsi",
    "Hemoperikard",
    "Hemorajik inme",
    "Hemofagositik lenfohistiyositoz",
    "Hemangiom",
    "Hemoglobinopati",
    "Hemoliz",
    "Hepatik ensefalopati",
    "Hepatit A",
    "Hepatit B",
    "Hepatit C",
    "Hepatit D",
    "Hepatit E",
    "Hepatosellüler karsinom",
    "Hepatomegali",
    "Herpes simpleks enfeksiyonu",
    "Herpes zoster (Zona)",
    "Herpes ensefaliti",
    "Hidradenitis suppurativa",
    "Hidrosefali",
    "Hidrokel",
    "Hidatik kist",
    "Hiperkalsemi",
    "Hiperglisemi",
    "Hiperkalemi",
    "Hiperkapni",
    "Hiperkolesterolemi",
    "Hipertansiyon",
    "Hipertiroidizm",
    "Hipoglisemi",
    "Hipokalemi",
    "Hipokalsemi",
    "Hipotansiyon",
    "Hipotermi",
    "Hipotiroidizm",
    "Hipovolemik şok",
    "Hirschsprung hastalığı",
    "Histoplazmoz",
    "Hodgkin lenfoma",
    "Horner sendromu",
    "Huntington hastalığı",
    "Huzursuz bacak sendromu",
  ],
  İ: [
    "İdrar kaçağı",
    "İdrar yolu enfeksiyonu",
    "İdrar yolu taşları",
    "İdrar inkontinansı",
    "İleus",
    "İleokolitis",
    "İliak arter anevrizması",
    "İliofemoral derin ven trombozu",
    "İmmün yetmezlik sendromları",
    "İmmün trombositopenik purpura",
    "İmmün hemolitik anemi",
    "İmpacted third molar (Gömülü yirmilik diş)",
    "İmplantasyon kanaması",
    "İmpetigo",
    "İnaktiv hepatit B enfeksiyonu",
    "İnaktive polio enfeksiyonu",
    "İnce bağırsak kanseri",
    "İnce bağırsak obstrüksiyonu",
    "İnce bağırsak tüberkülozu",
    "İnce bağırsak divertikülü",
    "İnce bağırsak lenfoması",
    "İnce bağırsak fıtığı",
    "İnceltilmiş skleroderma",
    "İncinme (kas-iskelet yaralanması)",
    "İnfiltratif akciğer hastalığı",
    "İnfertilite",
    "İnme (İnme, Stroke)",
    "İnfeksiyöz mononükleoz",
    "İnfeksiyöz endokardit",
    "İnfeksiyöz hepatit",
    "İnflamatuvar bağırsak hastalığı",
    "İnflamatuvar miyopati",
    "İnfluenza (Grip)",
    "İnhalasyon yaralanması",
    "İnguinal herni (Kasık fıtığı)",
    "İnsülinoma",
    "İnsülin direnci",
    "İnsülin şok",
    "İntestinal iskemik sendrom",
    "İntestinal tüberküloz",
    "İntrakraniyal kanama",
    "İntrakraniyal tümörler",
    "İntrauterin büyüme geriliği",
    "İntrauterin fetal ölüm",
    "İntraabdominal apseler",
    "İntestinal polipler",
    "İritis",
    "Isırık yaralanmaları",
    "Islak gangren",
    "İrritabl bağırsak sendromu (IBS)",
    "İrritasyon fibromu",
  ],
  J: [
    "Jaccoud artriti",
    "Jacquet dermatiti",
    "Jamais vu fenomeni",
    "Jejunal divertikül",
    "Jejunal atrezisi",
    "Jejunal volvulus",
    "Jejunal obstrüksiyon",
    "Jejunal kanama",
    "Jejunoileal bypass sendromu",
    "Jeneralize anksiyete bozukluğu",
    "Jeneralize konvülsiyon",
    "Jeneralize epilepsi",
    "Jernigan sendromu",
    "Jeune asfiksik torasik displazi",
    "Jüvenil artrit",
    "Jüvenil idiopatik artrit (JIA)",
    "Jüvenil dermatomiyozit",
    "Jüvenil miyelomonositik lösemi",
    "Jüvenil psöriyazis",
    "Jüvenil polipozis sendromu",
    "Jüvenil katarakt",
    "Jüvenil diyabet (Tip 1 diyabet)",
    "Jüvenil hipertansiyon",
    "Jüvenil osteoporoz",
    "Jüvenil miyoklonik epilepsi",
    "Jüvenil poliartrit",
    "Jüvenil laringotrakeobronşit",
    "Jüvenil glaukoma",
    "Jüvenil Burkitt lenfoma",
    "Jüvenil kronik artrit",
    "Jüvenil nefrotik sendrom",
    "Jüvenil Addison hastalığı",
    "Jüvenil hipotiroidi",
    "Jüvenil anemi",
    "Jugular ven trombozu",
    "Junctional nevus (Birleşim nevüsü)",
    "Jugular venöz yetmezlik",
  ],
  K: [
    "Kabakulak",
    "Kabızlık",
    "Kadın genital kanserleri",
    "Kadın infertilitesi",
    "Kafa travması",
    "Kafa içi basınç artışı",
    "Kafa içi kanama",
    "Kafein zehirlenmesi",
    "Kalp bloğu",
    "Kalp kapağı hastalıkları",
    "Kalp kası hastalıkları (Kardiyomiyopatiler)",
    "Kalp krizi (Miyokard enfarktüsü)",
    "Kalp yetmezliği",
    "Kalsiyum metabolizması bozuklukları",
    "Kalsifik tendinit",
    "Kalça çıkığı",
    "Kalça kırığı",
    "Kalıcı pulmoner hipertansiyon",
    "Kan dengesizlikleri",
    "Kan zehirlenmesi (Sepsis)",
    "Kanama bozuklukları",
    "Kanama diyatezi",
    "Kanser",
    "Kanser anoreksi-kaşeksi sendromu",
    "Kanserli hastalarda enfeksiyonlar",
    "Kanlı ishal (Dizanteri)",
    "Kandida enfeksiyonu",
    "Kanser metastazları",
    "Kanser ağrısı yönetimi",
    "Kapalı kafa travması",
    "Kapalı kırık",
    "Kapiller sızıntı sendromu",
    "Kaposi sarkomu",
    "Karbondioksit zehirlenmesi",
    "Karbondioksit retansiyonu",
    "Karbunkül",
    "Kardiyak arrest",
    "Kardiyojenik şok",
    "Kardiyomiyopati",
    "Karnitin eksikliği",
    "Karotis arter hastalığı",
    "Karotis diseksiyonu",
    "Karotis endarterektomi sonrası komplikasyonlar",
    "Karotis stenozi",
    "Karın ağrısı",
    "Karın içi enfeksiyonlar",
    "Karın duvarı hernileri",
    "Karaciğer apsesi",
    "Karaciğer yetmezliği",
    "Karaciğer kanseri",
    "Karaciğer sirozu",
    "Karaciğer kist hidatiği",
    "Karaciğer yağlanması (Steatoz)",
    "Kartagener sendromu",
    "Kas ağrısı (Miyalji)",
    "Kas distrofileri",
    "Kas spazmı",
    "Kas iskelet sistemi enfeksiyonları",
    "Kas iskelet sistemi tümörleri",
    "Kasık fıtığı (İnguinal herni)",
    "Kasık lenfadenopatisi",
    "Katatonik şizofreni",
    "Katarakt",
    "Kawasaki hastalığı",
    "Kaygı bozukluğu",
    "Kekemelik",
    "Kemik apsesi",
    "Kemik kırığı",
    "Kemik metastazı",
    "Kemik tümörleri",
    "Kemik iliği yetmezliği",
    "Kemik iliği nakli sonrası komplikasyonlar",
    "Kemik enfeksiyonları (Osteomiyelit)",
    "Kemik erimesi (Osteoporoz)",
    "Keratoakantoma",
    "Keratoz pilaris",
    "Keratom",
    "Keratom konjunktivit",
    "Keratoz",
    "Kesik yaralanması",
    "Ketamin bağımlılığı",
    "Kistik fibrozis",
    "Kistik hidatik hastalık",
    "Kistler (Genel)",
    "Kızamık",
    "Kızamıkçık",
    "Klostridyal enfeksiyonlar",
    "Klostridyum difficile enfeksiyonu",
    "Klinefelter sendromu",
    "Klor toksisitesi",
    "Kol anevrizması",
    "Kol kırığı",
    "Kolorektal kanser",
    "Kolon polipleri",
    "Kolon divertiküliti",
    "Kolorektal hastalıklar",
    "Kolestaz",
    "Kolestatik hepatit",
    "Kolesterol embolisi",
    "Kolesterol safra taşları",
    "Kolesteatom (Orta kulakta zararlı kist)",
    "Kolera",
    "Kolik ağrı",
    "Kollajen doku hastalıkları",
    "Komadaki hastada bakım",
    "Kompartman sendromu",
    "Komplike idrar yolu enfeksiyonları",
    "Konjenital adrenal hiperplazi",
    "Konjenital kalp hastalıkları",
    "Konjenital sağırlık",
    "Konjunktivit (Göz nezlesi)",
    "Kontüzyon (Ezilme yaralanması)",
    "Korku bozuklukları",
    "Koroner arter hastalığı",
    "Koroner arter spazmı",
    "Kortizol fazlalığı",
    "Kortizol eksikliği",
    "Köpek ısırığı yaralanması",
    "Köprücük kemiği kırığı",
    "Kötü huylu hipertansiyon",
    "Kötü huylu melanom",
    "Kreatin kinaz yüksekliği",
  ],
  L: [
    "Labirentit",
    "Laringit",
    "Laringomalazi",
    "Laringospazm",
    "Laringeal kanser",
    "Lateral epikondilit (Tenisçi dirseği)",
    "Lateral femoral kutanöz sinir sıkışması",
    "Lepra (Cüzzam)",
    "Leptospiroz",
    "Lenf bezi büyümesi (Lenfadenopati)",
    "Lenfanjiyom",
    "Lenfödem",
    "Lenfoma",
    "Lenfoblastik lösemi",
    "Lenf nodu tüberkülozu",
    "Lenfanjitis",
    "Lenfositik tiroidit",
    "Lenfatik obstrüksiyon",
    "Lepidik adenokarsinom",
    "Leigh hastalığı",
    "Leiomyoma (Düz kas tümörü)",
    "Leiomyosarkom",
    "Leprechaunizm",
    "Leptomeningeal hastalık",
    "Leucoderma (Vitiligo benzeri durum)",
    "Leukoplakia",
    "Levator ani sendromu",
    "Liken planus",
    "Liken sklerozus",
    "Lipom",
    "Liposarkom",
    "Listeriyozis",
    "Litten hastalığı (Amyotrofik lateral skleroz gibi durumlarda)",
    "Lityum zehirlenmesi",
    "Lobüler karsinom (Meme kanseri tipi)",
    "Lomber disk hernisi",
    "Lomber spinal stenoz",
    "Lomber spondiloz",
    "Lomber lordoz bozuklukları",
    "Lösemi",
    "Lösemi relapsı",
    "Lösemi sonrası enfeksiyonlar",
    "Löffler sendromu",
    "Long QT sendromu",
    "Low-grade glioma",
    "Low back pain (Bel ağrısı)",
    "Lupus eritematozus (Sistemik lupus)",
    "Lupus nefriti",
    "Lupoid hepatit",
    "Lyme hastalığı",
    "Lyell sendromu (Toksik epidermal nekrolizis)",
    "Lipid metabolizması bozuklukları",
    "Lökoplaki",
    "Lösemi sonrası ikincil kanserler",
    "Lenf nodu metastazı",
    "Laboratuvar kaynaklı enfeksiyonlar",
    "Lupus antikoagülan sendromu",
  ],
  M: [
    "Maküler dejenerasyon",
    "Malarya (Sıtma)",
    "Malign melanom",
    "Malignite ile ilişkili pıhtılaşma bozuklukları",
    "Malt lenfoma",
    "Malrotasyon (Bağırsak dönme anomalisi)",
    "Malnütrisyon",
    "Mastit",
    "Mastoidit",
    "Mast hücre hastalıkları",
    "Maternal diyabet",
    "Maternal fenilketonüri sendromu",
    "Medüller tiroid kanseri",
    "Medülloblastom",
    "Megakolon",
    "Megaloblastik anemi",
    "Melanom",
    "Membranöz glomerülonefrit",
    "Meniere hastalığı",
    "Meningeal karsinomatozis",
    "Meningokoksemi",
    "Menenjit",
    "Meningoensefalit",
    "Metabolik asidoz",
    "Metabolik sendrom",
    "Metakarpal kırığı",
    "Metan zehirlenmesi",
    "Metastatik kemik hastalığı",
    "Metastatik karaciğer tümörleri",
    "Metrorrhagia (Ara kanama)",
    "Meyve zehirlenmesi (Bakteriyel)",
    "Mide adenokarsinomu",
    "Mide ülseri",
    "Mide kanaması",
    "Midface kırıkları",
    "Mikobakteriyel enfeksiyonlar",
    "Mikoplazma pnömonisi",
    "Mikrositik anemi",
    "Mikst konnektif doku hastalığı",
    "Miksoma",
    "Migren",
    "Mikroangiopatik hemolitik anemi",
    "Mikrotia",
    "Mikrotrombüs formasyonu",
    "Mitral kapak hastalıkları",
    "Mitral yetmezlik",
    "Mitral stenoz",
    "Miyokard enfarktüsü",
    "Miyokardit",
    "Miyozit",
    "Miyastenia gravis",
    "Miyelofibrozis",
    "Miyeloma",
    "Miyelomeningosel",
    "Miyopati",
    "Miyopi",
    "Miyeloproliferatif hastalıklar",
    "Miyoklonus",
    "Miyelitis transversa",
    "Miyeloid lösemi",
    "Miyokardiyal iskemi",
    "Miyokardiyopati",
  ],
  N: [
    "Nazofarenjit",
    "Nazofarengeal kanser",
    "Nefrit",
    "Nefrotik sendrom",
    "Nefritik sendrom",
    "Nefrokalsinozis",
    "Nefrolitiazis (Böbrek taşı)",
    "Nefroblastom (Wilms tümörü)",
    "Nefrojenik diyabet insipidus",
    "Nekrotizan enterokolit",
    "Nekrotizan fasiit",
    "Nekrotizan pnömoni",
    "Nekroz",
    "Neoplazmalar",
    "Neonatal anemi",
    "Neonatal hipoglisemi",
    "Neonatal sarılık",
    "Neonatal sepsis",
    "Neonatal tetanoz",
    "Neonatal solunum distres sendromu",
    "Neoplastik menenjit",
    "Neoplastik anemi",
    "Neuroblastom",
    "Neuroendokrin tümörler",
    "Nevralji",
    "Nevüs",
    "Nezle",
    "Niasin eksikliği (Pellagra)",
    "Niktüri",
    "Nistagmus",
    "Nitrik oksit zehirlenmesi",
    "Niteliksel trombosit bozuklukları",
    "Niteliksel lökosit bozuklukları",
    "Niteliksel eritrosit bozuklukları",
    "Nitrojen dioksit zehirlenmesi",
    "Nokturnal astım",
    "Nokturnal hipertansiyon",
    "Norovirus enfeksiyonu",
    "Normal basınçlı hidrosefali",
    "Nöbet bozuklukları",
    "Nöroblastom",
    "Nöroendokrin tümörler",
    "Nörofibromatozis Tip 1",
    "Nörofibromatozis Tip 2",
    "Nörojenik mesane",
    "Nöromüsküler hastalıklar",
    "Nöropati",
    "Nöropatik ağrı",
    "Nöroleptik malign sendrom",
    "Nörolojik felçler",
    "Nöral tüp defekti",
    "Nöronopatiler",
    "Nötropeni",
    "Nötropenik ateş",
    "Nutcracker sendromu",
    "Nükleer katarakt",
    "Nükleer skleroz",
    "Nutrisyonel anemi",
  ],
  O: [
    "Obezite",
    "Obsesif kompulsif bozukluk okb",
    "Obstrüktif akciğer hastalığı",
    "Obstrüktif uyku apnesi sendromu",
    "Obstrüktif üropati",
    "Obstrüktif jaundice (Safra yolu tıkanıklığına bağlı sarılık)",
    "Odontojenik enfeksiyonlar",
    "Odyolojik işitme kaybı",
    "Oküler migren",
    "Oküler hipertansiyon",
    "Oküler travma",
    "Oküler melanom",
    "Olfaktör disfonksiyon",
    "Oligohidramniyoz",
    "Oligoasthenoteratospermi",
    "Omfalosel",
    "Omuz donması (Adheziv kapsülit)",
    "Onikomikoz (Tırnak mantarı)",
    "Onkogenik osteomalazi",
    "Onkolojik hiperkalsemi",
    "Optik nörit",
    "Oral kandidiyazis",
    "Oral mukozit",
    "Oral tüberküloz",
    "Orbit tümörleri",
    "Orbit fraktürü",
    "Orta kulak enfeksiyonu (Otitis media)",
    "Orta kulak kolesteatomu",
    "Orta dereceli obstrüktif akciğer hastalığı",
    "Orta dereceli travmatik beyin hasarı",
    "Osteoartrit (Kireçlenme)",
    "Osteokondrom",
    "Osteom",
    "Osteomiyelit (Kemik enfeksiyonu)",
    "Osteonekroz",
    "Osteopeni",
    "Osteoporoz",
    "Osteosarkom",
    "Otitis media (Orta kulak iltihabı)",
    "Otolit hastalığı",
    "Otoimmün gastrit",
    "Otoimmün hepatit",
    "Otoimmün hemolitik anemi",
    "Otoimmün pankreatit",
    "Otoimmün polienkefalopati",
    "Otoimmün poliartrit",
    "Otoimmün tiroid hastalığı",
    "Otofoni",
    "Otoskleroz",
    "Over kanseri",
    "Over torsiyonu",
    "Over kistleri",
    "Over kist rüptürü",
    "Over tümörleri",
    "Ovaryan hiperstimülasyon sendromu",
    "Over endometriozisi",
    "Over apopleksi",
  ],
  P: [
    "Paget hastalığı (Kemik hastalığı)",
    "Palmar fibromatozis",
    "Panik bozukluk",
    "Pankreatik psödokist",
    "Pankreas kanseri",
    "Pankreatit",
    "Papillom virüs enfeksiyonu (HPV)",
    "Paraneoplastik sendromlar",
    "Paranazal sinüs tümörleri",
    "Parapleji",
    "Paratiroid adenom",
    "Paratiroid kanseri",
    "Paratiroid hastalıkları",
    "Parazitik enfeksiyonlar",
    "Parazitik ishal",
    "Parazitik göz enfeksiyonları",
    "Parazitik beyin enfeksiyonları",
    "Parkinson hastalığı",
    "Parotis bezi tümörleri",
    "Partiyal epilepsi",
    "Parvovirüs B19 enfeksiyonu",
    "Patella kırığı",
    "Patolojik kırık",
    "Pelvik inflamatuvar hastalık",
    "Pelvik organ prolapsusu",
    "Pelvik ağrı sendromu",
    "Pelvis kırıkları",
    "Penis kanseri",
    "Penil fraktür",
    "Periapikal apseler",
    "Periferik arter hastalığı",
    "Periferik nöropati",
    "Perikardit",
    "Perikardiyal effüzyon",
    "Perikard tamponadı",
    "Perinatal asfiksi",
    "Perinatal hipoksik hasar",
    "Peritonit",
    "Pernisiyöz anemi",
    "Peyronie hastalığı",
    "Peyronie plakları",
    "Peptik ülser hastalığı",
    "Peyote zehirlenmesi",
    "Peyronie hastalığı",
    "Pfeiffer sendromu",
    "Phlegmon",
    "Phyllodes tümörü",
    "Pika sendromu",
    "Pileflebit (Portal ven enfeksiyonu)",
    "Piyelonefrit",
    "Piyojenik artrit",
    "Piyojenik beyin apsesi",
    "Piyojenik karaciğer apsesi",
    "Pitüiter adenom",
    "Pitüiter apopleksi",
    "Plasenta previa",
    "Plasental abruption (Plasentanın erken ayrılması)",
    "Plasmodium falciparum enfeksiyonu",
    "Plasmodium vivax enfeksiyonu",
    "Plörezi",
    "Pneumokok pnömonisi",
    "Pnömoni",
    "Pnömokonyoz",
    "Pnömomediastinum",
    "Pnömotoraks",
    "Poikiloderma",
    "Polikistik over sendromu (PCOS)",
    "Polikistik böbrek hastalığı",
    "Polinöropati",
    "Polisitemi vera",
    "Polimiyozit",
    "Polimorfik eritem",
    "Polinörit",
    "Polinöropatik ağrı",
    "Poliartrit",
    "Poliglobuli",
    "Polio (Çocuk felci)",
    "Polyarteritis nodosa",
    "Popliteal arter anevrizması",
    "Portal hipertansiyon",
    "Portal ven trombozu",
    "Posterior miyokard enfarktüsü",
    "Postherpetik nevralji",
    "Postpartum hemoraji",
    "Postpartum depresyon",
    "Postpartum tiroidit",
    "Poststreptokokal glomerülonefrit",
    "Posttravmatik stres bozukluğu (PTSD)",
    "Preeklampsi",
    "Preterm doğum",
    "Primer biliyer kolanjit",
    "Primer hipotiroidizm",
    "Primer akciğer kanseri",
    "Primer sklerozan kolanjit",
    "Primer amiloidoz",
    "Prostat kanseri",
    "Prostatit",
    "Prolaktinoma",
    "Progresif multifokal lökoensefalopati",
    "Proteinürik hastalıklar",
    "Pulmoner emboli",
    "Pulmoner fibrozis",
    "Pulmoner hipertansiyon",
  ],
  R: [
    "Rabdomiyosarkom",
    "Radikülopati",
    "Radiasyon enteriti",
    "Radiasyon pnömonisi",
    "Radioulnar sinostoz",
    "Raynaud hastalığı",
    "Raynaud fenomeni",
    "Reaktif artrit",
    "Reaktif hipoglisemi",
    "Refrakter epilepsi",
    "Reflü hastalığı (Gastroözofageal reflü)",
    "Regresyon sendromları",
    "Rektal kanser",
    "Rektal prolapsus",
    "Renal anomali",
    "Renal arter stenozu",
    "Renal hücreli karsinom",
    "Renal kist",
    "Renal pelvis kanseri",
    "Renal taş hastalığı",
    "Renal tromboz",
    "Renal tübüler asidoz",
    "Renal yetmezlik",
    "Respiratuvar asidoz",
    "Respiratuvar alkaloz",
    "Respiratuvar arrest",
    "Respiratuvar distress sendromu",
    "Respiratuvar papillomatozis",
    "Retina dekolmanı",
    "Retina hemorajisi",
    "Retina damar tıkanıklığı",
    "Retina enfeksiyonu",
    "Retina tümörleri",
    "Retinitis pigmentosa",
    "Retinoblastom",
    "Retinopati",
    "Retroperitoneal fibrozis",
    "Retroperitoneal hematom",
    "Revmatizmal ateş",
    "Revmatizmal kapak hastalıkları",
    "Reynaud sendromu",
    "Reye sendromu",
    "Rektovajinal fistül",
    "Rhabdomiyoliz",
    "Riboflavin eksikliği",
    "Rickets (Raşitizm)",
    "Rinofaringeal karsinom",
    "Rinovirüs enfeksiyonu",
    "Romatoid artrit",
    "Romatoid vaskülit",
    "Romatizmal hastalıklar",
    "Rosacea",
    "Rotavirüs gastroenteriti",
    "Rotavirüs enfeksiyonu",
    "Rubella (Kızamıkçık)",
    "Rubinstein Taybi sendromu",
  ],
  S: [
    "Sakral kırık",
    "Sakroileit",
    "Sakrokoksigeal teratom",
    "Sarkom",
    "Sarılık (Jaundice)",
    "Scabies (Uyuz)",
    "Schwannom",
    "Sepsis",
    "Septik artrit",
    "Septik şok",
    "Seröz otitis media",
    "Serotonin sendromu",
    "Serebellar ataksi",
    "Serebellar hematom",
    "Serebellar tümör",
    "Serebral anevrizma",
    "Serebral emboli",
    "Serebral hemoraji (Beyin kanaması)",
    "Serebral palsi",
    "Serebral tromboz",
    "Serebrit",
    "Serebrovasküler hastalık",
    "Sefalalji (Baş ağrısı)",
    "Sefalopati",
    "Semptomatik hipoglisemi",
    "Semptomatik hipertansiyon",
    "Semptomatik epilepsi",
    "Semptomatik bradikardi",
    "Semptomatik taşikardi",
    "Semilunar kapak hastalıkları",
    "Senkop",
    "Senkronize atriyal flutter",
    "Senil demans",
    "Senkronize prematür ventriküler kompleksler",
    "Septo-optik displazi",
    "Serebral abses",
    "Serebral ödem",
    "Servikal kanser",
    "Servikal spondiloz",
    "Servisit",
    "Sezaryen sonrası enfeksiyonlar",
    "Sifiliz (Frengi)",
    "Sinüzit",
    "Sinir sıkışması sendromları",
    "Sinir kökü lezyonu",
    "Sinir tümörleri",
    "Sinüs bradikardisi",
    "Sinüs taşikardisi",
    "Sinüzal tromboz",
    "Siringomiyeli",
    "Sistemik lupus eritematozus (SLE)",
    "Sistemik skleroz",
    "Sistemik amiloidoz",
    "Sistemik enfeksiyonlar",
    "Siroz",
    "Sistit",
    "Skapula kırığı",
    "Skolyoz",
    "Skrotal enfeksiyonlar",
    "Skrotal tümörler",
    "Sol atriyal miksoma",
    "Solunum asidozu",
    "Solunum alkalozu",
    "Solunum yetmezliği",
    "Somatizasyon bozukluğu",
    "Somnambulizm (Uyurgezerlik)",
    "Spastik parapleji",
    "Spinal epidural abse",
    "Spinal kord lezyonu",
    "Spinal kas atrofisi",
    "Spinal stenoz",
    "Splenomegali (Dalak büyümesi)",
    "Splenik rüptür",
    "Spontan pnömotoraks",
    "Spondilit",
    "Spondilolistezis",
    "Spondiloz",
    "Sporadik Creutzfeldt-Jakob hastalığı",
    "Sporadik ALS",
    "Stafilokok enfeksiyonları",
    "Stenotik kapak hastalıkları",
    "Stevens Johnson sendromu",
    "Stomatit",
    "Stres kırıkları",
    "Stres ülseri",
    "Strüvit taşları",
    "Subaraknoid kanama",
    "Subdural hematom",
    "Subklinik hipotiroidizm",
    "Subklinik epilepsi",
    "Subakut sklerozan panensefalit (SSPE)",
    ,
    "Suçiçeği (Varicella)",
    "Sürrenal adenom",
    "Sürrenal kriz",
  ],
  T: [
    "Tabes dorsalis",
    "Takayasu arteriti",
    "Talasemi",
    "Talus kırığı",
    "Taşikardi",
    "Tarsal tünel sendromu",
    "Tay Sachs hastalığı",
    "Tendon yırtığı",
    "Tendonit",
    "Temporal arterit (Dev hücreli arterit)",
    "Temporal lob epilepsisi",
    "Tendinopati",
    "Tendon kopması",
    "Tenisçi dirseği (Lateral epikondilit)",
    "Tetanoz",
    "Tetani",
    "Tibia kırığı",
    "Tinnitus",
    "Tip 1 diyabet",
    "Tip 2 diyabet",
    "Tiroid kanseri",
    "Tiroid nodülü",
    "Tiroidit",
    "Tiroid fırtınası",
    "Tirajik apne sendromu",
    "Toksik epidermal nekrolizis (TEN)",
    "Toksik hepatit",
    "Toksik megakolon",
    "Toksoplazmozis",
    "Torasik aort anevrizması",
    "Torasik çıkış sendromu",
    "Torakal omurga kırığı",
    "Toraks travması",
    "Torus kırığı",
    "Trakeal stenoz",
    "Trakeomalazi",
    "Trakeotomi kanaması",
    "Trakeobronşit",
    "Travmatik hemotoraks",
    "Travmatik subdural hematom",
    "Travmatik retroperitoneal hematom",
    "Travmatik aort rüptürü",
    "Tremor",
    "Trigeminal nevralji",
    "Tromboflebit",
    "Tromboemboli",
    "Trombositoz",
    "Trombositopeni",
    "Trombositopenik purpura",
    "Trombotik mikroanjiyopati",
    "Tuberküloz",
    "Tüberküler lenfadenit",
    "Tüberküler menenjit",
    "Tubulointerstisyel nefrit",
    "Tümör lisis sendromu",
    "Tümör metastazları",
    "Tümör kanaması",
    "Tükrük bezi taşları",
  ],
  U: [
    "Uçuk",
    "Ulseratif kolit",
    "Ulnar sinir sıkışması",
    "Ulnar sinir felci",
    "Ulnar kırık",
    "Umbilikal herni (Göbek fıtığı)",
    "Umbilikal enfeksiyonlar",
    "Umbilikal granulom",
    "Unilateral hidronefroz",
    "Unilateral körlük",
    "Uretra travması",
    "Uretrit",
    "Ureter taşı",
    "Ureteral striktür",
    "Uretral divertikül",
    "Uretral kanser",
    "Uretral obstrüksiyon",
    "Uretral fistül",
    "Uretral travma",
  ],
  Ü: [
    "Üriner enfeksiyonlar",
    "Üriner inkontinans",
    "Üriner retansiyon",
    "Üriner kateter enfeksiyonları",
    "Üriner fistül",
    "Üriner sepsis",
    "Üretra striktürü",
    "Üreteropelvik bileşke obstrüksiyonu",
    "Ürtiker",
    "Ürogenital enfeksiyonlar",
    "Ürogenital fistüller",
    "Ürogenital enfeksiyon sonrası infertilite",
    "Ürogenital tüberküloz",
    "Ürogenital kandidiyazis",
    "Üretra enfeksiyonları",
    "Üretra anomalileri",
    "Üretra tümörleri",
    "Üretra kistleri",
  ],
  V: [
    "Vajinal kanama",
    "Vajinal fistül",
    "Vajinal prolapsus",
    "Vajinal kist",
    "Vajinal yırtık",
    "Vajinit",
    "Valvüler kalp hastalığı",
    "Varis",
    "Varikokel",
    "Varicella zoster enfeksiyonu (Suçiçeği)",
    "Vasküler demans",
    "Vasküler malformasyon",
    "Vaskülit",
    "Vaskülitik nöropati",
    "Venöz tromboz",
    "Venöz yetmezlik",
    "Venöz ülser",
    "Vertebra kırığı",
    "Vertebral arter diseksiyonu",
    "Vertebral osteomiyelit",
    "Vertebral kanal darlığı",
    "Verruka vulgaris (Siğil)",
    "Vestibüler nörit",
    "Vestibüler migren",
    "Vestibüler schwannoma",
    "Viral artrit",
    "Viral ensefalit",
    "Viral hepatit",
    "Viral kardiyomiyopati",
    "Viral menenjit",
    "Viral pnömoni",
    "Viral üst solunum yolu enfeksiyonları",
    "Viral üveit",
    "Viral bronşiolit",
    "Viral gastroenterit",
    "Vitiligo",
    "Vitreus hemorajisi",
    "Vitreus dekolmanı",
    "Volvulus (Bağırsak dönmesi)",
    "Vulva kanseri",
    "Vulvar intraepitelyal neoplazi",
    "Vulvar ülser",
    "Vulvar dermatit",
    "Vulvar enfeksiyonlar",
    "Vulvar varisler",
    "Vulvit",
  ],
  Y: [
    "Yağ embolisi sendromu",
    "Yağ nekrozu",
    "Yağ dokusu tümörleri",
    "Yağ bezesi (Lipom)",
    "Yanak kanseri",
    "Yara enfeksiyonu",
    "Yenidoğan asfiksi",
    "Yenidoğan hipoglisemisi",
    "Yenidoğan hipokalsemisi",
    "Yenidoğan hiperbilirubinemisi",
    "Yenidoğan pulmoner hipertansiyonu",
    "Yenidoğan sepsisi",
    "Yenidoğan tetanozu",
    "Yenidoğan sarılığı",
    "Yenidoğan konvülsiyonları",
    "Yenidoğan kalça çıkığı",
    "Yenidoğan menenjiti",
    "Yenidoğan anemisi",
    "Yenidoğan hepatiti",
    "Yenidoğan kolestazı",
    "Yenidoğan beyin kanaması",
    "Yenidoğan hipotiroidisi",
    "Yenidoğan retinopatisi",
    "Yenidoğan kalp hastalıkları",
    "Yenidoğan vaskülitleri",
    "Yeni doğan dönemi sepsisleri",
    "Yıkıcı ensefalopati",
    "Yıkıcı myokardiyopati",
    "Yırtık anevrizmalar",
    "Yıpranma sendromu",
    "Yüz felci (Fasiyal paralizi)",
    "Yüz kırıkları",
    "Yüz travması",
    "Yüzde bazal hücreli karsinom",
    "Yutak kanseri",
    "Yutma güçlüğü (Disfaji)",
    "Yutma bozuklukları",
    "Yutak enfeksiyonları",
  ],
  Z: [
    "Zatürre (Pnömoni)",
    "Zehirlenmeler",
    "Zehirli guatr (Graves hastalığı)",
    "Zehirli pestisit maruziyeti",
    "Zona (Herpes zoster)",
    "Zona ensefaliti",
    "Zar yırtılması (Doğumda amniyon zarı yırtılması)",
    "Zar enfeksiyonları",
    "Zar kanamaları",
    "Zar perforasyonu (Timpanik membran yırtılması)",
    "Zar kalınlaşması",
    "Zayıf kas tonusu (Hipotoni)",
    "Zoonotik hastalıklar (Hayvanlardan bulaşan hastalıklar)",
    "Zoonotik grip (Kuş gribi gibi)",
    "Zoonotik bakteriyel enfeksiyonlar",
    "Zoonotik viral enfeksiyonlar",
    "Zollinger Ellison Sendromu",
  ],
};

export const data = {
  A: [
    {
      question:
        "What is the disease characterized by weakening and ballooning of the artery wall?",
      answer: "Aneurysm",
    },
    {
      question:
        "What is the disease that develops due to a decrease in blood pH as a result of acid accumulation in the body and may be due to respiratory or metabolic causes?",
      answer: "Acidosis",
    },
    {
      question:
        "What is the name given to a condition in which the body is deprived of oxygen, leading to loss of consciousness or death?",
      answer: "Asphyxia",
    },
    {
      question:
        "What is the name given to the process in which the products of conception are expelled from the uterus before the 20th week of pregnancy?",
      answer: "Abortus",
    },
    {
      question:
        "What is the name given to the pus-filled spaces that form as a result of inflammation in the body?",
      answer: "Abscess",
    },
    {
      question:
        "What is the name of the benign tumor that develops in the adrenal glands?",
      answer: "Adenoma",
    },
    {
      question:
        "The condition where the adrenal glands do not secrete enough hormones is called ….. insufficiency.",
      answer: "Adrenal",
    },
    {
      question:
        "What is the name of the disease that occurs when the production of granulocytes in the bone marrow is severely reduced?",
      answer: "Agranulocytosis",
    },
    {
      question:
        "What is the disease characterized by difficulty swallowing and failure of the muscles at the lower end of the esophagus to relax?",
      answer: "Achalasia",
    },
    {
      question:
        "What is the disease that is one of the types of leukemia and is characterized by the rapid proliferation of the myeloid cell type?",
      answer: "AML",
    },
    {
      question:
        "What is the disease that is one of the types of leukemia and is characterized by the rapid proliferation of the lymphoblastic cell type?",
      answer: "ALL",
    },
    {
      question:
        "..... vulgaris is a disease that is common during adolescence and is characterized by blackheads and inflamed pimples on the skin.",
      answer: "Acne",
    },
    {
      question:
        "What is the name of the genetic dwarfism disease that affects cartilage and bone development?",
      answer: "Achondroplasia",
    },
    {
      question:
        "What is the acute disease caused by inflammation of the appendix, causing severe pain in the lower right abdomen?",
      answer: "Appendicitis",
    },
    {
      question:
        "What is the abbreviation for the type of leukemia seen in childhood and characterized by abnormal proliferation of cells called lymphoblasts in the bone marrow?",
      answer: "ALL",
    },
    {
      question:
        "What is the term used in medical sciences to describe conditions that are rapid onset and short-term?",
      answer: "Acute",
    },
    {
      question:
        "..... rheumatic fever is a disease that develops after beta-hemolytic streptococcal infection and is accompanied by fever and joint pain.",
      answer: "Acute",
    },
    {
      question:
        "What is a temporary allergic condition that occurs as a result of hypersensitivity to an allergen in the respiratory tract and is accompanied by shortness of breath?",
      answer: "Asthma",
    },
    {
      question:
        "What is a respiratory condition marked by spasms in the bronchi of the lungs, causing difficulty in breathing? It usually results from an allergic reaction or other forms of hypersensitivity.",
      answer: "Asthma",
    },
    {
      question:
        "The name of the inflammatory hepatitis disease that develops in the liver due to excessive alcohol consumption is ….. hepatitis.",
      answer: "Alcoholic",
    },
    {
      question:
        "What is a neurodegenerative disease characterized by memory loss and progressive decline in cognitive abilities?",
      answer: "Alzheimer",
    },
    {
      question:
        "What is the disease that causes organ dysfunction as a result of abnormal protein accumulation in the body?",
      answer: "Amyloidosis",
    },
    {
      question:
        "What is the disease characterized by lower than normal levels of red blood cells and hemoglobin in the blood?",
      answer: "Anemia",
    },
    {
      question:
        "What is a serious congenital anomaly that results in the failure of a large portion of the brain to develop at birth?",
      answer: "Anencephaly",
    },
    {
      question:
        "The condition that occurs as a result of decreased blood flow to the heart muscle and accompanied by chest pain is called ….. pectoris.",
      answer: "Angina",
    },
    {
      question: "What is painful inflammation and stiffness in the joints?",
      answer: "Arthritis",
    },
    {
      question:
        "..... spondylitis is an inflammatory rheumatic disease of the spine that causes stiffness in the spine and sacroiliac joints.",
      answer: "Ankylosing",
    },
    {
      question:
        "..... nervosa is a serious eating disorder characterized by refusal to eat and extreme weight loss.",
      answer: "Anorexia",
    },
  ],
  B: [
    {
      question:
        "What is the name of the protozoal infection caused by the Balantidium coli parasite in the intestines?",
      answer: "Balantidiasis",
    },
    {
      question:
        "What is the precancerous condition that develops in the esophagus due to long-term gastroesophageal reflux?",
      answer: "Barrett",
    },
    {
      question:
        "The most common type of skin cancer that grows slowly and rarely metastasizes is ….. cell carcinoma.",
      answer: "Basal",
    },
    {
      question:
        "What is the condition characterized by an abnormal increase in the number of white blood cells called basophils in the blood?",
      answer: "Basophilia",
    },
    {
      question:
        "What is the name of the autoimmune disease that causes recurring ulcers and eye inflammation in the mouth, skin and genital areas?",
      answer: "Behcet",
    },
    {
      question:
        "The condition that causes symptoms such as poor urine flow as a result of the enlargement of the prostate gland with age is called ….. prostatic hyperplasia.",
      answer: "Benign",
    },
    {
      question:
        "What is the disease that develops due to vitamin B1 deficiency and progresses with nervous system and heart diseases?",
      answer: "Beriberi",
    },
    {
      question:
        "What is the medical term for having or relating to two sides; affecting both sides?",
      answer: "Bilateral",
    },
    {
      question:
        "..... cirrhosis is a type of liver cirrhosis that develops as a result of damage to the bile ducts.",
      answer: "Biliary",
    },
    {
      question:
        "What is the name of the psychiatric disorder that progresses with depression and manic periods and shows mood swings?",
      answer: "Bipolar",
    },
    {
      question:
        "What is the name given to the examination of tissue taken from a living body to determine the presence, cause or prevalence of a disease?",
      answer: "Biopsy",
    },
    {
      question:
        "What is the name of the rare fungal infection caused by the fungus Blastomyces dermatitidis?",
      answer: "Blastomycosis",
    },
    {
      question:
        "What is the name given to the condition that develops as a result of inflammation at the edge of the eyelids?",
      answer: "Blepharitis",
    },
    {
      question:
        "What is the name of the neurological disease that causes involuntary contractions in the eyelids?",
      answer: "Blepharospasm",
    },
    {
      question:
        "What is the serious poisoning caused by Clostridium botulinum toxin and causing muscle paralysis?",
      answer: "Botulism",
    },
    {
      question:
        "What is the name of the plexus known as the arm nerve network?",
      answer: "Brachial",
    },
    {
      question:
        "What is the arrhythmia characterized by a heart rate below 60 beats per minute?",
      answer: "Bradycardia",
    },
    {
      question:
        "What is the infectious disease caused by Brucella type bacteria, accompanied by fever, sweating and muscle pain?",
      answer: "Brucellosis",
    },
    {
      question:
        "What is the name of the viral infection that affects the respiratory tract in babies and young children?",
      answer: "Bronchiolitis",
    },
    {
      question:
        "What is the name given to the conduction disorder that occurs when the electrical conduction in the heart slows down or stops completely?",
      answer: "Block",
    },
    {
      question:
        "What is a respiratory tract infection that develops as a result of inflammation of the bronchi and progresses with cough and phlegm?",
      answer: "Bronchitis",
    },
    {
      question:
        "What is the name given to a respiratory disease that results in structural enlargement of the bronchi and permanent damage?",
      answer: "Bronchiectasis",
    },
    {
      question:
        "..... asthma is a type of chronic respiratory disease that is characterized by hypersensitivity and constriction in the bronchi.",
      answer: "Bronchial",
    },
    {
      question:
        "What is the name of the genetic syndrome that carries the risk of sudden cardiac arrhythmia and death?",
      answer: "Brugada",
    },
    {
      question:
        "..... nervosa is an eating disorder characterized by episodes of uncontrolled eating followed by attempts to control weight through vomiting or excessive exercise.",
      answer: "Bulimia",
    },
    {
      question:
        "What is a type of lymph node cancer that is fast-growing and aggressive, especially seen in children?",
      answer: "Burkitt",
    },
    {
      question:
        "What is the vascular disease that develops as a result of inflammation of small and medium-sized blood vessels associated with smoking?",
      answer: "Buerger",
    },
  ],
  C: [
    {
      question:
        "..... jejuni bacteria are the causative agent of gastroenteritis, which causes diarrhea and stomach cramps.",
      answer: "Campylobacter",
    },
    {
      question:
        "..... tunnel syndrome is a disease that causes numbness and pain in the hand due to compression of the nerve passing through the wrist.",
      answer: "Carpal",
    },
    {
      question:
        "What is a cancer arising in the epithelial tissue of the skin or of the lining of the internal organs?",
      answer: "Carcinoma",
    },
    {
      question:
        "What is the disease that is one of the types of leukemia and is characterized by the slow proliferation of the lymphoblastic cell type?",
      answer: "CLL",
    },
    {
      question:
        "What is the disease that is one of the types of leukemia and is characterized by the slow proliferation of the myeloid cell type?",
      answer: "CML",
    },
    {
      question:
        "The name of the autoimmune disease that develops due to damage to the intestines against the gluten protein in wheat, barley and rye is ….. disease.",
      answer: "Celiac",
    },
    {
      question:
        "..... disc herniation is a disease that occurs when the discs in the neck vertebrae herniate and put pressure on the nerves.",
      answer: "Cervical",
    },
    {
      question:
        "What is the name of the gynecological infection that causes inflammation in the cervix?",
      answer: "Cervicitis",
    },
    {
      question:
        "What is the infectious disease caused by the Trypanosoma cruzi parasite and is common in South America?",
      answer: "Chagas",
    },
    {
      question:
        "What is the sexually transmitted bacterial disease that causes infection and discharge in the urinary tract?",
      answer: "Chlamydia",
    },
    {
      question:
        "What is the name of the condition that develops with the formation of stones in the bile duct and can block the flow of bile?",
      answer: "Choledocholithiasis",
    },
    {
      question:
        "What is the disease that occurs with abnormal skin accumulation in the middle ear and can lead to hearing loss?",
      answer: "Cholesteatoma",
    },
    {
      question:
        "What is the name of the disease that develops as a result of stone formation in the gallbladder and often causes abdominal pain?",
      answer: "Cholelithiasis",
    },
    {
      question:
        "What is the disease that develops as a result of the disruption of the liver bile flow and progresses with itching?",
      answer: "Cholestasis",
    },
    {
      question:
        "..... disease is an inflammatory bowel disease that can affect any part of the digestive system.",
      answer: "Crohn",
    },
    {
      question:
        "..... difficile infection is a serious infectious disease that occurs as a result of the disruption of intestinal flora due to antibiotic use.",
      answer: "Clostridium",
    },
    {
      question:
        "The typical type of fracture that occurs in the wrist and is seen in the radius bone is the ….. fracture.",
      answer: "Colles",
    },
    {
      question:
        "Whatever the cause, whether hereditary or not, what is the term for the condition that is present when the baby is born?",
      answer: "Congenital",
    },
    {
      question:
        "What is the disease that occurs as a result of inflammation of the outer membrane of the eye and progresses with redness?",
      answer: "Conjunctivitis",
    },
    {
      question:
        "What is the chronic lung disease that develops due to smoking and causes narrowing of the airways?",
      answer: "COPD",
    },
    {
      question:
        "..... pulmonale is a condition characterized by enlargement of the right side of the heart due to lung diseases.",
      answer: "Cor",
    },
    {
      question:
        "What is a malignant disease that occurs with uncontrolled cell proliferation and invades body tissues?",
      answer: "Cancer",
    },
    {
      question:
        "What is the condition that causes deformities in babies' skull bones to close earlier than normal?",
      answer: "Craniosynostosis",
    },
    {
      question:
        "What is the hardening of tissue or other material by the deposition of or conversion into calcium carbonate or some other insoluble calcium compounds?",
      answer: "Calcification",
    },
    {
      question: "What is chronic heart muscle disease?",
      answer: "Cardiomyopathy",
    },
    {
      question:
        "What is the disease that causes vision loss due to loss of transparency of the eye lens?",
      answer: "Cataract",
    },
    {
      question:
        "..... Jakob disease is a rare neurodegenerative disease that causes spongiform degeneration and rapidly progressive dementia in the brain.",
      answer: "Creutzfeldt",
    },
    {
      question:
        "What is the intestinal infection caused by the Cryptosporidium parasite and especially accompanied by diarrhea?",
      answer: "Cryptosporidiosis",
    },
    {
      question:
        "What is the name given to the difficulty in defecation due to decreased bowel movements?",
      answer: "Constipation",
    },
    {
      question:
        "The disease that results from excessive ACTH production in the pituitary gland and increased cortisol production is ….. disease.",
      answer: "Cushing",
    },
    {
      question:
        "What is the infectious disease that is transmitted through contaminated water and food and causes severe diarrhea and dehydration?",
      answer: "Cholera",
    },
    {
      question:
        "What is an injury that causes bruising and swelling due to blood accumulation in the skin and underlying tissues due to impact?",
      answer: "Contusion",
    },
    {
      question:
        "What is the chronic disease that causes inflammation of the liver, deterioration of its structure and loss of function?",
      answer: "Cirrhosis",
    },
    {
      question:
        "What is the condition that causes symptoms such as burning sensation and frequent urination as a result of infection of the bladder wall?",
      answer: "Cystitis",
    },
    {
      question:
        "The clinical picture that develops as a result of excessive cortisol production in the body or external cortisol intake is ….. syndrome.",
      answer: "Cushing",
    },
    {
      question:
        "What is the name given to the condition that manifests itself as bruising on the skin, lips and nails due to lack of oxygen?",
      answer: "Cyanosis",
    },
    {
      question:
        "..... fibrosis is a genetic disease characterized by a disorder in mucus production that affects the lungs, pancreas and digestive system.",
      answer: "Cystic",
    },
    {
      question:
        "What is the disease that causes symptoms such as pain during urination and frequent urination as a result of inflammation of the bladder wall?",
      answer: "Cystitis",
    },
  ],
  D: [
    {
      question:
        "What is the type of depressive disorder that requires advanced professional help and affects daily life?",
      answer: "Depression",
    },
    {
      question:
        "What is the life-threatening condition that develops as a result of excessive fluid loss in the body?",
      answer: "Dehydration",
    },
    {
      question:
        "What is the name given to a state of mental or consciousness that is an acute, transient condition characterized by symptoms such as confusion, disorientation, agitation, and hallucinations, especially those associated with fever, intoxication, and certain other physical disorders?",
      answer: "Delirium",
    },
    {
      question:
        "What is the name of the neurological disease characterized by progressive deterioration of memory loss, thinking and reasoning abilities?",
      answer: "Dementia",
    },
    {
      question:
        "What is the name of the inflammatory skin disease that causes redness, itching and swelling on the skin?",
      answer: "Dermatitis",
    },
    {
      question:
        "What is a rare inflammatory muscle disease that presents with muscle weakness and skin rashes?",
      answer: "Dermatomyositis",
    },
    {
      question:
        "What is the thick, modified layer of mucous membrane that lines the inside of the uterus during pregnancy and is shed after birth?",
      answer: "Decidua",
    },
    {
      question:
        "What is the process of removing toxic substances or qualities?",
      answer: "Detoxification",
    },
    {
      question:
        "What is the name given to the small fluid-filled blisters that form on the skin during chickenpox infection?",
      answer: "Dewdrop",
    },
    {
      question:
        "Infections that occur in the feet of diabetic patients and are difficult to heal are called ….. foot disease.",
      answer: "Diabetic",
    },
    {
      question:
        "What is the infectious disease caused by the bacteria Corynebacterium diphtheriae, which is accompanied by the formation of pseudomembrane in the throat?",
      answer: "Diphtheria",
    },
    {
      question:
        "What is a metabolic disease characterized by high blood sugar levels due to the pancreas' inability to produce enough insulin or insulin resistance?",
      answer: "Diabetes",
    },
    {
      question:
        "Congenital or traumatic tear in the diaphragm muscle between the abdominal cavity and the chest cavity is called ….. hernia.",
      answer: "diaphragmatic",
    },
    {
      question:
        "The dome-shaped muscular partition that separates the rib cage from the abdomen in mammals. What is the name of the structure that plays an important role in respiration because its contraction increases the volume of the rib cage and thus inflates the lungs?",
      answer: "Diaphragm",
    },
    {
      question:
        "What is a digestive system disease characterized by watery stools resulting from increased bowel movements?",
      answer: "Diarrhea",
    },
    {
      question:
        "What is the digestive system disease that develops with inflammation of the small sacs located in the intestinal wall?",
      answer: "Diverticulitis",
    },
    {
      question:
        "What is the name given to the small pocket-like protrusions that form on the intestinal wall?",
      answer: "Diverticulosis",
    },
    {
      question:
        "What is the intestinal disease caused by infections such as amebiasis and accompanied by bloody and mucous stools?",
      answer: "Dysentery",
    },
    {
      question:
        "..... herniation is a disease that occurs when the discs between the vertebrae slide and put pressure on the nerve roots.",
      answer: "Disc",
    },
    {
      question:
        "What is the name of the symptom characterized by difficulty swallowing or pain while swallowing?",
      answer: "Dysphagia",
    },
    {
      question:
        "Inherited and acquired conditions that cause abnormal bleeding in various parts of the body are called bleeding ….. .",
      answer: "Diathesis",
    },
    {
      question:
        "What is the name of the gynecological condition that causes extreme pain and cramps during menstrual periods?",
      answer: "Dysmenorrhea",
    },
    {
      question:
        "What is the name given to the disorder seen in the stomach and upper digestive system, with symptoms such as indigestion and bloating?",
      answer: "Dyspepsia",
    },
    {
      question:
        "A rare kidney disease characterized by disruption of acid-base balance in the kidney tubules is called ….. renal tubular acidosis.",
      answer: "Distal",
    },
    {
      question:
        "What is the term meaning located away from the center or attachment point of the body?",
      answer: "Distal",
    },
    {
      question:
        "What is the name of the neurological disease that progresses with involuntary contractions and abnormal movements in the muscles?",
      answer: "Dystonia",
    },
    {
      question: "What is the name given to the relaxation phase of the heart?",
      answer: "Diastole",
    },
  ],
  E: [
    {
      question:
        "What is a chronic respiratory disease characterized by loss of elasticity and air trapping in the alveoli in the lungs?",
      answer: "Emphysema",
    },

    {
      question:
        "What type of pregnancy occurs when a fertilized egg settles outside the uterus, usually in the fallopian tubes?",
      answer: "Ectopic",
    },
    {
      question:
        "What is a chronic inflammatory skin disease that progresses with redness, itching and blisters on the skin?",
      answer: "Eczema",
    },
    {
      question:
        "The group of nervous system diseases characterized by symptoms such as slowing down of movements, tremors and muscle stiffness is called ….. disorder.",
      answer: "Extrapyramidal",
    },
    {
      question:
        "What is the disease characterized by excessive swelling in a limb or other part of the body as a result of blockage of the lymphatic system?",
      answer: "Elephantiasis",
    },
    {
      question:
        "The condition that occurs when the balance of minerals such as sodium, potassium and calcium is disrupted is called ….. disorder.",
      answer: "Electrolyte",
    },
    {
      question:
        "What is the unborn or unhatched offspring in the process of development, especially the human infant (hereafter usually called a fetus) from about the second to eighth week after fertilization?",
      answer: "Embryo",
    },
    {
      question:
        "What is a blockage of an artery, usually due to a blood clot or air bubble?",
      answer: "Embolism",
    },
    {
      question:
        "What is a chronic lung disease characterized by air trapping and shortness of breath due to destruction of the lung alveoli?",
      answer: "Emphysema",
    },
    {
      question:
        "What is a person's natural, instinctive state of mind that results from his or her circumstances, mood, or relationships with others?",
      answer: "Emotion",
    },
    {
      question:
        "..... pyelonephritis is a serious type of pyelonephritis that develops as a result of a bacterial infection that causes gas in the kidney tissue.",
      answer: "Emphysematous",
    },
    {
      question:
        "What is the name of the disease that occurs as a result of infection of the endocardium, the layer that covers the inner surface of the heart?",
      answer: "Endocarditis",
    },
    {
      question:
        "Metabolic diseases that occur as a result of irregularity in hormone production are generally called ….. disorders.",
      answer: "Endocrine",
    },
    {
      question:
        "What is the gynecological disease that causes pain and infertility when the inner layer of the uterus settles outside the uterus?",
      answer: "Endometriosis",
    },
    {
      question:
        "What is the name given to inflammation in brain tissue caused by viral infection?",
      answer: "Encephalitis",
    },
    {
      question:
        "What is the name of a benign cartilage tumor located in the bone?",
      answer: "Enchondroma",
    },
    {
      question:
        "What is the disease that occurs when brain functions are affected by some factors or conditions such as viral infection or toxins in the blood?",
      answer: "Encephalopathy",
    },
    {
      question:
        "..... fever also known as typhoid fever is a disease caused by the Salmonella typhi bacteria and characterized by symptoms such as high fever and abdominal pain.",
      answer: "Enteric",
    },
    {
      question:
        "What is the disease that progresses with inflammation in the intestinal mucosa and usually causes diarrhea and abdominal pain?",
      answer: "Enteritis",
    },
    {
      question:
        "What is the hematological condition characterized by an abnormal increase in white blood cells called eosinophils in the blood?",
      answer: "Eosinophilia",
    },
    {
      question:
        "..... esophagitis is a chronic inflammatory disease that develops due to the accumulation of white blood cells called eosinophils in the esophagus.",
      answer: "Eosinophilic",
    },
    {
      question:
        "Eosinophilic ….. is a chronic inflammatory disease that develops due to the accumulation of white blood cells called eosinophils in the esophagus.",
      answer: "Esophagitis",
    },
    {
      question:
        "What is a serious infection that can cause airway obstruction due to inflammation of the epiglottis?",
      answer: "Epiglottitis",
    },
    {
      question:
        "Lateral ….. is a tendon disease that occurs as a result of overuse and causes pain and tenderness on the outside of the elbow.",
      answer: "Epicondylitis",
    },
    {
      question:
        "What is the neurological disease that occurs as a result of abnormal electrical activity in the brain and progresses with seizures?",
      answer: "Epilepsy",
    },
    {
      question:
        "What is a condition characterized by the collection of excess watery fluid in the cavities or tissues of the body?",
      answer: "Edema",
    },
    {
      question:
        "What is the urological disease caused by inflammation of the structure called epididymis at the top of the testicles?",
      answer: "Epididymitis",
    },
    {
      question:
        "..... hematoma is a serious condition that occurs as a result of blood accumulation between the skull and the brain and usually occurs after a head trauma.",
      answer: "Epidural",
    },
    {
      question:
        "What is the name given to the bleeding that occurs as a result of the rupture of blood vessels in the nose?",
      answer: "Epistaxis",
    },
    {
      question:
        "..... Barr virus infection is a viral disease that causes mononucleosis and is transmitted through saliva.",
      answer: "Epstein",
    },
    {
      question:
        "The inability of men to achieve or maintain an erection necessary for sexual intercourse is called ….. dysfunction.",
      answer: "Erectile",
    },
    {
      question:
        "..... nodosum is an inflammatory condition that appears as painful, red nodules under the skin and usually occurs on the lower extremities.",
      answer: "Erythema",
    },
    {
      question:
        "What is a superficial bacterial infection that is usually seen in the groin area?",
      answer: "Erythrasma",
    },
    {
      question:
        "What is the hematological condition characterized by an increase in the number of red blood cells in the blood above normal?",
      answer: "Erythrocytosis",
    },
    {
      question:
        "What is the acute infection caused by infection of the skin and subcutaneous tissue by Streptococcus bacteria?",
      answer: "Erysipelas",
    },
    {
      question:
        "What is the name of the muscular tube that is the part of the alimentary canal that connects the throat to the stomach and is lined with mucous membrane in humans and other vertebrates?",
      answer: "Esophagus",
    },
    {
      question:
        "What is the disease that causes symptoms such as pain, difficulty swallowing and burning due to inflammation of the esophagus?",
      answer: "Esophagitis",
    },
    {
      question:
        "..... poisoning is a condition that develops as a result of excessive alcohol consumption and causes toxic effects on organs such as the nervous system and liver.",
      answer: "Ethanol",
    },
    {
      question:
        "What is the type of malignant sarcoma that occurs in bones and soft tissues and is seen in children and young adults?",
      answer: "Ewing",
    },
  ],
  F: [
    {
      question:
        "What is the name given to short-term seizure type seen in young children due to high fever?",
      answer: "Febrile",
    },
    {
      question:
        "What is the name given to adjustments, rapid and ineffective contractions in the heart or muscles?",
      answer: "Fibrillation",
    },
    {
      question:
        "..... breast disease is a condition characterized by the formation of benign cysts and fibrosis in the breast tissue.",
      answer: "Fibrocystic",
    },
    {
      question:
        "What are benign tumors originating from connective tissue called?",
      answer: "Fibroma",
    },
    {
      question:
        "What is the name of the chronic disease that causes widespread pain, fatigue and tenderness in muscles and soft tissues?",
      answer: "Fibromyalgia",
    },
    {
      question:
        "What is the type of cancer that originates from connective tissue and is malignant?",
      answer: "Fibrosarcoma",
    },
    {
      question:
        "What is the name given to small cracks and tears that develop on the skin or mucosa?",
      answer: "Fissure",
    },
    {
      question:
        "A progressive kidney disease characterized by scarring in some segments of the glomeruli in the kidneys is called ….. segmental glomerulosclerosis.?",
      answer: "Focal",
    },
    {
      question:
        "What is an inflammatory skin disease caused by bacterial infection of hair follicles?",
      answer: "Folliculitis",
    },
    {
      question:
        "What is the fracture situation that occurs when the bone integrity is disrupted as a result of any trauma?",
      answer: "Fracture",
    },
    {
      question: "What is the anatomical terminology of the forehead region?",
      answer: "Frontal",
    },
    {
      question:
        "What is the type of rapidly progressing hepatitis that causes sudden and severe hepatocellular damage in the liver?",
      answer: "Fulminant",
    },
    {
      question:
        "What is the name of the painful inflammatory skin disease that occurs when the hair follicle infection spreads to deeper tissues?",
      answer: "Furuncle",
    },
    {
      question:
        "The condition characterized by abnormal fluid accumulation in the fetus in the womb is called ….. hydrops.",
      answer: "Fetal",
    },
    {
      question:
        "What is the thickening of the connective tissue and the formation of scars, usually as a result of injury?",
      answer: "Fibrosis",
    },

    {
      question:
        "A rare bone disease that occurs when abnormal fibrous tissue replaces normal bone tissue in bones is called ….. dysplasia.",
      answer: "Fibrous",
    },
    {
      question:
        "..... dyspepsia is a disease that occurs with long-term indigestion and stomach discomfort without any structural problem in the digestive system.",
      answer: "Functional",
    },
    {
      question:
        "A disease characterized by recurring headaches without a structural brain lesion is called ….. headache.",
      answer: "Functional",
    },
    {
      question:
        "..... disease occurs in children as a result of parvovirus B19 infection and causes a butterfly-shaped rash on the face.",
      answer: "Fifth",
    },
    {
      question:
        "What is the terminology that means starting in a certain region and developing in a limited area?",
      answer: "Focal",
    },
  ],
  G: [
    {
      question:
        "What is an inherited metabolic disease that occurs when the body cannot properly metabolize galactose?",
      answer: "Galactosemia",
    },
    {
      question:
        "What is the local death and decomposition of body tissues that occurs as a result of blocked circulation or bacterial infection?",
      answer: "Gangrene",
    },
    {
      question:
        "What is the disease that causes stomach pain and indigestion as a result of inflammation of the stomach?",
      answer: "Gastritis",
    },
    {
      question:
        "What is the disease caused by inflammation of the kidney glomeruli?",
      answer: " glomerulonephritis",
    },
    {
      question:
        "What is the disease that causes diarrhea, vomiting and abdominal pain as a result of infection of the stomach and intestines?",
      answer: "Gastroenteritis",
    },
    {
      question:
        "What is the abbreviation for the disease that causes burning and reflux symptoms as a result of stomach contents leaking into the esophagus?",
      answer: "GERD",
    },
    {
      question:
        "What is the abbreviation for the name of a rare and usually malignant type of tumor that develops in the digestive system, especially in the stomach or intestines?",
      answer: "GIST",
    },
    {
      question:
        "..... cell arteritis is a vasculitis disease that develops with the accumulation of giant cells in large arteries, especially the temporal artery.",
      answer: "Giant",
    },
    {
      question:
        "What is the name of the autoimmune disease in which the immune system attacks the thyroid gland and excessive thyroid hormones are secreted?",
      answer: "Graves",
    },
    {
      question:
        "What is the name given to the condition in which stomach emptying is delayed as a result of the stomach muscles not working normally?",
      answer: "Gastroparesis",
    },
    {
      question: "What is the medical term for gene-related?",
      answer: "Genetic",
    },
    {
      question:
        "What is the type of herpes infection that is sexually transmitted and causes painful, water-filled blisters in the genital area?",
      answer: "Genital",
    },
    {
      question:
        "What is a rare neurological syndrome characterized by confusion between right and left, inability to write, and arithmetic disorders?",
      answer: "Gerstmann",
    },
    {
      question:
        "What is the intestinal infection caused by the Giardia lamblia parasite, accompanied by diarrhea and abdominal cramps?",
      answer: "Giardiasis",
    },
    {
      question:
        "What is the disease that causes damage to the optic nerve and vision loss as a result of increased intraocular pressure?",
      answer: "Glaucoma",
    },
    {
      question:
        "What is the disease characterized by inflammation of the filtering units called glomeruli in the kidneys?",
      answer: "Glomerulonephritis",
    },
    {
      question:
        "What is a cluster of nerve endings, spores, or small blood vessels, in particular a cluster of capillaries around the end of a kidney tubule, where waste products are filtered from the blood.",
      answer: "Glomerulus",
    },
    {
      question:
        "What is the abbreviation for the hereditary disease caused by a deficiency of the enzyme that protects red blood cells from oxidative stress?",
      answer: "G6PD",
    },
    {
      question:
        "What is a sexually transmitted disease caused by the Neisseria gonorrhoeae bacteria, which causes inflammation and discharge in the urethra?",
      answer: "Gonorrhea",
    },
    {
      question:
        "What is a rare autoimmune disease that causes bleeding and damage in the lungs, kidneys and other organs?",
      answer: "Goodpasture",
    },
    {
      question:
        "What is a mass of granulation tissue that is usually produced in response to infection, inflammation, or the presence of a foreign substance?",
      answer: "Granuloma",
    },
    {
      question:
        "What is an autoimmune disease in which the immune system attacks the thyroid gland and overproduces thyroid hormones?",
      answer: "Graves",
    },
    {
      question:
        "What is the disease characterized by swelling in the neck resulting from the enlargement of the thyroid gland?",
      answer: "Guatr",
    },
    {
      question:
        "..... Barre syndrome is a neurological disease that causes muscle weakness and paralysis as a result of the immune system attacking the peripheral nerves.",
      answer: "Guillain",
    },
    {
      question:
        "What is the metabolic disease that causes pain and inflammation due to the accumulation of uric acid crystals in the joints?",
      answer: "Gout",
    },
    {
      question: "What is the hormone that ensures growth and development?",
      answer: "Growth",
    },
    {
      question:
        "What is the oral health problem characterized by inflammation and bleeding of the gums?",
      answer: "Gingivitis",
    },
  ],
  H: [
    {
      question:
        "The most common cause of upper respiratory tract infection in children is the bacterium ….. influenzae.",
      answer: "Haemophilus",
    },
    {
      question:
        "What is a disease that is usually viral, characterized by inflammation of the liver, and presents with jaundice?",
      answer: "Hepatitis",
    },
    {
      question:
        "What is the name given to bleeding that occurs in any part of the body?",
      answer: "Hemorrhage",
    },
    {
      question:
        "What is the disease that occurs when the discs in the lumbar region shift, or when an internal organ in the abdomen or another part of the body protrudes from a weak area?",
      answer: "Hernia",
    },
    {
      question: "What is the name given to the decrease in blood sugar level?",
      answer: "Hypoglycemia",
    },
    {
      question: "What is the name given to the increase in blood sugar level?",
      answer: "Hyperglycemia",
    },
    {
      question: "What is abnormally high blood pressure?",
      answer: "Hypertension",
    },
    {
      question: "What is the phagocytic cell found in connective tissue?",
      answer: "Histiocyte",
    },
    {
      question:
        "What is an autoimmune disease in which the immune system attacks the thyroid gland, leading to hypothyroidism?",
      answer: "Hashimoto",
    },
    {
      question:
        "What is a medical condition in which the ability of the blood to clot is severely reduced, causing the sufferer to bleed severely from even a slight injury? The condition is typically caused by a hereditary lack of a coagulation factor, most often factor VIII, factor IX.",
      answer: "Hemophilia",
    },
    {
      question:
        "What is the genetic disease that causes excessive iron accumulation in the body and causes damage to organs such as the liver and heart?",
      answer: "Hemochromatosis",
    },
    {
      question:
        "What type of anemia develops as a result of red blood cells breaking down faster than normal?",
      answer: "Hemolytic",
    },
    {
      question: "What is the situation of coughing out blood from the lungs?",
      answer: "Hemoptysis",
    },
    {
      question:
        "What is the disease that develops as a result of the expansion of the veins in the anus and rectum area and progresses with symptoms such as pain and bleeding?",
      answer: "Hemorrhoids",
    },
    {
      question:
        "What is the name given to the accumulation of blood between the lung membranes in the chest cavity?",
      answer: "Hemothorax",
    },
    {
      question:
        "What is the condition characterized by loss of muscle strength or paralysis on one side of the body?",
      answer: "Hemiplegia",
    },
    {
      question:
        "What is the name of the neurological condition that causes partial loss of vision or blindness?",
      answer: "Hemianopsi",
    },
    {
      question:
        "What is the name of the serious condition that occurs when blood accumulates between the heart membranes and affects heart functions?",
      answer: "Hemopericardium",
    },
    {
      question:
        "What is the name given to benign vascular tumors, usually congenital, that affect the veins or skin?",
      answer: "Hemangioma",
    },
    {
      question:
        "What is the general name given to hereditary blood diseases that occur as a result of structural or quantitative abnormalities in hemoglobin?",
      answer: "Hemoglobinopathy",
    },
    {
      question:
        "What is the name given to the process in which red blood cells are destroyed before their normal lifespan?",
      answer: "Hemolysis",
    },
    {
      question:
        "The most common type of liver cancer that develops on the basis of chronic liver disease is ….. carcinoma.",
      answer: "Hepatocellular",
    },
    {
      question:
        "What is the condition in which the liver becomes larger than normal and can be a symptom of many diseases?",
      answer: "Hepatomegaly",
    },
    {
      question:
        "The viral infection that usually occurs with water-filled blisters in the mouth, lips and genital area is the ….. simplex virus.",
      answer: "Herpes",
    },
    {
      question:
        "..... suppurativa is a chronic skin disease characterized by painful, inflamed nodules on the skin, especially in the armpit and groin areas.",
      answer: "Hidradenitis",
    },
    {
      question:
        "What is the disease that progresses with increased intracranial pressure due to excessive fluid accumulation in the brain ventricles?",
      answer: "Hydrocephalus",
    },
    {
      question:
        "What is the parasitic infection cyst that causes cyst structures to develop in organs such as the liver, lungs and brain in humans?",
      answer: "Hydatid",
    },
    {
      question:
        "What is the metabolic disorder that occurs when the calcium level in the blood rises above normal?",
      answer: "Hypercalcemia",
    },
    {
      question:
        "What is the metabolic condition that occurs when the blood glucose level rises above normal?",
      answer: "Hyperglycemia",
    },
    {
      question:
        "What is an electrolyte disorder caused by higher than normal potassium levels in the blood?",
      answer: "Hyperkalemia",
    },
    {
      question:
        "What is the name given to abnormally high levels of carbon dioxide in the blood?",
      answer: "Hypercapnia",
    },
    {
      question:
        "What is the name given to abnormally low levels of carbon dioxide in the blood?",
      answer: "Hypocapnia",
    },
    {
      question:
        "What is the situation that occurs when cholesterol levels in the blood increase and increases the risk of atherosclerosis?",
      answer: "Hypercholesterolemia",
    },
    {
      question:
        "What is the situation that occurs when blood pressure rises above normal and paves the way for cardiovascular diseases?",
      answer: "Hypertension",
    },
    {
      question:
        "What is the condition that causes difficulty in movement due to muscle laxity and insufficient muscle tone?",
      answer: "Hypotonia",
    },
    {
      question:
        "What is an endocrine disease in which metabolism accelerates as a result of excessive thyroid gland activity?",
      answer: "Hyperthyroidism",
    },
    {
      question:
        "What is the metabolic condition that occurs when the blood sugar level drops below normal?",
      answer: "Hypoglycemia",
    },
    {
      question:
        "What is electrolyte imbalance caused by the potassium level in the blood falling below normal?",
      answer: "Hypokalemia",
    },
    {
      question:
        "What is the metabolic disorder that occurs when the calcium level in the blood is lower than normal?",
      answer: "Hypocalcemia",
    },
    {
      question:
        "What is a circulatory system disorder characterized by a drop in blood pressure below normal?",
      answer: "Hypotension",
    },
    {
      question:
        "What is the life-threatening situation that occurs when body temperature drops below normal?",
      answer: "Hypothermia",
    },
    {
      question:
        "What is the life-threatening situation that occurs when body temperature rises above normal?",
      answer: "Hyperthermia",
    },
    {
      question:
        "Tiroid bezinin yetersiz çalışması sonucu metabolizmanın yavaşladığı endokrin hastalık nedir?",
      answer: "Hipotiroidizm",
    },
    {
      question:
        "What is the condition that develops as a result of serious deterioration of the fluid volume in the blood and causes shock?",
      answer: "Hypovolemic",
    },
    {
      question:
        "What is a congenital bowel disease that develops as a result of nerve cells missing in a part of the large intestine?",
      answer: "Hirschsprung",
    },
    {
      question:
        "What is the infectious disease caused by the fungus Histoplasma capsulatum that usually affects the lungs?",
      answer: "Histoplasmosis",
    },
    {
      question:
        "What type of cancer is characterized by abnormal proliferation of malignant cells in the lymph nodes?",
      answer: "Hodgkin",
    },
    {
      question:
        "What is the neurological syndrome characterized by loss of sweating on the face, drooping eyelids and constricted pupils?",
      answer: "Horner",
    },
    {
      question:
        "What is a hereditary neurological disease that develops as a result of damage to nerve cells, causing progressive movement and cognitive impairment?",
      answer: "Huntington",
    },
  ],
  I: [
    {
      question:
        "A tumor originating from insulin-secreting cells in the pancreas is called an ….. cell tumor.",
      answer: "Islet",
    },
    {
      question:
        "..... bowel diseases are conditions that cause prolonged activity in the intestines and include diseases such as Crohn's disease or ulcerative colitis.",
      answer: "Inflammatory",
    },
    {
      question:
        "What is lack of voluntary control over urination or defecation?",
      answer: "Incontinence",
    },
    {
      question:
        "What is digestive system obstruction, characterized by complete cessation or severe reduction of bowel movements?",
      answer: "Ileus",
    },
    {
      question:
        "The name of the disease in which the immune system mistakenly attacks its own platelets, increasing the risk of bleeding, is ….. thrombocytopenic purpura.",
      answer: "Immune",
    },
    {
      question:
        "What is the term used to refer to being completely or partially resistant to a particular infectious disease or pathogen?",
      answer: "Immune",
    },
    {
      question:
        "What is the name of the contagious superficial skin infection of bacterial origin that is common in children and babies?",
      answer: "Impetigo",
    },
    {
      question:
        "What is the situation where the virus remains silent in the body after exposure to the hepatitis B virus and does not cause active disease?",
      answer: "Inactive",
    },
    {
      question:
        "What happens when couples are unable to conceive within a year despite regular unprotected intercourse?",
      answer: "Infertility",
    },

    {
      question:
        "Diseases that cause long-term inflammation in the digestive system, such as Crohn's disease and ulcerative colitis, are called ….. bowel disease.",
      answer: "Inflammatory ",
    },
    {
      question:
        "What is a viral respiratory tract infection that occurs seasonally or pandemically and is accompanied by fever and muscle pain?",
      answer: "Influenza",
    },
    {
      question:
        "What is the condition that occurs as a result of the interruption of blood flow in the brain tissue and can cause permanent damage?",
      answer: "Infarct",
    },

    {
      question:
        "..... hernia is a common disease that occurs when organs herniate in the abdominal wall, especially in the groin area.",
      answer: "Inguinal",
    },
    {
      question:
        "What is an endocrine disease caused by insulin-producing tumors in the pancreas, causing low blood sugar?",
      answer: "Insulinoma",
    },
    {
      question:
        "The condition that occurs when blood accumulates as a result of a rupture of a blood vessel in the brain and is accompanied by serious neurological symptoms is called ….. hemorrhage.",
      answer: "Intracranial",
    },
    {
      question:
        "..... growth retardation is a condition characterized by the baby in the womb reaching the expected size according to the gestational week.",
      answer: "Intrauterine",
    },
    {
      question:
        "What is the disease that develops as a result of inflammation of the iris layer of the eye and causes eye pain and visual impairment?",
      answer: "Iritis",
    },
    {
      question:
        "Acute ….. stroke is a neurological emergency that occurs when blood flow to the brain is suddenly interrupted.",
      answer: "Ischemic",
    },
    {
      question:
        "Functional bowel disease, which is characterized by irregular bowel movements, abdominal pain and bloating, is called ….. bowel disease.",
      answer: "Irritable",
    },
    {
      question:
        "What is tissue death caused by lack of oxygen due to the cessation of blood flow to an organ or tissue?",
      answer: "Infarct",
    },
    {
      question:
        "What is inflammation or other discomfort that occurs as a result of a reaction to an irritant in any part of the body?",
      answer: "Irritation",
    },
  ],
  J: [
    {
      question:
        "What is the rare type of arthritis that causes deformities in the hand joints, similar to rheumatoid arthritis?",
      answer: "Jaccoud",
    },
    {
      question:
        "What is the type of severe diaper rash seen in babies and young children and developing in the diaper area?",
      answer: "Jacquet",
    },
    {
      question:
        "..... Vu is a neurological phenomenon characterized by the feeling that a person is seeing a familiar environment or situation for the first time.",
      answer: "Jamais",
    },
    {
      question:
        "What is the condition characterized by yellow discoloration of the skin and eyes and caused by increased bilirubin levels in the blood?",
      answer: "Jaundice",
    },
    {
      question:
        "What is the part of the small intestine between the duodenum and the ileum?",
      answer: "Jejunum",
    },
    {
      question:
        "The general name for the rheumatic disease that occurs with joint inflammation in childhood is ….. arthritis.",
      answer: "Juvenile",
    },
    {
      question:
        "The disease that occurs with clot formation in the veins in the neck region is ….. vein thrombosis.",
      answer: "Jugular",
    },
    {
      question:
        "..... venous insufficiency is a circulatory disorder that occurs when the neck veins do not function properly and the blood flows backwards.",
      answer: "Jugular",
    },
  ],
  K: [
    {
      question:
        "What is the tumor caused by the human herpes virus, with purple-red lesions on the skin and mucous membranes?",
      answer: "Kaposi",
    },
    {
      question:
        "What is the eye disease that develops as a result of infection in the corneal tissue?",
      answer: "Keratitis",
    },
    {
      question:
        "What is an inherited disease characterized by situs inversus, bronchiectasis, and chronic sinusitis?",
      answer: "Kartagener",
    },
    {
      question:
        "What is the name given to the situation where ketone bodies increase in the body as a result of long-term fasting?",
      answer: "Ketosis",
    },
    {
      question:
        "What is the name of the rare disease characterized by fever, skin rash and vein inflammation in children?",
      answer: "Kawasaki",
    },
    {
      question:
        "What is a diabetic emergency that occurs when ketone bodies increase in the blood as a result of insulin deficiency or insulin ineffectiveness?",
      answer: "Ketoacidosis",
    },
    {
      question:
        "What is a benign tumoral mass that develops in the cornea of the eye and can affect vision?",
      answer: "Keratoma",
    },
    {
      question:
        "What is the general name given to thickened and hardened areas that occur as a result of excessive keratin accumulation in the skin?",
      answer: "Keratosis",
    },
    {
      question:
        "What is the genetic syndrome characterized by infertility that develops as a result of having an extra X chromosome in men?",
      answer: "Klinefelter",
    },
  ],
  L: [
    {
      question:
        "What is the disease that causes dizziness and loss of balance due to infection or inflammation in the inner ear?",
      answer: "Labyrinthitis",
    },
    {
      question:
        "What is the disease that causes hoarseness and sore throat as a result of inflammation of the vocal cords?",
      answer: "Laryngitis",
    },
    {
      question:
        "What is the congenital condition seen in babies that causes breathing sounds due to the softness of the laryngeal cartilages?",
      answer: "Laryngomalacia",
    },
    {
      question:
        "What is the emergency situation that causes sudden contraction of the vocal cords, stopping airflow and causing shortness of breath?",
      answer: "Laryngospasm",
    },
    {
      question:
        "Severe metabolic syndrome that develops as a result of tumor cells suddenly breaking down and releasing excessive substances into the blood after chemotherapy is called tumor ….. syndrome.",
      answer: "Lysis",
    },
    {
      question:
        "What is the term meaning; from the side or sides, towards the side or from them?",
      answer: "Lateral",
    },
    {
      question:
        "What is a chronic infectious disease caused by the bacteria Mycobacterium leprae that affects the skin, nerves and eyes?",
      answer: "Leprosy",
    },
    {
      question:
        "What is the name of the clinical condition that occurs as a result of enlargement of the lymph nodes, usually associated with infection or malignancy?",
      answer: "Lymphadenopathy",
    },
    {
      question:
        "What is a benign cystic tumor that occurs as a result of congenital or acquired expansion of lymph vessels?",
      answer: "Lymphangioma",
    },
    {
      question:
        "What is the name of the disease that causes swelling and edema as a result of the accumulation of lymph fluid in the tissues?",
      answer: "Lymphedema",
    },
    {
      question:
        "What type of cancer occurs when the lymphatic system is invaded by malignant cells?",
      answer: "Lymphoma",
    },
    {
      question:
        "What is the disease that occurs with inflammation of the lymph vessels due to bacterial infection?",
      answer: "Lymphangitis",
    },
    {
      question:
        "What is the rare genetic disease that occurs due to mitochondrial enzyme deficiency and progresses with muscle weakness and respiratory failure?",
      answer: "Leigh",
    },
    {
      question:
        "What is a benign tumor that originates from smooth muscles and is usually seen in the uterus?",
      answer: "Leiomyoma",
    },
    {
      question:
        "What is a malignant tumor that originates from smooth muscle tissue and can be seen in various parts of the body?",
      answer: "Leiomyosarcoma",
    },
    {
      question:
        "What is the pigment loss disease that occurs with white spots on the skin and is similar to vitiligo?",
      answer: "Leucoderma",
    },
    {
      question:
        "What is the name given to the lesions that appear as white plaques in the oral mucosa and may be precancerous?",
      answer: "Leukoplakia",
    },
    {
      question:
        "..... planus is a chronic inflammatory disease characterized by purple, flat, itchy lesions on the skin.",
      answer: "Lichen",
    },
    {
      question:
        "What is a generally harmless, soft, benign tumor originating from fatty tissue?",
      answer: "Lipoma",
    },
    {
      question:
        "What is the name of the type of malignant tumor that originates from fat tissue and can grow rapidly?",
      answer: "Liposarcoma",
    },
    {
      question:
        "What is the infectious disease caused by the bacteria Listeria monocytogenes, which is serious in pregnant women and immunocompromised individuals?",
      answer: "Listeriosis",
    },
    {
      question:
        "Lumbar ….. is a postural disorder that occurs when the spine in the lumbar region curves more than normal.",
      answer: "Lordosis",
    },
    {
      question:
        "What is the name of the disease that occurs due to abnormal white blood cell production in the bone marrow and is classified as cancer?",
      answer: "Leukemia",
    },
    {
      question:
        "What is an autoimmune disease that occurs when the immune system attacks its own tissues and can affect the skin, kidneys and other organs?",
      answer: "Lupus",
    },
    {
      question:
        "What is the disease that occurs when the Borrelia burgdorferi bacteria is transmitted through a bite and presents symptoms such as rash and joint pain?",
      answer: "Lyme",
    },
    {
      question:
        "The group of metabolic diseases that develop as a result of disorders in the metabolism of fats in the body and affect various organs is called ….. metabolism disorder.",
      answer: "Lipid",
    },
    {
      question:
        "What are the white mucosal lesions that can develop in the mouth, tongue and genital areas and can be considered pre-cancerous?",
      answer: "Leukoplakia",
    },
  ],
  M: [
    {
      question:
        "..... degeneration is a disease that causes progressive vision loss as a result of degeneration of the retina, which is the center of vision.",
      answer: "Macular",
    },
    {
      question:
        "What is the infectious disease caused by the Plasmodium parasite transmitted by mosquitoes and accompanied by fever and chills?",
      answer: "Malaria",
    },
    {
      question:
        "Malignant ….. is a type of malignant skin cancer that originates from skin pigment cells and can spread rapidly.",
      answer: "Melanoma",
    },
    {
      question:
        "What is the type of lymphoma that develops from mucosa-associated lymphoid tissue and is usually seen in organs such as the stomach and lungs?",
      answer: "Maltoma",
    },
    {
      question:
        "What is the digestive system anomaly that develops as a result of the intestines turning and settling abnormally at birth?",
      answer: "Malrotation",
    },
    {
      question:
        "What is the situation that develops due to the lack of nutrients necessary for the body as a result of inadequate or unbalanced nutrition?",
      answer: "Malnutrition",
    },
    {
      question:
        "What is the inflammatory disease that occurs when breast tissue becomes infected and causes symptoms such as pain, redness and swelling?",
      answer: "Mastitis",
    },
    {
      question:
        "What is the serious ear disease that develops with inflammation of the mastoid bones after an infection in the middle ear?",
      answer: "Mastoiditis",
    },
    {
      question:
        "What is it about the mother, especially during pregnancy or immediately after birth?",
      answer: "Maternal",
    },
    {
      question:
        "What is the most common type of malignant brain tumor in children that develops in the cerebellum?",
      answer: "Medulloblastoma",
    },
    {
      question:
        "What is the serious condition characterized by the large intestine becoming dilated more than normal, disrupting bowel movements?",
      answer: "Megacolon",
    },
    {
      question:
        "What type of anemia develops as a result of vitamin B12 or folic acid deficiency and is characterized by large, immature red blood cells?",
      answer: "Megaloblastic",
    },
    {
      question:
        "What is the name of the contagious viral disease that affects the salivary glands and is usually seen in children?",
      answer: "Mumps",
    },
    {
      question:
        "What is the general name given to malignant tumors that originate from melanocytes and can be seen on the skin?",
      answer: "Melanoma",
    },
    {
      question:
        "What is the disease that occurs due to increased fluid pressure in the inner ear and is accompanied by dizziness, tinnitus and hearing loss?",
      answer: "Meniere",
    },
    {
      question:
        "What is the serious infection that develops as a result of meningococcal bacteria mixing with the blood and can quickly lead to septic shock?",
      answer: "Meningococcemia",
    },
    {
      question:
        "What is the disease caused by inflammation of the meninges due to bacterial, viral or fungal infections?",
      answer: "Meningitis",
    },
    {
      question:
        "What is a serious infectious disease that causes inflammation of the brain and meninges?",
      answer: "Meningoencephalitis",
    },
    {
      question:
        "What is the syndrome that progresses with insulin resistance, hypertension, obesity and lipid imbalances and increases cardiovascular risk?",
      answer: "Metabolic",
    },
    {
      question:
        "What is the situation that develops when cancer cells spread from another part of the body settle in one place and cause damage?",
      answer: "Metastasis",
    },
    {
      question:
        "What is the name given to irregular and abnormal vaginal bleeding that occurs outside the menstrual cycle?",
      answer: "Metrorrhagia",
    },
    {
      question:
        "What is the serious disease caused by bacterial infection of the membranes surrounding the brain and spinal cord?",
      answer: "Meningitis",
    },
    {
      question:
        "What is the type of anemia that is characterized by smaller than normal red blood cells and usually develops due to iron deficiency?",
      answer: "Microcytic",
    },
    {
      question:
        "Mixed disease syndrome in which connective tissue diseases such as lupus, scleroderma and polymyositis are seen together is called ….. connective tissue disease.",
      answer: "Mixed",
    },
    {
      question:
        "What is a benign primary tumor that develops in the heart, especially in the atrium?",
      answer: "Myxoma",
    },
    {
      question:
        "What is the neurological disease that presents with headache, nausea and sensitivity to light?",
      answer: "Migraine",
    },
    {
      question:
        "What is the name given to the condition in which the outer ear pinna is congenitally small, deformed or missing?",
      answer: "Microtia",
    },
    {
      question:
        "What is the disease that occurs with inflammation of the heart muscle tissue as a result of infection or autoimmune reaction?",
      answer: "Myocarditis",
    },
    {
      question:
        "What is the disease characterized by inflammation of muscle tissue, causing muscle weakness and pain?",
      answer: "Myositis",
    },
    {
      question:
        "..... gravis is an autoimmune disease that disrupts nerve conduction in the muscles and is characterized by muscle weakness and rapid fatigue.",
      answer: "Myasthenia",
    },
    {
      question:
        "What is a hematological disease in which blood cell production is impaired as a result of abnormal increase in fibrous tissue in the bone marrow?",
      answer: "Myelofibrosis",
    },
    {
      question:
        "What is the common contagious viral disease in children with rash, fever and respiratory symptoms?",
      answer: "Measles",
    },
    {
      question:
        "What is the type of malignant blood cancer that originates from plasma cells and affects the bone marrow?",
      answer: "Myeloma",
    },
    {
      question:
        "What is a congenital developmental nervous system anomaly that affects the spinal cord and spinal bones?",
      answer: "Myelomeningocele",
    },
    {
      question:
        "What is the name of the common muscle complaint condition that is characterized by pain, tenderness and stiffness in the muscles?",
      answer: "Myalgia",
    },
    {
      question:
        "What is the general name given to muscle diseases that cause weakness as a result of structural and metabolic disorders in the muscles?",
      answer: "Myopathy",
    },
    {
      question:
        "What is a vision disorder characterized by the blurring of distant objects as a result of the inability of the eye to focus light correctly?",
      answer: "Myopic",
    },
    {
      question:
        "..... diseases are a group of diseases that progress with excessive blood cell production in the bone marrow and can progress to blood diseases such as leukemia.",
      answer: "Myeloproliferative",
    },
    {
      question:
        "What is the movement disorder that manifests itself with sudden, involuntary and rhythmic contractions in the muscles?",
      answer: "Myoclonus",
    },
    {
      question:
        "What is the name given to the group of diseases that cause deterioration in the structure or function of the heart muscle and affect the pumping power of the heart?",
      answer: "Myocardiopathy",
    },
  ],
  N: [
    {
      question:
        "What is an upper respiratory tract infection that develops as a result of viral infection of the nose and throat area?",
      answer: "Nasopharyngitis",
    },
    {
      question:
        "What is the disease that develops due to inflammation in the kidneys and is accompanied by blood or protein loss in the urine?",
      answer: "Nephritis",
    },
    {
      question:
        "..... syndrome is a disease of the kidneys characterized by protein loss, edema in the body and high cholesterol levels.",
      answer: "Nephrotic",
    },
    {
      question:
        "The clinical picture that occurs as a result of inflammation of the kidneys, with symptoms such as blood, protein and hypertension in the urine, is ….. syndrome.",
      answer: "Nephritic",
    },
    {
      question:
        "What is the disease that occurs as a result of calcium accumulation in the kidney tissue and can affect kidney functions?",
      answer: "Nephrocalcinosis",
    },
    {
      question:
        "What is the disease that occurs as a result of mineral accumulation in the kidneys and can cause obstruction in the urinary tract?",
      answer: "Nephrolithiasis",
    },
    {
      question:
        "What is the name of the malignant solid tumor of kidney origin seen in childhood, also known as Willms tumor?",
      answer: "Nephroblastoma",
    },
    {
      question:
        "..... diabetes insipidus is a genetic disease characterized by excessive urine production as a result of the kidneys' inability to regulate water and salt balance.",
      answer: "Nephrogenic",
    },
    {
      question:
        "..... enterocolitis is a serious gastrointestinal disease in newborn babies that causes tissue death and inflammation in the intestines.",
      answer: "Necrotizing",
    },
    {
      question:
        "What is the name given to the pathological condition that occurs when cells die due to lack of oxygen or damage?",
      answer: "Necrosis",
    },
    {
      question:
        "What is the general name given to benign or malignant tumors characterized by uncontrolled cell growth?",
      answer: "Neoplasm",
    },
    {
      question:
        "What is a malignant tumor that occurs in childhood and originates from nerve tissue?",
      answer: "Neuroblastoma",
    },
    {
      question:
        "What is the disease characterized by sudden and severe pain attacks that manifest themselves with nerve-based pain?",
      answer: "Neuralgia",
    },
    {
      question:
        "What is the name given to benign lesions that include congenital or acquired color change or swelling on the skin?",
      answer: "Nevus",
    },
    {
      question:
        "What is the urinary system problem that manifests itself with the complaint of frequent urination at night?",
      answer: "Nocturia",
    },
    {
      question:
        "What is the condition characterized by the involuntary and rhythmic movement of the eyes from right to left or up and down?",
      answer: "Nystagmus",
    },
    {
      question:
        "The group of tumors that develop from the body's hormone-producing nerve cells and present with both hormonal and tumoral symptoms is called ….. tumor.",
      answer: "Neuroendocrine",
    },
    {
      question:
        "What is the Type 1 form of the genetic disease characterized by brown spots on the skin and multiple benign nerve sheath tumors?",
      answer: "Neurofibromatosis",
    },
    {
      question:
        "What is the Type 2 form of the genetic disease that causes benign tumors on the auditory nerve and loss of balance?",
      answer: "Neurofibromatosis",
    },
    {
      question:
        "..... bladder is a disease that causes urinary incontinence and inability to empty urine as a result of the deterioration of the nerve control of the bladder muscles.",
      answer: "Neurogenic",
    },
    {
      question:
        "What is the name given to nerve diseases that develop as a result of nerve damage and present with symptoms such as tingling and burning?",
      answer: "Neuropathy",
    },
    {
      question:
        "A ….. tube defect is a condition that develops as a result of congenital disorders in the formation of the brain and spinal cord, causing anomalies such as spina bifida.",
      answer: "Neural",
    },
    {
      question:
        "What is the name given to nervous system diseases that cause muscle weakness and loss of reflexes as a result of damage to motor neurons?",
      answer: "Neuronopathy",
    },
    {
      question:
        "What is the situation in which the risk of infection increases as the number of white blood cells called neutrophils in the body decreases?",
      answer: "Neutropenia",
    },
    {
      question:
        "What is the vascular syndrome that occurs with bleeding in urine and flank pain due to compression of the left renal vein between the vessels?",
      answer: "Nutcracker",
    },
  ],
  O: [
    {
      question:
        "What is the condition that develops as a result of excessive fat accumulation in the body and leads to health problems such as heart disease and diabetes?",
      answer: "Obesity",
    },
    {
      question:
        "The group of chronic lung diseases that cause difficulty in breathing due to narrowing of the airways is called ….. lung disease.",
      answer: "Obstructive",
    },
    {
      question:
        "What is the abbreviation for the syndrome characterized by snoring and recurrent respiratory pauses due to obstruction of the upper respiratory tract during sleep?",
      answer: "OSAS",
    },
    {
      question:
        "What is the situation that occurs when amniotic fluid is less than normal during pregnancy and can affect the baby's development?",
      answer: "Oligohydramnios",
    },
    {
      question:
        "What is the name of the chronic rheumatic disease that causes cartilage wear and pain in the knee?",
      answer: "Osteoarthritis",
    },
    {
      question:
        "What is the name given to the male infertility condition that progresses with disorders in sperm count, mobility and shape structure?",
      answer: "Oligoasthenoteratospermia",
    },
    {
      question:
        "What is the name of the congenital anomaly that occurs when the umbilical cord protrudes through the opening in the abdominal wall before birth?",
      answer: "Omphalocele",
    },
    {
      question:
        "What is the disease that causes thickening, discoloration and fragility of nails due to fungal infection?",
      answer: "Onychomycosis",
    },
    {
      question:
        "What is the most common joint disease associated with aging, characterized by the wearing away of joint cartilage and joint pain?",
      answer: "Osteoarthritis",
    },
    {
      question:
        "What is the name of the usually benign, cartilage-covered bony protrusion that develops on the bone?",
      answer: "Osteochondroma",
    },
    {
      question:
        "What is a common type of bone tumor that grows slowly in the bone and is usually benign?",
      answer: "Osteoma",
    },
    {
      question:
        "What is a serious infectious disease that causes pain, swelling and fever as a result of infection of bone tissue?",
      answer: "Osteomyelitis",
    },
    {
      question:
        "What is the disease that occurs when bone cells die as a result of impaired blood flow in bone tissue?",
      answer: "Osteonecrosis",
    },
    {
      question:
        "What is the condition characterized by a decrease in bone mineral density below normal, which increases the risk of fractures?",
      answer: "Osteopenia",
    },
    {
      question:
        "What is the disease characterized by bacterial infection in the bones?",
      answer: "Osteomyelitis",
    },
    {
      question:
        "What is a metabolic disease in which bones become brittle as a result of decreased bone mineral density?",
      answer: "Osteoporosis",
    },
    {
      question:
        "What is metabolic bone disease, which causes a decrease in bone mass and deterioration in bone structure, increasing the risk of fractures?",
      answer: "Osteoporosis",
    },
    {
      question:
        "What is the name of the malignant, aggressive primary bone cancer type that develops in bone tissue?",
      answer: "Osteosarcoma",
    },
  ],
  P: [
    {
      question:
        "What is a chronic bone disease that causes abnormal remodeling and weakening of bones?",
      answer: "Paget",
    },
    {
      question: "What is vascular disease caused by inflammation of the veins?",
      answer: "Phlebitis",
    },
    {
      question:
        "What is the vascular disease that occurs with clot formation in the vein?",
      answer: "Phlebothrombosis",
    },
    {
      question:
        "..... disorder is a mental disorder characterized by sudden onset of anxiety attacks, intense fear, and physical symptoms.",
      answer: "Panic",
    },
    {
      question:
        "What is the name of the benign cystic structure that is filled with fluid in the pancreas and occurs after inflammation?",
      answer: "Pseudocyst",
    },
    {
      question:
        "What is the disease that occurs as a result of inflammation of the pancreas due to its own digestive enzymes?",
      answer: "Pancreatitis",
    },
    {
      question:
        "The name of the viral agent that causes warts on the skin and mucous membranes and can also be transmitted sexually is human ….. virus.",
      answer: "Papilloma",
    },
    {
      question:
        "What is the name given to the systemic symptoms that develop as a result of the immune system overreacting in relation to cancer?",
      answer: "Paraneoplastic",
    },
    {
      question:
        "What is the type of paralysis that occurs with loss of sensation and motor function in the body parts below the waist?",
      answer: "Paraplegia",
    },
    {
      question:
        "What is the condition that causes loss of muscle strength or movement due to blockage or bleeding in the brain vessels?",
      answer: "Paralysis",
    },
    {
      question:
        "What is the disease that occurs when an infection develops in the prostate gland and causes urinary symptoms?",
      answer: "Prostatitis",
    },
    {
      question:
        "What is the serious condition characterized by high blood pressure, proteinuria and edema during pregnancy?",
      answer: "Preeclampsia",
    },
    {
      question:
        "What is a nervous system disease that causes tremors, slow movements and muscle stiffness due to decreased dopamine in brain cells?",
      answer: "Parkinson",
    },
    {
      question:
        "What is an upper respiratory tract infection with sore throat, difficulty swallowing and fever?",
      answer: "Pharyngitis",
    },
    {
      question:
        "The viral infection that causes cheek redness in children, accompanied by rash and mild fever, is ….. B19 infection.",
      answer: "Parvovirus",
    },
    {
      question:
        "What is the condition that occurs when pelvic organs such as the uterus, bladder and rectum shift and protrude from the vagina?",
      answer: "Prolapse",
    },
    {
      question:
        "What is the disease that causes chest pain and shortness of breath as a result of inflammation of the membrane surrounding the heart?",
      answer: "Pericarditis",
    },
    {
      question:
        "What is a serious intra-abdominal infection that develops as a result of infection or inflammation of the membrane covering the abdominal cavity?",
      answer: "Peritonitis",
    },
    {
      question:
        "What is the type of anemia that develops due to vitamin B12 deficiency and progresses with deterioration in red blood cell production?",
      answer: "Pernicious",
    },
    {
      question:
        "..... ulcer is a wound disease that occurs in the stomach or duodenum due to stomach acid.",
      answer: "Peptic",
    },
    {
      question:
        "What is an eating disorder syndrome characterized by a desire to eat soil, clay, or non-nutritive substances?",
      answer: "Pica",
    },
    {
      question:
        "What is the name given to the infection and inflammation that develops in the portal vein, one of the large veins in the abdomen?",
      answer: "Pylephlebitis",
    },
    {
      question:
        "What is the disease that progresses with fever, flank pain and urinary tract infection symptoms as a result of bacterial infection of the kidney tissue?",
      answer: "Pyelonephritis",
    },
    {
      question:
        "A birth complication that occurs when the placenta covers the cervix before birth is called placenta ….. .",
      answer: "Previa",
    },
    {
      question:
        "What is the disease that causes chest pain and difficulty breathing as a result of inflammation between the lung membranes?",
      answer: "Pleurisy",
    },
    {
      question:
        "What is the disease that occurs with sudden inflammation of the pancreas and presents symptoms such as abdominal pain and nausea?",
      answer: "Pancreatitis",
    },
    {
      question:
        "What is the name of the disease that occurs when the membrane surrounding the heart becomes suddenly inflamed?",
      answer: "Pericarditis",
    },
    {
      question:
        "What is the disease of inability to metabolize phenylalanine, which causes brain and nerve damage if left untreated?",
      answer: "Phenylketonuria",
    },
    {
      question:
        "What is the disease that develops as a result of vitamin B3 deficiency and presents with symptoms such as diarrhea, dermatitis and dementia?",
      answer: "Pellagra",
    },
    {
      question:
        "What is the disease that develops as a result of inflammation of the lungs due to infection and progresses with fever, cough and shortness of breath?",
      answer: "Pneumonia",
    },
    {
      question:
        "What is an occupational disease characterized by the development of fibrosis in the lungs as a result of long-term exposure to dust?",
      answer: "Pneumoconiosis",
    },
    {
      question:
        "What is the condition that occurs due to air accumulation in the mediastinal space due to air leakage and progresses with chest pain and respiratory distress?",
      answer: "Pneumomediastinum",
    },
    {
      question:
        "..... birth is the name given to birth before the 37th week of pregnancy.",
      answer: "Premature",
    },
    {
      question:
        "What is the condition that causes the lung to collapse as a result of air accumulation between the lung membranes and requires emergency intervention?",
      answer: "Pneumothorax",
    },
    {
      question:
        "What is the membrane-lined space located behind the nose and mouth and connecting them to the esophagus?",
      answer: "Pharynx",
    },
    {
      question:
        "What is a skin disease characterized by irregular pigmentation, thinning and increased vascular appearance on the skin?",
      answer: "Poikiloderma",
    },
    {
      question:
        "..... ovary syndrome is a disease characterized by the formation of many small cysts in the ovaries, hormonal imbalance and menstrual irregularities.",
      answer: "Polycystic",
    },
    {
      question:
        "..... kidney disease is a genetic disease in which kidney functions are impaired by the formation of many cystic structures in the kidneys.",
      answer: "Polycystic",
    },
    {
      question:
        "BWhat is the nerve disease that develops as a result of more than one peripheral nerve being affected and presents with symptoms such as weakness and loss of sensation?",
      answer: "Polyneuropathy",
    },
    {
      question:
        "..... vera is a disease in which the blood thickens and the risk of vascular occlusion increases as a result of excessive red blood cell production in the bone marrow.",
      answer: "Polycythemia",
    },
    {
      question:
        "What is an autoimmune muscle disease characterized by muscle inflammation, causing muscle weakness and pain?",
      answer: "Polymyositis",
    },
    {
      question:
        "What is the rheumatic disease table with simultaneous inflammation in more than one joint?",
      answer: "Polyarthritis",
    },
    {
      question:
        "What is the infectious disease that causes paralysis in children and develops as a result of poliovirus infection?",
      answer: "Polio",
    },
    {
      question:
        "..... nodosa is a vascular disease that causes inflammation of medium and small arteries and can cause multiple organ involvement.",
      answer: "Polyarteritis",
    },
    {
      question:
        "..... hypertension is a disease that progresses with esophageal varices and acid formation as a result of increased venous pressure coming to the liver.",
      answer: "Portal",
    },
    {
      question:
        "..... vein thrombosis is a serious vascular disease that develops as a result of the blockage of the vein carrying blood to the liver by a clot.",
      answer: "Portal",
    },
  ],
  Q: [
    {
      question:
        "De ….. thyroiditis, one of the thyroid diseases, usually occurs after a viral infection, is accompanied by painful thyroid gland enlargement and can initially cause thyrotoxicosis followed by a period of hypothyroidism.",
      answer: "Quervain",
    },
  ],
  R: [
    {
      question:
        "What is the name of the malignant soft tissue tumor that originates from striated muscles and is common in children?",
      answer: "Rhabdomyosarcoma",
    },
    {
      question:
        "What is the condition that causes pain and loss of sensation due to pressure or damage to the nerve roots coming out of the spinal cord?",
      answer: "Radiculopathy",
    },
    {
      question:
        "What is the disease that develops as a result of the nasal mucosa's response to allergens and is accompanied by sneezing and runny nose?",
      answer: "Rhinitis",
    },
    {
      question:
        "What is a viral infection that can be dangerous during pregnancy and is accompanied by mild fever, rash and swollen lymph nodes?",
      answer: "Rubella",
    },
    {
      question:
        "What is the vascular disease that causes white, blue, red color changes and blood flow disorders in the fingers due to cold or stress?",
      answer: "Raynaud",
    },
    {
      question:
        "What is the name of the phenomenon of vascular spasm that develops secondary to another disease and is accompanied by a color change in the fingers due to cold?",
      answer: "Raynaud",
    },
    {
      question:
        "..... hypoglycemia is a condition that occurs when blood sugar levels drop abnormally due to excessive insulin secretion after a meal.",
      answer: "Reactive",
    },
    {
      question:
        "What is the disease that causes symptoms such as heartburn and difficulty swallowing as a result of stomach acid leaking back into the esophagus?",
      answer: "Reflux",
    },
    {
      question:
        "..... artery stenosis is a disease that causes high blood pressure and loss of kidney function due to narrowing of the artery that carries blood to the kidney.",
      answer: "Renal",
    },
    {
      question:
        "The most common type of malignant tumor developing in the kidneys is ….. cell carcinoma.",
      answer: "Renal",
    },
    {
      question:
        "..... acidosis is a breathing disorder that occurs when the blood becomes acidic due to the accumulation of carbon dioxide in the body.",
      answer: "Respiratory",
    },
    {
      question:
        "..... alkalosis is a condition that develops when the carbon dioxide level in the blood decreases as a result of excessive breathing.",
      answer: "Respiratory",
    },
    {
      question:
        "..... distress syndrome is a syndrome that occurs in newborns with severe respiratory failure due to inadequate lung development.",
      answer: "Respiratory",
    },
    {
      question:
        "..... pigmentosa is a hereditary disease that causes night blindness and vision loss due to progressive degeneration of retinal cells.",
      answer: "Retinitis",
    },
    {
      question:
        "What is eye cancer, which develops as a malignant tumor of the retina in childhood and is usually of genetic origin?",
      answer: "Retinoblastoma",
    },
    {
      question:
        "What is the general name given to diseases that cause vision impairment as a result of damage to the retina?",
      answer: "Retinopathy",
    },
    {
      question:
        "What is the circulatory disorder that occurs with color change, numbness and pain in the fingers due to cold exposure?",
      answer: "Raynaud",
    },
    {
      question:
        "What is the rare but serious syndrome that develops after viral infections in children and causes swelling in the liver and brain?",
      answer: "Reye",
    },
    {
      question:
        "What is the serious condition that occurs due to the rapid breakdown of muscle tissue, resulting in protein release into the blood and the risk of kidney failure?",
      answer: "Rhabdomyolyse",
    },
    {
      question:
        "What is the disease that causes softening and deformities in bones due to vitamin D deficiency in children?",
      answer: "Rickets",
    },
    {
      question:
        "..... arthritis is a chronic autoimmune disease characterized by pain, swelling and limited movement in the joints.",
      answer: "Rheumatoid",
    },
  ],
  S: [
    {
      question:
        "What is the disease that causes hip and back pain as a result of inflammation of the sacroiliac joints?",
      answer: "Sacroiliitis",
    },
    {
      question:
        "Thyroid storm is a thyroid crisis that occurs with severe symptoms such as fever, tachycardia and changes in consciousness due to excessive increase in thyroid hormones.",
      answer: "Storm",
    },
    {
      question:
        "What is the general name given to malignant tumors originating from connective tissues such as bone, muscle and fat?",
      answer: "Sarcoma",
    },
    {
      question:
        "What are the generally benign tumors originating from the nerve sheath called?",
      answer: "Schwannoma",
    },
    {
      question:
        "What is a life-threatening condition in which the body over-responds to infection, causing organ dysfunction?",
      answer: "Sepsis",
    },
    {
      question:
        "Septic ….. is a serious emergency condition that occurs when blood pressure drops dramatically and organ failure occurs due to infection.",
      answer: "Shock",
    },
    {
      question:
        "What is the physical or mental feature that is considered a symptom of a disease, especially one that is clearly visible to the patient?",
      answer: "Symptom",
    },
    {
      question:
        "What is the name given to structural diseases of crescent-shaped heart valves such as the aortic and pulmonary valves?",
      answer: "Semilunar",
    },
    {
      question:
        "What is the condition that occurs with a short-term loss of consciousness due to a temporary decrease in blood flow to the brain?",
      answer: "Syncope",
    },
    {
      question:
        "What is a chronic sexually transmitted infectious disease caused by the bacterium Treponema pallidum?",
      answer: "Syphilis",
    },
    {
      question:
        "What is the disease that develops with infection of the nose and sinus cavities and progresses with headache and nasal congestion?",
      answer: "Sinusitis",
    },
    {
      question:
        "What is the name of the rhythm in which the heart rhythm is normal?",
      answer: "Sinus",
    },
    {
      question:
        "What is the name given to the condition in which the spleen grows and increases in mass?",
      answer: "Splenomegaly",
    },
    {
      question:
        "Acute ischemic ….. is a neurological emergency that occurs when blood flow to the brain is suddenly interrupted.",
      answer: "Stroke",
    },
    {
      question:
        "What is the disease characterized by the formation of fluid-filled cystic spaces in the spinal cord and leading to progressive neurological deficits?",
      answer: "Syringomyelia",
    },
    {
      question:
        "Systemic ….. is an autoimmune disease characterized by abnormal hardening of connective tissue and fibrosis of the skin and internal organs.",
      answer: "Sclerosis",
    },
    {
      question:
        "What is the skeletal system disease that is characterized by the spine curving sideways and causing posture disorder?",
      answer: "Scoliosis",
    },
    {
      question:
        "What is a serious infection that occurs when a bacterial infection spreads to the blood and can lead to multiple organ failure?",
      answer: "Sepsis",
    },
    {
      question:
        "What is the sleep disorder characterized by the behavior of getting up and walking involuntarily during sleep?",
      answer: "Somnambulism",
    },
    {
      question:
        "Spinal ….. is a disease that causes pain and difficulty walking by putting pressure on the spinal cord and nerves as a result of the narrowing of the spinal canal.",
      answer: "Stenosis",
    },
    {
      question:
        "What is the rheumatic disease that develops as a result of inflammation of the spine and causes back pain and limited movement?",
      answer: "Spondylitis",
    },
    {
      question:
        "What is the spinal disease that causes pressure on the spinal cord and nerve roots as a result of the vertebrae sliding over each other?",
      answer: "Spondylolisthesis",
    },
    {
      question:
        "What is the name given to calcification that develops in the spine due to age or degenerative changes?",
      answer: "Spondylosis",
    },
    {
      question:
        "..... Johnson syndrome is a life-threatening disease that occurs with severe skin rash, blistering and mucosal lesions due to drugs or infection.",
      answer: "Stevens",
    },
    {
      question:
        "What is the disease that causes pain, redness and wounds as a result of inflammation of the oral mucosa due to infection or irritation?",
      answer: "Stomatitis",
    },
    {
      question:
        "What is the name given to infected kidney stones containing magnesium and ammonium phosphate in the urinary tract?",
      answer: "Struvite",
    },
    {
      question:
        "What is the type of serious bleeding that occurs between the meninges of the brain and causes sudden headache, loss of consciousness and neurological symptoms?",
      answer: "Subarachnoid",
    },
    {
      question:
        "What is the condition that occurs as a result of fat accumulation in liver cells and can progress to cirrhosis?",
      answer: "Steatosis",
    },
    {
      question:
        "What is the bleeding that occurs as a result of blood accumulation under the dura mater on the surface of the brain and occurs after a head trauma?",
      answer: "Subdural",
    },
    {
      question:
        "What is hypothyroidism, a thyroid disease in which the thyroid hormone levels in the blood are low and the TSH level is slightly high without any obvious symptoms?",
      answer: "Subclinical",
    },
  ],
  T: [
    {
      question:
        "What is a rare vascular disease characterized by inflammation of the large vessels, especially seen in young women?",
      answer: "Takayasu",
    },
    {
      question:
        "What is the hereditary blood disease that causes anemia as a result of the body not producing enough hemoglobin?",
      answer: "Thalassemia",
    },
    {
      question:
        "What is the name given to the arrhythmia that occurs when the heart beats more than normal?",
      answer: "Tachycardia",
    },
    {
      question:
        "..... tunnel syndrome is a syndrome that causes pain, numbness and tingling as a result of compression of the tibial nerve around the ankle.",
      answer: "Tarsal",
    },
    {
      question:
        "..... Sachs disease is a genetic disease characterized by damage to nerve cells due to ganglioside accumulation in the brain.",
      answer: "Tay",
    },
    {
      question:
        "What is the name given to tonsillitis that causes pain in the throat, fever and difficulty swallowing?",
      answer: "Tonsillitis",
    },
    {
      question:
        "What is a hereditary blood disease caused by the deficiency of alpha globin chains?",
      answer: "Thalassemia",
    },
    {
      question:
        "What is a hereditary blood disease that develops as a result of a genetic defect in the beta globin chain?",
      answer: "Thalassemia",
    },
    {
      question:
        "What is the condition that develops as a result of inflammation of tendons due to overuse or injury?",
      answer: "Tendonitis",
    },
    {
      question:
        "What is the infectious disease that causes muscle spasms and stiffness due to the toxin produced by the bacteria Clostridium tetani?",
      answer: "Tetanus",
    },
    {
      question:
        "What is the name given to the formation of clots in the veins as a result of increased tendency for blood clotting?",
      answer: "Thrombosis",
    },
    {
      question:
        "The group of diseases caused by abnormal cell growth originating from the placenta during pregnancy is called gestational ….. diseases.",
      answer: "Trophoblastic",
    },
    {
      question:
        "What is the condition characterized by involuntary contractions and cramps in the muscles due to calcium deficiency?",
      answer: "Tetany",
    },
    {
      question:
        "What is an auditory perception disorder characterized by hearing sounds such as ringing, buzzing or humming in the ears?",
      answer: "Tinnitus",
    },
    {
      question:
        "What is the disease that causes inflammation of the thyroid gland, causing enlargement of the gland, pain and hormone imbalance?",
      answer: "Thyroiditis",
    },
    {
      question:
        "What is the emergency situation in which an organ rotates around itself, cutting off blood flow and causing pain?",
      answer: "Torsion",
    },
    {
      question:
        "What is the emergency situation in which excessive fluid accumulation in the pericardium prevents the filling of the heart and causes serious circulatory disorder?",
      answer: "Tamponade",
    },
    {
      question:
        "..... megacolon is a serious complication of inflammatory bowel disease, which is characterized by excessive dilation of the large intestine and severe infection.",
      answer: "Toxic",
    },
    {
      question:
        "What is the name given to the inflammation that develops in the tendons around the knee due to overuse or injury?",
      answer: "Tendonitis",
    },
    {
      question:
        "What is the disease caused by the Toxoplasma gondii parasite that causes serious infection, especially in immunocompromised individuals?",
      answer: "Toxoplasmosis",
    },
    {
      question:
        "..... outlet syndrome is a condition that causes pain, numbness and weakness due to compression of the nerves and vessels going to the arms and chest.",
      answer: "Thoracic",
    },
    {
      question:
        "What is the name of the partial bone fracture that occurs in children and adolescents, with cracking on only one side of the bone?",
      answer: "Torus",
    },
    {
      question:
        "What is the congenital or acquired disease that causes the trachea to collapse as a result of weakening and causing difficulty breathing?",
      answer: "Tracheomalacia",
    },
    {
      question:
        "What is a respiratory tract infection characterized by inflammation of the trachea and bronchi, cough and expectoration?",
      answer: "Tracheobronchitis",
    },
    {
      question:
        "What is the name given to the tremors that occur with involuntary, rhythmic muscle contractions in the hands, head or other parts of the body?",
      answer: "Tremor",
    },
    {
      question:
        "..... neuralgia is a nerve disease that causes severe facial pain and is accompanied by attacks of pain in the fifth branch of the facial nerve.",
      answer: "Trigeminal",
    },
    {
      question:
        "What is the vascular disease that develops as a result of blood clot formation in the superficial veins and is accompanied by pain, redness and swelling?",
      answer: "Thrombophlebitis",
    },
    {
      question:
        "What is the name given to the situation where a clot forms in the blood vessels and this clot moves to another vascular bed and causes an obstruction?",
      answer: "Thromboembolism",
    },
    {
      question:
        "What is the blood disease in which the risk of blood clotting increases as the number of platelets in the blood increases above normal?",
      answer: "Thrombocytosis",
    },
    {
      question:
        "What is the blood disease that causes an increased risk of bleeding due to a decrease in the number of platelets in the blood, accompanied by petechiae and bruising?",
      answer: "Thrombocytopenia",
    },
    {
      question:
        "What is the infectious disease caused by the Mycobacterium type bacteria that can affect many organs, especially the lungs?",
      answer: "Tuberculosis",
    },
  ],
  U: [
    {
      question:
        "..... colitis is a chronic inflammatory bowel disease that causes bloody diarrhea and abdominal pain due to inflammation of the large intestine.",
      answer: "Ulcerative",
    },
    {
      question:
        "The syndrome, usually seen in children and characterized by acute renal failure, low platelet count and hemolytic anemia, is called hemolytic ….. syndrome.",
      answer: "Uremic",
    },
    {
      question:
        "What is the condition that occurs when the inflammatory disease develops in the inner part of the eye and the uvea layer is affected?",
      answer: "Uveitis",
    },
    {
      question:
        "What is the term used to describe something that is related to, occurs on, or affects only one side of an organ or structure or body?",
      answer: "Unilateral",
    },
    {
      question:
        "What is the disease that causes burning, frequent urination and discharge as a result of bacterial infection of the urethra?",
      answer: "Uretrit",
    },
    {
      question:
        "What is the name of the allergic reaction that develops suddenly on the skin with itchy, raised and red rashes?",
      answer: "Urticaria",
    },
  ],
  V: [
    {
      question: "What is the female reproductive organ?",
      answer: "Vagina",
    },
    {
      question:
        "What is the disease that causes discharge, itching and pain as a result of inflammation of the vaginal mucosa due to infection?",
      answer: "Vaginitis",
    },
    {
      question:
        "What is the disease that causes pain, swelling and visible veins in the legs as a result of the expansion and deformation of the veins?",
      answer: "Varicose",
    },
    {
      question:
        "Erkeklerde testis toplardamarlarının sonucu sonuç testiste ağrı ve kısırlık riskiyle seyreden damar hastalığı nedir?",
      answer: "Varicocele",
    },
    {
      question:
        "Chickenpox is a childhood infectious disease caused by the ….. zoster virus, with itchy rashes.",
      answer: "Varicella",
    },
    {
      question:
        "What is the name of the group of diseases that occur when blood flow to the organs is disrupted due to inflammation of the blood vessels?",
      answer: "Vasculitis",
    },

    {
      question:
        "..... insufficiency is a vascular disease that causes swelling, pain and varicose veins in the legs due to inadequate functioning of the vein valves.",
      answer: "Venous",
    },
    {
      question:
        "Benign skin lesions that develop as a result of Human Papilloma Virus infection, known as warts on the skin, are called ….. vulgaris.",
      answer: "Verruca",
    },
    {
      question:
        "What is an infectious agent that usually consists of a nucleic acid molecule within a protein coat, is too small to be seen with a light microscope, and can only multiply within the living cells of a host?",
      answer: "Virus",
    },
    {
      question:
        "What is the condition that develops due to inner ear or nervous system diseases and progresses with falls or dizziness?",
      answer: "Vertigo",
    },
    {
      question:
        "What is an autoimmune skin disease characterized by the formation of irregular white spots as a result of the loss of pigment cells in the skin?",
      answer: "Vitiligo",
    },
  ],
  W: [
    {
      question:
        "What do we call lesions in the genital area caused by the HPV virus?",
      answer: "Wart",
    },
  ],
  X: [
    {
      question:
        "Fragile ….. syndrome is a genetic disease caused by an increase in CGG repeats on the X chromosome, which is characterized by developmental delay and mental retardation.",
      answer: "X",
    },
  ],
  Y: [
    {
      question:
        "What is a type of bacteria that causes diseases such as plague?",
      answer: "Yersinia",
    },
    {
      question:
        "What is the name of the sac that provides nutrients for embryo development?",
      answer: "Yolk",
    },
    {
      question:
        "What is an alkaloid drug that affects blood pressure and libido",
      answer: "Yohimbine",
    },
  ],
  Z: [
    {
      question:
        "What is the disease that causes painful skin rashes and nerve pain when the Varicella zoster virus infects the nerves?",
      answer: "Zona",
    },
    {
      question:
        "What is the general name given to infectious diseases that can pass from animals to humans?",
      answer: "Zoonotic",
    },
    {
      question:
        "..... Ellison Syndrome is a rare disease that causes excessive production of the hormone gastrin, which causes increased stomach acid and peptic ulcers.",
      answer: "Zollinger",
    },
  ],
};

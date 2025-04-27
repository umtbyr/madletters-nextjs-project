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
        "Karın ana atardamarının duvarında zayıflama ve balonlaşma ile karakterize hastalık nedir?",
      answer: "Abdominal aort anevrizması",
    },
    {
      question:
        "Karın bölgesine alınan darbe sonucu oluşan yaralanmaların genel adı nedir?",
      answer: "Abdominal travma",
    },
    {
      question:
        "Gebeliğin 20. haftasından önce gebelik ürününün rahim dışına atılması olayına ne ad verilir?",
      answer: "Abortus",
    },
    {
      question:
        "Vücutta iltihap birikmesi sonucu oluşan irin dolu boşluklara ne ad verilir?",
      answer: "Abse",
    },
    {
      question:
        "Uzun süre açlık sonrası kanda şeker seviyesinin düşmesine ne ad verilir?",
      answer: "Açlık hipoglisemisi",
    },
    {
      question:
        "Göz içi basıncının arttığı ve genellikle yavaş ilerleyen bir glokom tipi nedir?",
      answer: "Açık açılı glokom",
    },
    {
      question:
        "Uzun süren açlık sonucu vücutta keton cisimciklerinin artması durumuna ne ad verilir?",
      answer: "Açlık ketozu",
    },
    {
      question:
        "Pankreasta yer alan ve insülin salgılayan hücrelerden kaynaklanan tümöre ne ad verilir?",
      answer: "Adacık hücre tümörü",
    },
    {
      question: "Böbreküstü bezlerinde gelişen iyi huylu tümöre ne ad verilir?",
      answer: "Adrenal adenom",
    },
    {
      question:
        "Böbreküstü bezlerinde gelişen kötü huylu tümöre ne ad verilir?",
      answer: "Adrenal karsinom",
    },
    {
      question:
        "Böbreküstü bezlerinin yeterli hormon salgılayamaması durumuna ne ad verilir?",
      answer: "Adrenal yetmezlik",
    },
    {
      question: "Ağız boşluğunda ortaya çıkan kötü huylu tümöre ne ad verilir?",
      answer: "Ağız kanseri",
    },
    {
      question:
        "İdrar yaparken ağrı ve sık idrara çıkma ile karakterize mesane hastalığı nedir?",
      answer: "Ağrılı mesane sendromu",
    },
    {
      question:
        "Kemik iliğinde granülosit üretiminin ciddi şekilde azalması ile oluşan hastalığın adı nedir?",
      answer: "Agranülositoz",
    },
    {
      question:
        "Yutma güçlüğü ve yemek borusunun alt ucundaki kasların gevşememesi ile karakterize hastalık nedir?",
      answer: "Akalazya",
    },
    {
      question:
        "Lösemi türlerinden biri olup, belirli bir hücre türünün hızla çoğalmasıyla seyreden hastalık nedir?",
      answer: "Akut lösemi",
    },
    {
      question:
        "Akciğerde pıhtı oluşması veya pıhtının dolaşım yoluyla gelerek tıkanıklığa yol açtığı durum nedir?",
      answer: "Akciğer embolisi",
    },
    {
      question:
        "Akciğer dokusunda kötü huylu hücrelerin kontrolsüz çoğalmasıyla oluşan hastalığa ne ad verilir?",
      answer: "Akciğer kanseri",
    },
    {
      question:
        "Akciğer dokusunun elastikiyetini kaybederek sertleşmesi sonucu solunum güçlüğüne yol açan hastalık nedir?",
      answer: "Akciğer fibrozisi",
    },
    {
      question:
        "Akciğerlerde sıvı birikmesi sonucu ortaya çıkan ve genellikle kalp yetmezliğine bağlı gelişen durum nedir?",
      answer: "Akciğer ödemi",
    },
    {
      question:
        "Alt solunum yollarında enfeksiyon sonucu oluşan ve öksürük, balgam ile seyreden hastalık nedir?",
      answer: "Akciğer enfeksiyonu",
    },
    {
      question:
        "Ergenlik döneminde sık görülen, ciltte siyah nokta ve iltihaplı sivilcelerle karakterize hastalık nedir?",
      answer: "Akne vulgaris",
    },
    {
      question:
        "Kıkırdak ve kemik gelişimini etkileyen genetik kaynaklı cücelik hastalığına ne ad verilir?",
      answer: "Akondroplazi",
    },
    {
      question:
        "Karın sağ alt bölgesinde şiddetli ağrıya yol açan, apendiksin iltihaplanması ile oluşan hastalık nedir?",
      answer: "Akut apandisit",
    },
    {
      question:
        "Ani başlangıçlı ve kısa sürede iyileşen bronş iltihabına ne ad verilir?",
      answer: "Akut bronşit",
    },
    {
      question:
        "Mide zarının ani gelişen iltihaplanmasıyla ortaya çıkan sindirim sistemi hastalığı nedir?",
      answer: "Akut gastrit",
    },
    {
      question:
        "Böbrek glomerüllerinin iltihaplanmasıyla oluşan ve ani başlayan hastalık nedir?",
      answer: "Akut glomerülonefrit",
    },
    {
      question:
        "Karaciğerde ani gelişen ve genellikle viral nedenlerle oluşan iltihaplı hastalık nedir?",
      answer: "Akut hepatit",
    },
    {
      question:
        "Beyne giden kan akımının ani şekilde kesilmesiyle ortaya çıkan nörolojik acil durum nedir?",
      answer: "Akut iskemik inme",
    },
    {
      question:
        "Kalbi besleyen koroner damarlarda ani tıkanıklık sonucu oluşan acil sendrom nedir?",
      answer: "Akut koroner sendrom",
    },
    {
      question:
        "Çocukluk çağında görülen ve kemik iliğinde lenfoblast adı verilen hücrelerin anormal çoğalmasıyla karakterize lösemi türü nedir?",
      answer: "Akut lenfoblastik lösemi",
    },
    {
      question:
        "Kemik iliğinde miyeloid hücrelerin kontrolsüz çoğalmasıyla ortaya çıkan ani başlangıçlı kan kanseri nedir?",
      answer: "Akut miyeloid lösemi",
    },
    {
      question:
        "Orta kulakta gelişen ve ağrı, ateş gibi belirtilerle seyreden ani iltihabi hastalık nedir?",
      answer: "Akut otitis media",
    },
    {
      question:
        "Pankreasın ani iltihaplanmasıyla oluşan ve karın ağrısı, bulantı gibi semptomlarla seyreden hastalık nedir?",
      answer: "Akut pankreatit",
    },
    {
      question:
        "Kalbi çevreleyen zarın ani iltihaplanmasıyla oluşan hastalığın adı nedir?",
      answer: "Akut perikardit",
    },
    {
      question:
        "Beta hemolitik streptokok enfeksiyonu sonrası gelişen, ateş ve eklem ağrılarıyla seyreden hastalık nedir?",
      answer: "Akut romatizmal ateş",
    },
    {
      question:
        "Boğazda ağrı, ateş ve yutma güçlüğü ile seyreden bademcik iltihabına ne ad verilir?",
      answer: "Akut tonsillit",
    },
    {
      question:
        "Solunum yollarında alerjene karşı gelişen aşırı duyarlılık sonucu oluşan ve nefes darlığı ile seyreden hastalık nedir?",
      answer: "Alerjik astım",
    },
    {
      question:
        "Burun mukozasının alerjenlere karşı verdiği yanıt sonucu gelişen, hapşırma ve burun akıntısıyla seyreden hastalık nedir?",
      answer: "Alerjik rinit",
    },
    {
      question:
        "Alfa globin zincirlerinin eksikliği ile oluşan, kalıtsal bir kan hastalığı nedir?",
      answer: "Alfa talasemi",
    },
    {
      question:
        "Aşırı alkol tüketimine bağlı olarak karaciğerde gelişen iltihabi hastalığın adı nedir?",
      answer: "Alkolik hepatit",
    },
    {
      question:
        "Hafıza kaybı ve bilişsel yeteneklerde ilerleyici azalma ile karakterize nörodejeneratif hastalık nedir?",
      answer: "Alzheimer hastalığı",
    },
    {
      question:
        "Akciğerlerdeki alveollerin elastikiyet kaybı ve hava hapsi ile karakterize kronik solunum hastalığı nedir?",
      answer: "Amfizem",
    },
    {
      question:
        "Vücutta anormal protein birikimi sonucu organlarda işlev bozukluğuna yol açan hastalık nedir?",
      answer: "Amiloidoz",
    },
    {
      question:
        "Hamilelik sırasında amniyotik sıvının anne kan dolaşımına geçerek ani ve ciddi komplikasyonlara yol açtığı durum nedir?",
      answer: "Amniyotik sıvı embolisi",
    },
    {
      question:
        "Kandaki kırmızı kan hücrelerinin veya hemoglobinin normalin altında olmasıyla karakterize hastalık nedir?",
      answer: "Anemi",
    },
    {
      question:
        "Beynin büyük bölümünün doğuştan gelişmemesi ile sonuçlanan ciddi doğumsal anomali nedir?",
      answer: "Anencefali",
    },
    {
      question:
        "Göğüs ağrısı ile seyreden ve kalp kasına giden kan akımının azalması sonucu oluşan durum nedir?",
      answer: "Anjina pektoris",
    },
    {
      question:
        "Omurganın iltihaplı romatizmal hastalığı olup, omurga ve sakroiliak eklemlerde sertleşmeye neden olan hastalık nedir?",
      answer: "Ankilozan spondilit",
    },
    {
      question:
        "Yemek yememe ve aşırı kilo kaybı ile karakterize ciddi bir yeme bozukluğu nedir?",
      answer: "Anoreksiya nevroza",
    },
  ],
  B: [
    {
      question:
        "Boğazda ağrı, yutkunma güçlüğü ve ateş ile seyreden bademcik iltihabına ne ad verilir?",
      answer: "Bademcik iltihabı",
    },
    {
      question:
        "Beyin ve omuriliği çevreleyen zarların bakteriyel enfeksiyonu sonucu oluşan ciddi hastalık nedir?",
      answer: "Bakteriyel menenjit",
    },
    {
      question:
        "Akciğerlerde bakteriyel enfeksiyon sonucu gelişen ve öksürük, balgam ile seyreden hastalık nedir?",
      answer: "Bakteriyel pnömoni",
    },
    {
      question:
        "Bağırsaklarda Balantidium coli parazitinin neden olduğu protozoal enfeksiyona ne ad verilir?",
      answer: "Balantidiyazis",
    },
    {
      question:
        "Uzun süreli gastroözofageal reflüye bağlı olarak yemek borusunda gelişen prekanseröz durum nedir?",
      answer: "Barrett özofagusu",
    },
    {
      question:
        "Vajina girişinde yer alan Bartolin bezinde iltihaplanma ve irin birikimi sonucu oluşan hastalık nedir?",
      answer: "Bartolin apsesi",
    },
    {
      question:
        "Vajina girişindeki Bartolin bezinin tıkanması sonucu oluşan içi sıvı dolu kistik oluşuma ne ad verilir?",
      answer: "Bartolin kisti",
    },
    {
      question:
        "Ciltte en sık görülen, yavaş büyüyen ve nadiren metastaz yapan deri kanseri türü nedir?",
      answer: "Bazal hücreli karsinom",
    },
    {
      question:
        "Kandaki bazofil adı verilen beyaz kan hücrelerinin sayısının anormal artışıyla karakterize durum nedir?",
      answer: "Bazofili",
    },
    {
      question:
        "Ağız, cilt ve genital bölgelerde tekrarlayan ülserler ve göz iltihabı ile seyreden otoimmün hastalığın adı nedir?",
      answer: "Behçet hastalığı",
    },
    {
      question:
        "Bel bölgesindeki disklerin yer değiştirmesi sonucu sinir sıkışmasına ve ağrıya yol açan duruma ne ad verilir?",
      answer: "Bel fıtığı",
    },
    {
      question:
        "Cinsel yolla bulaşan, Neisseria gonorrhoeae bakterisinin neden olduğu enfeksiyona ne ad verilir?",
      answer: "Belsoğukluğu",
    },
    {
      question:
        "Prostat bezinin yaşla birlikte büyümesi sonucu idrar akımında zayıflama gibi semptomlara yol açan durum nedir?",
      answer: "Benign prostat hiperplazisi",
    },
    {
      question:
        "B1 vitamini eksikliğine bağlı olarak gelişen, sinir sistemi ve kalp hastalıklarıyla seyreden hastalık nedir?",
      answer: "Beriberi",
    },
    {
      question:
        "Beta-globin zincirindeki genetik bozukluk sonucu gelişen kalıtsal bir kan hastalığı nedir?",
      answer: "Beta talasemi",
    },
    {
      question:
        "Parvovirüs B19 enfeksiyonu sonucu çocuklarda görülen ve yüzde kelebek şeklinde döküntü yapan hastalık nedir?",
      answer: "Beşinci hastalık (Parvovirüs B19 enfeksiyonu)",
    },
    {
      question:
        "Beyin dokusunda enfeksiyon sonucu oluşan irin birikimi ile karakterize ciddi hastalığın adı nedir?",
      answer: "Beyin apsesi",
    },
    {
      question:
        "Beyindeki hücrelerin anormal ve kontrolsüz şekilde büyümesiyle oluşan kitleye ne ad verilir?",
      answer: "Beyin tümörü",
    },
    {
      question:
        "Beyin damarlarının yırtılması sonucu beyin içine kan sızmasıyla oluşan hayati tehlike oluşturan durum nedir?",
      answer: "Beyin kanaması",
    },
    {
      question:
        "Beyne kan taşıyan damarların tıkanması sonucu kan akımının kesilmesiyle oluşan hastalık nedir?",
      answer: "Beyin damar tıkanıklığı",
    },
    {
      question:
        "Beyin dokusunda kan akımının durması sonucu oluşan ve kalıcı hasara yol açabilen durum nedir?",
      answer: "Beyin enfarktüsü",
    },
    {
      question:
        "Kafa travması sonrası geçici bilinç kaybı ve beyin fonksiyonlarında bozulma ile seyreden durum nedir?",
      answer: "Beyin sarsıntısı",
    },
    {
      question:
        "Her iki böbrekte idrar akışının engellenmesi sonucu böbreklerde şişme ile seyreden duruma ne ad verilir?",
      answer: "Bilateral hidronefroz",
    },
    {
      question:
        "Safra yollarının hasar görmesi sonucu gelişen ve karaciğer sirozuna yol açan hastalık nedir?",
      answer: "Biliyer siroz",
    },
    {
      question:
        "Depresyon ve mani dönemleriyle seyreden, ruh hali dalgalanmaları gösteren psikiyatrik hastalığın adı nedir?",
      answer: "Bipolar bozukluk",
    },
    {
      question:
        "Doku örneği alımı sonrası gelişen lokal enfeksiyon durumuna ne ad verilir?",
      answer: "Biyopsi yerinde enfeksiyon",
    },
    {
      question:
        "Blastomyces dermatitidis adlı mantarın neden olduğu nadir görülen mantar enfeksiyonuna ne ad verilir?",
      answer: "Blastomikozis",
    },
    {
      question:
        "Göz kapaklarının kenarında iltihaplanma sonucu gelişen rahatsızlığa ne ad verilir?",
      answer: "Blefarit",
    },
    {
      question:
        "Göz kapaklarında istemsiz kasılmalarla seyreden nörolojik hastalığın adı nedir?",
      answer: "Blefarospazm",
    },
    {
      question:
        "Bordetella pertussis bakterisinin neden olduğu, şiddetli ve nöbetler halinde öksürükle seyreden bulaşıcı hastalık nedir?",
      answer: "Boğmaca",
    },
    {
      question:
        "Nefes yolunun tıkanması sonucu oksijen yetersizliği ve yaşamı tehdit eden duruma ne ad verilir?",
      answer: "Boğulma",
    },
    {
      question:
        "Clostridium botulinum toksini ile oluşan ve kaslarda felce yol açan ciddi zehirlenme durumu nedir?",
      answer: "Botulizm",
    },
    {
      question:
        "Boyun omurlarındaki disklerin kayması veya fıtıklaşması sonucu sinir sıkışmasına yol açan hastalık nedir?",
      answer: "Boyun fıtığı",
    },
    {
      question:
        "Boyun bölgesine alınan darbeler veya kazalar sonucu oluşan travmatik yaralanmalara ne ad verilir?",
      answer: "Boyun travması",
    },
    {
      question:
        "Kol sinir ağı olarak bilinen brakiyal pleksusun yaralanmasıyla oluşan sinirsel hasarın adı nedir?",
      answer: "Brakiyal pleksus yaralanması",
    },
    {
      question:
        "Kalp atım hızının dakikada 60’ın altına düşmesiyle karakterize ritim bozukluğu nedir?",
      answer: "Bradikardi",
    },
    {
      question:
        "Kanser tedavisinde uygulanan brakiterapinin ardından ortaya çıkabilen yan etkilere ne ad verilir?",
      answer: "Brakiterapi yan etkileri",
    },
    {
      question:
        "Brucella türü bakterilerin neden olduğu, ateş, terleme ve kas ağrılarıyla seyreden enfeksiyon hastalığı nedir?",
      answer: "Bruselloz",
    },
    {
      question:
        "Bebeklerde ve küçük çocuklarda solunum yollarını etkileyen viral enfeksiyona ne ad verilir?",
      answer: "Bronşiolit",
    },
    {
      question:
        "Bronşların iltihaplanması sonucu gelişen ve öksürük, balgam ile seyreden solunum yolu enfeksiyonu nedir?",
      answer: "Bronşit",
    },
    {
      question:
        "Bronşların yapısal olarak genişlemesi ve kalıcı hasarla sonuçlanan solunum yolu hastalığına ne ad verilir?",
      answer: "Bronşiektazi",
    },
    {
      question:
        "Bronşlarda aşırı hassasiyet ve daralma ile seyreden kronik solunum hastalığının adı nedir?",
      answer: "Bronşiyal astım",
    },
    {
      question:
        "Kalpte ani ritim bozukluğu ve ölüm riski taşıyan genetik kaynaklı sendroma ne ad verilir?",
      answer: "Brugada sendromu",
    },
    {
      question:
        "Brusella enfeksiyonunun eklemleri tutarak iltihaplanmaya yol açtığı hastalık nedir?",
      answer: "Bruselloz artriti",
    },
    {
      question:
        "Kontrolsüz yeme atakları ve ardından kusma veya aşırı egzersizle kilo kontrolü çabasıyla karakterize yeme bozukluğu nedir?",
      answer: "Bulimia nevroza",
    },
    {
      question:
        "Böbrekte enfeksiyon sonucu oluşan ve irin birikimi ile seyreden hastalık nedir?",
      answer: "Böbrek apsesi",
    },
    {
      question:
        "Böbrek dokusunda kötü huylu hücrelerin anormal büyümesi sonucu oluşan kanser türü nedir?",
      answer: "Böbrek kanseri",
    },
    {
      question:
        "İdrar yollarında oluşan kristal yapılar nedeniyle gelişen ve şiddetli ağrıya neden olan hastalık nedir?",
      answer: "Böbrek taşı",
    },
    {
      question:
        "Böbreklerin yeterli şekilde çalışamaması ve vücutta atık maddelerin birikmesiyle oluşan hastalık nedir?",
      answer: "Böbrek yetmezliği",
    },
    {
      question:
        "Özellikle çocuklarda görülen, hızlı büyüyen ve agresif seyreden bir lenf bezi kanseri türü nedir?",
      answer: "Burkitt lenfoması",
    },
    {
      question:
        "Sigara kullanımıyla ilişkili, küçük ve orta çaplı damarların iltihaplanması sonucu gelişen damar hastalığı nedir?",
      answer: "Buerger hastalığı",
    },
    {
      question:
        "Soğuk hava veya doğrudan buz teması sonucu ciltte ve alttaki dokularda oluşan donma hasarına ne ad verilir?",
      answer: "Buz yanığı",
    },
    {
      question:
        "Büyümeyi ve gelişmeyi sağlayan hormonun yetersiz salgılanmasıyla oluşan endokrin bozukluk nedir?",
      answer: "Büyüme hormonu eksikliği",
    },
  ],
  C: [
    {
      question:
        "İshal ve mide krampları ile seyreden, Campylobacter bakterisinin neden olduğu enfeksiyona ne ad verilir?",
      answer: "Campylobacter enfeksiyonu",
    },
    {
      question:
        "Vücudun çeşitli bölgelerinde mantar benzeri enfeksiyon oluşturan Candida türlerinin neden olduğu hastalık nedir?",
      answer: "Candida enfeksiyonu",
    },
    {
      question:
        "El bileğinden geçen sinirin sıkışmasıyla elde uyuşma ve ağrıya neden olan hastalık nedir?",
      answer: "Carpal tunnel sendromu",
    },
    {
      question:
        "Kıkırdak dokusundan kaynaklanan ve genellikle iyi huylu olan tümörlere ne ad verilir?",
      answer: "Cartilage tümörleri",
    },
    {
      question:
        "Buğday, arpa ve çavdardaki gluten proteinine karşı bağırsakta hasar oluşmasıyla gelişen otoimmün hastalığın adı nedir?",
      answer: "Celiac hastalığı (Çölyak hastalığı)",
    },
    {
      question:
        "Gözde ana toplardamarın tıkanması sonucu ani görme kaybı ile seyreden durum nedir?",
      answer: "Central retinal ven tıkanıklığı",
    },
    {
      question:
        "Boyun omurlarındaki disklerin fıtıklaşarak sinirlere baskı yapmasıyla oluşan hastalığa ne ad verilir?",
      answer: "Cervikal disk hernisi",
    },
    {
      question:
        "Rahim ağzında iltihap oluşmasıyla seyreden jinekolojik enfeksiyonun adı nedir?",
      answer: "Cervisit",
    },
    {
      question:
        "Trypanosoma cruzi parazitinin neden olduğu, Güney Amerika’da sık görülen enfeksiyon hastalığı nedir?",
      answer: "Chagas hastalığı",
    },
    {
      question:
        "Aedes sivrisinekleri ile bulaşan, ateş ve eklem ağrısıyla seyreden viral enfeksiyonun adı nedir?",
      answer: "Chikungunya enfeksiyonu",
    },
    {
      question:
        "Cinsel yolla bulaşan ve idrar yollarında enfeksiyona neden olan bakteriyel hastalık nedir?",
      answer: "Chlamydia enfeksiyonu",
    },
    {
      question:
        "Safra kanalında taş oluşmasıyla gelişen ve safra akımını engelleyebilen duruma ne ad verilir?",
      answer: "Choledocholithiasis (Safra kanalı taşı)",
    },
    {
      question:
        "Orta kulakta anormal deri birikimi ile oluşan ve işitme kaybına yol açabilen hastalık nedir?",
      answer: "Cholesteatoma (Kulak kolesteatomu)",
    },
    {
      question:
        "Safra kesesinde taş oluşumu sonucu gelişen ve sıklıkla karın ağrısına yol açan hastalığın adı nedir?",
      answer: "Cholelithiasis (Safra taşı hastalığı)",
    },
    {
      question:
        "Sindirim sisteminin herhangi bir bölümünü etkileyebilen, inflamatuvar bağırsak hastalığı nedir?",
      answer: "Crohn hastalığı",
    },
    {
      question:
        "Damarların iltihabı ve vücutta aşırı eozinofil artışı ile seyreden nadir görülen otoimmün hastalık nedir?",
      answer: "Churg-Strauss sendromu (Eozinofilik granülomatoz)",
    },
    {
      question:
        "Cilt hücrelerinde anormal çoğalma sonucu gelişen kötü huylu deri kanseri nedir?",
      answer: "Cilt kanseri",
    },
    {
      question:
        "Derinin lenf dokusundan kaynaklanan ve genellikle deri üzerinde kitlelerle seyreden kanser türü nedir?",
      answer: "Cilt lenfoması",
    },
    {
      question:
        "Cilt yüzeyinde mantar enfeksiyonu sonucu kaşıntı, kızarıklık ve pullanma ile seyreden hastalık nedir?",
      answer: "Cilt mantar enfeksiyonu",
    },
    {
      question:
        "Tüberküloz bakterisinin cilt dokusunda enfeksiyona yol açmasıyla oluşan nadir görülen hastalık nedir?",
      answer: "Cilt tüberkülozu",
    },
    {
      question:
        "Antibiyotik kullanımına bağlı olarak bağırsak florasının bozulması sonucu oluşan ciddi enfeksiyon hastalığı nedir?",
      answer: "Clostridium difficile enfeksiyonu",
    },
    {
      question:
        "Kas dokusunda Clostridium bakterisinin neden olduğu ve gaz oluşumu ile karakterize ciddi enfeksiyon nedir?",
      answer: "Clostridial miyonekroz (Gazlı gangren)",
    },
    {
      question:
        "El bileğinde meydana gelen ve radius kemiğinde görülen tipik kırık türü nedir?",
      answer: "Colles kırığı",
    },
    {
      question:
        "Kalın bağırsakta kötü huylu hücrelerin anormal çoğalması sonucu oluşan kanser türü nedir?",
      answer: "Colon kanseri",
    },
    {
      question:
        "Doğuştan kalbin yapısal bozukluklarıyla ortaya çıkan hastalık grubuna ne ad verilir?",
      answer: "Congenital kalp hastalıkları",
    },
    {
      question:
        "Gözün dış zarının iltihaplanması sonucu oluşan ve kızarıklık, sulanma ile seyreden hastalık nedir?",
      answer: "Conjunctivitis (Göz nezlesi)",
    },
    {
      question:
        "Sigara kullanımına bağlı olarak gelişen ve hava yollarında daralmaya yol açan kronik akciğer hastalığı nedir?",
      answer: "COPD (Kronik obstrüktif akciğer hastalığı)",
    },
    {
      question:
        "Akciğer hastalıklarına bağlı olarak kalbin sağ tarafının büyümesiyle karakterize durum nedir?",
      answer: "Cor pulmonale",
    },
    {
      question:
        "Coxsackie virüsünün neden olduğu ve ağız, el ve ayaklarda döküntülerle seyreden viral enfeksiyon nedir?",
      answer: "Coxsackie virüs enfeksiyonu",
    },
    {
      question:
        "Bebeklerde kafa kemiklerinin normalden erken kapanması sonucu şekil bozukluğu ile seyreden durum nedir?",
      answer: "Craniosynostosis (Kafatası kemiklerinin erken kapanması)",
    },
    {
      question:
        "Beyinde süngerimsi dejenerasyon ve hızlı ilerleyen demans ile seyreden nadir nörodejeneratif hastalık nedir?",
      answer: "Creutzfeldt Jakob hastalığı",
    },
    {
      question:
        "Sindirim sisteminin ağızdan anüse kadar herhangi bir bölümünü tutabilen kronik inflamatuvar bağırsak hastalığı nedir?",
      answer: "Crohn hastalığı",
    },
    {
      question:
        "Cryptococcus türü mantarların neden olduğu ve genellikle bağışıklığı baskılanmış bireylerde görülen beyin zarı enfeksiyonu nedir?",
      answer: "Cryptococcal menenjit",
    },
    {
      question:
        "Cryptosporidium parazitinin neden olduğu ve özellikle ishal ile seyreden bağırsak enfeksiyonu nedir?",
      answer: "Cryptosporidiosis",
    },
    {
      question:
        "Hipofiz bezinde aşırı ACTH üretimi sonucu gelişen ve kortizol seviyelerinin yükselmesiyle seyreden hastalık nedir?",
      answer: "Cushing hastalığı",
    },
    {
      question:
        "Vücutta aşırı kortizol üretimi veya dışarıdan kortizol alınması sonucu gelişen klinik tabloya ne ad verilir?",
      answer: "Cushing sendromu",
    },
    {
      question:
        "Deri, dudak ve tırnaklarda oksijen yetersizliğine bağlı olarak morarma şeklinde kendini gösteren duruma ne ad verilir?",
      answer: "Cyanosis (Morarma)",
    },
    {
      question:
        "Akciğer, pankreas ve sindirim sistemini etkileyen, genetik geçişli, mukus üretiminde bozuklukla karakterize hastalık nedir?",
      answer: "Cystic fibrosis (Kistik fibrozis)",
    },
    {
      question:
        "Mesane duvarının iltihaplanması sonucu idrar yaparken ağrı ve sık idrara çıkma gibi semptomlara yol açan hastalık nedir?",
      answer: "Cystitis (İdrar torbası iltihabı)",
    },
    {
      question:
        "Bağışıklık sistemi zayıf bireylerde görülen ve geniş bir yelpazede enfeksiyonlara yol açabilen sitomegalovirüs enfeksiyonu nedir?",
      answer: "Cytomegalovirus enfeksiyonu",
    },
  ],
  D: [
    {
      question:
        "Dalakta büyüme ve kütle artışı ile seyreden duruma ne ad verilir?",
      answer: "Dalak büyümesi (Splenomegali)",
    },
    {
      question:
        "Travma sonucu dalağın yırtılmasıyla gelişen ve iç kanamaya yol açan ciddi duruma ne ad verilir?",
      answer: "Dalak yırtılması",
    },
    {
      question:
        "Dalakta enfeksiyon nedeniyle irin birikimi sonucu oluşan duruma ne ad verilir?",
      answer: "Dalak apsesi",
    },
    {
      question:
        "Denizde yolculuk sırasında hareket kaynaklı mide bulantısı ve baş dönmesi ile seyreden durum nedir?",
      answer: "Dalga hastalığı (Deniz hastalığı)",
    },
    {
      question:
        "Atardamar veya toplardamarlarda kan akımının engellenmesiyle oluşan duruma ne ad verilir?",
      answer: "Damar tıkanıklığı",
    },
    {
      question:
        "Doğumsal veya sonradan oluşan damar yapısındaki anormal gelişimlere ne ad verilir?",
      answer: "Damar malformasyonları",
    },
    {
      question:
        "Damar dokusundan kaynaklanan iyi huylu veya kötü huylu tümörlere ne ad verilir?",
      answer: "Damar tümörleri",
    },
    {
      question:
        "İleri düzeyde profesyonel yardım gerektiren, günlük yaşamı etkileyen depresif bozukluk türü nedir?",
      answer: "Depresyon",
    },
    {
      question:
        "Gözde sıvı drenajının ani şekilde bozulması sonucu göz içi basıncının hızla arttığı glokom türü nedir?",
      answer: "Dar açılı glokom",
    },
    {
      question:
        "Vücutta aşırı sıvı kaybı sonucu gelişen ve yaşamı tehdit edebilen durum nedir?",
      answer: "Dehidrasyon",
    },
    {
      question:
        "Bilinç bulanıklığı, dikkat eksikliği ve algı bozukluğu ile seyreden akut beyin işlev bozukluğu nedir?",
      answer: "Deliryum",
    },
    {
      question:
        "Hafıza kaybı, düşünme ve muhakeme yetilerinin ilerleyici bozulmasıyla karakterize nörolojik hastalığın adı nedir?",
      answer: "Demans",
    },
    {
      question:
        "Vücutta demir eksikliği nedeniyle yeterli miktarda hemoglobin üretilememesi sonucu oluşan kansızlık türü nedir?",
      answer: "Demir eksikliği anemisi",
    },
    {
      question:
        "İç kulak veya sinir sistemi hastalıklarına bağlı olarak gelişen, düşme veya baş dönmesi ile seyreden durum nedir?",
      answer: "Denge bozukluğu",
    },
    {
      question:
        "Ciltte kötü huylu hücrelerin kontrolsüz çoğalması sonucu gelişen kanser türüne ne ad verilir?",
      answer: "Deri kanseri",
    },
    {
      question:
        "Derideki lenf dokusundan kaynaklanan ve genellikle cilt üzerinde plaklar oluşturan kanser türü nedir?",
      answer: "Deri lenfoması",
    },
    {
      question:
        "Tüberküloz bakterisinin deri dokusunda enfeksiyona yol açmasıyla gelişen nadir hastalık nedir?",
      answer: "Deri tüberkülozu",
    },
    {
      question:
        "Ciltte bakteri, mantar veya virüslerin neden olduğu yüzeysel enfeksiyonlara genel olarak ne ad verilir?",
      answer: "Deri enfeksiyonu",
    },
    {
      question:
        "Ciltte kızarıklık, kaşıntı ve şişlik ile seyreden inflamatuvar deri hastalığına ne ad verilir?",
      answer: "Dermatit",
    },
    {
      question:
        "Kas zayıflığı ve cilt döküntüleri ile seyreden nadir görülen inflamatuvar kas hastalığı nedir?",
      answer: "Dermatomiyozit",
    },
    {
      question:
        "Gebelik sırasında rahim iç yüzeyinde bulunan desidua dokusunda gelişen hastalıklara ne ad verilir?",
      answer: "Desidua hastalıkları",
    },
    {
      question:
        "Vücudun toksinlerden arınma süreci sırasında ortaya çıkan geçici belirtiler bütününe ne ad verilir?",
      answer: "Detoksifikasyon sendromu",
    },
    {
      question:
        "Suçiçeği enfeksiyonunda ciltte oluşan içi sıvı dolu küçük kabarcıklara verilen isim nedir?",
      answer: "Dewdrop enfeksiyonu",
    },
    {
      question:
        "Şeker hastalarında ayaklarda oluşan, iyileşmesi zor enfeksiyonlara ne ad verilir?",
      answer: "Diabetik ayak enfeksiyonu",
    },
    {
      question:
        "İnsülin eksikliği veya insülin etkisizliği sonucu kanda keton cisimciklerinin artmasıyla seyreden diyabetik acil durum nedir?",
      answer: "Diabetik ketoasidoz",
    },
    {
      question:
        "Şeker hastalığına bağlı olarak sinirlerde gelişen hasar sonucu ortaya çıkan hastalık nedir?",
      answer: "Diabetik nöropati",
    },
    {
      question:
        "Corynebacterium diphtheriae bakterisinin neden olduğu, boğazda yalancı zar oluşumu ile seyreden bulaşıcı hastalık nedir?",
      answer: "Difteri",
    },
    {
      question:
        "Kalp ilaçlarından dijitalisin aşırı alımı sonucu gelişen ve kalp ritminde bozukluklara yol açan zehirlenmeye ne ad verilir?",
      answer: "Dijitalis zehirlenmesi",
    },
    {
      question:
        "Pankreasın yeterli insülin üretememesi veya insülin direnci nedeniyle kan şekeri düzeyinin yüksek seyretmesiyle karakterize metabolik hastalık nedir?",
      answer: "Diyabet",
    },
    {
      question:
        "Şeker hastalığına bağlı olarak retina damarlarında hasar oluşması sonucu gelişen göz hastalığı nedir?",
      answer: "Diyabetik retinopati",
    },
    {
      question:
        "Şeker hastalığına bağlı olarak böbreklerde oluşan hasar ve işlev kaybı ile seyreden durum nedir?",
      answer: "Diyabetik nefropati",
    },
    {
      question:
        "Şeker hastalığında beyin fonksiyonlarının etkilenmesiyle oluşan bilişsel bozukluklara ne ad verilir?",
      answer: "Diyabetik ensefalopati",
    },
    {
      question:
        "Diyabet hastalarında kalp kasında gelişen yapısal ve işlevsel bozuklukla karakterize hastalık nedir?",
      answer: "Diyabetik kardiyomiyopati",
    },
    {
      question:
        "Dizdeki bağların aşırı gerilme veya yırtılması sonucu oluşan spor yaralanmasına ne ad verilir?",
      answer: "Diz bağ yaralanması",
    },
    {
      question:
        "Diz ekleminin aniden dönmesi veya ters bir hareket sonucu oluşan bağ, tendon veya kas hasarı nedir?",
      answer: "Diz burkulması",
    },
    {
      question:
        "Dize alınan travma sonucu kemik kırılmasıyla oluşan ortopedik yaralanmaya ne ad verilir?",
      answer: "Diz kırığı",
    },
    {
      question:
        "Dizde kıkırdak aşınması ve eklemde ağrı ile seyreden kronik romatizmal hastalığın adı nedir?",
      answer: "Diz osteoartriti",
    },
    {
      question:
        "Dize yerleştirilen protezlerin enfekte olması sonucu gelişen ortopedik enfeksiyon durumu nedir?",
      answer: "Diz protezi enfeksiyonu",
    },
    {
      question:
        "Diz çevresindeki tendonlarda aşırı kullanım veya yaralanmaya bağlı olarak gelişen iltihaplanmaya ne ad verilir?",
      answer: "Diz tendiniti",
    },
    {
      question:
        "Karın boşluğu ile göğüs boşluğu arasındaki diyafram kasında doğumsal ya da travmatik yırtılmaya ne ad verilir?",
      answer: "Diyafram hernisi",
    },
    {
      question:
        "Diyafram kasının felç olması sonucu solunum güçlüğü ile seyreden duruma ne ad verilir?",
      answer: "Diyafram paralizisi",
    },
    {
      question:
        "Bağırsak hareketlerinin artması sonucu sulu dışkılama ile karakterize sindirim sistemi hastalığı nedir?",
      answer: "Diyare (İshal)",
    },
    {
      question:
        "Diş kökünde enfeksiyon sonucu oluşan ve ağrıya neden olan irin birikimi durumu nedir?",
      answer: "Diş apsesi",
    },
    {
      question:
        "Diş etlerinde iltihaplanma ve kanama ile karakterize ağız sağlığı problemi nedir?",
      answer: "Diş eti iltihabı (Gingivit)",
    },
    {
      question:
        "Dişlere alınan darbe sonucu oluşan kırık, çatlak veya yer değiştirme gibi travmatik durumlara ne ad verilir?",
      answer: "Diş travması",
    },
    {
      question:
        "Bakterilerin neden olduğu, diş minesinde yıkıma yol açan ve çürüğe neden olan ağız hastalığı nedir?",
      answer: "Diş çürüğü",
    },
    {
      question:
        "Bağırsak duvarında yer alan küçük keseciklerin iltihaplanmasıyla gelişen sindirim sistemi hastalığı nedir?",
      answer: "Divertikülit",
    },
    {
      question:
        "Bağırsak duvarında oluşan küçük cep şeklindeki çıkıntılara verilen ad nedir?",
      answer: "Divertikülozis",
    },
    {
      question:
        "Amebiyazis gibi enfeksiyonların neden olduğu, kanlı ve mukuslu dışkılama ile seyreden bağırsak hastalığı nedir?",
      answer: "Dizanteri",
    },
    {
      question:
        "Omurgalar arasında yer alan disklerin kayarak sinir köklerine baskı yapması sonucu oluşan hastalık nedir?",
      answer: "Disk hernisi",
    },
    {
      question:
        "Yutma güçlüğü veya yutarken ağrı hissetme ile karakterize semptomun adı nedir?",
      answer: "Disfaji",
    },
    {
      question:
        "Adet dönemlerinde aşırı ağrı ve krampla seyreden jinekolojik duruma ne ad verilir?",
      answer: "Dismenore",
    },
    {
      question:
        "Döllenmiş yumurtanın rahim dışında, genellikle fallop tüplerine yerleşmesiyle oluşan gebelik türü nedir?",
      answer: "Dış gebelik (Ektopik gebelik)",
    },
    {
      question:
        "Mide ve üst sindirim sisteminde görülen, hazımsızlık ve şişkinlik gibi belirtilerle seyreden rahatsızlığa ne ad verilir?",
      answer: "Dispepsi",
    },
    {
      question:
        "Böbrek tübüllerinde asit-baz dengesinin bozulmasıyla seyreden nadir görülen böbrek hastalığı nedir?",
      answer: "Distal renal tübüler asidoz",
    },
    {
      question:
        "Kaslarda istemsiz kasılmalar ve anormal hareketler ile seyreden nörolojik hastalığın adı nedir?",
      answer: "Distoni",
    },
    {
      question:
        "Kalbin gevşeme aşamasında yeterli dolum yapamaması sonucu oluşan kalp yetmezliği türü nedir?",
      answer: "Diyastolik kalp yetmezliği",
    },
    {
      question:
        "Organ nakli sonrası bağışıklık sisteminin yeni organı yabancı olarak algılayıp saldırması sonucu oluşan durum nedir?",
      answer: "Doku reddi (Organ nakli sonrası)",
    },
  ],
  E: [
    {
      question:
        "Şiddetli kanamalara ve çoklu organ yetmezliğine yol açabilen ölümcül viral enfeksiyonun adı nedir?",
      answer: "Ebola virüs",
    },
    {
      question:
        "Döllenmiş yumurtanın rahim dışında, genellikle fallop tüplerine yerleşmesiyle oluşan gebelik türü nedir?",
      answer: "Ektopik gebelik",
    },
    {
      question:
        "Ciltte kızarıklık, kaşıntı ve kabarcıklarla seyreden kronik iltihaplı deri hastalığı nedir?",
      answer: "Egzama",
    },
    {
      question:
        "Hareketlerde yavaşlık, titreme ve kas sertliği gibi belirtilerle seyreden sinir sistemi hastalık grubuna ne ad verilir?",
      answer: "Ekstrapiramidal bozukluklar",
    },
    {
      question:
        "Lenfatik sistemin tıkanması sonucu uzuvlarda aşırı şişme ile karakterize hastalık nedir?",
      answer: "Elefantiyazis",
    },
    {
      question:
        "Sodyum, potasyum, kalsiyum gibi minerallerin dengesinin bozulmasıyla oluşan duruma ne ad verilir?",
      answer: "Elektrolit dengesizliği",
    },
    {
      question:
        "Embriyonal dönemde gelişen ve çoğunlukla çocukluk çağında görülen kötü huylu tümörlere ne ad verilir?",
      answer: "Embriyonik tümörler",
    },
    {
      question:
        "Akciğer alveollerinin harabiyeti sonucu hava hapsi ve nefes darlığı ile karakterize kronik akciğer hastalığı nedir?",
      answer: "Emfizem",
    },
    {
      question:
        "Duygusal dengesizlik, aşırı üzüntü veya öfke gibi belirtilerle seyreden ruhsal bozukluklara ne ad verilir?",
      answer: "Emosyonel bozukluklar",
    },
    {
      question:
        "Böbrek dokusunda gaz oluşturan bakteriyel enfeksiyon sonucu gelişen ciddi piyelonefrit türü nedir?",
      answer: "Emphysematous pyelonephritis (Gazlı piyelonefrit)",
    },
    {
      question:
        "Kalbin iç yüzeyini örten endokard tabakasının enfeksiyonu sonucu oluşan hastalığa ne ad verilir?",
      answer: "Endokardit",
    },
    {
      question:
        "Hormon üretiminde düzensizlik sonucu ortaya çıkan metabolik hastalıklara genel olarak ne ad verilir?",
      answer: "Endokrin bozukluklar",
    },
    {
      question:
        "Rahim iç tabakasının rahim dışına yerleşmesiyle ağrı ve infertiliteye yol açan jinekolojik hastalık nedir?",
      answer: "Endometriozis",
    },
    {
      question:
        "Rahim iç tabakasından (endometrium) kaynaklanan kötü huylu kanser türü nedir?",
      answer: "Endometriyal kanser",
    },
    {
      question:
        "Bir organ ya da dokunun kan akımının durması sonucu oksijen yetersizliğiyle oluşan doku ölümü nedir?",
      answer: "Enfarktüs",
    },
    {
      question:
        "İçinde bakteri veya parazitlerin bulunduğu, enfekte olmuş sıvı dolu kese yapısına ne ad verilir?",
      answer: "Enfekte kist",
    },
    {
      question:
        "Cerrahi girişim veya yaralanma sonrası gelişen ve bakteri bulaşı sonucu ortaya çıkan yara enfeksiyonu nedir?",
      answer: "Enfekte yara",
    },
    {
      question:
        "Kalbin iç yüzeyinin, özellikle kalp kapakçıklarının enfekte olmasıyla gelişen ciddi hastalık nedir?",
      answer: "Enfeksiyöz endokardit",
    },
    {
      question:
        "Viral enfeksiyon sonucu karaciğerde iltihaplanmaya yol açan bulaşıcı hastalık nedir?",
      answer: "Enfeksiyöz hepatit",
    },
    {
      question:
        "Bağırsaklarda uzun süreli iltihaplanmaya yol açan ve Crohn hastalığı veya ülseratif kolit gibi hastalıkları kapsayan durum nedir?",
      answer: "Enflamatuvar bağırsak hastalığı",
    },
    {
      question:
        "Kaslarda iltihaplanma ve güçsüzlükle seyreden nadir görülen kas hastalıkları grubuna ne ad verilir?",
      answer: "Enflamatuvar miyopatiler",
    },
    {
      question:
        "Sinüs boşluklarının iltihaplanması sonucu gelişen ve baş ağrısı, burun tıkanıklığı gibi semptomlarla seyreden hastalık nedir?",
      answer: "Enflamatuvar sinüzit",
    },
    {
      question:
        "Ciltte kırmızı, iltihaplı ve ağrılı sivilcelerle karakterize ciddi akne türü nedir?",
      answer: "Enflamasyonlu akne",
    },
    {
      question:
        "Beyin dokusunda viral enfeksiyon nedeniyle oluşan iltihaplanmaya ne ad verilir?",
      answer: "Enkefalit",
    },
    {
      question:
        "Kemik içinde yer alan iyi huylu kıkırdak tümörüne ne ad verilir?",
      answer: "Enkondrom",
    },
    {
      question:
        "Salmonella typhi bakterisinin neden olduğu ve yüksek ateş, karın ağrısı gibi belirtilerle seyreden hastalık nedir?",
      answer: "Enterik ateş (Tifo)",
    },
    {
      question:
        "Bağırsak mukozasında iltihaplanma ile seyreden ve genellikle ishal ve karın ağrısı yapan hastalık nedir?",
      answer: "Enterit",
    },
    {
      question:
        "Enterovirüs ailesine ait virüslerin neden olduğu ve genellikle ateş, döküntü veya nörolojik semptomlarla seyreden enfeksiyon nedir?",
      answer: "Enterovirüs enfeksiyonu",
    },
    {
      question:
        "Kandaki eozinofil adı verilen beyaz kan hücrelerinin anormal artışıyla karakterize hematolojik durum nedir?",
      answer: "Eozinofili",
    },
    {
      question:
        "Yemek borusunda eozinofil adı verilen beyaz kan hücrelerinin birikmesiyle gelişen kronik iltihaplı hastalık nedir?",
      answer: "Eozinofilik özofajit",
    },
    {
      question:
        "Akciğerlerde eozinofil hücrelerinin anormal birikimi ile oluşan nadir görülen zatürre türü nedir?",
      answer: "Eozinofilik pnömoni",
    },
    {
      question:
        "Vücutta eozinofillerin biriktiği, genellikle kemiklerde ve akciğerlerde görülen iyi huylu tümöral oluşum nedir?",
      answer: "Eozinofilik granülom",
    },
    {
      question:
        "Gırtlak kapağının iltihaplanması sonucu solunum yollarının tıkanmasına neden olabilen ciddi enfeksiyon nedir?",
      answer: "Epiglottit",
    },
    {
      question:
        "Beyindeki anormal elektriksel aktiviteler sonucu ortaya çıkan ve nöbetlerle seyreden nörolojik hastalık nedir?",
      answer: "Epilepsi",
    },
    {
      question:
        "Cilt altında gelişen iyi huylu, keratin dolu kistik yapıya ne ad verilir?",
      answer: "Epidermoid kist",
    },
    {
      question:
        "Testislerin üst kısmındaki epididim adlı yapının iltihaplanmasıyla oluşan ürolojik hastalık nedir?",
      answer: "Epididimit",
    },
    {
      question:
        "Kafatası ile beyin arasında kan birikmesi sonucu gelişen ve genellikle kafa travması sonrası oluşan ciddi durum nedir?",
      answer: "Epidural hematom",
    },
    {
      question:
        "Burun içindeki damarların çatlaması sonucu oluşan kanamaya ne ad verilir?",
      answer: "Epistaksis (Burun kanaması)",
    },
    {
      question:
        "Mononükleoz hastalığına yol açan ve tükürük yoluyla bulaşan Epstein-Barr virüsü enfeksiyonuna ne ad verilir?",
      answer: "Epstein-Barr virüs enfeksiyonu",
    },
    {
      question:
        "Erkeklerde cinsel ilişki için gerekli olan sertleşmenin sağlanamaması veya sürdürülememesi durumu nedir?",
      answer: "Erektil disfonksiyon",
    },
    {
      question:
        "Cilt altında ağrılı, kırmızı nodüller şeklinde görülen ve genellikle alt ekstremitelerde ortaya çıkan inflamatuvar durum nedir?",
      answer: "Eritema nodosum",
    },
    {
      question:
        "Ciltte genellikle kasık bölgesinde görülen, bakteriyel kaynaklı yüzeysel enfeksiyon nedir?",
      answer: "Eritrasma",
    },
    {
      question:
        "Kanda alyuvar (eritrosit) sayısının normalin üzerine çıkmasıyla karakterize hematolojik durum nedir?",
      answer: "Eritrositoz",
    },
    {
      question:
        "Gebelikte 37. haftadan önce doğumun gerçekleşmesine verilen isim nedir?",
      answer: "Erken doğum",
    },
    {
      question:
        "Cilt ve cilt altı dokusunun, Streptokok bakterileri tarafından enfekte edilmesi sonucu oluşan akut enfeksiyon nedir?",
      answer: "Erizipel",
    },
    {
      question:
        "Eklemlerde iltihap, ateş ve döküntü ile seyreden, nadir görülen sistemik iltihaplı hastalığın adı nedir?",
      answer: "Erişkin Still hastalığı",
    },
    {
      question:
        "Yemek borusunda kötü huylu tümör gelişimiyle karakterize sindirim sistemi kanseri nedir?",
      answer: "Esofagus kanseri",
    },
    {
      question:
        "Yemek borusundaki genişlemiş damarların yırtılması sonucu gelişen ciddi ve hayatı tehdit eden kanama durumu nedir?",
      answer: "Esofagus varis kanaması",
    },
    {
      question:
        "Yemek borusunun iltihaplanması sonucu ağrı, yutma güçlüğü ve yanma gibi semptomlarla seyreden hastalık nedir?",
      answer: "Esofajit",
    },
    {
      question:
        "Aşırı miktarda alkol alımı sonucu gelişen ve sinir sistemi, karaciğer gibi organlarda toksik etkiye yol açan durum nedir?",
      answer: "Etanol zehirlenmesi",
    },
    {
      question:
        "Çocuklarda ve genç erişkinlerde görülen, kemik ve yumuşak dokulardan kaynaklanan kötü huylu tümör türü nedir?",
      answer: "Ewing sarkomu",
    },
  ],
  F: [
    {
      question:
        "Boğaz ağrısı, yutma güçlüğü ve ateş ile seyreden üst solunum yolu enfeksiyonu nedir?",
      answer: "Farenjit",
    },
    {
      question:
        "Yüksek ateşe bağlı olarak küçük çocuklarda görülen kısa süreli nöbetlere ne ad verilir?",
      answer: "Febril nöbet",
    },
    {
      question:
        "Beyin damarlarının tıkanması veya kanaması sonucu kas gücü kaybı veya hareket kaybıyla seyreden durum nedir?",
      answer: "Felç",
    },
    {
      question:
        "Kalça kemiğini oluşturan femurun boyun kısmında meydana gelen kırığa ne ad verilir?",
      answer: "Femur boyun kırığı",
    },
    {
      question:
        "Kalpte ya da kaslarda düzensiz, hızlı ve etkisiz kasılmalara verilen isim nedir?",
      answer: "Fibrilasyon",
    },
    {
      question:
        "Meme dokusunda iyi huylu kist ve fibrozis oluşumu ile karakterize durum nedir?",
      answer: "Fibrokistik meme hastalığı",
    },
    {
      question: "Bağ dokusundan kaynaklanan iyi huylu tümörlere ne ad verilir?",
      answer: "Fibrom",
    },
    {
      question:
        "Kas ve yumuşak dokularda yaygın ağrı, yorgunluk ve hassasiyet ile seyreden kronik hastalığın adı nedir?",
      answer: "Fibromiyalji",
    },
    {
      question:
        "Bağ dokusundan köken alan ve kötü huylu olan kanser türü nedir?",
      answer: "Fibrosarkom",
    },
    {
      question:
        "Cilt veya mukozada gelişen küçük çatlak veya yırtıklara verilen isim nedir?",
      answer: "Fissür",
    },
    {
      question:
        "Toplardamarların iltihaplanması sonucu oluşan damar hastalığı nedir?",
      answer: "Flebit",
    },
    {
      question:
        "Böbreklerde glomerüllerin bazı segmentlerinde skar oluşması ile karakterize ilerleyici böbrek hastalığı nedir?",
      answer: "Fokal segmental glomerüloskleroz",
    },
    {
      question:
        "Kıl foliküllerinin bakteriyel enfeksiyonu sonucu oluşan iltihaplı deri hastalığı nedir?",
      answer: "Folikülit",
    },
    {
      question:
        "Kemik bütünlüğünün herhangi bir travma sonucu bozulmasıyla oluşan kırık durumu nedir?",
      answer: "Fraktür",
    },
    {
      question:
        "Alın bölgesinde bulunan sinüs boşluklarının iltihaplanmasıyla oluşan hastalık nedir?",
      answer: "Frontal sinüzit",
    },
    {
      question:
        "Karaciğerde ani ve şiddetli hepatoselüler hasarla seyreden, hızlı ilerleyen karaciğer yetmezliği durumu nedir?",
      answer: "Fulminan hepatit",
    },
    {
      question:
        "Beyin dokusunda mantar enfeksiyonu sonucu oluşan ve genellikle bağışıklığı baskılanmış bireylerde görülen ciddi enfeksiyon nedir?",
      answer: "Fungal beyin enfeksiyonu",
    },
    {
      question:
        "Kalbin iç tabakasının mantar enfeksiyonu sonucu iltihaplanması ile oluşan hastalığa ne ad verilir?",
      answer: "Fungal endokardit",
    },
    {
      question:
        "Mantar enfeksiyonunun neden olduğu, akciğerlerde iltihap ve solunum güçlüğü ile seyreden hastalık nedir?",
      answer: "Fungal pnömoni",
    },
    {
      question:
        "Sinüs boşluklarının mantar enfeksiyonu nedeniyle iltihaplanması sonucu gelişen hastalık nedir?",
      answer: "Fungal sinüzit",
    },
    {
      question:
        "Beyin zarlarında mantar enfeksiyonuna bağlı gelişen ve baş ağrısı, ateş gibi belirtilerle seyreden hastalık nedir?",
      answer: "Fungal menenjit",
    },
    {
      question:
        "Ciltte mantarların neden olduğu enfeksiyonlara genel olarak verilen isim nedir?",
      answer: "Fungal cilt enfeksiyonu",
    },
    {
      question:
        "Eklemlerde mantar enfeksiyonu sonucu oluşan ve ağrı, şişlik ile seyreden hastalık nedir?",
      answer: "Fungal artrit",
    },
    {
      question:
        "Kemik dokusunda mantar enfeksiyonu sonucu gelişen ciddi enfeksiyon hastalığına ne ad verilir?",
      answer: "Fungal osteomiyelit",
    },
    {
      question:
        "Kornea dokusunda mantar enfeksiyonu sonucu gelişen göz hastalığı nedir?",
      answer: "Fungal keratit",
    },
    {
      question:
        "Kanda mantarların bulunması ile oluşan ve ciddi enfeksiyonlara yol açabilen duruma ne ad verilir?",
      answer: "Fungemi",
    },
    {
      question:
        "Kıl kökü enfeksiyonunun daha derin dokulara yayılmasıyla oluşan ağrılı iltihabi cilt hastalığına ne ad verilir?",
      answer: "Furunkül",
    },
    {
      question:
        "Birden fazla furunkülün birleşmesiyle oluşan yaygın ve ciddi cilt enfeksiyonuna ne ad verilir?",
      answer: "Furunküloz",
    },
    {
      question:
        "Hamilelik sırasında annenin aşırı alkol tüketimi sonucu bebekte gelişim geriliği ve doğumsal anomalilere yol açan sendrom nedir?",
      answer: "Fetal alkol sendromu",
    },
    {
      question:
        "Anne karnındaki fetüste anormal sıvı birikimiyle karakterize ciddi bir durum nedir?",
      answer: "Fetal hidrops",
    },
    {
      question:
        "Kemiklerde normal kemik dokusunun yerini anormal fibröz dokunun almasıyla oluşan nadir kemik hastalığı nedir?",
      answer: "Fibröz displazi",
    },
    {
      question:
        "Sindirim sisteminde yapısal bir sorun olmadan, uzun süreli hazımsızlık ve mide rahatsızlığı ile seyreden hastalık nedir?",
      answer: "Fonksiyonel dispepsi",
    },
    {
      question:
        "Bağırsaklarda yapısal bir problem olmaksızın, karın ağrısı ve düzensiz bağırsak alışkanlıkları ile seyreden hastalık nedir?",
      answer: "Fonksiyonel bağırsak bozuklukları",
    },
    {
      question:
        "Yapısal bir beyin lezyonu olmaksızın tekrarlayan baş ağrıları ile karakterize hastalık nedir?",
      answer: "Fonksiyonel baş ağrısı",
    },
    {
      question:
        "Karın veya vücudun başka bir bölgesindeki iç organın zayıf bir bölgeden dışarı çıkmasıyla oluşan hastalık nedir?",
      answer: "Fıtık",
    },
    {
      question:
        "Toplardamar içinde pıhtı oluşması ile seyreden damar hastalığı nedir?",
      answer: "Flebotromboz",
    },
    {
      question:
        "Belirli bir lösemi alt tipine uymayan, olgunlaşmamış kan hücrelerinin kontrolsüz çoğalmasıyla seyreden kan kanseri nedir?",
      answer: "Farklılaşmamış lösemi",
    },
    {
      question:
        "Fosfor maddesinin aşırı alımı veya maruziyeti sonucu gelişen toksik zehirlenme durumu nedir?",
      answer: "Fosfor zehirlenmesi",
    },
    {
      question:
        "Beyindeki belirli bir bölgede başlayan ve sınırlı bir alanda nöbetlere yol açan epilepsi türü nedir?",
      answer: "Fokal epilepsi",
    },
    {
      question:
        "Kanda mantarların çoğalması sonucu gelişen ve yaşamı tehdit edebilen sistemik enfeksiyona ne ad verilir?",
      answer: "Fungal sepsis",
    },
    {
      question:
        "Prostat bezinde mantar enfeksiyonu gelişmesiyle oluşan ve idrar semptomlarına yol açan hastalık nedir?",
      answer: "Fungal prostatit",
    },
    {
      question:
        "Treponema pallidum bakterisinin neden olduğu, cilt, mukoz membranlar ve sinir sistemini etkileyen bulaşıcı hastalık nedir?",
      answer: "Frengi (Sifiliz)",
    },
    {
      question:
        "Beynin frontal lobunda oluşan tümörlere verilen genel ad nedir?",
      answer: "Frontal lob tümörü",
    },
    {
      question:
        "Yüz kaslarının ani ve geçici felci ile karakterize hastalık nedir?",
      answer: "Fasiyal paralizi (Yüz felci)",
    },
    {
      question:
        "Gözün iç kısmında mantar enfeksiyonu sonucu oluşan ve ciddi görme kaybına neden olabilen hastalık nedir?",
      answer: "Fungal endoftalmi",
    },
    {
      question:
        "Yüz bölgesinde gelişen bakteri veya mantar kaynaklı enfeksiyonlara genel olarak ne ad verilir?",
      answer: "Fasiyal enfeksiyonlar",
    },
    {
      question:
        "Boğazın arka duvarında oluşan ve yutma güçlüğü ile seyreden irin dolu boşluk nedir?",
      answer: "Farengeal apse",
    },
    {
      question:
        "Yumuşak dokudan kaynaklanan, genellikle iyi huylu olan fibröz hücreli tümör nedir?",
      answer: "Fibröz histiyositom",
    },
    {
      question:
        "Karaciğerde gelişen, iyi huylu ve genellikle belirti vermeyen bir tümör türüne ne ad verilir?",
      answer: "Fokal nodüler hiperplazi",
    },
    {
      question:
        "Akciğerlerde oluşan, kistik yapılarla karakterize nadir görülen doğumsal hastalığın adı nedir?",
      answer: "Fibrokistik akciğer hastalığı",
    },
  ],
  G: [
    {
      question:
        "Vücudun galaktozu düzgün şekilde metabolize edememesi sonucu oluşan kalıtsal metabolik hastalık nedir?",
      answer: "Galaktozemi",
    },
    {
      question:
        "Mide zarının iltihaplanması sonucu mide ağrısı ve hazımsızlıkla seyreden hastalık nedir?",
      answer: "Gastrit",
    },
    {
      question:
        "Mide ve bağırsakların enfeksiyonu sonucu ishal, kusma ve karın ağrısı ile seyreden hastalık nedir?",
      answer: "Gastroenterit",
    },
    {
      question:
        "Mide içeriğinin yemek borusuna kaçması sonucu yanma ve reflü semptomlarına yol açan hastalık nedir?",
      answer: "Gastroözofageal reflü hastalığı",
    },
    {
      question:
        "Sindirim sisteminin herhangi bir bölümünde meydana gelen kanamaya ne ad verilir?",
      answer: "Gastrointestinal kanama",
    },
    {
      question:
        "Sindirim sisteminde, özellikle midede veya bağırsakta gelişen nadir ve genellikle kötü huylu tümör tipi nedir?",
      answer: "Gastrointestinal stromal tümör (GIST)",
    },
    {
      question:
        "Midenin kaslarının normal şekilde çalışamaması sonucu mide boşalmasının geciktiği duruma ne ad verilir?",
      answer: "Gastroparezi",
    },
    {
      question:
        "Gebelik sırasında ortaya çıkan ve kan şekeri seviyelerinde anormalliklere yol açan durum nedir?",
      answer: "Gebelik diyabeti",
    },
    {
      question:
        "Gebelikte yüksek tansiyon, proteinüri ve ödemle karakterize ciddi durum nedir?",
      answer: "Gebelik zehirlenmesi (Preeklampsi)",
    },
    {
      question:
        "Gebelik sırasında gelişen ve kan basıncında artışla seyreden hipertansif bozukluğa ne ad verilir?",
      answer: "Gebeliğe bağlı hipertansiyon",
    },
    {
      question:
        "Gebelik döneminde artan demir ve folat ihtiyacının karşılanamaması sonucu gelişen kansızlık durumuna ne ad verilir?",
      answer: "Gebelikte anemi",
    },
    {
      question:
        "Gebelik sırasında idrar yollarında gelişen bakteriyel enfeksiyona ne ad verilir?",
      answer: "Gebelikte idrar yolu enfeksiyonu",
    },
    {
      question:
        "Gebelikte karaciğer safra akışının bozulması sonucu gelişen ve kaşıntı ile seyreden hastalık nedir?",
      answer: "Gebelik kolestazı",
    },
    {
      question:
        "Gebelikte kan pıhtılaşma eğiliminin artması sonucu damar içinde pıhtı oluşmasına verilen ad nedir?",
      answer: "Gebelikte tromboz",
    },
    {
      question:
        "Genetik faktörlere bağlı olarak gelişen ve çoğunlukla çocuklukta başlayan epilepsi sendromlarına ne ad verilir?",
      answer: "Genetik epilepsi sendromları",
    },
    {
      question:
        "Kalıtsal genetik bozukluklara bağlı olarak gelişen kalp kası hastalıklarına genel olarak ne ad verilir?",
      answer: "Genetik kardiyomiyopatiler",
    },
    {
      question:
        "Sinir ve kas sistemini etkileyen kalıtsal geçişli hastalıklara ne ad verilir?",
      answer: "Genetik nöromüsküler hastalıklar",
    },
    {
      question:
        "Böbreklerde çok sayıda kist oluşumu ile seyreden kalıtsal böbrek hastalığının adı nedir?",
      answer: "Genetik polikistik böbrek hastalığı",
    },
    {
      question:
        "Cinsel yolla bulaşan ve genital bölgede ağrılı, su dolu kabarcıklarla seyreden viral enfeksiyonun adı nedir?",
      answer: "Genital herpes",
    },
    {
      question:
        "HPV virüsü nedeniyle genital bölgede siğil şeklinde lezyonlara neden olan enfeksiyonun adı nedir?",
      answer: "Genital siğiller (HPV enfeksiyonu)",
    },
    {
      question:
        "Genital bölgede ağrılı, ülseratif lezyonlara neden olan enfeksiyonlara veya hastalıklara genel olarak ne ad verilir?",
      answer: "Genital ülser",
    },
    {
      question:
        "Sağ-sol kavramı karışıklığı, yazı yazamama ve aritmetik bozuklukla karakterize nadir nörolojik sendrom nedir?",
      answer: "Gerstmann sendromu",
    },
    {
      question:
        "Gebelikte plasentadan kaynaklanan anormal hücre büyümesiyle oluşan hastalık grubuna ne ad verilir?",
      answer: "Gestasyonel trofoblastik hastalıklar",
    },
    {
      question:
        "Giardia lamblia parazitinin neden olduğu, ishal ve karın krampları ile seyreden bağırsak enfeksiyonu nedir?",
      answer: "Giardiazis",
    },
    {
      question:
        "Göz içi basıncının artması sonucu optik sinirde hasara ve görme kaybına yol açan hastalık nedir?",
      answer: "Glaukom (Göz tansiyonu)",
    },
    {
      question:
        "Böbreklerdeki glomerül adı verilen filtreleme birimlerinin iltihaplanması ile karakterize hastalık nedir?",
      answer: "Glomerülonefrit",
    },
    {
      question:
        "Böbreklerde glomerül yapılarını etkileyen tüm hastalıkların genel adına ne ad verilir?",
      answer: "Glomerüler hastalıklar",
    },
    {
      question:
        "Kırmızı kan hücrelerini oksidatif stresten koruyan enzimin eksikliğiyle ortaya çıkan kalıtsal hastalık nedir?",
      answer: "Glukoz-6-fosfat dehidrogenaz eksikliği (G6PD eksikliği)",
    },
    {
      question:
        "Neisseria gonorrhoeae bakterisinin neden olduğu, üretrada iltihap ve akıntı ile seyreden cinsel yolla bulaşan hastalık nedir?",
      answer: "Gonore (Bel soğukluğu)",
    },
    {
      question:
        "Akciğer, böbrek ve diğer organlarda kanama ve hasarla seyreden nadir otoimmün hastalık nedir?",
      answer: "Goodpasture sendromu",
    },
    {
      question:
        "Göz küresi veya çevresindeki dokularda oluşan irin dolu iltihaplı oluşuma ne ad verilir?",
      answer: "Göz apsesi",
    },
    {
      question:
        "Gözde bakteriyel, viral veya fungal etkenlere bağlı gelişen enfeksiyonlara genel olarak ne ad verilir?",
      answer: "Göz enfeksiyonları",
    },
    {
      question:
        "Göze alınan travma sonucu oluşan fiziksel yaralanmalara ne ad verilir?",
      answer: "Göz travması",
    },
    {
      question:
        "Gözde iyi huylu veya kötü huylu tümör oluşumlarına genel olarak verilen ad nedir?",
      answer: "Göz tümörleri",
    },
    {
      question:
        "Gözün iç kısmında, retinanın önünde ya da vitreus boşluğunda meydana gelen kanamaya ne ad verilir?",
      answer: "Göz içi kanama",
    },
    {
      question:
        "Gözün dış zarının (konjonktiva) iltihaplanması sonucu gelişen ve kızarıklık, sulanma ile seyreden hastalık nedir?",
      answer: "Göz nezlesi (Konjonktivit)",
    },
    {
      question:
        "Vücudun belirli bölgelerinde iltihaplı granülom oluşumu ile seyreden hastalıklar grubuna ne ad verilir?",
      answer: "Granülomatoz hastalıklar",
    },
    {
      question:
        "Karaciğerde granülom oluşumu ile karakterize, kronik inflamasyonla seyreden karaciğer hastalığı nedir?",
      answer: "Granülomatöz hepatit",
    },
    {
      question:
        "Tiroid bezinde granülom oluşumu ve inflamasyonla karakterize tiroid hastalığı nedir?",
      answer: "Granülomatöz tiroidit",
    },
    {
      question:
        "Bağışıklık sisteminin tiroid bezine saldırması sonucu tiroid hormonlarının aşırı üretildiği otoimmün hastalık nedir?",
      answer: "Graves hastalığı",
    },
    {
      question:
        "Burun akıntısı, boğaz ağrısı ve halsizlik gibi belirtilerle seyreden üst solunum yolu enfeksiyonuna ne ad verilir?",
      answer: "Gribal enfeksiyon",
    },
    {
      question:
        "Tiroid bezinin büyümesi sonucu ortaya çıkan boyunda şişlik ile karakterize hastalık nedir?",
      answer: "Guatr",
    },
    {
      question:
        "Bağışıklık sisteminin periferik sinirlere saldırması sonucu kas güçsüzlüğü ve felçle seyreden nörolojik hastalık nedir?",
      answer: "Guillain-Barre sendromu",
    },
    {
      question:
        "Eklemlerde ürik asit kristallerinin birikmesi sonucu ağrı ve iltihapla seyreden metabolik hastalık nedir?",
      answer: "Gut hastalığı",
    },
    {
      question:
        "Gözyaşı üretiminde azalma sonucu gözde kuruluk ve batma hissi ile seyreden durum nedir?",
      answer: "Göz kuruluğu",
    },
    {
      question:
        "Gözde kötü huylu hücrelerin anormal çoğalmasıyla oluşan nadir kanser türüne ne ad verilir?",
      answer: "Göz kanseri",
    },
    {
      question:
        "Gözün iç kısmında gelişen iltihabi hastalık ve üvea tabakasının etkilenmesiyle ortaya çıkan durum nedir?",
      answer: "Göz içi iltihap (Üveit)",
    },
    {
      question:
        "Göz kaslarında sinir hasarı veya felç sonucu ortaya çıkan ve çift görme gibi belirtilerle seyreden hastalık nedir?",
      answer: "Göz kası felçleri",
    },
    {
      question:
        "Midenin iç yüzeyinde ülserasyonlarla seyreden ve mide ağrısına yol açan hastalık nedir?",
      answer: "Gastrik ülser",
    },
    {
      question:
        "Göz enfeksiyonu sonrası gözün iç kısmında gelişen iltihabi hastalık nedir?",
      answer: "Göz enfeksiyonu sonrası endoftalmi",
    },
  ],
  H: [
    {
      question:
        "Özellikle çocuklarda solunum yolu enfeksiyonlarına yol açan bakteri kaynaklı hastalık nedir?",
      answer: "Haemophilus influenzae enfeksiyonu",
    },
    {
      question:
        "Gebelik sırasında gelişen ve kan basıncının yükselmesiyle karakterize olan durum nedir?",
      answer: "Hamilelik hipertansiyonu",
    },
    {
      question:
        "Gebelikte safra akışının bozulması sonucu ortaya çıkan ve şiddetli kaşıntıyla seyreden hastalık nedir?",
      answer: "Hamilelik kolestazı",
    },
    {
      question:
        "Hamilelik sırasında idrar yollarında oluşan bakteriyel enfeksiyona ne ad verilir?",
      answer: "Hamilelikte idrar yolu enfeksiyonu",
    },
    {
      question:
        "Gebelik döneminde kandaki şeker düzeyinin anormal şekilde yükselmesiyle ortaya çıkan metabolik hastalık nedir?",
      answer: "Hamilelik diyabeti",
    },
    {
      question:
        "Hamilelik sırasında demir veya folat eksikliğine bağlı olarak gelişen kansızlık nedir?",
      answer: "Hamilelik anemisi",
    },
    {
      question:
        "Hamilelikte yüksek tansiyon ve idrarda protein kaçağı ile karakterize ciddi durum nedir?",
      answer: "Hamilelikte preeklampsi",
    },
    {
      question:
        "Hamilelik sırasında artan kan pıhtılaşma eğilimi sonucu damar tıkanıklığı gelişmesine ne ad verilir?",
      answer: "Hamilelikte tromboz",
    },
    {
      question:
        "Ciltte ve sinirlerde kronik enfeksiyona yol açan, Mycobacterium leprae bakterisinin neden olduğu hastalık nedir?",
      answer: "Hansen hastalığı (Cüzzam)",
    },
    {
      question:
        "Bağışıklık sisteminin tiroid bezine saldırarak hipotiroidizme yol açtığı otoimmün hastalık nedir?",
      answer: "Haşimato tiroiditi",
    },
    {
      question:
        "Pıhtılaşma faktörü VIII eksikliği sonucu ortaya çıkan ve kanama eğilimi ile karakterize kalıtsal hastalık nedir?",
      answer: "Hemofili A",
    },
    {
      question:
        "Pıhtılaşma faktörü IX eksikliği ile karakterize olan ve kanamalara yol açan kalıtsal hastalık nedir?",
      answer: "Hemofili B",
    },
    {
      question:
        "Vücutta aşırı demir birikimiyle seyreden ve karaciğer, kalp gibi organlarda hasara yol açan genetik hastalık nedir?",
      answer: "Hemokromatoz",
    },
    {
      question:
        "Kırmızı kan hücrelerinin normalden daha hızlı parçalanması sonucu gelişen kansızlık türü nedir?",
      answer: "Hemolitik anemi",
    },
    {
      question:
        "Genellikle çocuklarda görülen, akut böbrek yetmezliği, trombosit düşüklüğü ve hemolitik anemi ile karakterize sendrom nedir?",
      answer: "Hemolitik üremik sendrom",
    },
    {
      question: "Akciğerden gelen kanı öksürerek dışarı atma durumu nedir?",
      answer: "Hemoptizi (Kan tükürme)",
    },
    {
      question:
        "Anüs ve rektum bölgesindeki damarların genişlemesi sonucu gelişen ve ağrı, kanama gibi belirtilerle seyreden hastalık nedir?",
      answer: "Hemoroid",
    },
    {
      question:
        "Göğüs boşluğunda, akciğer zarları arasında kan birikmesine ne ad verilir?",
      answer: "Hemotoraks",
    },
    {
      question:
        "Vücudun bir yarısında kas gücü kaybı veya felç oluşmasıyla karakterize durum nedir?",
      answer: "Hemipleji",
    },
    {
      question:
        "Görme alanının bir kısmının kaybı veya körlükle seyreden nörolojik duruma ne ad verilir?",
      answer: "Hemianopsi",
    },
    {
      question:
        "Kalp zarları arasında kan birikmesiyle oluşan ve kalp fonksiyonlarını etkileyen ciddi duruma ne ad verilir?",
      answer: "Hemoperikard",
    },
    {
      question:
        "Beyin damarlarının yırtılması sonucu oluşan ve ani başlayan beyin kanamasına bağlı inme türü nedir?",
      answer: "Hemorajik inme",
    },
    {
      question:
        "Bağışıklık sisteminin aşırı aktivasyonu sonucu çoklu organ tutulumu ve ciddi inflamasyona yol açan sendrom nedir?",
      answer: "Hemofagositik lenfohistiyositoz",
    },
    {
      question:
        "Damarları veya cildi etkileyen, genellikle doğumsal olan iyi huylu damar tümörlerine ne ad verilir?",
      answer: "Hemangiom",
    },
    {
      question:
        "Hemoglobindeki yapısal veya miktarsal anormallikler sonucu oluşan kalıtsal kan hastalıklarına genel olarak ne ad verilir?",
      answer: "Hemoglobinopati",
    },
    {
      question:
        "Kırmızı kan hücrelerinin normal ömründen önce yıkılması ile oluşan sürece ne ad verilir?",
      answer: "Hemoliz",
    },
    {
      question:
        "Karaciğerin işlev bozukluğu sonucu, beyinde toksik madde birikimiyle gelişen bilinç değişikliği durumu nedir?",
      answer: "Hepatik ensefalopati",
    },
    {
      question:
        "Hepatit B virüsüne bağımlı olarak enfeksiyon oluşturabilen, ek bir karaciğer enfeksiyonu yapan virüs hangisidir?",
      answer: "Hepatit D",
    },
    {
      question:
        "Kontamine su veya yiyeceklerle bulaşan ve özellikle gebelerde ağır seyreden karaciğer enfeksiyonu nedir?",
      answer: "Hepatit E",
    },
    {
      question:
        "Kronik karaciğer hastalığı zemininde gelişen ve en sık görülen karaciğer kanseri türü nedir?",
      answer: "Hepatosellüler karsinom",
    },
    {
      question:
        "Karaciğerin normalden büyük hale gelmesiyle seyreden ve birçok hastalığın belirtisi olabilen durum nedir?",
      answer: "Hepatomegali",
    },
    {
      question:
        "Genellikle ağız, dudak veya genital bölgede su dolu kabarcıklarla seyreden viral enfeksiyon nedir?",
      answer: "Herpes simpleks enfeksiyonu",
    },
    {
      question:
        "Suçiçeği geçirmiş bireylerde, yıllar sonra sinir köklerinde reaktive olan ve ağrılı döküntülerle seyreden hastalık nedir?",
      answer: "Herpes zoster (Zona)",
    },
    {
      question:
        "Herpes simpleks virüsünün beyin dokusunda iltihap oluşturması sonucu gelişen ciddi enfeksiyon nedir?",
      answer: "Herpes ensefaliti",
    },
    {
      question:
        "Ciltte, özellikle koltuk altı ve kasık bölgelerinde, ağrılı iltihaplı nodüllerle karakterize kronik deri hastalığı nedir?",
      answer: "Hidradenitis suppurativa",
    },
    {
      question:
        "Beyin ventriküllerinde aşırı sıvı birikimi sonucu kafa içi basıncın artmasıyla seyreden hastalık nedir?",
      answer: "Hidrosefali",
    },
    {
      question:
        "Testis çevresinde sıvı birikimi ile oluşan ve genellikle ağrısız şişlik ile seyreden durum nedir?",
      answer: "Hidrokel",
    },
    {
      question:
        "İnsanlarda karaciğer, akciğer ve beyin gibi organlarda gelişen kist yapısına yol açan paraziter enfeksiyon nedir?",
      answer: "Hidatik kist",
    },
    {
      question:
        "Kandaki kalsiyum düzeyinin normalin üzerine çıkmasıyla oluşan metabolik bozukluk nedir?",
      answer: "Hiperkalsemi",
    },
    {
      question:
        "Kandaki şeker (glikoz) seviyesinin normalin üzerine çıkmasıyla oluşan metabolik durum nedir?",
      answer: "Hiperglisemi",
    },
    {
      question:
        "Kanda potasyum düzeyinin normalden yüksek olmasıyla oluşan elektrolit bozukluğu nedir?",
      answer: "Hiperkalemi",
    },
    {
      question:
        "Kanda karbondioksit seviyesinin anormal şekilde yükselmesine verilen isim nedir?",
      answer: "Hiperkapni",
    },
    {
      question:
        "Kanda kolesterol seviyesinin yükselmesiyle oluşan ve ateroskleroz riskini artıran durum nedir?",
      answer: "Hiperkolesterolemi",
    },
    {
      question:
        "Kan basıncının normalin üzerine çıkmasıyla oluşan ve kalp-damar hastalıklarına zemin hazırlayan durum nedir?",
      answer: "Hipertansiyon",
    },
    {
      question:
        "Tiroid bezinin aşırı çalışması sonucu metabolizmanın hızlandığı endokrin hastalık nedir?",
      answer: "Hipertiroidizm",
    },
    {
      question:
        "Kandaki şeker düzeyinin normalin altına düşmesiyle oluşan metabolik durum nedir?",
      answer: "Hipoglisemi",
    },
    {
      question:
        "Kandaki potasyum seviyesinin normalin altına düşmesiyle oluşan elektrolit dengesizliği nedir?",
      answer: "Hipokalemi",
    },
    {
      question:
        "Kandaki kalsiyum düzeyinin normalden düşük olmasıyla oluşan metabolik bozukluk nedir?",
      answer: "Hipokalsemi",
    },
    {
      question:
        "Kan basıncının normalin altına düşmesiyle karakterize dolaşım sistemi bozukluğu nedir?",
      answer: "Hipotansiyon",
    },
    {
      question:
        "Vücut sıcaklığının normalin altına düşmesiyle oluşan ve hayati riski bulunan durum nedir?",
      answer: "Hipotermi",
    },
    {
      question:
        "Tiroid bezinin yetersiz çalışması sonucu metabolizmanın yavaşladığı endokrin hastalık nedir?",
      answer: "Hipotiroidizm",
    },
    {
      question:
        "Kandaki sıvı hacminin ciddi şekilde azalması sonucu gelişen ve şok tablosu oluşturan durum nedir?",
      answer: "Hipovolemik şok",
    },
    {
      question:
        "Kalın bağırsağın bir kısmında sinir hücrelerinin eksik olması sonucu gelişen doğumsal bağırsak hastalığı nedir?",
      answer: "Hirschsprung hastalığı",
    },
    {
      question:
        "Histoplasma capsulatum adlı mantarın neden olduğu ve genellikle akciğerleri etkileyen enfeksiyon hastalığı nedir?",
      answer: "Histoplazmoz",
    },
    {
      question:
        "Lenf bezlerinde kötü huylu hücrelerin anormal çoğalmasıyla karakterize kanser türü nedir?",
      answer: "Hodgkin lenfoma",
    },
    {
      question:
        "Yüzde terleme kaybı, göz kapağı düşüklüğü ve göz bebeği küçülmesiyle seyreden nörolojik sendrom nedir?",
      answer: "Horner sendromu",
    },
    {
      question:
        "Sinir hücrelerinde hasar sonucu gelişen, ilerleyici hareket ve bilişsel bozulmaya yol açan kalıtsal nörolojik hastalık nedir?",
      answer: "Huntington hastalığı",
    },
    {
      question:
        "Bacaklarda istemsiz hareket etme isteğiyle karakterize uyku bozukluğuna ne ad verilir?",
      answer: "Huzursuz bacak sendromu",
    },
  ],
  İ: [
    {
      question:
        "İdrarın mesaneden dış ortama sızmasıyla oluşan istemsiz idrar kaybı durumuna ne ad verilir?",
      answer: "İdrar kaçağı",
    },
    {
      question:
        "İdrar yollarında bakteri çoğalması sonucu gelişen ve sık idrara çıkma, yanma gibi belirtilerle seyreden enfeksiyon nedir?",
      answer: "İdrar yolu enfeksiyonu",
    },
    {
      question:
        "Böbrek, üreter veya mesanede kristallerin birikmesi sonucu oluşan ve şiddetli ağrıya yol açabilen taş hastalığı nedir?",
      answer: "İdrar yolu taşları",
    },
    {
      question:
        "İdrar tutamama, istemsiz idrar kaçırma durumu için kullanılan tıbbi terim nedir?",
      answer: "İdrar inkontinansı",
    },
    {
      question:
        "Bağırsak hareketlerinin tamamen durması veya ciddi şekilde azalmasıyla karakterize sindirim sistemi tıkanıklığı nedir?",
      answer: "İleus",
    },
    {
      question:
        "İnce bağırsak ile kalın bağırsağın birleşim yerinde iltihaplanmaya yol açan hastalığın adı nedir?",
      answer: "İleokolitis",
    },
    {
      question:
        "Kalçaya kan taşıyan ana damar olan iliak arterin duvarının zayıflayıp baloncuk şeklinde genişlemesiyle oluşan durum nedir?",
      answer: "İliak arter anevrizması",
    },
    {
      question:
        "Kasık bölgesinden bacağa uzanan toplardamarda pıhtı oluşması sonucu gelişen ciddi damar hastalığı nedir?",
      answer: "İliofemoral derin ven trombozu",
    },
    {
      question:
        "Bağışıklık sisteminin yanlışlıkla kendi trombositlerine saldırarak kanama riskini artırdığı hastalığın adı nedir?",
      answer: "İmmün trombositopenik purpura",
    },
    {
      question:
        "Bağışıklık sisteminin kırmızı kan hücrelerine saldırarak erken parçalanmalarına yol açtığı kansızlık türü nedir?",
      answer: "İmmün hemolitik anemi",
    },
    {
      question:
        "Çene kemiğinde gömülü kalmış, sürmemiş veya kısmen çıkmış olan yirmilik dişe ne ad verilir?",
      answer: "İmpacted third molar (Gömülü yirmilik diş)",
    },
    {
      question:
        "Gebeliğin başlangıcında döllenmiş yumurtanın rahim duvarına yerleşmesi sırasında meydana gelen hafif kanamaya ne ad verilir?",
      answer: "İmplantasyon kanaması",
    },
    {
      question:
        "Çocuklarda ve bebeklerde sık görülen, bakteriyel kaynaklı bulaşıcı yüzeyel cilt enfeksiyonuna ne ad verilir?",
      answer: "İmpetigo",
    },
    {
      question:
        "Hepatit B virüsüne maruz kalındıktan sonra virüsün vücutta sessiz kaldığı ve aktif hastalık oluşturmadığı durum nedir?",
      answer: "İnaktiv hepatit B enfeksiyonu",
    },
    {
      question:
        "İnaktive edilmiş poliovirüs aşısı ile kazanılan bağışıklığa rağmen ortaya çıkan poliovirüs enfeksiyonu türü nedir?",
      answer: "İnaktive polio enfeksiyonu",
    },
    {
      question:
        "İnce bağırsağın mekanik tıkanıklığı sonucu besin ve sıvı geçişinin engellenmesiyle oluşan hastalık nedir?",
      answer: "İnce bağırsak obstrüksiyonu",
    },
    {
      question:
        "Tüberküloz bakterisinin ince bağırsakta iltihap oluşturmasıyla gelişen nadir enfeksiyon hastalığı nedir?",
      answer: "İnce bağırsak tüberkülozu",
    },
    {
      question:
        "İnce bağırsakta oluşan ve genellikle belirti vermeyen küçük kese şeklindeki yapılar nedir?",
      answer: "İnce bağırsak divertikülü",
    },
    {
      question:
        "İnce bağırsakta gelişen ve genellikle lenfositlerden kaynaklanan kötü huylu kanser türü nedir?",
      answer: "İnce bağırsak lenfoması",
    },
    {
      question:
        "İnce bağırsaktaki zayıf bölgelerden karın boşluğuna organların çıkmasıyla oluşan fıtık türü nedir?",
      answer: "İnce bağırsak fıtığı",
    },
    {
      question:
        "Ciltte sertleşme ve incelme ile karakterize nadir görülen skleroderma formuna ne ad verilir?",
      answer: "İnceltilmiş skleroderma",
    },
    {
      question:
        "Kas, tendon veya bağlarda aşırı gerilme veya yırtılma sonucu oluşan kas-iskelet sistemi yaralanmasına ne ad verilir?",
      answer: "İncinme (kas-iskelet yaralanması)",
    },
    {
      question:
        "Akciğer dokusunda iltihaplı hücrelerin birikmesiyle oluşan ve solunum fonksiyonunu bozan hastalıklar grubuna ne ad verilir?",
      answer: "İnfiltratif akciğer hastalığı",
    },
    {
      question:
        "Çiftlerin düzenli korunmasız ilişkiye rağmen bir yıl içinde gebelik elde edememesi durumu nedir?",
      answer: "İnfertilite",
    },
    {
      question:
        "Beyin damarlarının tıkanması veya kanaması sonucu gelişen ve ani başlayan nörolojik kayıplarla seyreden hastalık nedir?",
      answer: "İnme (İnme, Stroke)",
    },
    {
      question:
        "Epstein-Barr virüsünün neden olduğu ve boğaz ağrısı, ateş, lenf bezlerinde büyüme ile seyreden enfeksiyon hastalığı nedir?",
      answer: "İnfeksiyöz mononükleoz",
    },
    {
      question:
        "Kalbin iç tabakasının bakteriyel enfeksiyonu sonucu gelişen ve ciddi seyreden kalp hastalığı nedir?",
      answer: "İnfeksiyöz endokardit",
    },
    {
      question:
        "Viral kaynaklı olarak karaciğerde oluşan ve bulaşıcı özellik taşıyan hepatit türüne ne ad verilir?",
      answer: "İnfeksiyöz hepatit",
    },
    {
      question:
        "Crohn hastalığı ve ülseratif kolit gibi sindirim sisteminde uzun süreli iltihapla seyreden hastalıklara ne ad verilir?",
      answer: "İnflamatuvar bağırsak hastalığı",
    },
    {
      question:
        "Kaslarda iltihaplanma ve güçsüzlük ile karakterize nadir görülen otoimmün hastalıklar grubuna ne ad verilir?",
      answer: "İnflamatuvar miyopati",
    },
    {
      question:
        "Mevsimsel veya pandemik olarak ortaya çıkan, ateş ve kas ağrısıyla seyreden viral solunum yolu enfeksiyonu nedir?",
      answer: "İnfluenza (Grip)",
    },
    {
      question:
        "Yangın, patlama veya kimyasal maddelerin solunması sonucu solunum yollarında oluşan hasara ne ad verilir?",
      answer: "İnhalasyon yaralanması",
    },
    {
      question:
        "Karın duvarında, özellikle kasık bölgesinde organların fıtıklaşmasıyla oluşan yaygın hastalık nedir?",
      answer: "İnguinal herni (Kasık fıtığı)",
    },
    {
      question:
        "Pankreasta insülin üreten tümörlerin neden olduğu, kan şekeri düşüklüğüne yol açan endokrin hastalık nedir?",
      answer: "İnsülinoma",
    },
    {
      question:
        "Vücut hücrelerinin insülin hormonuna yeterli yanıt vermemesiyle karakterize metabolik bozukluğa ne ad verilir?",
      answer: "İnsülin direnci",
    },
    {
      question:
        "Aşırı insülin salgılanması veya insülin enjeksiyonu sonrası ani gelişen, hayati tehlike oluşturabilen kan şekeri düşüklüğü durumu nedir?",
      answer: "İnsülin şok",
    },
    {
      question:
        "Bağırsaklara kan akışının azalması veya kesilmesi sonucu gelişen ve ciddi karın ağrısıyla seyreden hastalık nedir?",
      answer: "İntestinal iskemik sendrom",
    },
    {
      question:
        "Tüberküloz bakterisinin bağırsaklarda enfeksiyon oluşturmasıyla gelişen hastalık nedir?",
      answer: "İntestinal tüberküloz",
    },
    {
      question:
        "Beyin içinde damar yırtılması sonucu kan birikmesiyle oluşan ve ciddi nörolojik belirtilerle seyreden durum nedir?",
      answer: "İntrakraniyal kanama",
    },
    {
      question:
        "Beyin içinde gelişen iyi huylu veya kötü huylu tümörlerin genel adına ne ad verilir?",
      answer: "İntrakraniyal tümörler",
    },
    {
      question:
        "Anne karnındaki bebeğin gebelik haftasına göre beklenen büyüklüğe ulaşamamasıyla karakterize durum nedir?",
      answer: "İntrauterin büyüme geriliği",
    },
    {
      question:
        "Gebelik sırasında anne karnındaki bebeğin çeşitli nedenlerle hayatını kaybetmesine ne ad verilir?",
      answer: "İntrauterin fetal ölüm",
    },
    {
      question:
        "Karın boşluğunda organlar arasında oluşan ve genellikle enfeksiyon kaynaklı irin birikimiyle karakterize durum nedir?",
      answer: "İntraabdominal apseler",
    },
    {
      question:
        "Bağırsak iç yüzeyinde gelişen iyi huylu çıkıntılara ne ad verilir?",
      answer: "İntestinal polipler",
    },
    {
      question:
        "Gözün iris tabakasının iltihaplanması sonucu gelişen, göz ağrısı ve görme bozukluğuyla seyreden hastalık nedir?",
      answer: "İritis",
    },
    {
      question:
        "Dokuya kan akışının kesilmesi ve bakteriyel enfeksiyon nedeniyle gelişen, kötü kokulu ve siyah renkli kangren türü nedir?",
      answer: "Islak gangren",
    },
    {
      question:
        "Bağırsak hareketlerinde düzensizlik, karın ağrısı ve şişkinlikle seyreden fonksiyonel bağırsak hastalığı nedir?",
      answer: "İrritabl bağırsak sendromu (IBS)",
    },
    {
      question:
        "Ağız içi gibi mukozal bölgelerde, mekanik tahrişe bağlı oluşan iyi huylu fibroz kitleye ne ad verilir?",
      answer: "İrritasyon fibromu",
    },
  ],
  J: [
    {
      question:
        "Romatoid artrite benzer, el eklemlerinde deformitelere yol açan, nadir görülen artrit tipi nedir?",
      answer: "Jaccoud artriti",
    },
    {
      question:
        "Bebeklerde ve küçük çocuklarda görülen, bez bölgesinde gelişen şiddetli pişik türü nedir?",
      answer: "Jacquet dermatiti",
    },
    {
      question:
        "Kişinin tanıdığı bir ortamı veya durumu ilk defa görüyormuş gibi hissetmesiyle karakterize nörolojik fenomen nedir?",
      answer: "Jamais vu fenomeni",
    },
    {
      question:
        "Jejunumda (ince bağırsağın bir bölümü) oluşan küçük kese şeklindeki çıkıntılara ne ad verilir?",
      answer: "Jejunal divertikül",
    },
    {
      question:
        "Jejunumda doğuştan gelişimsel eksiklik sonucu bağırsak geçişinin engellendiği doğumsal hastalık nedir?",
      answer: "Jejunal atrezisi",
    },
    {
      question:
        "Jejunumun kendi etrafında dönmesi sonucu gelişen ve bağırsak tıkanıklığına yol açan durum nedir?",
      answer: "Jejunal volvulus",
    },
    {
      question:
        "Jejunum bölgesinde mekanik veya fonksiyonel nedenlerle bağırsak geçişinin durması sonucu oluşan tıkanıklık durumu nedir?",
      answer: "Jejunal obstrüksiyon",
    },
    {
      question:
        "Jejunumdan kaynaklanan ve sindirim sisteminde kanamaya neden olan durum nedir?",
      answer: "Jejunal kanama",
    },
    {
      question:
        "İnce bağırsağın bir kısmının bypass edilmesi sonucu besin emiliminde bozuklukla seyreden sendrom nedir?",
      answer: "Jejunoileal bypass sendromu",
    },
    {
      question:
        "Aşırı endişe, kaygı ve gerginlik haliyle karakterize uzun süreli anksiyete bozukluğuna ne ad verilir?",
      answer: "Jeneralize anksiyete bozukluğu",
    },
    {
      question:
        "Vücudun her iki tarafında ve tüm vücutta yaygın kasılmalarla seyreden nöbet türü nedir?",
      answer: "Jeneralize konvülsiyon",
    },
    {
      question:
        "Beynin her iki yarım küresini etkileyen ve bilinç kaybı ile seyreden epilepsi türü nedir?",
      answer: "Jeneralize epilepsi",
    },
    {
      question:
        "Göğüs kafesinin dar ve sıkı olması nedeniyle solunum sıkıntısına yol açan kalıtsal iskelet displazisi nedir?",
      answer: "Jeune asfiksik torasik displazi",
    },
    {
      question:
        "Çocukluk çağında eklem iltihabı ile seyreden romatizmal hastalığın genel adı nedir?",
      answer: "Jüvenil artrit",
    },
    {
      question:
        "16 yaşından önce başlayan, nedeni bilinmeyen kronik eklem iltihabı hastalığına ne ad verilir?",
      answer: "Jüvenil idiopatik artrit (JIA)",
    },
    {
      question:
        "Çocuklarda kas güçsüzlüğü ve cilt döküntüleri ile seyreden nadir inflamatuvar kas hastalığı nedir?",
      answer: "Jüvenil dermatomiyozit",
    },
    {
      question:
        "Çocukluk çağında görülen ve lösemi alt tiplerinden biri olan, kötü huylu kan kanseri nedir?",
      answer: "Jüvenil miyelomonositik lösemi",
    },
    {
      question:
        "Çocukluk çağında görülen, ciltte kırmızı pullu döküntülerle seyreden kronik deri hastalığı nedir?",
      answer: "Jüvenil psöriyazis",
    },
    {
      question:
        "Çocuklarda mide-bağırsak kanalında çok sayıda polip oluşumu ile karakterize genetik sendrom nedir?",
      answer: "Jüvenil polipozis sendromu",
    },
    {
      question:
        "Çocukluk döneminde başlayan ve göz merceğinde bulanıklığa yol açarak görme kaybına neden olan hastalık nedir?",
      answer: "Jüvenil katarakt",
    },
    {
      question:
        "Çocukluk çağında başlayan, otoimmün kaynaklı tip 1 diyabet hastalığına ne ad verilir?",
      answer: "Jüvenil diyabet (Tip 1 diyabet)",
    },
    {
      question:
        "Çocukluk döneminde ortaya çıkan ve yüksek tansiyonla karakterize hastalık nedir?",
      answer: "Jüvenil hipertansiyon",
    },
    {
      question:
        "Çocuklarda kemik yoğunluğunda azalma ve kırık riskinde artışla seyreden metabolik kemik hastalığı nedir?",
      answer: "Jüvenil osteoporoz",
    },
    {
      question:
        "Çocukluk veya ergenlik döneminde başlayan ve kasılmalarla seyreden epilepsi türü nedir?",
      answer: "Jüvenil miyoklonik epilepsi",
    },
    {
      question:
        "Çocukluk döneminde birden fazla eklemde iltihaplanma ile seyreden romatizmal hastalığa ne ad verilir?",
      answer: "Jüvenil poliartrit",
    },
    {
      question:
        "Çocukluk çağında gelişen ve larenks, trakea, bronşlarda iltihaplanmaya neden olan solunum yolu hastalığı nedir?",
      answer: "Jüvenil laringotrakeobronşit",
    },
    {
      question:
        "Çocuklukta başlayan ve göz içi basıncının artmasıyla karakterize olan glokom türü nedir?",
      answer: "Jüvenil glaukoma",
    },
    {
      question:
        "Çocuklarda görülen, hızla büyüyen ve lenf düğümlerinde ortaya çıkan kötü huylu tümör türü nedir?",
      answer: "Jüvenil Burkitt lenfoma",
    },
    {
      question:
        "Çocukluk çağında başlayan ve uzun süreli eklem iltihabı ile karakterize romatizmal hastalık nedir?",
      answer: "Jüvenil kronik artrit",
    },
    {
      question:
        "Çocukluk çağında görülen, idrarda aşırı protein kaçağı ve vücutta ödem ile karakterize böbrek hastalığı nedir?",
      answer: "Jüvenil nefrotik sendrom",
    },
    {
      question:
        "Çocukluk döneminde gelişen ve adrenal bezin hormon üretiminde yetersizlikle seyreden nadir endokrin hastalık nedir?",
      answer: "Jüvenil Addison hastalığı",
    },
    {
      question:
        "Çocukluk döneminde tiroid bezinin yetersiz çalışmasıyla metabolizmanın yavaşlaması sonucu gelişen durum nedir?",
      answer: "Jüvenil hipotiroidi",
    },
    {
      question:
        "Çocuklarda görülen, demir eksikliğine veya başka nedenlere bağlı gelişen kansızlık durumu nedir?",
      answer: "Jüvenil anemi",
    },
    {
      question:
        "Boyun bölgesindeki jugular venden kaynaklanan ve damar içinde pıhtı oluşumu ile seyreden hastalık nedir?",
      answer: "Jugular ven trombozu",
    },
    {
      question:
        "Cilt yüzeyine yakın, epidermis ile dermisin birleşim yerinde oluşan iyi huylu pigmentli deri lezyonuna ne ad verilir?",
      answer: "Junctional nevus (Birleşim nevüsü)",
    },
    {
      question:
        "Boyun toplardamarlarının işlevini tam yapamaması ve kanın geri akmasıyla oluşan dolaşım bozukluğu durumu nedir?",
      answer: "Jugular venöz yetmezlik",
    },
  ],
  K: [
    {
      question:
        "Tükürük bezlerini etkileyen ve genellikle çocuklarda görülen bulaşıcı viral hastalığın adı nedir?",
      answer: "Kabakulak",
    },
    {
      question:
        "Bağırsak hareketlerinin azalması sonucu dışkılamada güçlük yaşanmasına ne ad verilir?",
      answer: "Kabızlık",
    },
    {
      question:
        "Kadının üreme sisteminde gebelik oluşumunu engelleyen faktörlere bağlı kısırlık durumuna ne ad verilir?",
      answer: "Kadın infertilitesi",
    },
    {
      question:
        "Baş bölgesine alınan darbeler sonrası beyin dokusunda zedelenmeye yol açabilen travmatik durum nedir?",
      answer: "Kafa travması",
    },
    {
      question:
        "Aşırı miktarda kafein alımı sonrası sinirlilik, çarpıntı ve mide rahatsızlıklarıyla seyreden durum nedir?",
      answer: "Kafein zehirlenmesi",
    },
    {
      question:
        "Kalpteki elektriksel iletimin yavaşlaması veya tamamen durması sonucu gelişen ileti bozukluğuna ne ad verilir?",
      answer: "Kalp bloğu",
    },
    {
      question:
        "Kalbe giden koroner damarların ani tıkanması sonucu kalp kasında hasara yol açan duruma ne ad verilir?",
      answer: "Kalp krizi (Miyokard enfarktüsü)",
    },
    {
      question:
        "Kalbin vücuda yeterli kan pompalayamaması sonucu gelişen, nefes darlığı ve yorgunluk gibi belirtilerle seyreden hastalık nedir?",
      answer: "Kalp yetmezliği",
    },
    {
      question:
        "Omuz tendonlarında kalsiyum birikimi nedeniyle gelişen ve ağrı ile hareket kısıtlılığına yol açan durum nedir?",
      answer: "Kalsifik tendinit",
    },
    {
      question:
        "Kalça ekleminin doğuştan veya sonradan yerinden çıkmasıyla oluşan ortopedik hastalığın adı nedir?",
      answer: "Kalça çıkığı",
    },
    {
      question:
        "Kalça kemiğinde oluşan kırık, genellikle yaşlı bireylerde düşme sonrası meydana gelen ciddi bir travmadır. Bu duruma ne ad verilir?",
      answer: "Kalça kırığı",
    },
    {
      question:
        "Yeni doğanlarda, akciğer damarlarındaki basıncın normalden yüksek kalmasıyla seyreden ciddi solunum bozukluğu nedir?",
      answer: "Kalıcı pulmoner hipertansiyon",
    },
    {
      question:
        "Kandaki hücresel ve kimyasal bileşenlerin normal dengelerinin bozulmasıyla oluşan çeşitli hastalık durumlarına ne ad verilir?",
      answer: "Kan dengesizlikleri",
    },
    {
      question:
        "Bakteriyel enfeksiyonun kana yayılmasıyla oluşan ve çoklu organ yetmezliğine yol açabilen ciddi enfeksiyon nedir?",
      answer: "Kan zehirlenmesi (Sepsis)",
    },
    {
      question:
        "Vücutta normal kanama sürecinin bozulması sonucu, kolay morarma ve aşırı kanamayla seyreden hastalıklar grubuna ne ad verilir?",
      answer: "Kanama bozuklukları",
    },
    {
      question:
        "Vücudun çeşitli bölgelerinde anormal kanamalara yatkınlık oluşturan kalıtsal veya edinsel duruma ne ad verilir?",
      answer: "Kanama diyatezi",
    },
    {
      question:
        "Kontrolsüz hücre çoğalmasıyla ortaya çıkan ve vücut dokularını istila eden kötü huylu hastalık nedir?",
      answer: "Kanser",
    },
    {
      question:
        "Kanser hastalarında iştah kaybı ve ciddi kilo kaybı ile seyreden, ileri evre kanserlerde görülen sendrom nedir?",
      answer: "Kanser anoreksi kaşeksi sendromu",
    },
    {
      question:
        "Bağırsaklarda kanlı dışkılama ile seyreden, genellikle dizanteri etkenleri tarafından oluşturulan enfeksiyon hastalığı nedir?",
      answer: "Kanlı ishal (Dizanteri)",
    },
    {
      question:
        "Candida türü mantarların neden olduğu ağız, cilt, genital bölge veya diğer vücut bölgelerinde gelişen enfeksiyonlara ne ad verilir?",
      answer: "Kandida enfeksiyonu",
    },
    {
      question:
        "Kanserli hücrelerin primer tümörden ayrılarak başka organlara yayılması olayına ne ad verilir?",
      answer: "Kanser metastazları",
    },
    {
      question:
        "Kafatası kapalıyken beyne alınan darbe sonucu oluşan travmatik beyin hasarı türüne ne ad verilir?",
      answer: "Kapalı kafa travması",
    },
    {
      question:
        "Cilt veya kemikte oluşan, derinin açık olmadığı yani dışarı çıkmayan kırık türüne ne ad verilir?",
      answer: "Kapalı kırık",
    },
    {
      question:
        "Kılcal damar duvarlarından sıvı sızması sonucu ani sıvı kaybı ve şoka yol açan nadir sendrom nedir?",
      answer: "Kapiller sızıntı sendromu",
    },
    {
      question:
        "İnsan herpes virüsü tarafından oluşturulan, deri ve mukozalarda mor-kırmızı lezyonlarla seyreden tümör nedir?",
      answer: "Kaposi sarkomu",
    },
    {
      question:
        "Yüksek karbondioksit seviyesine maruz kalınması sonucu gelişen zehirlenme durumu nedir?",
      answer: "Karbondioksit zehirlenmesi",
    },
    {
      question:
        "Karbondioksitin vücutta birikmesi sonucu solunum sıkıntısı ve bilinç değişikliği ile seyreden durum nedir?",
      answer: "Karbondioksit retansiyonu",
    },
    {
      question:
        "Birden fazla kıl kökünün bakteriyel enfeksiyonu sonucu oluşan büyük irinli cilt enfeksiyonuna ne ad verilir?",
      answer: "Karbunkül",
    },
    {
      question:
        "Kalbin ani durması sonucu kan dolaşımının tamamen kesilmesi ile ortaya çıkan hayati acil durum nedir?",
      answer: "Kardiyak arrest",
    },
    {
      question:
        "Kalbin pompalama gücünün ciddi şekilde azalması sonucu kan akışının düşmesiyle oluşan şok durumu nedir?",
      answer: "Kardiyojenik şok",
    },
    {
      question:
        "Kalp kasının yapısal ve işlevsel bozulması sonucu gelişen hastalık grubuna verilen genel ad nedir?",
      answer: "Kardiyomiyopati",
    },
    {
      question:
        "Vücutta enerji üretiminde önemli rol oynayan bir molekül olan karnitinin eksikliği ile oluşan metabolik hastalık nedir?",
      answer: "Karnitin eksikliği",
    },
    {
      question:
        "Boyundaki şah damarında daralma veya tıkanıklık sonucu beyne giden kan akımının azalmasına neden olan damar hastalığı nedir?",
      answer: "Karotis arter hastalığı",
    },
    {
      question:
        "Şah damarının (karotis arterin) iç duvarında yırtılma meydana gelmesi sonucu gelişen damar yaralanması nedir?",
      answer: "Karotis diseksiyonu",
    },
    {
      question:
        "Şah damarının (karotis arter) daralması sonucu felç ve geçici iskemik atak riskinin arttığı damar hastalığı nedir?",
      answer: "Karotis stenozi",
    },
    {
      question:
        "Karın duvarındaki zayıf bölgelerden organların dışarı çıkmasıyla oluşan fıtık tiplerine ne ad verilir?",
      answer: "Karın duvarı hernileri",
    },
    {
      question:
        "Karaciğerde irin dolu bir boşluk oluşmasıyla karakterize ciddi enfeksiyon hastalığı nedir?",
      answer: "Karaciğer apsesi",
    },
    {
      question:
        "Karaciğerin normal fonksiyonlarını yerine getirememesiyle karakterize hayatı tehdit eden klinik durum nedir?",
      answer: "Karaciğer yetmezliği",
    },
    {
      question:
        "Karaciğerin iltihaplanma ve nedbeleşme sonucu yapısal ve işlevsel kayba uğramasıyla karakterize kronik hastalık nedir?",
      answer: "Karaciğer sirozu",
    },
    {
      question:
        "Ekinokok parazitinin karaciğerde kist oluşturması sonucu gelişen paraziter hastalığa ne ad verilir?",
      answer: "Karaciğer kist hidatiği",
    },
    {
      question:
        "Karaciğer hücrelerinde yağ birikimi sonucu ortaya çıkan ve ilerleyerek siroza dönüşebilen durum nedir?",
      answer: "Karaciğer yağlanması (Steatoz)",
    },
    {
      question:
        "Situs inversus, bronşiektazi ve kronik sinüzitle karakterize kalıtsal bir hastalık nedir?",
      answer: "Kartagener sendromu",
    },
    {
      question:
        "Kaslarda ağrı, hassasiyet ve sertlikle seyreden yaygın kas şikayeti durumuna ne ad verilir?",
      answer: "Kas ağrısı (Miyalji)",
    },
    {
      question:
        "Kas liflerinin zayıflaması veya bozulması ile karakterize genetik kas hastalıklarına genel olarak ne ad verilir?",
      answer: "Kas distrofileri",
    },
    {
      question:
        "Kasların istemsiz ve ani kasılmasıyla oluşan ağrılı duruma ne ad verilir?",
      answer: "Kas spazmı",
    },
    {
      question:
        "Kasık bölgesinde gelişen ve bağırsakların karın duvarından dışarı çıkmasıyla oluşan fıtık türüne ne ad verilir?",
      answer: "Kasık fıtığı (İnguinal herni)",
    },
    {
      question:
        "Kasık bölgesinde lenf düğümlerinin büyümesi ve hassasiyet göstermesiyle seyreden duruma ne ad verilir?",
      answer: "Kasık lenfadenopatisi",
    },
    {
      question:
        "Hareketlerde donukluk, hareketsizlik ve konuşma azlığı gibi belirtilerle seyreden şizofreni alt tipi nedir?",
      answer: "Katatonik şizofreni",
    },
    {
      question:
        "Göz merceğinin saydamlığını kaybetmesiyle görme kaybına yol açan hastalık nedir?",
      answer: "Katarakt",
    },
    {
      question:
        "Çocuklarda ateş, deri döküntüsü ve damar iltihabı ile karakterize olan nadir hastalığın adı nedir?",
      answer: "Kawasaki hastalığı",
    },
    {
      question:
        "Kişinin aşırı endişe, korku ve huzursuzluk yaşamasıyla karakterize ruhsal bozukluk nedir?",
      answer: "Kaygı bozukluğu",
    },
    {
      question:
        "Konuşmada akıcılık bozulması, hece ya da kelimelerin tekrarı ile karakterize konuşma bozukluğu nedir?",
      answer: "Kekemelik",
    },
    {
      question:
        "Kemikte irinli enfeksiyon oluşması sonucu gelişen ve ağrılı şişliğe neden olan hastalık nedir?",
      answer: "Kemik apsesi",
    },
    {
      question:
        "Dış etkenler sonucu kemik bütünlüğünün bozulmasıyla oluşan yaralanmaya ne ad verilir?",
      answer: "Kırık",
    },
    {
      question:
        "Kanser hücrelerinin kemik dokusuna yayılması sonucu gelişen ve ağrı ile kırık riskini artıran duruma ne ad verilir?",
      answer: "Kemik metastazı",
    },
    {
      question:
        "Kemik iliğinin kan hücrelerini yeterince üretememesi sonucu gelişen hayatı tehdit eden hematolojik bozukluk nedir?",
      answer: "Kemik iliği yetmezliği",
    },
    {
      question:
        "Kemiklerde bakteri kaynaklı enfeksiyon oluşmasıyla karakterize hastalık nedir?",
      answer: "Kemik enfeksiyonları (Osteomiyelit)",
    },
    {
      question:
        "Kemik mineral yoğunluğunun azalması sonucu kemiklerin kırılgan hale geldiği metabolik hastalık nedir?",
      answer: "Kemik erimesi (Osteoporoz)",
    },
    {
      question:
        "Ciltte hızla büyüyen, genellikle iyi huylu ve kendi kendine gerileyebilen tümöral lezyon nedir?",
      answer: "Keratoakantoma",
    },
    {
      question:
        "Kıl köklerinde tıkanma ve cildin pürüzlü bir görünüm alması ile karakterize yaygın cilt hastalığı nedir?",
      answer: "Keratoz pilaris",
    },
    {
      question:
        "Göz korneasında gelişen ve görmeyi etkileyebilen iyi huylu tümöral kitle nedir?",
      answer: "Keratom",
    },
    {
      question:
        "Gözde kornea ve konjonktiva tabakasının birlikte iltihaplanması ile oluşan hastalık nedir?",
      answer: "Keratom konjunktivit",
    },
    {
      question:
        "Ciltte aşırı keratin birikimi sonucu oluşan kalınlaşmış ve sertleşmiş alanlara verilen genel ad nedir?",
      answer: "Keratoz",
    },
    {
      question:
        "Akciğer, pankreas ve sindirim sistemi başta olmak üzere birçok organı etkileyen genetik hastalık nedir?",
      answer: "Kistik fibrozis",
    },
    {
      question:
        "Döküntü, ateş ve solunum yolu semptomları ile seyreden, çocuklarda yaygın bulaşıcı viral hastalık nedir?",
      answer: "Kızamık",
    },
    {
      question:
        "Hafif ateş, döküntü ve lenf bezi şişmesi ile seyreden, gebelikte tehlikeli olabilen viral enfeksiyon nedir?",
      answer: "Kızamıkçık",
    },
    {
      question:
        "Erkeklerde fazladan bir X kromozomu bulunması sonucu gelişen ve kısırlık ile karakterize genetik sendrom nedir?",
      answer: "Klinefelter sendromu",
    },
    {
      question:
        "Kalın bağırsakta iyi huylu çıkıntılar (polipler) oluşmasıyla karakterize hastalık nedir?",
      answer: "Kolon polipleri",
    },
    {
      question:
        "Kalın bağırsakta divertikül adı verilen küçük keseciklerin iltihaplanması sonucu oluşan hastalık nedir?",
      answer: "Kolon divertiküliti",
    },
    {
      question:
        "Kalın bağırsak ve rektumla ilgili tüm hastalıkları kapsayan genel terim nedir?",
      answer: "Kolorektal hastalıklar",
    },
    {
      question:
        "Safranın karaciğerden bağırsaklara normal akışının engellenmesi sonucu gelişen durum nedir?",
      answer: "Kolestaz",
    },
    {
      question:
        "Safra yollarında iltihap ve tıkanma sonucu gelişen hepatit türüne ne ad verilir?",
      answer: "Kolestatik hepatit",
    },
    {
      question:
        "Kolesterol kristallerinin küçük damarları tıkaması sonucu doku hasarına yol açan emboli türü nedir?",
      answer: "Kolesterol embolisi",
    },
    {
      question:
        "Darbeye bağlı olarak cilt ve alt dokularda kan toplanmasıyla oluşan morarma ve şişlikle seyreden yaralanma nedir?",
      answer: "Kontüzyon (Ezilme yaralanması)",
    },
    {
      question:
        "Kirli su ve yiyecekler yoluyla bulaşan, şiddetli ishal ve su kaybına neden olan enfeksiyon hastalığı nedir?",
      answer: "Kolera",
    },
  ],
  L: [
    {
      question:
        "İç kulakta enfeksiyon veya iltihaplanma sonucu baş dönmesi ve denge kaybı ile seyreden hastalık nedir?",
      answer: "Labirentit",
    },
    {
      question:
        "Ses tellerinin iltihaplanması sonucu ses kısıklığı ve boğaz ağrısıyla seyreden hastalık nedir?",
      answer: "Laringit",
    },
    {
      question:
        "Bebeklerde görülen ve larenks kıkırdaklarının yumuşaklığı nedeniyle solunum sesi çıkmasına neden olan doğumsal durum nedir?",
      answer: "Laringomalazi",
    },
    {
      question:
        "Ses tellerinde ani kasılma ile hava akışının durmasına ve nefes darlığına yol açan acil durum nedir?",
      answer: "Laringospazm",
    },
    {
      question:
        "Gırtlak bölgesinde gelişen kötü huylu tümörlere verilen isim nedir?",
      answer: "Laringeal kanser",
    },
    {
      question:
        "Dirseğin dış kısmında ağrı ve hassasiyete neden olan, aşırı kullanım sonucu oluşan tendon hastalığı nedir?",
      answer: "Lateral epikondilit (Tenisçi dirseği)",
    },
    {
      question:
        "Uyluk dış yüzeyine duyusal sinir sıkışması sonucu gelişen uyuşukluk ve ağrıya neden olan durum nedir?",
      answer: "Lateral femoral kutanöz sinir sıkışması",
    },
    {
      question:
        "Mycobacterium leprae bakterisinin neden olduğu ve deri, sinirler ile gözleri etkileyen kronik enfeksiyon hastalığı nedir?",
      answer: "Lepra (Cüzzam)",
    },
    {
      question:
        "Leptospira bakterisinin neden olduğu, ateş, kas ağrısı ve bazen karaciğer-böbrek yetmezliği ile seyreden zoonotik enfeksiyon nedir?",
      answer: "Leptospiroz",
    },
    {
      question:
        "Lenf bezlerinin büyümesi sonucu oluşan, genellikle enfeksiyon veya malignite ile ilişkilendirilen klinik duruma ne ad verilir?",
      answer: "Lenf bezi büyümesi (Lenfadenopati)",
    },
    {
      question:
        "Lenf damarlarının doğumsal veya edinsel genişlemesi sonucu oluşan iyi huylu kistik tümör nedir?",
      answer: "Lenfanjiyom",
    },
    {
      question:
        "Lenf sıvısının dokularda birikmesi sonucu şişlik ve ödemle seyreden hastalığın adı nedir?",
      answer: "Lenfödem",
    },
    {
      question:
        "Lenfatik sistemin kötü huylu hücreler tarafından işgal edilmesiyle oluşan kanser türü nedir?",
      answer: "Lenfoma",
    },
    {
      question:
        "Lenfositlerin aşırı çoğalmasıyla karakterize, genellikle çocuklarda görülen kan kanseri türü nedir?",
      answer: "Lenfoblastik lösemi",
    },
    {
      question:
        "Lenf düğümlerinde tüberküloz bakterisinin neden olduğu enfeksiyon sonucu gelişen hastalık nedir?",
      answer: "Lenf nodu tüberkülozu",
    },
    {
      question:
        "Lenf damarlarının bakteriyel enfeksiyon sonucu iltihaplanmasıyla seyreden hastalık nedir?",
      answer: "Lenfanjitis",
    },
    {
      question:
        "Bağışıklık sistemi hücrelerinin tiroid dokusuna saldırması sonucu gelişen ve hipotiroidi ile sonuçlanabilen tiroid hastalığı nedir?",
      answer: "Lenfositik tiroidit",
    },
    {
      question:
        "Lenfatik sistemde sıvı akışının mekanik tıkanıklıkla engellenmesi sonucu oluşan durum nedir?",
      answer: "Lenfatik obstrüksiyon",
    },
    {
      question:
        "Akciğerlerde gelişen ve alveolleri kaplayan hücrelerden kaynaklanan özel tipte akciğer kanseri nedir?",
      answer: "Lepidik adenokarsinom",
    },
    {
      question:
        "Mitokondriyal enzim eksikliği nedeniyle ortaya çıkan ve kas zayıflığı, solunum yetmezliği ile seyreden nadir genetik hastalık nedir?",
      answer: "Leigh hastalığı",
    },
    {
      question:
        "Düz kaslardan köken alan ve genellikle rahimde görülen iyi huylu tümör nedir?",
      answer: "Leiomyoma (Düz kas tümörü)",
    },
    {
      question:
        "Düz kas dokusundan kaynaklanan ve vücudun çeşitli bölgelerinde görülebilen kötü huylu tümör nedir?",
      answer: "Leiomyosarkom",
    },
    {
      question:
        "İnsülin reseptörlerinde genetik bir bozukluk sonucu ortaya çıkan ve büyüme geriliği ile seyreden nadir sendrom nedir?",
      answer: "Leprechaunizm",
    },
    {
      question:
        "Kanserin beyin ve omurilik zarlarına yayılması sonucu gelişen ciddi durum nedir?",
      answer: "Leptomeningeal hastalık",
    },
    {
      question:
        "Ciltte beyaz lekelerle seyreden ve vitiligoya benzer pigment kaybı hastalığı nedir?",
      answer: "Leucoderma (Vitiligo benzeri durum)",
    },
    {
      question:
        "Ağız mukozasında beyaz plaklar şeklinde görülen, kanser öncüsü olabilecek lezyonlara ne ad verilir?",
      answer: "Leukoplakia",
    },
    {
      question:
        "Pelvik tabandaki levator ani kasında ağrı ve spazm ile seyreden kronik pelvik ağrı sendromu nedir?",
      answer: "Levator ani sendromu",
    },
    {
      question:
        "Ciltte mor renkli, düz, kaşıntılı lezyonlarla karakterize olan kronik inflamatuvar hastalık nedir?",
      answer: "Liken planus",
    },
    {
      question:
        "Cilt ve genital bölgede ince beyaz plaklar ve atrofi ile seyreden kronik deri hastalığı nedir?",
      answer: "Liken sklerozus",
    },
    {
      question:
        "Yağ dokusundan kaynaklanan, genellikle zararsız, yumuşak kıvamlı iyi huylu tümör nedir?",
      answer: "Lipom",
    },
    {
      question:
        "Yağ dokusundan kaynaklanan ve hızlı büyüyebilen kötü huylu tümör türüne ne ad verilir?",
      answer: "Liposarkom",
    },
    {
      question:
        "Listeria monocytogenes bakterisinin neden olduğu, gebelerde ve bağışıklığı baskılanmış bireylerde ciddi seyreden enfeksiyon hastalığı nedir?",
      answer: "Listeriyozis",
    },
    {
      question:
        "Amyotrofik lateral skleroz gibi motor nöron hastalıklarında kas atrofisi ve fasikülasyonları ile seyreden tablo nedir?",
      answer: "Litten belirtisi",
    },
    {
      question:
        "Lityum ilacının aşırı alınması sonucu gelişen, bulantı, titreme ve bilinç değişikliği ile seyreden toksik durum nedir?",
      answer: "Lityum zehirlenmesi",
    },
    {
      question:
        "Meme lobüllerinden kaynaklanan ve genellikle gizli seyreden meme kanseri türü nedir?",
      answer: "Lobüler karsinom (Meme kanseri tipi)",
    },
    {
      question:
        "Bel bölgesindeki omurlar arasında yer alan diskin yer değiştirmesi sonucu sinir sıkışmasına yol açan hastalık nedir?",
      answer: "Lomber disk hernisi",
    },
    {
      question:
        "Omurga kanalının daralması sonucu sinirler üzerinde baskı oluşturarak ağrı ve yürüme güçlüğüne neden olan durum nedir?",
      answer: "Lomber spinal stenoz",
    },
    {
      question:
        "Bel bölgesindeki omurlarda aşınma ve kireçlenme sonucu gelişen dejeneratif hastalık nedir?",
      answer: "Lomber spondiloz",
    },
    {
      question:
        "Bel bölgesindeki omurganın normalden fazla çukurluk göstermesiyle oluşan postüral bozukluk nedir?",
      answer: "Lomber lordoz bozuklukları",
    },
    {
      question:
        "Kemik iliğindeki anormal beyaz kan hücresi üretimiyle oluşan ve kanser sınıfında yer alan hastalığa ne ad verilir?",
      answer: "Lösemi",
    },
    {
      question:
        "Lösemi tedavisi sonrası hastalığın yeniden ortaya çıkmasına ne ad verilir?",
      answer: "Lösemi relapsı",
    },
    {
      question:
        "Lösemi hastalarında bağışıklık sisteminin zayıflaması sonucu gelişen ciddi enfeksiyonlara ne ad verilir?",
      answer: "Lösemi sonrası enfeksiyonlar",
    },
    {
      question:
        "Parazit veya alerjenlere karşı aşırı duyarlılık sonucu gelişen ve akciğerlerde geçici infiltrasyonlara yol açan sendrom nedir?",
      answer: "Löffler sendromu",
    },
    {
      question:
        "Bağışıklık sisteminin kendi dokularına saldırmasıyla oluşan, cilt, böbrekler ve diğer organları etkileyebilen otoimmün hastalık nedir?",
      answer: "Lupus eritematozus (Sistemik lupus)",
    },
    {
      question:
        "Lupus hastalığında böbreklerde iltihaplanma ve hasar meydana gelmesiyle oluşan ciddi durum nedir?",
      answer: "Lupus nefriti",
    },
    {
      question:
        "Bağışıklık sistemi kaynaklı olarak karaciğer dokusunda iltihaplanma ile seyreden kronik karaciğer hastalığı nedir?",
      answer: "Lupoid hepatit",
    },
    {
      question:
        "Borrelia burgdorferi bakterisinin ısırık yoluyla bulaşmasıyla oluşan ve döküntü, eklem ağrısı gibi belirtilerle seyreden hastalık nedir?",
      answer: "Lyme hastalığı",
    },
    {
      question:
        "Ciltte yaygın soyulma ve ciddi sıvı kaybı ile seyreden, ilaçlara bağlı gelişebilen ciddi deri reaksiyonu nedir?",
      answer: "Lyell sendromu (Toksik epidermal nekrolizis)",
    },
    {
      question:
        "Vücuttaki yağların metabolizmasında bozukluk sonucu gelişen ve çeşitli organları etkileyen metabolik hastalıklar grubuna ne ad verilir?",
      answer: "Lipid metabolizması bozuklukları",
    },
    {
      question:
        "Ağız, dil veya genital bölgelerde gelişebilen ve kanser öncüsü sayılabilen beyaz renkli mukozal lezyonlar nedir?",
      answer: "Lökoplaki",
    },
  ],
  M: [
    {
      question:
        "Görme merkezi olan retina tabakasının dejenerasyonu sonucu ilerleyici görme kaybına yol açan hastalık nedir?",
      answer: "Maküler dejenerasyon",
    },
    {
      question:
        "Plasmodium parazitinin sivrisinek aracılığıyla bulaşmasıyla oluşan, ateş ve titreme ile seyreden enfeksiyon hastalığı nedir?",
      answer: "Malarya (Sıtma)",
    },
    {
      question:
        "Deri pigment hücrelerinden kaynaklanan ve hızla yayılabilen kötü huylu cilt kanseri türü nedir?",
      answer: "Malign melanom",
    },
    {
      question:
        "Kanser hastalarında görülen ve artmış damar içi pıhtılaşma eğilimi ile karakterize durum nedir?",
      answer: "Malignite ile ilişkili pıhtılaşma bozuklukları",
    },
    {
      question:
        "Mukoza ile ilişkili lenfoid dokudan gelişen ve genellikle mide, akciğer gibi organlarda görülen lenfoma türü nedir?",
      answer: "Malt lenfoma",
    },
    {
      question:
        "Bağırsakların doğumsal olarak anormal bir şekilde dönmesi ve yerleşmesi sonucu gelişen sindirim sistemi anomalisi nedir?",
      answer: "Malrotasyon (Bağırsak dönme anomalisi)",
    },
    {
      question:
        "Yetersiz veya dengesiz beslenme sonucu vücut için gerekli besin öğelerinin eksikliğine bağlı gelişen durum nedir?",
      answer: "Malnütrisyon",
    },
    {
      question:
        "Meme dokusunun enfekte olmasıyla ağrı, kızarıklık ve şişlik gibi belirtilerle seyreden iltihabi hastalık nedir?",
      answer: "Mastit",
    },
    {
      question:
        "Orta kulakta enfeksiyon sonrası mastoid kemiklerde iltihap oluşmasıyla gelişen ciddi kulak hastalığı nedir?",
      answer: "Mastoidit",
    },
    {
      question:
        "Hamilelik sırasında annede yüksek kan şekeri seviyeleri ile seyreden ve hem anne hem de bebeği etkileyen durum nedir?",
      answer: "Maternal diyabet",
    },
    {
      question:
        "Fenilketonüri hastası annelerin kontrolsüz hastalığı nedeniyle bebeklerinde doğuştan anormalliklere yol açan durum nedir?",
      answer: "Maternal fenilketonüri sendromu",
    },
    {
      question:
        "Beyincikte gelişen ve çocuklarda en sık görülen kötü huylu beyin tümörü türü nedir?",
      answer: "Medülloblastom",
    },
    {
      question:
        "Kalın bağırsağın normalden çok genişlemesiyle karakterize, bağırsak hareketlerini bozan ciddi durum nedir?",
      answer: "Megakolon",
    },
    {
      question:
        "B12 vitamini veya folik asit eksikliği sonucu gelişen ve büyük, olgunlaşmamış kırmızı kan hücreleriyle karakterize anemi türü nedir?",
      answer: "Megaloblastik anemi",
    },
    {
      question:
        "Melanositlerden kaynaklanan ve ciltte görülebilen kötü huylu tümörlere genel olarak ne ad verilir?",
      answer: "Melanom",
    },
    {
      question:
        "Böbreklerde glomerül adı verilen filtreleme birimlerinde bağışıklık komplekslerinin birikmesi sonucu gelişen böbrek hastalığı nedir?",
      answer: "Membranöz glomerülonefrit",
    },
    {
      question:
        "İç kulaktaki sıvı basıncının artmasıyla oluşan, baş dönmesi, kulak çınlaması ve işitme kaybıyla seyreden hastalık nedir?",
      answer: "Meniere hastalığı",
    },
    {
      question:
        "Kanser hücrelerinin beyin zarı (meninksler) içine yayılması sonucu oluşan ciddi metastatik hastalık nedir?",
      answer: "Meningeal karsinomatozis",
    },
    {
      question:
        "Meningokok bakterisinin kana karışması sonucu gelişen ve hızla septik şoka yol açabilen ciddi enfeksiyon nedir?",
      answer: "Meningokoksemi",
    },
    {
      question:
        "Beyin zarlarının bakteriyel, viral veya fungal enfeksiyonlar sonucu iltihaplanmasıyla oluşan hastalık nedir?",
      answer: "Menenjit",
    },
    {
      question:
        "Beyin ve beyin zarlarının birlikte iltihaplanmasıyla seyreden ciddi enfeksiyon hastalığı nedir?",
      answer: "Meningoensefalit",
    },
    {
      question:
        "Vücutta asit birikimi sonucu kan pH'ının düşmesiyle gelişen ve solunum ya da metabolik nedenlere bağlı olabilen hastalık nedir?",
      answer: "Metabolik asidoz",
    },
    {
      question:
        "İnsülin direnci, hipertansiyon, obezite ve lipid dengesizlikleri ile seyreden ve kardiyovasküler risk artıran sendrom nedir?",
      answer: "Metabolik sendrom",
    },
    {
      question:
        "Metan gazına aşırı maruz kalınması sonucu gelişen ve solunum yetmezliğine yol açabilen zehirlenme türü nedir?",
      answer: "Metan zehirlenmesi",
    },
    {
      question:
        "Vücudun başka bir bölgesinden yayılan kanser hücrelerinin kemiğe yerleşerek hasar oluşturmasıyla gelişen durum nedir?",
      answer: "Metastatik kemik hastalığı",
    },
    {
      question:
        "Adet döngüsü dışında gelişen, düzensiz ve anormal vajinal kanamaya ne ad verilir?",
      answer: "Metrorrhagia (Ara kanama)",
    },
    {
      question:
        "Mide bez hücrelerinden kaynaklanan ve mide kanserlerinin en yaygın formu olan kötü huylu tümör türü nedir?",
      answer: "Mide adenokarsinomu",
    },
    {
      question:
        "Midenin iç yüzeyinde asit nedeniyle oluşan ve ağrıya yol açan açık yara durumuna ne ad verilir?",
      answer: "Mide ülseri",
    },
    {
      question:
        "Midedeki damarların kanaması sonucu kan kusma veya dışkıda kan görülmesiyle seyreden durum nedir?",
      answer: "Mide kanaması",
    },
    {
      question:
        "Tüberküloz dışı mikobakteriler tarafından oluşturulan ve genellikle akciğerlerde enfeksiyona yol açan hastalık grubuna ne ad verilir?",
      answer: "Mikobakteriyel enfeksiyonlar",
    },
    {
      question:
        "Mikoplazma bakterisinin neden olduğu ve özellikle gençlerde hafif-orta şiddetli zatürreye yol açan solunum yolu enfeksiyonu nedir?",
      answer: "Mikoplazma pnömonisi",
    },
    {
      question:
        "Kırmızı kan hücrelerinin normalden küçük olmasıyla karakterize edilen ve genellikle demir eksikliğine bağlı gelişen anemi türü nedir?",
      answer: "Mikrositik anemi",
    },
    {
      question:
        "Lupus, skleroderma ve polimiyozit gibi bağ dokusu hastalıklarının bir arada görüldüğü karma hastalık sendromu nedir?",
      answer: "Mikst konnektif doku hastalığı",
    },
    {
      question:
        "Kalpte, özellikle kulakçıklarda gelişen iyi huylu bir primer tümör nedir?",
      answer: "Miksoma",
    },
    {
      question:
        "Baş ağrısı, mide bulantısı ve ışığa hassasiyetle seyreden nörolojik hastalık nedir?",
      answer: "Migren",
    },
    {
      question:
        "Dış kulak kepçesinin doğumsal olarak küçük, şekil bozukluğuna uğramış veya eksik olması durumuna ne ad verilir?",
      answer: "Mikrotia",
    },
    {
      question:
        "Kalpte sol kulakçık ile sol karıncık arasındaki mitral kapakta daralma veya işlev bozukluğu ile seyreden hastalıklar grubuna ne ad verilir?",
      answer: "Mitral kapak hastalıkları",
    },
    {
      question:
        "Mitral kapakta kapanamama sonucu sol kulakçığa kan kaçışı ile karakterize kalp hastalığı nedir?",
      answer: "Mitral yetmezlik",
    },
    {
      question:
        "Mitral kapakta daralma meydana gelerek sol kulakçık ile sol karıncık arasındaki kan akışını engelleyen kalp hastalığı nedir?",
      answer: "Mitral stenoz",
    },
    {
      question:
        "Kalbi besleyen koroner damarların tıkanması sonucu kalp kasının oksijensiz kalmasıyla oluşan kalp krizi durumu nedir?",
      answer: "Miyokard enfarktüsü",
    },
    {
      question:
        "Kalp kası dokusunun enfeksiyon veya otoimmün reaksiyon sonucu iltihaplanmasıyla seyreden hastalık nedir?",
      answer: "Miyokardit",
    },
    {
      question:
        "Kas dokusunun iltihaplanması ile karakterize, kas güçsüzlüğü ve ağrıya neden olan hastalık nedir?",
      answer: "Miyozit",
    },
    {
      question:
        "Kaslardaki sinir iletimini bozan otoimmün bir hastalık olup, kas güçsüzlüğü ve çabuk yorulmayla karakterizedir. Bu hastalığın adı nedir?",
      answer: "Miyastenia gravis",
    },
    {
      question:
        "Kemik iliğinde lifli dokunun anormal şekilde artması sonucu kan hücresi üretiminin bozulduğu hematolojik hastalık nedir?",
      answer: "Miyelofibrozis",
    },
    {
      question:
        "Plazma hücrelerinden kaynaklanan ve kemik iliğini etkileyen kötü huylu kan kanseri türü nedir?",
      answer: "Miyeloma",
    },
    {
      question:
        "Omurilik ve omurga kemiklerini etkileyen, doğuştan gelişimsel bir sinir sistemi anomalisi nedir?",
      answer: "Miyelomeningosel",
    },
    {
      question:
        "Kaslarda yapısal veya metabolik bozukluklar sonucu güçsüzlükle seyreden kas hastalıklarına verilen genel isim nedir?",
      answer: "Miyopati",
    },
    {
      question:
        "Gözde ışığın doğru odaklanamaması sonucu uzaktaki nesnelerin bulanık görülmesiyle karakterize görme bozukluğu nedir?",
      answer: "Miyop",
    },
    {
      question:
        "Kemik iliğinde aşırı kan hücresi üretimiyle seyreden ve lösemi gibi kan hastalıklarına ilerleyebilen hastalık grubuna ne ad verilir?",
      answer: "Miyeloproliferatif hastalıklar",
    },
    {
      question:
        "Kaslarda ani, istemsiz ve ritmik kasılmalarla kendini gösteren hareket bozukluğu nedir?",
      answer: "Miyoklonus",
    },
    {
      question:
        "Omurilikte enflamasyon (iltihap) gelişmesi sonucu bacaklarda ve kollarda kuvvet kaybı, his kaybı gibi belirtilerle seyreden durum nedir?",
      answer: "Miyelitis transversa",
    },
    {
      question:
        "Kemik iliğinde anormal miyeloid hücre çoğalmasıyla gelişen, akut veya kronik formları olabilen kan kanseri nedir?",
      answer: "Miyeloid lösemi",
    },
    {
      question:
        "Kalp kasına kan taşıyan damarların tıkanması ya da daralması sonucu kalp kasının yeterli oksijen alamadığı durum nedir?",
      answer: "Miyokardiyal iskemi",
    },
    {
      question:
        "Kalp kasının yapısında veya fonksiyonunda bozulmaya yol açan ve kalbin pompalama gücünü etkileyen hastalık grubuna ne ad verilir?",
      answer: "Miyokardiyopati",
    },
  ],
  N: [
    {
      question:
        "Burun ve geniz bölgesinin viral enfeksiyonu sonucu gelişen üst solunum yolu enfeksiyonu nedir?",
      answer: "Nazofarenjit",
    },
    {
      question:
        "Geniz bölgesinde kötü huylu tümör oluşumu ile karakterize kanser türü nedir?",
      answer: "Nazofarengeal kanser",
    },
    {
      question:
        "Böbreklerde iltihaplanmaya bağlı olarak gelişen ve idrarda kan veya protein kaybıyla seyreden hastalık nedir?",
      answer: "Nefrit",
    },
    {
      question:
        "Böbreklerin protein kaybı ile seyreden, vücutta ödem ve yüksek kolesterol seviyeleriyle karakterize hastalığı nedir?",
      answer: "Nefrotik sendrom",
    },
    {
      question:
        "Böbreklerin iltihaplanması sonucu idrarda kan, protein ve hipertansiyon gibi belirtilerle seyreden klinik tablo nedir?",
      answer: "Nefritik sendrom",
    },
    {
      question:
        "Böbrek dokusunda kalsiyum birikimi sonucu oluşan ve böbrek fonksiyonlarını etkileyebilen hastalık nedir?",
      answer: "Nefrokalsinozis",
    },
    {
      question:
        "Böbreklerde mineral birikimi sonucu oluşan ve idrar yollarında tıkanıklığa yol açabilen hastalık nedir?",
      answer: "Nefrolitiazis (Böbrek taşı)",
    },
    {
      question:
        "Çocukluk çağında görülen, böbrek kaynaklı kötü huylu solid tümörün adı nedir?",
      answer: "Nefroblastom (Wilms tümörü)",
    },
    {
      question:
        "Böbreklerin su ve tuz dengesini düzenleyememesi sonucu aşırı idrar yapımıyla karakterize genetik hastalık nedir?",
      answer: "Nefrojenik diyabet insipidus",
    },
    {
      question:
        "Yeni doğan bebeklerde bağırsaklarda doku ölümü ve iltihaplanmayla seyreden ciddi gastrointestinal hastalık nedir?",
      answer: "Nekrotizan enterokolit",
    },
    {
      question:
        "Derin cilt ve yumuşak doku tabakalarının hızla yayılan bakteriyel enfeksiyonu ile karakterize ölümcül hastalık nedir?",
      answer: "Nekrotizan fasiit",
    },
    {
      question:
        "Akciğer dokusunun bakteriyel enfeksiyon sonrası nekroz (doku ölümü) ile parçalanmasıyla oluşan ciddi zatürre formu nedir?",
      answer: "Nekrotizan pnömoni",
    },
    {
      question:
        "Hücrelerin oksijen yetersizliği veya hasar sonucu ölmesiyle oluşan patolojik duruma ne ad verilir?",
      answer: "Nekroz",
    },
    {
      question:
        "Kontrolsüz hücre büyümesi ile karakterize iyi huylu veya kötü huylu tümörlere verilen genel ad nedir?",
      answer: "Neoplazmalar",
    },
    {
      question:
        "Yeni doğan bebekte düşük hemoglobin seviyeleri ile seyreden ve oksijen taşıma kapasitesini azaltan durum nedir?",
      answer: "Neonatal anemi",
    },
    {
      question:
        "Yeni doğanlarda kan şekeri düzeyinin tehlikeli şekilde düşük olmasıyla seyreden durum nedir?",
      answer: "Neonatal hipoglisemi",
    },
    {
      question:
        "Yeni doğan bebeklerde cilt ve gözlerde sarı renk değişimi ile seyreden fizyolojik veya patolojik durum nedir?",
      answer: "Neonatal sarılık",
    },
    {
      question:
        "Yeni doğanlarda bakteriyel enfeksiyonun kana yayılmasıyla gelişen ciddi, yaşamı tehdit eden durum nedir?",
      answer: "Neonatal sepsis",
    },
    {
      question:
        "Yeni doğan bebeklerde Clostridium tetani bakterisi ile enfeksiyon sonucu kas spazmları ve solunum yetmezliği ile seyreden hastalık nedir?",
      answer: "Neonatal tetanoz",
    },
    {
      question:
        "Kanser hücrelerinin beyin ve omurilik zarlarına yayılması sonucu gelişen ciddi metastatik hastalığa ne ad verilir?",
      answer: "Neoplastik menenjit",
    },
    {
      question:
        "Kanser veya kanser tedavisine bağlı olarak gelişen, kemik iliği baskılanmasına bağlı kansızlık durumu nedir?",
      answer: "Neoplastik anemi",
    },
    {
      question:
        "Çocukluk çağında görülen ve sinir dokusundan köken alan kötü huylu tümör nedir?",
      answer: "Neuroblastom",
    },
    {
      question:
        "Sinir kökenli ağrılarla kendini gösteren, ani ve şiddetli ağrı atakları ile karakterize hastalık nedir?",
      answer: "Nevralji",
    },
    {
      question:
        "Cilt üzerinde doğumsal veya sonradan oluşan renk değişimi veya şişlik içeren iyi huylu lezyonlara ne ad verilir?",
      answer: "Nevüs",
    },
    {
      question:
        "Burun tıkanıklığı, hafif ateş ve halsizlik gibi belirtilerle seyreden üst solunum yolu enfeksiyonu nedir?",
      answer: "Nezle",
    },
    {
      question:
        "B3 vitamini eksikliği sonucu gelişen ve ishal, dermatit, demans gibi belirtilerle seyreden hastalık nedir?",
      answer: "Niasin eksikliği (Pellagra)",
    },
    {
      question:
        "Gece saatlerinde sık idrara çıkma şikayetiyle kendini gösteren üriner sistem sorunu nedir?",
      answer: "Niktüri",
    },
    {
      question:
        "Gözlerin istemsiz ve ritmik şekilde sağa sola veya yukarı aşağı hareket etmesiyle karakterize durum nedir?",
      answer: "Nistagmus",
    },
    {
      question:
        "Aşırı nitrik oksit gazına maruz kalınması sonucu solunum yollarında tahriş ve ciddi zehirlenmeye yol açan durum nedir?",
      answer: "Nitrik oksit zehirlenmesi",
    },
    {
      question:
        "Trombositlerin sayısı normal olmasına rağmen işlev bozukluğu nedeniyle kanamaya yatkınlık gösteren kan hastalığı nedir?",
      answer: "Niteliksel trombosit bozuklukları",
    },
    {
      question:
        "Beyaz kan hücrelerinin sayısında değil, fonksiyonlarında görülen bozukluklarla enfeksiyonlara yatkınlığa yol açan durum nedir?",
      answer: "Niteliksel lökosit bozuklukları",
    },
    {
      question:
        "Kırmızı kan hücrelerinin yapısal veya fonksiyonel bozukluklarına bağlı olarak gelişen kan hastalıklarına ne ad verilir?",
      answer: "Niteliksel eritrosit bozuklukları",
    },
    {
      question:
        "Nitrojen dioksite aşırı maruz kalınması sonucu solunum sistemi üzerinde ciddi tahriş ve hasara neden olan zehirlenme türü nedir?",
      answer: "Nitrojen dioksit zehirlenmesi",
    },
    {
      question:
        "Gece saatlerinde artan astım semptomları ile karakterize solunum yolu hastalığı nedir?",
      answer: "Nokturnal astım",
    },
    {
      question:
        "Gece saatlerinde kan basıncının normalden yüksek seyretmesiyle karakterize hipertansiyon tipi nedir?",
      answer: "Nokturnal hipertansiyon",
    },
    {
      question:
        "Gıda ve su kaynaklı salgınlara neden olan, mide bulantısı, kusma ve ishal ile seyreden viral enfeksiyon nedir?",
      answer: "Norovirus enfeksiyonu",
    },
    {
      question:
        "Çocukluk çağında görülen, sinir dokusundan köken alan ve genellikle karın bölgesinde kitle oluşturan kötü huylu tümör nedir?",
      answer: "Nöroblastom",
    },
    {
      question:
        "Vücudun hormon üreten sinir hücrelerinden gelişen ve hem hormon hem tümöral belirtilerle seyreden tümör grubuna ne ad verilir?",
      answer: "Nöroendokrin tümörler",
    },
    {
      question:
        "Ciltte kahverengi lekeler ve çoklu iyi huylu sinir kılıfı tümörleriyle karakterize genetik hastalığın Tip 1 formu nedir?",
      answer: "Nörofibromatozis Tip 1",
    },
    {
      question:
        "İşitme siniri üzerinde iyi huylu tümörler ve denge kaybı ile seyreden genetik hastalığın Tip 2 formu nedir?",
      answer: "Nörofibromatozis Tip 2",
    },
    {
      question:
        "Mesane kaslarının sinir kontrolünün bozulması sonucu idrar tutamama veya idrar boşaltamama ile seyreden hastalık nedir?",
      answer: "Nörojenik mesane",
    },
    {
      question:
        "Kaslar ile sinirler arasındaki iletişimi etkileyen ve kas güçsüzlüğüyle seyreden hastalık grubuna ne ad verilir?",
      answer: "Nöromüsküler hastalıklar",
    },
    {
      question:
        "Sinirlerin hasar görmesi sonucu gelişen ve karıncalanma, yanma gibi belirtilerle seyreden sinir hastalıklarına ne ad verilir?",
      answer: "Nöropati",
    },
    {
      question:
        "Sinir hasarına bağlı olarak gelişen ve yanıcı, batıcı tarzda sürekli ağrı ile seyreden durum nedir?",
      answer: "Nöropatik ağrı",
    },
    {
      question:
        "Antipsikotik ilaçların yan etkisi olarak ortaya çıkan, kas sertliği, ateş ve otonom sinir sistemi bozukluklarıyla seyreden acil durum nedir?",
      answer: "Nöroleptik malign sendrom",
    },
    {
      question:
        "Beyin veya omurilikteki hasarlara bağlı olarak vücudun belirli bölgelerinde gelişen felç durumlarına genel olarak ne ad verilir?",
      answer: "Nörolojik felçler",
    },
    {
      question:
        "Beyin ve omuriliğin oluşumundaki doğumsal bozukluklar sonucu gelişen, spina bifida gibi anomalilere yol açan durum nedir?",
      answer: "Nöral tüp defekti",
    },
    {
      question:
        "Motor nöronların hasarlanması sonucu kas güçsüzlüğü ve refleks kaybı ile seyreden sinir sistemi hastalıklarına ne ad verilir?",
      answer: "Nöronopatiler",
    },
    {
      question:
        "Vücutta nötrofil adı verilen beyaz kan hücrelerinin sayısının düşmesiyle enfeksiyon riskinin arttığı durum nedir?",
      answer: "Nötropeni",
    },
    {
      question:
        "Nötropeni zemininde gelişen ve ateşin eşlik ettiği, ciddi enfeksiyon riskini gösteren acil klinik durum nedir?",
      answer: "Nötropenik ateş",
    },
    {
      question:
        "Sol böbrek veninin damarlar arasında sıkışması sonucu idrarda kanama ve yan ağrısıyla seyreden vasküler sendrom nedir?",
      answer: "Nutcracker sendromu",
    },
    {
      question:
        "Göz merceğinin çekirdeğinde yoğunlaşma ve sertleşme sonucu görme kaybı ile seyreden katarakt türü nedir?",
      answer: "Nükleer katarakt",
    },
    {
      question:
        "Göz merceğinin yaşa bağlı olarak sertleşmesi ve opaklaşması ile karakterize olan doğal süreç nedir?",
      answer: "Nükleer skleroz",
    },
    {
      question:
        "Beslenme yetersizliğine bağlı olarak demir, vitamin B12 veya folik asit eksikliği sonucu gelişen kansızlık türü nedir?",
      answer: "Nutrisyonel anemi",
    },
  ],
  O: [
    {
      question:
        "Vücutta aşırı yağ birikimi sonucu gelişen ve kalp hastalıkları, diyabet gibi sağlık sorunlarına yol açan durum nedir?",
      answer: "Obezite",
    },
    {
      question:
        "Kişinin sürekli tekrarlayan düşünceler (obsesyon) ve davranışlar (kompulsiyon) sergilemesiyle karakterize ruhsal bozukluk nedir?",
      answer: "Obsesif kompulsif bozukluk (OKB)",
    },
    {
      question:
        "Hava yollarının daralması sonucu nefes alıp vermede zorlukla seyreden kronik akciğer hastalıkları grubuna ne ad verilir?",
      answer: "Obstrüktif akciğer hastalığı",
    },
    {
      question:
        "Uyku sırasında üst solunum yolunun tıkanması sonucu horlama ve tekrarlayan solunum durmalarıyla seyreden sendrom nedir?",
      answer: "Obstrüktif uyku apnesi sendromu",
    },
    {
      question:
        "İdrar akışının böbreklerden mesaneye doğru engellenmesiyle gelişen idrar yolu tıkanıklığına ne ad verilir?",
      answer: "Obstrüktif üropati",
    },
    {
      question:
        "Safra yollarının tıkanması sonucu safra akışının bozulması ve sarılık gelişmesiyle karakterize hastalık nedir?",
      answer: "Obstrüktif jaundice (Safra yolu tıkanıklığına bağlı sarılık)",
    },
    {
      question:
        "Diş ve çevre dokulardan kaynaklanan enfeksiyonlara verilen genel ad nedir?",
      answer: "Odontojenik enfeksiyonlar",
    },
    {
      question:
        "İşitme kaybının odyolojik testlerle saptandığı ve işitme seviyesinde azalma ile seyreden durum nedir?",
      answer: "Odyolojik işitme kaybı",
    },
    {
      question:
        "Görme alanında geçici körlük veya ışık çakmaları ile seyreden migren tipi nedir?",
      answer: "Oküler migren",
    },
    {
      question:
        "Göz içi basıncının normalin üzerinde olması ancak henüz görme sinirinde hasar oluşturmamış durum nedir?",
      answer: "Oküler hipertansiyon",
    },
    {
      question:
        "Gözde travmaya bağlı olarak gelişen yaralanmalara genel olarak ne ad verilir?",
      answer: "Oküler travma",
    },
    {
      question:
        "Gözün pigment hücrelerinden kaynaklanan ve kötü huylu olabilen tümör türü nedir?",
      answer: "Oküler melanom",
    },
    {
      question:
        "Koku alma yetisinin bozulması veya kaybı ile karakterize durum nedir?",
      answer: "Olfaktör disfonksiyon",
    },
    {
      question:
        "Amniyotik sıvının gebelikte normalden az olmasıyla gelişen ve bebeğin gelişimini etkileyebilen durum nedir?",
      answer: "Oligohidramniyoz",
    },
    {
      question:
        "Sperm sayısında, hareketliliğinde ve şekil yapısında bozuklukla seyreden erkek infertilitesi durumuna ne ad verilir?",
      answer: "Oligoasthenoteratospermi",
    },
    {
      question:
        "Göbek kordonunun doğumdan önce karın duvarındaki açıklıktan dışarı çıkmasıyla oluşan doğumsal anomalinin adı nedir?",
      answer: "Omfalosel",
    },
    {
      question:
        "Omuz eklem kapsülünün sertleşmesi ve hareketin kısıtlanmasıyla seyreden ağrılı durum nedir?",
      answer: "Omuz donması (Adheziv kapsülit)",
    },
    {
      question:
        "Tırnaklarda mantar enfeksiyonu sonucu kalınlaşma, renk değişikliği ve kırılganlıkla seyreden hastalık nedir?",
      answer: "Onikomikoz (Tırnak mantarı)",
    },
    {
      question:
        "Tümörlerin salgıladığı maddeye bağlı olarak vücutta mineral dengesinin bozulması ve kemik yumuşamasına yol açan nadir durum nedir?",
      answer: "Onkogenik osteomalazi",
    },
    {
      question:
        "Kanser hastalarında tümörlerden salınan maddeler nedeniyle kan kalsiyum düzeyinin anormal şekilde yükselmesine ne ad verilir?",
      answer: "Onkolojik hiperkalsemi",
    },
    {
      question:
        "Göz sinirinin iltihaplanması sonucu ani görme kaybı ve göz hareketleriyle ağrı oluşmasına neden olan hastalık nedir?",
      answer: "Optik nörit",
    },
    {
      question:
        "Ağız içinde Candida mantarının aşırı çoğalması sonucu gelişen beyaz plaklarla seyreden enfeksiyon hastalığı nedir?",
      answer: "Oral kandidiyazis",
    },
    {
      question:
        "Kanser tedavileri veya enfeksiyonlar sonrası ağız mukozasında ağrılı yaralar ve iltihap oluşmasıyla seyreden durum nedir?",
      answer: "Oral mukozit",
    },
    {
      question:
        "Ağız mukozasında tüberküloz bakterisi enfeksiyonu sonucu gelişen nadir enfeksiyon hastalığı nedir?",
      answer: "Oral tüberküloz",
    },
    {
      question:
        "Göz çukuru (orbit) içinde gelişen iyi huylu veya kötü huylu tümörlere genel olarak ne ad verilir?",
      answer: "Orbit tümörleri",
    },
    {
      question:
        "Travma sonrası göz çukurunu oluşturan kemiklerin kırılması ile oluşan yaralanmaya ne ad verilir?",
      answer: "Orbit fraktürü",
    },
    {
      question:
        "Eklem kıkırdağının aşınması ve eklem ağrısı ile karakterize olan, yaşlanmaya bağlı en sık görülen eklem hastalığı nedir?",
      answer: "Osteoartrit (Kireçlenme)",
    },
    {
      question:
        "Kemikte gelişen, genellikle iyi huylu, kıkırdak kaplı kemiksi çıkıntıya ne ad verilir?",
      answer: "Osteokondrom",
    },
    {
      question:
        "Kemikte yavaş büyüyen, genellikle iyi huylu ve sık rastlanan bir kemik tümörü türü nedir?",
      answer: "Osteom",
    },
    {
      question:
        "Kemik dokusunun enfekte olması sonucu ağrı, şişlik ve ateş ile seyreden ciddi enfeksiyon hastalığı nedir?",
      answer: "Osteomiyelit (Kemik enfeksiyonu)",
    },
    {
      question:
        "Kemik dokusunda kan akımının bozulması sonucu kemik hücrelerinin ölmesiyle ortaya çıkan hastalık nedir?",
      answer: "Osteonekroz",
    },
    {
      question:
        "Kemik mineral yoğunluğunun normalin altına düşmesiyle karakterize, kırık riskini artıran durum nedir?",
      answer: "Osteopeni",
    },
    {
      question:
        "Kemik kütlesinde azalma ve kemik yapısında bozulma ile kırık riskinin arttığı metabolik kemik hastalığı nedir?",
      answer: "Osteoporoz",
    },
    {
      question:
        "Kemik dokusunda gelişen kötü huylu, agresif seyirli primer kemik kanseri türüne ne ad verilir?",
      answer: "Osteosarkom",
    },
    {
      question:
        "Orta kulakta sıvı birikimi veya enfeksiyon sonucu oluşan iltihabi durum nedir?",
      answer: "Otitis media (Orta kulak iltihabı)",
    },
    {
      question:
        "İç kulakta denge sağlayan otolit taşlarının yerinden oynaması sonucu baş dönmesi ile seyreden hastalık nedir?",
      answer: "Otolit hastalığı",
    },
    {
      question:
        "Mide mukozasının bağışıklık sistemi tarafından saldırıya uğraması sonucu gelişen ve B12 vitamini eksikliğine yol açan hastalık nedir?",
      answer: "Otoimmün gastrit",
    },
    {
      question:
        "Karaciğerin bağışıklık sistemi tarafından hedef alınarak iltihaplanması ile oluşan kronik karaciğer hastalığı nedir?",
      answer: "Otoimmün hepatit",
    },
    {
      question:
        "Bağışıklık sisteminin kendi kırmızı kan hücrelerini yok etmesiyle gelişen kansızlık türü nedir?",
      answer: "Otoimmün hemolitik anemi",
    },
    {
      question:
        "Pankreasın bağışıklık sistemi tarafından iltihaplanmasıyla seyreden nadir görülen kronik pankreas hastalığı nedir?",
      answer: "Otoimmün pankreatit",
    },
    {
      question:
        "Bağışıklık sisteminin merkezi sinir sistemine saldırarak çoklu beyin ve omurilik bölgelerinde inflamasyon oluşturduğu hastalık nedir?",
      answer: "Otoimmün polienkefalopati",
    },
    {
      question:
        "Bağışıklık sisteminin birden fazla eklemde iltihaplanmaya yol açmasıyla karakterize kronik romatizmal hastalık nedir?",
      answer: "Otoimmün poliartrit",
    },
    {
      question:
        "Bağışıklık sisteminin tiroid bezine saldırması sonucu tiroid fonksiyon bozukluklarıyla seyreden hastalık grubuna ne ad verilir?",
      answer: "Otoimmün tiroid hastalığı",
    },
    {
      question:
        "Kişinin kendi sesini normalden daha yüksek algılamasıyla karakterize işitsel rahatsızlık nedir?",
      answer: "Otofoni",
    },
    {
      question:
        "Orta kulakta kemiklerin anormal şekilde büyümesiyle işitme kaybına yol açan hastalık nedir?",
      answer: "Otoskleroz",
    },
    {
      question:
        "Kadın üreme organlarından biri olan yumurtalıklarda gelişen kötü huylu tümörlere ne ad verilir?",
      answer: "Over kanseri",
    },
    {
      question:
        "Yumurtalığın kendi etrafında dönerek kan akımının kesilmesine ve ani karın ağrısına yol açan acil durum nedir?",
      answer: "Over torsiyonu",
    },
    {
      question:
        "Yumurtalık içinde sıvı dolu keseciklerin oluşmasıyla meydana gelen iyi huylu lezyonlara genel olarak ne ad verilir?",
      answer: "Over kistleri",
    },
    {
      question:
        "Yumurtalık kistinin yırtılması sonucu ani başlayan alt karın ağrısına neden olan acil durum nedir?",
      answer: "Over kist rüptürü",
    },
    {
      question:
        "Yumurtalıkta iyi veya kötü huylu tümör gelişmesiyle oluşan kitlelere genel olarak ne ad verilir?",
      answer: "Over tümörleri",
    },
    {
      question:
        "Tüp bebek tedavisi gibi yardımcı üreme tekniklerinde yumurtalıkların aşırı uyarılması sonucu gelişen ciddi komplikasyon nedir?",
      answer: "Ovaryan hiperstimülasyon sendromu",
    },
    {
      question:
        "Rahim iç tabakasına benzeyen dokunun yumurtalıklarda yerleşerek kist oluşturmasıyla seyreden durum nedir?",
      answer: "Over endometriozisi",
    },
    {
      question:
        "Yumurtalık dokusunun kan dolaşımı bozulmadan kanama yapmasıyla oluşan, ani karın ağrısına neden olan jinekolojik acil durum nedir?",
      answer: "Over apopleksi",
    },
  ],
  P: [
    {
      question:
        "Kemiklerde anormal yeniden şekillenme ve zayıflamaya neden olan kronik kemik hastalığı nedir?",
      answer: "Paget hastalığı (Kemik hastalığı)",
    },
    {
      question:
        "Avuç içi bağ dokusunda kalınlaşmaya ve parmakların bükülmesine neden olan bağ dokusu hastalığı nedir?",
      answer: "Palmar fibromatozis",
    },
    {
      question:
        "Anksiyete atakları ile ani başlayan, yoğun korku ve bedensel belirtilerle karakterize ruhsal bozukluk nedir?",
      answer: "Panik bozukluk",
    },
    {
      question:
        "Pankreas içinde sıvı dolu, inflamasyon sonrası oluşan iyi huylu kistik yapıya ne ad verilir?",
      answer: "Pankreatik psödokist",
    },
    {
      question:
        "Pankreas hücrelerinden kaynaklanan ve hızlı ilerleyebilen kötü huylu tümör nedir?",
      answer: "Pankreas kanseri",
    },
    {
      question:
        "Pankreasın kendi sindirim enzimleri nedeniyle iltihaplanması sonucu oluşan hastalık nedir?",
      answer: "Pankreatit",
    },
    {
      question:
        "Cilt ve mukozalarda siğil oluşumuna neden olan, cinsel yolla da bulaşabilen viral enfeksiyon nedir?",
      answer: "Papillom virüs enfeksiyonu (HPV)",
    },
    {
      question:
        "Kanserle ilişkili olarak bağışıklık sisteminin aşırı tepkime göstermesi sonucu gelişen sistemik belirtilere ne ad verilir?",
      answer: "Paraneoplastik sendromlar",
    },
    {
      question:
        "Burun ve sinüs boşluklarında gelişen iyi huylu veya kötü huylu tümörlere ne ad verilir?",
      answer: "Paranazal sinüs tümörleri",
    },
    {
      question:
        "Belden aşağısındaki vücut bölgelerinde his ve motor kaybıyla seyreden felç türü nedir?",
      answer: "Parapleji",
    },
    {
      question:
        "Paratiroid bezinde gelişen ve aşırı parathormon salgılayan iyi huylu tümöre ne ad verilir?",
      answer: "Paratiroid adenom",
    },
    {
      question:
        "Paratiroid bezinden köken alan nadir görülen kötü huylu tümör nedir?",
      answer: "Paratiroid kanseri",
    },
    {
      question:
        "Paratiroid bezlerinin hastalanması sonucu vücutta kalsiyum ve fosfor dengesinin bozulmasıyla seyreden hastalık grubuna ne ad verilir?",
      answer: "Paratiroid hastalıkları",
    },
    {
      question:
        "Vücutta çeşitli organ ve dokularda parazitlerin neden olduğu enfeksiyonlara genel olarak ne ad verilir?",
      answer: "Parazitik enfeksiyonlar",
    },
    {
      question:
        "Parazit kaynaklı bağırsak enfeksiyonları sonucu gelişen ve genellikle ishal ile seyreden hastalık nedir?",
      answer: "Parazitik ishal",
    },
    {
      question:
        "Gözde parazitler nedeniyle oluşan ve görme kaybına yol açabilen enfeksiyon türü nedir?",
      answer: "Parazitik göz enfeksiyonları",
    },
    {
      question:
        "Beyin dokusunda parazitlerin yerleşmesi sonucu oluşan ve ciddi nörolojik belirtilerle seyreden enfeksiyon nedir?",
      answer: "Parazitik beyin enfeksiyonları",
    },
    {
      question:
        "Beyin hücrelerinde dopamin azalmasına bağlı olarak titreme, hareketlerde yavaşlama ve kas sertliğiyle seyreden sinir sistemi hastalığı nedir?",
      answer: "Parkinson hastalığı",
    },
    {
      question:
        "Tükürük bezlerinden biri olan parotis bezinde gelişen iyi veya kötü huylu tümörlere ne ad verilir?",
      answer: "Parotis bezi tümörleri",
    },
    {
      question:
        "Beynin bir bölümünden kaynaklanan ve kısmi nörolojik belirtilerle seyreden epilepsi türüne ne ad verilir?",
      answer: "Partiyal epilepsi",
    },
    {
      question:
        "Çocuklarda elmacık kırmızılığı hastalığına neden olan, döküntü ve hafif ateşle seyreden viral enfeksiyon nedir?",
      answer: "Parvovirüs B19 enfeksiyonu",
    },
    {
      question:
        "Diz kapağı kemiğinin kırılması sonucu diz hareketinde kısıtlılık ve ağrı ile seyreden ortopedik yaralanma nedir?",
      answer: "Patella kırığı",
    },
    {
      question:
        "Kemik veya organ dokusunun, normal kuvvetlere dayanamayarak zayıflıktan dolayı kırılması durumuna ne ad verilir?",
      answer: "Patolojik kırık",
    },
    {
      question:
        "Kadın üreme organlarında enfeksiyon sonucu oluşan ve alt karın ağrısı, ateş gibi belirtilerle seyreden hastalık nedir?",
      answer: "Pelvik inflamatuvar hastalık",
    },
    {
      question:
        "Rahim, mesane veya rektum gibi pelvik organların yer değiştirmesi ve vajinadan dışarı sarkmasıyla oluşan durum nedir?",
      answer: "Pelvik organ prolapsusu",
    },
    {
      question:
        "Kronik alt karın ağrısı ile seyreden ve belirgin bir neden bulunamayan sendroma ne ad verilir?",
      answer: "Pelvik ağrı sendromu",
    },
    {
      question:
        "Pelvis kemiklerinde travmaya bağlı kırıklar sonucu gelişen ciddi ortopedik yaralanmalara ne ad verilir?",
      answer: "Pelvis kırıkları",
    },
    {
      question:
        "Peniste kötü huylu tümör oluşumuna neden olan nadir görülen kanser türü nedir?",
      answer: "Penis kanseri",
    },
    {
      question:
        "Penis sertleşmiş haldeyken travmaya bağlı olarak korpus kavernozum dokusunda yırtılmaya neden olan acil durum nedir?",
      answer: "Penil fraktür",
    },
    {
      question:
        "Diş köklerinde bakteriyel enfeksiyon sonucu oluşan ve diş çevresinde ağrıya neden olan irin dolu lezyon nedir?",
      answer: "Periapikal apseler",
    },
    {
      question:
        "Vücutta özellikle bacaklarda damar daralması nedeniyle kan akımının azalmasıyla gelişen dolaşım bozukluğu nedir?",
      answer: "Periferik arter hastalığı",
    },
    {
      question:
        "Sinirlerin hasar görmesi sonucu oluşan, uyuşma, karıncalanma ve ağrı ile seyreden sinir hastalığı nedir?",
      answer: "Periferik nöropati",
    },
    {
      question:
        "Kalbi çevreleyen zarın iltihaplanması sonucu göğüs ağrısı ve nefes darlığına neden olan hastalık nedir?",
      answer: "Perikardit",
    },
    {
      question:
        "Kalp zarında anormal sıvı birikimi sonucu kalp üzerinde baskı oluşturan duruma ne ad verilir?",
      answer: "Perikardiyal effüzyon",
    },
    {
      question:
        "Kalbin etrafında aşırı sıvı birikmesi sonucu kalbin dolumunu engelleyerek ciddi dolaşım bozukluğuna neden olan acil durum nedir?",
      answer: "Perikard tamponadı",
    },
    {
      question:
        "Doğum sırasında bebeğin yeterli oksijen alamaması sonucu gelişen ve beyin hasarına yol açabilen durum nedir?",
      answer: "Perinatal asfiksi",
    },
    {
      question:
        "Doğum öncesinde veya sırasında bebeğin oksijen eksikliğine bağlı olarak gelişen beyin ve organ hasarına ne ad verilir?",
      answer: "Perinatal hipoksik hasar",
    },
    {
      question:
        "Karın boşluğunu örten zarın (periton) enfeksiyon veya iltihaplanması sonucu gelişen ciddi karın içi enfeksiyon nedir?",
      answer: "Peritonit",
    },
    {
      question:
        "B12 vitamini eksikliğine bağlı olarak gelişen ve kırmızı kan hücresi üretiminde bozulma ile seyreden anemi türü nedir?",
      answer: "Pernisiyöz anemi",
    },
    {
      question:
        "Peniste anormal fibröz doku oluşumu sonucu eğrilik ve ağrı ile seyreden hastalık nedir?",
      answer: "Peyronie hastalığı",
    },
    {
      question:
        "Peyronie hastalığında peniste oluşan sert fibrotik dokulara ne ad verilir?",
      answer: "Peyronie plakları",
    },
    {
      question:
        "Mide veya onikiparmak bağırsağında mide asidine bağlı olarak oluşan yara hastalığına ne ad verilir?",
      answer: "Peptik ülser hastalığı",
    },
    {
      question:
        "Peyote kaktüsünün aşırı tüketimi sonucu gelişen halüsinasyon, mide bulantısı ve toksik etkilerle seyreden durum nedir?",
      answer: "Peyote zehirlenmesi",
    },
    {
      question:
        "Kafatası ve yüz kemiklerinde şekil bozukluklarına yol açan doğumsal sendrom nedir?",
      answer: "Pfeiffer sendromu",
    },
    {
      question:
        "Yumuşak dokular arasında yayılan, genellikle bakteriyel kaynaklı akut iltihabi enfeksiyon nedir?",
      answer: "Phlegmon",
    },
    {
      question:
        "Meme dokusunda gelişen, iyi huylu veya kötü huylu olabilen nadir tümör türü nedir?",
      answer: "Phyllodes tümörü",
    },
    {
      question:
        "Toprak, kil veya besin değeri olmayan maddeleri yeme isteğiyle karakterize yeme bozukluğu nedir?",
      answer: "Pika sendromu",
    },
    {
      question:
        "Karın içi büyük damarlardan biri olan portal vende gelişen enfeksiyon ve iltihaba ne ad verilir?",
      answer: "Pileflebit (Portal ven enfeksiyonu)",
    },
    {
      question:
        "Böbrek dokusunun bakteriyel enfeksiyonu sonucu ateş, yan ağrısı ve idrar yolu enfeksiyonu bulguları ile seyreden hastalık nedir?",
      answer: "Piyelonefrit",
    },
    {
      question:
        "Eklem boşluğunda bakteriyel enfeksiyon oluşması sonucu şiddetli ağrı ve hareket kısıtlılığı ile seyreden hastalık nedir?",
      answer: "Piyojenik artrit",
    },
    {
      question:
        "Hipofiz bezinde gelişen ve hormon salgılayan veya baskılayan iyi huylu tümöre ne ad verilir?",
      answer: "Pitüiter adenom",
    },
    {
      question:
        "Hipofiz bezinde kanama veya infarktüs sonucu ani hormonal yetersizlik ve baş ağrısı ile seyreden acil durum nedir?",
      answer: "Pitüiter apopleksi",
    },
    {
      question:
        "Gebelik sırasında plasentanın doğumdan önce rahim ağzını kapatması sonucu oluşan doğum komplikasyonu nedir?",
      answer: "Plasenta previa",
    },
    {
      question:
        "Gebelikte plasentanın rahim duvarından erken ayrılması sonucu ciddi kanama ve fetal distresle seyreden acil durum nedir?",
      answer: "Plasental abruption (Plasentanın erken ayrılması)",
    },
    {
      question:
        "En ağır sıtma formuna neden olan ve hayatı tehdit eden Plasmodium türü enfeksiyonu nedir?",
      answer: "Plasmodium falciparum enfeksiyonu",
    },
    {
      question:
        "Tekrarlayıcı sıtma ataklarına neden olabilen, karaciğerde uzun süre uyuyabilen Plasmodium türü enfeksiyonu nedir?",
      answer: "Plasmodium vivax enfeksiyonu",
    },
    {
      question:
        "Akciğer zarları arasındaki iltihaplanma sonucu göğüs ağrısı ve nefes almada güçlük ile seyreden hastalık nedir?",
      answer: "Plörezi",
    },
    {
      question:
        "Streptococcus pneumoniae bakterisinin neden olduğu, toplum kökenli zatürre (pnömoni) formu nedir?",
      answer: "Pneumokok pnömonisi",
    },
    {
      question:
        "Akciğerlerin enfeksiyon nedeniyle iltihaplanması sonucu gelişen, ateş, öksürük ve nefes darlığı ile seyreden hastalık nedir?",
      answer: "Pnömoni",
    },
    {
      question:
        "Uzun süreli toz maruziyeti sonucu akciğerlerde fibrozis gelişmesiyle karakterize meslek hastalığı nedir?",
      answer: "Pnömokonyoz",
    },
    {
      question:
        "Hava kaçağı nedeniyle mediasten boşluğunda hava birikmesiyle oluşan, göğüs ağrısı ve solunum sıkıntısıyla seyreden durum nedir?",
      answer: "Pnömomediastinum",
    },
    {
      question:
        "Akciğer zarları arasında hava birikmesi sonucu akciğerin sönmesine yol açan ve acil müdahale gerektiren durum nedir?",
      answer: "Pnömotoraks",
    },
    {
      question:
        "Ciltte düzensiz pigmentasyon, incelme ve damar görünümünde artış ile karakterize deri hastalığı nedir?",
      answer: "Poikiloderma",
    },
    {
      question:
        "Yumurtalıklarda çok sayıda küçük kist oluşumu, hormonal dengesizlik ve adet düzensizliği ile seyreden hastalık nedir?",
      answer: "Polikistik over sendromu (PCOS)",
    },
    {
      question:
        "Böbreklerde çok sayıda kistik yapı oluşmasıyla böbrek fonksiyonlarının bozulduğu genetik hastalık nedir?",
      answer: "Polikistik böbrek hastalığı",
    },
    {
      question:
        "Birden fazla periferik sinirin etkilenmesi sonucu gelişen ve güçsüzlük, his kaybı gibi belirtilerle seyreden sinir hastalığı nedir?",
      answer: "Polinöropati",
    },
    {
      question:
        "Kemik iliğinde kırmızı kan hücresi üretiminin aşırı artması sonucu kanın koyulaştığı ve damar tıkanıklığı riskinin arttığı hastalık nedir?",
      answer: "Polisitemi vera",
    },
    {
      question:
        "Kas iltihabı ile karakterize, kas güçsüzlüğü ve ağrıya neden olan otoimmün kas hastalığı nedir?",
      answer: "Polimiyozit",
    },
    {
      question:
        "Alerjik reaksiyonlar veya enfeksiyonlar sonucu ciltte döküntü ve kızarıklıkla seyreden cilt hastalığı nedir?",
      answer: "Polimorfik eritem",
    },
    {
      question:
        "Çoklu periferik sinirlerin inflamasyonu sonucu gelişen ve his kaybı ile güçsüzlüğe yol açan sinir hastalığı nedir?",
      answer: "Polinörit",
    },
    {
      question:
        "Sinir hasarına bağlı olarak gelişen yanıcı, batıcı tarzda kalıcı sinir ağrısına ne ad verilir?",
      answer: "Polinöropatik ağrı",
    },
    {
      question:
        "Birden fazla eklemde eş zamanlı iltihaplanmayla seyreden romatizmal hastalık tablosu nedir?",
      answer: "Poliartrit",
    },
    {
      question:
        "Vücutta aşırı kırmızı kan hücresi üretimi sonucu kan hacminin artmasıyla seyreden durum nedir?",
      answer: "Poliglobuli",
    },
    {
      question:
        "Çocuklarda felce neden olan ve poliovirüs enfeksiyonu sonucu gelişen bulaşıcı hastalık nedir?",
      answer: "Polio (Çocuk felci)",
    },
    {
      question:
        "Orta ve küçük arterlerin iltihaplanması ile seyreden, çoklu organ tutulumuna neden olabilen damar hastalığı nedir?",
      answer: "Polyarteritis nodosa",
    },
    {
      question:
        "Diz arkasında yer alan popliteal arterde baloncuk şeklinde genişleme ile karakterize damar hastalığı nedir?",
      answer: "Popliteal arter anevrizması",
    },
    {
      question:
        "Karaciğere gelen portal venin basıncının artması sonucu yemek borusu varisleri ve asit oluşumu ile seyreden hastalık nedir?",
      answer: "Portal hipertansiyon",
    },
    {
      question:
        "Karaciğere kan taşıyan portal venin pıhtı ile tıkanması sonucu gelişen ciddi damar hastalığı nedir?",
      answer: "Portal ven trombozu",
    },
  ],
  R: [
    {
      question:
        "Çizgili kaslardan köken alan, çocuklarda sık görülen kötü huylu yumuşak doku tümörüne ne ad verilir?",
      answer: "Rabdomiyosarkom",
    },
    {
      question:
        "Omurilikten çıkan sinir köklerinin bası veya zedelenmesine bağlı olarak ağrı ve his kaybı ile seyreden durum nedir?",
      answer: "Radikülopati",
    },
    {
      question:
        "Karın bölgesine uygulanan radyoterapi sonrası bağırsaklarda inflamasyon ve fonksiyon bozukluğu ile seyreden hastalık nedir?",
      answer: "Radiasyon enteriti",
    },
    {
      question:
        "Göğüs bölgesine radyoterapi sonrası akciğer dokusunda iltihap ve hasar gelişmesiyle ortaya çıkan hastalık nedir?",
      answer: "Radiasyon pnömonisi",
    },
    {
      question:
        "Dirsek ve ön kol kemikleri olan radius ile ulnanın doğuştan kaynaşması sonucu hareket kısıtlılığı ile seyreden durum nedir?",
      answer: "Radioulnar sinostoz",
    },
    {
      question:
        "Soğuk veya stres etkisiyle parmaklarda renk değişimi (beyaz-mavi-kırmızı) ve kan akımı bozukluğu ile seyreden damar hastalığı nedir?",
      answer: "Raynaud hastalığı",
    },
    {
      question:
        "Başka bir hastalığa ikincil olarak gelişen parmaklarda soğukla renk değişimi ile seyreden damar spazmı durumuna ne ad verilir?",
      answer: "Raynaud fenomeni",
    },
    {
      question:
        "İdrar yolu veya bağırsak enfeksiyonlarını takiben eklemlerde iltihap gelişmesiyle karakterize romatizmal hastalık nedir?",
      answer: "Reaktif artrit",
    },
    {
      question:
        "Yemekten sonra aşırı insülin salınımı nedeniyle kandaki şeker düzeyinin anormal derecede düşmesiyle oluşan durum nedir?",
      answer: "Reaktif hipoglisemi",
    },
    {
      question:
        "İlaç tedavisine rağmen kontrol altına alınamayan ve sık nöbetlerle seyreden epilepsi türüne ne ad verilir?",
      answer: "Refrakter epilepsi",
    },
    {
      question:
        "Mide asidinin yemek borusuna geri kaçması sonucu göğüs yanması ve yutma güçlüğü gibi belirtilerle seyreden hastalık nedir?",
      answer: "Reflü hastalığı (Gastroözofageal reflü)",
    },
    {
      question:
        "Gelişim geriliği veya daha önce kazanılmış yetilerin kaybı ile karakterize çocukluk çağı nörolojik sendromlarına ne ad verilir?",
      answer: "Regresyon sendromları",
    },
    {
      question:
        "Kalın bağırsağın son kısmında gelişen kötü huylu tümöre ne ad verilir?",
      answer: "Rektal kanser",
    },
    {
      question:
        "Rektumun (kalın bağırsağın son kısmı) anüsten dışarı çıkmasıyla karakterize durum nedir?",
      answer: "Rektal prolapsus",
    },
    {
      question:
        "Böbreklerin yapısal veya fonksiyonel doğumsal anormalliklerine genel olarak ne ad verilir?",
      answer: "Renal anomali",
    },
    {
      question:
        "Böbreğe kan taşıyan atardamarın daralması sonucu yüksek tansiyon ve böbrek fonksiyon kaybına neden olan hastalık nedir?",
      answer: "Renal arter stenozu",
    },
    {
      question:
        "Böbreklerde gelişen en sık görülen kötü huylu tümör türü nedir?",
      answer: "Renal hücreli karsinom",
    },
    {
      question:
        "Böbrekte sıvı dolu keseciklerin oluşmasıyla karakterize genellikle iyi huylu oluşuma ne ad verilir?",
      answer: "Renal kist",
    },
    {
      question:
        "Böbrek havuzcuğunda gelişen ve idrar yollarına yayılabilen kötü huylu tümör nedir?",
      answer: "Renal pelvis kanseri",
    },
    {
      question:
        "Böbreklerde taş oluşumu sonucu idrar akışının engellenmesi ve ağrıyla seyreden hastalık nedir?",
      answer: "Renal taş hastalığı",
    },
    {
      question:
        "Böbreği besleyen damarların pıhtı ile tıkanması sonucu böbrek dokusunda hasar gelişmesine ne ad verilir?",
      answer: "Renal tromboz",
    },
    {
      question:
        "Böbrek tübüllerinin asit-baz dengesini sağlayamaması sonucu kanın asidik hale geldiği böbrek hastalığı nedir?",
      answer: "Renal tübüler asidoz",
    },
    {
      question:
        "Böbreklerin atık maddeleri süzme işlevini yapamaması sonucu vücutta toksin birikmesiyle seyreden durum nedir?",
      answer: "Renal yetmezlik",
    },
    {
      question:
        "Vücutta karbondioksit birikimi nedeniyle kanın asidik hale gelmesiyle ortaya çıkan solunum bozukluğu nedir?",
      answer: "Respiratuvar asidoz",
    },
    {
      question:
        "Aşırı nefes alıp verme (hiperventilasyon) sonucu kandaki karbondioksit düzeyinin düşmesiyle gelişen durum nedir?",
      answer: "Respiratuvar alkaloz",
    },
    {
      question:
        "Solunum durması sonucu oksijen alımının kesilmesiyle hayatı tehdit eden acil duruma ne ad verilir?",
      answer: "Respiratuvar arrest",
    },
    {
      question:
        "Yeni doğanlarda akciğerlerin yeterince gelişmemesi sonucu ciddi solunum yetmezliği ile seyreden sendrom nedir?",
      answer: "Respiratuvar distress sendromu",
    },
    {
      question:
        "Solunum yollarında papillomların (iyi huylu tümörlerin) gelişmesiyle nefes almayı zorlaştıran nadir hastalık nedir?",
      answer: "Respiratuvar papillomatozis",
    },
    {
      question:
        "Retinanın gözün arka duvarından ayrılması sonucu ani görme kaybı ile seyreden ciddi göz hastalığı nedir?",
      answer: "Retina dekolmanı",
    },
    {
      question:
        "Retina damarlarından kanama olması sonucu göz içinde kan birikimi ve görme kaybıyla seyreden durum nedir?",
      answer: "Retina hemorajisi",
    },
    {
      question:
        "Gözün arka kısmındaki retina damarlarının tıkanması sonucu ani görme kaybı ile seyreden durum nedir?",
      answer: "Retina damar tıkanıklığı",
    },
    {
      question:
        "Retinada bakteri, virüs veya mantar gibi enfeksiyon etkenlerine bağlı gelişen iltihaplanmaya ne ad verilir?",
      answer: "Retina enfeksiyonu",
    },
    {
      question:
        "Retina dokusunda iyi veya kötü huylu tümörlerin gelişmesiyle karakterize göz hastalığı nedir?",
      answer: "Retina tümörleri",
    },
    {
      question:
        "Retina hücrelerinde ilerleyici dejenerasyon sonucu gece körlüğü ve görme kaybı ile seyreden kalıtsal hastalık nedir?",
      answer: "Retinitis pigmentosa",
    },
    {
      question:
        "Çocukluk çağında retinanın kötü huylu tümörü olarak gelişen, genellikle genetik kökenli göz kanseri nedir?",
      answer: "Retinoblastom",
    },
    {
      question:
        "Retinanın hasarlanması sonucu görme bozukluğu ile seyreden hastalıkların genel adına ne ad verilir?",
      answer: "Retinopati",
    },
    {
      question:
        "Karın arka duvarında anormal fibröz doku birikimiyle organlara baskı yapan nadir hastalık nedir?",
      answer: "Retroperitoneal fibrozis",
    },
    {
      question:
        "Karın arka boşluğunda damar yırtılması veya travma sonucu gelişen kan birikimi durumuna ne ad verilir?",
      answer: "Retroperitoneal hematom",
    },
    {
      question:
        "Soğuk maruziyetiyle parmaklarda renk değişimi, uyuşma ve ağrı ile seyreden dolaşım bozukluğu nedir?",
      answer: "Raynaud sendromu",
    },
    {
      question:
        "Çocuklarda viral enfeksiyonlar sonrası gelişen ve karaciğer ile beyinde şişmeye neden olan nadir ama ciddi sendrom nedir?",
      answer: "Reye sendromu",
    },
    {
      question:
        "Rektum ve vajina arasında anormal bir kanal oluşarak dışkının vajinadan gelmesine neden olan durum nedir?",
      answer: "Rektovajinal fistül",
    },
    {
      question:
        "Kas dokusunun hızlı parçalanması sonucu kana protein salınımı ve böbrek yetmezliği riskiyle seyreden ciddi durum nedir?",
      answer: "Rhabdomiyoliz",
    },
    {
      question:
        "B2 vitamini eksikliği sonucu ağız kenarında çatlaklar, ciltte döküntü ve yorgunlukla seyreden durum nedir?",
      answer: "Riboflavin eksikliği",
    },
    {
      question:
        "Çocuklarda D vitamini eksikliğine bağlı kemiklerde yumuşama ve şekil bozuklukları ile seyreden hastalık nedir?",
      answer: "Rickets (Raşitizm)",
    },
    {
      question:
        "Burun ve geniz bölgesinde gelişen kötü huylu tümör türü nedir?",
      answer: "Rinofaringeal karsinom",
    },
    {
      question:
        "Üst solunum yolu enfeksiyonlarının sık nedeni olan, soğuk algınlığına yol açan viral enfeksiyon nedir?",
      answer: "Rinovirüs enfeksiyonu",
    },
    {
      question:
        "Eklemlerde ağrı, şişlik ve hareket kısıtlılığı ile seyreden kronik otoimmün romatizmal hastalık nedir?",
      answer: "Romatoid artrit",
    },
    {
      question:
        "Romatoid artritte gelişebilen ve küçük kan damarlarını etkileyerek dokularda hasara yol açan inflamatuvar durum nedir?",
      answer: "Romatoid vaskülit",
    },
  ],
  S: [
    {
      question:
        "Omurganın sakrum bölgesinde meydana gelen kırığa ne ad verilir?",
      answer: "Sakral kırık",
    },
    {
      question:
        "Sakroiliak eklemlerin iltihaplanması sonucu kalça ve bel ağrısı ile seyreden hastalık nedir?",
      answer: "Sakroileit",
    },
    {
      question:
        "Yeni doğanlarda kuyruk sokumu bölgesinde gelişen genellikle iyi huylu doğumsal tümör nedir?",
      answer: "Sakrokoksigeal teratom",
    },
    {
      question:
        "Kemik, kas, yağ gibi bağ dokulardan kaynaklanan kötü huylu tümörlere genel olarak ne ad verilir?",
      answer: "Sarkom",
    },
    {
      question:
        "Cilt ve gözlerde sarı renk değişimi ile karakterize, kandaki bilirubin düzeyinin artmasıyla oluşan durum nedir?",
      answer: "Sarılık (Jaundice)",
    },

    {
      question:
        "Sinir kılıfından kaynaklanan genellikle iyi huylu tümörlere ne ad verilir?",
      answer: "Schwannom",
    },
    {
      question:
        "Vücudun enfeksiyona aşırı yanıt vererek organ fonksiyon bozukluğuna yol açtığı yaşamı tehdit eden durum nedir?",
      answer: "Sepsis",
    },
    {
      question:
        "Bir eklem boşluğunun bakteri enfeksiyonu ile iltihaplanması sonucu ağrı ve şişlik gelişen hastalık nedir?",
      answer: "Septik artrit",
    },
    {
      question:
        "Enfeksiyona bağlı olarak kan basıncının aşırı düşmesi ve organ yetmezliği ile seyreden ciddi acil durum nedir?",
      answer: "Septik şok",
    },
    {
      question:
        "Orta kulakta sıvı birikimi sonucu işitme kaybı ve dolgunluk hissi ile seyreden durum nedir?",
      answer: "Seröz otitis media",
    },

    {
      question:
        "Beyincikte denge ve koordinasyon kaybına neden olan yürüme bozukluğu durumuna ne ad verilir?",
      answer: "Serebellar ataksi",
    },
    {
      question:
        "Beyincikte kanama oluşması sonucu ani denge kaybı, baş dönmesi ve bulantı ile seyreden acil durum nedir?",
      answer: "Serebellar hematom",
    },
    {
      question:
        "Beyincikte gelişen iyi huylu veya kötü huylu tümörlere genel olarak ne ad verilir?",
      answer: "Serebellar tümör",
    },
    {
      question:
        "Beyin damarlarında anormal baloncuk oluşumu sonucu kanama riski taşıyan damar hastalığı nedir?",
      answer: "Serebral anevrizma",
    },
    {
      question:
        "Vücudun başka bir bölgesinden kopan pıhtının beyindeki damarı tıkayarak felç oluşturduğu durum nedir?",
      answer: "Serebral emboli",
    },
    {
      question:
        "Beyindeki damarların yırtılması sonucu beyin dokusu içine kanama oluşmasına ne ad verilir?",
      answer: "Serebral hemoraji (Beyin kanaması)",
    },
    {
      question:
        "Doğum öncesi, sırası veya sonrasında beyinde oluşan hasara bağlı kas hareketlerinin kalıcı olarak bozulduğu nörolojik hastalık nedir?",
      answer: "Serebral palsi",
    },
    {
      question:
        "Beyin damarlarının pıhtı ile tıkanması sonucu kan akışının kesilmesiyle oluşan felç türüne ne ad verilir?",
      answer: "Serebral tromboz",
    },
    {
      question:
        "Beyin dokusunda enfeksiyon sonucu iltihaplanma gelişmesiyle ortaya çıkan ciddi nörolojik hastalık nedir?",
      answer: "Serebrit",
    },
    {
      question:
        "Beyin damarlarında daralma, tıkanıklık veya kanama gibi nedenlerle gelişen her türlü beyin damar hastalıklarına genel olarak ne ad verilir?",
      answer: "Serebrovasküler hastalık",
    },
    {
      question:
        "Baş bölgesinde hissedilen ağrıya genel olarak verilen tıbbi terim nedir?",
      answer: "Sefalalji (Baş ağrısı)",
    },
    {
      question:
        "Beyin fonksiyonlarının çeşitli nedenlerle bozulması sonucu gelişen bilinç değişikliği ve nörolojik belirtilerle seyreden durum nedir?",
      answer: "Sefalopati",
    },
    {
      question:
        "Kanda şeker düşüklüğüne bağlı olarak titreme, terleme, bilinç değişikliği gibi belirtilerle seyreden durum nedir?",
      answer: "Semptomatik hipoglisemi",
    },
    {
      question:
        "Başka bir hastalık nedeniyle gelişen ve semptomlarla kendini gösteren ikincil hipertansiyon türü nedir?",
      answer: "Semptomatik hipertansiyon",
    },
    {
      question:
        "Başka bir beyin hastalığı veya sistemik hastalık nedeniyle gelişen ve nöbetlerle seyreden epilepsi türü nedir?",
      answer: "Semptomatik epilepsi",
    },
    {
      question:
        "Kalbin normalden daha yavaş atması ve buna bağlı semptomların ortaya çıktığı durum nedir?",
      answer: "Semptomatik bradikardi",
    },
    {
      question:
        "Kalbin normalden daha hızlı atması ve buna bağlı semptomların ortaya çıktığı durum nedir?",
      answer: "Semptomatik taşikardi",
    },
    {
      question:
        "Aort ve pulmoner kapak gibi yarımay şeklindeki kalp kapaklarının yapısal hastalıklarına ne ad verilir?",
      answer: "Semilunar kapak hastalıkları",
    },
    {
      question:
        "Beyne giden kan akımının geçici olarak azalması sonucu kısa süreli bilinç kaybı ile seyreden durum nedir?",
      answer: "Senkop",
    },
    {
      question:
        "İleri yaşlarda beyin hücrelerinin kaybı sonucu gelişen, unutkanlık ve bilişsel işlevlerde azalma ile seyreden hastalık nedir?",
      answer: "Senil demans",
    },
    {
      question:
        "Beyin dokusunda irin dolu boşluk oluşmasıyla karakterize ciddi enfeksiyon hastalığı nedir?",
      answer: "Serebral abses",
    },
    {
      question:
        "Beyin dokusunda sıvı birikimi sonucu beyin basıncının artması ile seyreden hayati risk taşıyan durum nedir?",
      answer: "Serebral ödem",
    },
    {
      question: "Rahim ağzında gelişen kötü huylu tümör türüne ne ad verilir?",
      answer: "Servikal kanser",
    },
    {
      question:
        "Boyun omurlarında dejeneratif değişiklikler sonucu gelişen ağrı, hareket kısıtlılığı ve sinir basısı ile seyreden hastalık nedir?",
      answer: "Servikal spondiloz",
    },
    {
      question:
        "Rahim ağzı dokusunun iltihaplanması sonucu gelişen, akıntı ve ağrı ile seyreden hastalık nedir?",
      answer: "Servisit",
    },
    {
      question:
        "Cinsel yolla bulaşan ve Treponema pallidum bakterisinin neden olduğu kronik enfeksiyon hastalığı nedir?",
      answer: "Sifiliz (Frengi)",
    },
    {
      question:
        "Burun ve sinüs boşluklarının enfekte olmasıyla gelişen, baş ağrısı ve burun tıkanıklığı ile seyreden hastalık nedir?",
      answer: "Sinüzit",
    },
    {
      question:
        "Kalp ritminin normalden daha yavaş olduğu, sinüs düğümünden kaynaklanan ritim bozukluğu nedir?",
      answer: "Sinüs bradikardisi",
    },
    {
      question:
        "Sinüs düğümünden kaynaklanan, kalbin dinlenme hızının anormal şekilde yükselmesiyle seyreden ritim bozukluğu nedir?",
      answer: "Sinüs taşikardisi",
    },
    {
      question:
        "Beyindeki toplardamarlarda pıhtı oluşması sonucu kafa içi basınç artışı ve nörolojik belirtilerle seyreden durum nedir?",
      answer: "Sinüzal tromboz",
    },
    {
      question:
        "Omurilikte sıvı dolu kistik boşluklar oluşmasıyla karakterize ve ilerleyici nörolojik kayıplara yol açan hastalık nedir?",
      answer: "Siringomiyeli",
    },
    {
      question:
        "Bağışıklık sisteminin vücudun kendi dokularına saldırması sonucu cilt, eklem, böbrek gibi organları etkileyen kronik otoimmün hastalık nedir?",
      answer: "Sistemik lupus eritematozus (SLE)",
    },
    {
      question:
        "Bağ dokunun anormal şekilde sertleşmesi ve cilt ile iç organlarda fibrozis ile seyreden otoimmün hastalık nedir?",
      answer: "Sistemik skleroz",
    },
    {
      question:
        "Farklı organlarda anormal protein birikimi ile karakterize edilen, nadir görülen sistemik hastalık nedir?",
      answer: "Sistemik amiloidoz",
    },
    {
      question:
        "Vücudun birden fazla organını etkileyen yaygın enfeksiyonlara genel olarak ne ad verilir?",
      answer: "Sistemik enfeksiyonlar",
    },
    {
      question:
        "Karaciğerin iltihaplanarak yapısının bozulması ve fonksiyon kaybıyla seyreden kronik hastalık nedir?",
      answer: "Siroz",
    },
    {
      question:
        "Mesane duvarının enfeksiyonu sonucu idrarda yanma, sık idrara çıkma gibi belirtilerle seyreden durum nedir?",
      answer: "Sistit",
    },
    {
      question:
        "Omuz kemiği olan skapulanın kırılması sonucu gelişen nadir görülen kemik kırığı nedir?",
      answer: "Skapula kırığı",
    },
    {
      question:
        "Omurganın yana doğru eğrilmesiyle karakterize edilen ve duruş bozukluğuna yol açan iskelet sistemi hastalığı nedir?",
      answer: "Skolyoz",
    },
    {
      question:
        "Testisleri çevreleyen skrotum bölgesinde gelişen bakteriyel veya viral enfeksiyonlara ne ad verilir?",
      answer: "Skrotal enfeksiyonlar",
    },
    {
      question:
        "Skrotumda veya testislerde gelişen iyi huylu ya da kötü huylu tümörlere genel olarak ne ad verilir?",
      answer: "Skrotal tümörler",
    },
    {
      question:
        "Kalbin sol kulakçığında gelişen ve emboliye yol açabilen iyi huylu kalp tümörü nedir?",
      answer: "Sol atriyal miksoma",
    },
    {
      question:
        "Solunumun yetersiz çalışması sonucu kandaki karbondioksit düzeyinin yükselmesiyle oluşan asit-baz dengesi bozukluğu nedir?",
      answer: "Solunum asidozu",
    },
    {
      question:
        "Solunum yoluyla aşırı karbondioksit atılması sonucu kanda alkaliliğin artmasıyla oluşan asit-baz dengesi bozukluğu nedir?",
      answer: "Solunum alkalozu",
    },
    {
      question:
        "Akciğerlerin oksijen değişimini yeterince sağlayamaması sonucu dokuların oksijensiz kalmasıyla seyreden ciddi durum nedir?",
      answer: "Solunum yetmezliği",
    },
    {
      question:
        "Vücuttaki fiziksel şikayetlerin altında organik bir hastalık bulunmamasına rağmen yoğun şekilde bedensel belirtilerin yaşandığı psikiyatrik durum nedir?",
      answer: "Somatizasyon bozukluğu",
    },
    {
      question:
        "Uyku sırasında istemsiz olarak kalkıp yürüme davranışı ile karakterize uyku bozukluğu nedir?",
      answer: "Somnambulizm (Uyurgezerlik)",
    },
    {
      question:
        "Bacaklarda gelişen kas sertliği ve güçsüzlük ile ilerleyici felce neden olan sinir sistemi hastalığı nedir?",
      answer: "Spastik parapleji",
    },
    {
      question:
        "Omurilik çevresinde irin birikimi sonucu ani gelişen sırt ağrısı, ateş ve nörolojik kayıplarla seyreden enfeksiyon nedir?",
      answer: "Spinal epidural abse",
    },
    {
      question:
        "Omuriliğin travma, enfeksiyon veya tümör gibi nedenlerle zarar görmesi sonucu gelişen nörolojik hasara ne ad verilir?",
      answer: "Spinal kord lezyonu",
    },
    {
      question:
        "Kaslarda zayıflık ve erimeye yol açan, özellikle çocukluk çağında başlayan genetik hastalık nedir?",
      answer: "Spinal kas atrofisi",
    },
    {
      question:
        "Omurga kanalının daralması sonucu omuriliğe ve sinirlere baskı yaparak ağrı ve yürüme güçlüğüne neden olan hastalık nedir?",
      answer: "Spinal stenoz",
    },
    {
      question:
        "Dalak büyümesi ile karakterize, altta yatan enfeksiyon, hematolojik hastalık veya portal hipertansiyon gibi nedenlerle gelişen durum nedir?",
      answer: "Splenomegali (Dalak büyümesi)",
    },
    {
      question:
        "Travma sonucu dalak dokusunun yırtılması ve karın içine kanama oluşması ile seyreden acil durum nedir?",
      answer: "Splenik rüptür",
    },
    {
      question:
        "Akciğer zarları arasında hava birikmesi sonucu kendiliğinden gelişen ve nefes darlığına yol açan durum nedir?",
      answer: "Spontan pnömotoraks",
    },
    {
      question:
        "Omurganın iltihaplanması sonucu gelişen, sırt ağrısı ve hareket kısıtlılığı ile seyreden romatizmal hastalık nedir?",
      answer: "Spondilit",
    },
    {
      question:
        "Omurların birbiri üzerinden kayması sonucu omurilik ve sinir köklerinde basıya neden olan omurga hastalığı nedir?",
      answer: "Spondilolistezis",
    },
    {
      question:
        "Omurgada yaşa veya dejeneratif değişikliklere bağlı olarak gelişen kireçlenmeye verilen ad nedir?",
      answer: "Spondiloz",
    },
    {
      question:
        "Kas zayıflığı ve ilerleyici kas erimesi ile seyreden, erişkin yaşta başlayan nadir motor nöron hastalığı nedir?",
      answer: "Sporadik ALS",
    },
    {
      question:
        "Staphylococcus bakterilerinin neden olduğu cilt, akciğer, kalp kapakçığı gibi dokularda enfeksiyona yol açan durum nedir?",
      answer: "Stafilokok enfeksiyonları",
    },
    {
      question:
        "Kalp kapaklarının daralması sonucu kan akışının zorlaşmasıyla gelişen kapak hastalığı türü nedir?",
      answer: "Stenotik kapak hastalıkları",
    },
    {
      question:
        "İlaçlara veya enfeksiyona bağlı olarak ciltte ciddi döküntü, kabarma ve mukozal lezyonlarla seyreden hayatı tehdit eden hastalık nedir?",
      answer: "Stevens Johnson sendromu",
    },
    {
      question:
        "Ağız mukozasının enfeksiyon veya tahriş nedeniyle iltihaplanması sonucu ağrı, kızarıklık ve yaralarla seyreden hastalık nedir?",
      answer: "Stomatit",
    },
    {
      question:
        "Kemiklerde tekrarlayıcı küçük travmalar sonucu oluşan, sporcularda sık görülen kemik kırığı türü nedir?",
      answer: "Stres kırıkları",
    },
    {
      question:
        "Şiddetli stres veya kritik hastalık sonrası mide mukozasında ülser oluşmasına ne ad verilir?",
      answer: "Stres ülseri",
    },
    {
      question:
        "İdrar yollarında magnezyum ve amonyum fosfat içeren enfekte böbrek taşlarına ne ad verilir?",
      answer: "Strüvit taşları",
    },
    {
      question:
        "Beyin zarları arasında kanama olmasıyla ani baş ağrısı, bilinç kaybı ve nörolojik belirtilerle seyreden ciddi durum nedir?",
      answer: "Subaraknoid kanama",
    },
    {
      question:
        "Beyin yüzeyinde dura mater altında kan birikmesiyle gelişen ve kafa travması sonrası ortaya çıkan durum nedir?",
      answer: "Subdural hematom",
    },
    {
      question:
        "Belirgin semptomlar olmadan kandaki tiroid hormonlarının düşük, TSH seviyesinin ise hafif yüksek olduğu tiroid hastalığı nedir?",
      answer: "Subklinik hipotiroidizm",
    },
    {
      question:
        "Belirti göstermeden beynin elektriksel aktivitesinde değişiklik olmasıyla karakterize epilepsi formu nedir?",
      answer: "Subklinik epilepsi",
    },
    {
      question:
        "Kızamık enfeksiyonundan yıllar sonra ortaya çıkan, ilerleyici beyin iltihabı ve demans ile seyreden ölümcül hastalık nedir?",
      answer: "Subakut sklerozan panensefalit (SSPE)",
    },
    {
      question:
        "Varicella zoster virüsünün neden olduğu, kaşıntılı döküntüler ve ateş ile seyreden bulaşıcı çocukluk hastalığı nedir?",
      answer: "Suçiçeği (Varicella)",
    },
    {
      question:
        "Böbreküstü bezinde gelişen ve hormon salgılayan iyi huylu tümör nedir?",
      answer: "Sürrenal adenom",
    },
    {
      question:
        "Böbreküstü bezinin aniden yetersiz çalışması sonucu şok, kan şekeri düşüklüğü ve tansiyon düşüklüğü ile seyreden acil durum nedir?",
      answer: "Sürrenal kriz",
    },
  ],
  T: [
    {
      question:
        "Sifiliz enfeksiyonunun ilerlemiş evresinde omurilikte hasar oluşmasıyla gelişen sinir sistemi hastalığı nedir?",
      answer: "Tabes dorsalis",
    },
    {
      question:
        "Büyük damarların iltihaplanması ile karakterize, özellikle genç kadınlarda görülen nadir damar hastalığı nedir?",
      answer: "Takayasu arteriti",
    },
    {
      question:
        "Vücutta yeterli hemoglobin üretilememesi sonucu kansızlığa yol açan kalıtsal kan hastalığı nedir?",
      answer: "Talasemi",
    },
    {
      question:
        "Ayak bileği kemiği olan talusun kırılmasıyla meydana gelen ortopedik yaralanmaya ne ad verilir?",
      answer: "Talus kırığı",
    },
    {
      question:
        "Kalbin dakikadaki atım hızının normalin üzerine çıkmasıyla oluşan ritim bozukluğuna ne ad verilir?",
      answer: "Taşikardi",
    },
    {
      question:
        "Ayak bileği çevresindeki tibial sinirin sıkışması sonucu gelişen ağrı, uyuşma ve karıncalanma ile seyreden sendrom nedir?",
      answer: "Tarsal tünel sendromu",
    },
    {
      question:
        "Beyinde gangliyozid birikimi nedeniyle sinir hücrelerinin hasar görmesiyle karakterize genetik hastalık nedir?",
      answer: "Tay Sachs hastalığı",
    },
    {
      question:
        "Kasları kemiklere bağlayan dokuların travma sonucu kısmi veya tam yırtılmasıyla oluşan yaralanmaya ne ad verilir?",
      answer: "Tendon yırtığı",
    },
    {
      question:
        "Tendonların aşırı kullanıma veya zorlanmaya bağlı olarak iltihaplanması sonucu gelişen durum nedir?",
      answer: "Tendonit",
    },
    {
      question:
        "Başta temporal arter olmak üzere büyük arterlerde dev hücrelerin birikimiyle gelişen vaskülit hastalığı nedir?",
      answer: "Temporal arterit (Dev hücreli arterit)",
    },
    {
      question:
        "Beynin temporal lobunda oluşan odaklı elektriksel aktivite nedeniyle ortaya çıkan epilepsi türü nedir?",
      answer: "Temporal lob epilepsisi",
    },
    {
      question:
        "Tendonların dejenerasyonu sonucu ağrı ve fonksiyon kaybı ile seyreden kronik tendon hastalığı nedir?",
      answer: "Tendinopati",
    },
    {
      question:
        "Tendonun tamamen kopması sonucu kasların işlev kaybı ve hareket kısıtlılığı ile seyreden durum nedir?",
      answer: "Tendon kopması",
    },
    {
      question:
        "Dirsek dış kısmında aşırı kullanım sonucu oluşan ağrı ve hassasiyetle karakterize hastalık nedir?",
      answer: "Tenisçi dirseği (Lateral epikondilit)",
    },
    {
      question:
        "Clostridium tetani bakterisinin ürettiği toksin nedeniyle kas spazmları ve sertlik ile seyreden enfeksiyon hastalığı nedir?",
      answer: "Tetanoz",
    },
    {
      question:
        "Kalsiyum eksikliğine bağlı kaslarda istemsiz kasılmalar ve kramplarla karakterize durum nedir?",
      answer: "Tetani",
    },
    {
      question:
        "Kaval kemiği olarak bilinen tibianın kırılması sonucu gelişen ortopedik travma nedir?",
      answer: "Tibia kırığı",
    },
    {
      question:
        "Kulakta çınlama, uğultu veya vızıldama gibi seslerin duyulması ile karakterize işitsel algı bozukluğu nedir?",
      answer: "Tinnitus",
    },
    {
      question:
        "Bağışıklık sisteminin pankreastaki insülin üreten hücrelere saldırması sonucu gelişen ve genellikle çocuklukta başlayan diyabet türü nedir?",
      answer: "Tip 1 diyabet",
    },
    {
      question:
        "İnsülin direnci ve pankreasın insülin üretimindeki yetersizliği sonucu gelişen, yetişkinlerde daha sık görülen diyabet türü nedir?",
      answer: "Tip 2 diyabet",
    },
    {
      question: "Tiroid bezinde gelişen kötü huylu tümör türüne ne ad verilir?",
      answer: "Tiroid kanseri",
    },
    {
      question:
        "Tiroid bezinde gelişen genellikle iyi huylu, yuvarlak veya oval yapılı oluşumlara ne ad verilir?",
      answer: "Tiroid nodülü",
    },
    {
      question:
        "Tiroid bezinin iltihaplanması sonucu bezin büyümesi, ağrı ve hormon dengesizliği ile seyreden hastalık nedir?",
      answer: "Tiroidit",
    },
    {
      question:
        "Tiroid hormonlarının aşırı yükselmesiyle ateş, taşikardi ve bilinç değişikliği gibi ağır tablolarla seyreden tiroid krizi nedir?",
      answer: "Tiroid fırtınası",
    },
    {
      question:
        "Uyku sırasında solunumun duraklaması sonucu gelişen, hayatı tehdit eden bebeklik çağı sendromuna ne ad verilir?",
      answer: "Tirajik apne sendromu",
    },
    {
      question:
        "Ciltte yaygın kabarma, soyulma ve ciddi sıvı kaybı ile seyreden toksik ilaç reaksiyonuna ne ad verilir?",
      answer: "Toksik epidermal nekrolizis (TEN)",
    },
    {
      question:
        "Karaciğer dokusunun toksik maddelere veya ilaçlara maruz kalması sonucu gelişen iltihaplanmaya ne ad verilir?",
      answer: "Toksik hepatit",
    },
    {
      question:
        "Kalın bağırsağın aşırı genişlemesi ve ciddi enfeksiyon ile seyreden, inflamatuvar bağırsak hastalıklarının ciddi bir komplikasyonu nedir?",
      answer: "Toksik megakolon",
    },
    {
      question:
        "Toxoplasma gondii parazitinin neden olduğu, özellikle bağışıklığı baskılanmış kişilerde ciddi enfeksiyona yol açan hastalık nedir?",
      answer: "Toksoplazmozis",
    },
    {
      question:
        "Göğüs bölgesindeki aort damarında balonlaşma oluşmasıyla kanama riski taşıyan ciddi damar hastalığı nedir?",
      answer: "Torasik aort anevrizması",
    },
    {
      question:
        "Kollara ve göğse giden sinir ve damarların sıkışması sonucu ağrı, uyuşma ve güçsüzlükle seyreden durum nedir?",
      answer: "Torasik çıkış sendromu",
    },
    {
      question:
        "Göğüs omurlarında kırık oluşması sonucu omurilik yaralanması ve deformite riski taşıyan travmatik durum nedir?",
      answer: "Torakal omurga kırığı",
    },
    {
      question:
        "Göğüs bölgesine alınan darbe sonucu kaburga kırıkları, akciğer hasarı veya iç kanama ile seyreden travmatik durum nedir?",
      answer: "Toraks travması",
    },
    {
      question:
        "Çocuklarda ve gençlerde görülen, kemiğin sadece bir tarafında çatlama ile oluşan kısmi kemik kırığı nedir?",
      answer: "Torus kırığı",
    },
    {
      question:
        "Nefes borusunda darlık gelişmesi sonucu nefes darlığı ve stridor ile seyreden ciddi solunum yolu hastalığı nedir?",
      answer: "Trakeal stenoz",
    },
    {
      question:
        "Nefes borusunun zayıflaması sonucu çökerek solunum güçlüğüne neden olan doğumsal veya edinsel hastalık nedir?",
      answer: "Trakeomalazi",
    },
    {
      question:
        "Trakeotomi açılan hastalarda, kanama gelişmesi sonucu hayatı tehdit eden solunum yolu acil durumu nedir?",
      answer: "Trakeotomi kanaması",
    },
    {
      question:
        "Nefes borusu ve bronşların iltihaplanmasıyla seyreden, öksürük ve balgam çıkarma ile karakterize solunum yolu enfeksiyonu nedir?",
      answer: "Trakeobronşit",
    },
    {
      question:
        "Travmaya bağlı olarak akciğer zarları arasına kan dolmasıyla gelişen ve nefes darlığına neden olan durum nedir?",
      answer: "Travmatik hemotoraks",
    },
    {
      question:
        "Kafa travması sonrası beynin yüzeyinde kan birikmesi sonucu gelişen ve bilinç kaybı, baş ağrısıyla seyreden durum nedir?",
      answer: "Travmatik subdural hematom",
    },
    {
      question:
        "Karın arka boşluğunda travmaya bağlı olarak gelişen ve ciddi iç kanamaya yol açabilen durum nedir?",
      answer: "Travmatik retroperitoneal hematom",
    },
    {
      question:
        "Göğüs travması sonucu aort damarının yırtılmasıyla ani iç kanama ve şokla seyreden hayatı tehdit eden durum nedir?",
      answer: "Travmatik aort rüptürü",
    },
    {
      question:
        "İstem dışı, ritmik kas kasılmaları ile ortaya çıkan, ellerde, başta veya vücudun diğer bölgelerinde titremeye ne ad verilir?",
      answer: "Tremor",
    },
    {
      question:
        "Yüz sinirinin beşinci dalında ağrı ataklarıyla seyreden, şiddetli yüz ağrısına neden olan sinir hastalığı nedir?",
      answer: "Trigeminal nevralji",
    },
    {
      question:
        "Yüzeysel toplardamarlarda kan pıhtısı oluşumu sonucu gelişen ağrı, kızarıklık ve şişlikle seyreden damar hastalığı nedir?",
      answer: "Tromboflebit",
    },
    {
      question:
        "Kan damarlarında pıhtı oluşması ve bu pıhtının başka bir damar yatağına taşınarak tıkanıklığa yol açması durumuna ne ad verilir?",
      answer: "Tromboemboli",
    },
    {
      question:
        "Kanda trombosit sayısının normalin üzerine çıkmasıyla kanın pıhtılaşma riskinin arttığı kan hastalığı nedir?",
      answer: "Trombositoz",
    },
    {
      question:
        "Kanda trombosit sayısının düşmesi sonucu kanama riskinin arttığı, peteşi ve morarmalarla seyreden kan hastalığı nedir?",
      answer: "Trombositopeni",
    },
    {
      question:
        "Trombosit sayısındaki düşüşe bağlı olarak ciltte küçük morarmalar ve kanamalarla seyreden hematolojik hastalık nedir?",
      answer: "Trombositopenik purpura",
    },
    {
      question:
        "Küçük damar tıkanıklıkları, hemolitik anemi ve trombosit düşüklüğü ile seyreden ciddi damar hastalığı nedir?",
      answer: "Trombotik mikroanjiyopati",
    },
    {
      question:
        "Mycobacterium tuberculosis bakterisinin neden olduğu ve akciğerleri başta olmak üzere birçok organı etkileyebilen bulaşıcı hastalık nedir?",
      answer: "Tuberküloz",
    },
    {
      question:
        "Tüberküloz hastalığının boyundaki lenf bezlerinde iltihaplanmaya yol açtığı formuna ne ad verilir?",
      answer: "Tüberküler lenfadenit",
    },
    {
      question:
        "Tüberküloz bakterisinin beyin zarlarını enfekte etmesiyle gelişen ve meninkslerde iltihap oluşturan ciddi hastalık nedir?",
      answer: "Tüberküler menenjit",
    },
    {
      question:
        "Böbreğin tübül ve interstisyel dokularında iltihaplanma ile seyreden, enfeksiyon veya ilaçlara bağlı gelişebilen hastalık nedir?",
      answer: "Tubulointerstisyel nefrit",
    },
    {
      question:
        "Kemoterapi sonrası tümör hücrelerinin ani şekilde parçalanarak kana aşırı madde salınımı yapması sonucu gelişen ciddi metabolik sendrom nedir?",
      answer: "Tümör lisis sendromu",
    },
    {
      question:
        "Bir tümörün vücudun başka bölgelerine yayılmasıyla oluşan ikincil kötü huylu tümörlere ne ad verilir?",
      answer: "Tümör metastazları",
    },
    {
      question:
        "Bir tümörün içine veya çevresine kanama olması sonucu gelişen ve ağrıya ya da diğer komplikasyonlara neden olabilen durum nedir?",
      answer: "Tümör kanaması",
    },
    {
      question:
        "Tükrük bezlerinde taş oluşumu sonucu tıkanıklık ve ağrıya neden olan hastalık nedir?",
      answer: "Tükrük bezi taşları",
    },
  ],
  U: [
    {
      question:
        "Herpes simpleks virüsünün neden olduğu, dudak çevresinde ağrılı ve kabarcıklı lezyonlarla seyreden enfeksiyon nedir?",
      answer: "Uçuk",
    },
    {
      question:
        "Kalın bağırsağın iltihaplanması sonucu kanlı ishal ve karın ağrısıyla seyreden kronik inflamatuvar bağırsak hastalığı nedir?",
      answer: "Ulseratif kolit",
    },
    {
      question:
        "Dirsekteki ulnar sinirin sıkışması sonucu elde uyuşma, karıncalanma ve güç kaybı ile seyreden durum nedir?",
      answer: "Ulnar sinir sıkışması",
    },
    {
      question:
        "Ulnar sinirin ciddi zedelenmesi sonucu elde kas kaybı ve his kaybı ile karakterize sinir felcine ne ad verilir?",
      answer: "Ulnar sinir felci",
    },
    {
      question: "Ön kolun ulna kemiğinde oluşan kırık tipine ne ad verilir?",
      answer: "Ulnar kırık",
    },
    {
      question:
        "Karın ön duvarındaki göbek bölgesinde, bağırsakların dışarı çıkmasıyla oluşan fıtığa ne ad verilir?",
      answer: "Umbilikal herni (Göbek fıtığı)",
    },
    {
      question:
        "Yeni doğanlarda göbek kordonu çevresinde gelişen bakteriyel enfeksiyona ne ad verilir?",
      answer: "Umbilikal enfeksiyonlar",
    },
    {
      question:
        "Göbek kordonu iyileştikten sonra kalan fazla granülasyon dokusuna ne ad verilir?",
      answer: "Umbilikal granulom",
    },
    {
      question:
        "Tek taraflı böbrekte idrar birikmesi sonucu gelişen böbrek şişmesine ne ad verilir?",
      answer: "Unilateral hidronefroz",
    },
    {
      question:
        "Sadece bir gözde kalıcı görme kaybı gelişmesine ne ad verilir?",
      answer: "Unilateral körlük",
    },
    {
      question:
        "Üretranın travmaya maruz kalması sonucu idrar yapmada zorluk, kanama ve ağrı ile seyreden durum nedir?",
      answer: "Uretra travması",
    },
    {
      question:
        "Üretra kanalının bakteriyel enfeksiyonu sonucu yanma, sık idrara çıkma ve akıntıyla seyreden hastalık nedir?",
      answer: "Uretrit",
    },
    {
      question:
        "Üreterde taş oluşumu sonucu idrar akışının tıkanması ve şiddetli böbrek ağrısıyla seyreden durum nedir?",
      answer: "Ureter taşı",
    },
    {
      question:
        "Üreterin daralması sonucu idrar akışının engellenmesi ve böbrekte hidronefroza yol açan durum nedir?",
      answer: "Ureteral striktür",
    },
    {
      question:
        "Üretra duvarında kese veya cep şeklinde çıkıntı oluşmasıyla karakterize idrar yolu hastalığı nedir?",
      answer: "Uretral divertikül",
    },
    {
      question:
        "Üretra kanalında gelişen kötü huylu tümör türüne ne ad verilir?",
      answer: "Uretral kanser",
    },
    {
      question:
        "Üretra kanalının tıkanması sonucu idrarın mesaneden dışarı akamamasıyla seyreden ciddi durum nedir?",
      answer: "Uretral obstrüksiyon",
    },
    {
      question:
        "Üretra ile başka bir organ veya cilt arasında anormal kanal oluşması sonucu idrar kaçağı ile seyreden durum nedir?",
      answer: "Uretral fistül",
    },
    {
      question:
        "Üretra kanalında travma sonucu gelişen hasar ve idrar yapma problemleriyle seyreden durum nedir?",
      answer: "Uretral travma",
    },
  ],
  Ü: [
    {
      question:
        "İdrar tutamama, istemsiz idrar kaçırma ile seyreden üriner sistem bozukluğu nedir?",
      answer: "Üriner inkontinans",
    },
    {
      question:
        "Mesanede idrar birikmesine rağmen idrar yapamama durumu nedir?",
      answer: "Üriner retansiyon",
    },
    {
      question:
        "İdrar sondası kullanımına bağlı olarak gelişen enfeksiyona ne ad verilir?",
      answer: "Üriner kateter enfeksiyonları",
    },
    {
      question:
        "İdrar yolunun anormal bir kanal yoluyla başka bir organ veya cilde açılması durumuna ne ad verilir?",
      answer: "Üriner fistül",
    },
    {
      question:
        "İdrar yolu enfeksiyonunun kana karışarak hayatı tehdit eden sistemik enfeksiyona dönüşmesine ne ad verilir?",
      answer: "Üriner sepsis",
    },
    {
      question:
        "Üretra kanalında gelişen daralma sonucu idrar akışında zorlukla seyreden durum nedir?",
      answer: "Üretra striktürü",
    },
    {
      question:
        "Ciltte ani gelişen kaşıntılı, kabarık ve kızarık döküntülerle seyreden alerjik reaksiyona ne ad verilir?",
      answer: "Ürtiker",
    },
    {
      question:
        "İdrar ve üreme yollarını etkileyen enfeksiyonlara genel olarak ne ad verilir?",
      answer: "Ürogenital enfeksiyonlar",
    },
    {
      question:
        "Üriner veya genital organlar arasında anormal kanal oluşmasıyla idrar veya diğer sıvıların kontrolsüz şekilde sızmasına neden olan durum nedir?",
      answer: "Ürogenital fistüller",
    },
    {
      question:
        "Üriner veya genital sistem enfeksiyonları sonrası gelişen ve kadınlarda kısırlığa yol açabilen durum nedir?",
      answer: "Ürogenital enfeksiyon sonrası infertilite",
    },
    {
      question:
        "Tüberküloz enfeksiyonunun idrar yolları ve genital organlara yerleşmesiyle gelişen hastalık nedir?",
      answer: "Ürogenital tüberküloz",
    },
    {
      question:
        "Üreme ve idrar yollarında Candida türü mantarların neden olduğu enfeksiyona ne ad verilir?",
      answer: "Ürogenital kandidiyazis",
    },
    {
      question:
        "Üretra kanalında bakteri veya mantar enfeksiyonu gelişmesi sonucu ağrı, yanma ve akıntı ile seyreden durum nedir?",
      answer: "Üretra enfeksiyonları",
    },
    {
      question:
        "Üretra kanalının doğumsal veya edinsel yapısal bozukluklarına ne ad verilir?",
      answer: "Üretra anomalileri",
    },
    {
      question:
        "Üretra kanalında gelişen kötü huylu tümörlere verilen genel ad nedir?",
      answer: "Üretra tümörleri",
    },
    {
      question:
        "Üretra duvarında gelişen sıvı dolu küçük kistik yapıya ne ad verilir?",
      answer: "Üretra kistleri",
    },
  ],
  V: [
    {
      question:
        "Kadın üreme organlarından vajinadan anormal miktarda kan gelmesiyle seyreden durum nedir?",
      answer: "Vajinal kanama",
    },
    {
      question:
        "Vajina ile diğer organlar arasında anormal bir kanal oluşması sonucu gelişen patolojik durum nedir?",
      answer: "Vajinal fistül",
    },
    {
      question:
        "Vajinanın, pelvik kaslardaki zayıflık nedeniyle aşağı doğru sarkmasıyla oluşan durum nedir?",
      answer: "Vajinal prolapsus",
    },
    {
      question:
        "Vajinada gelişen, içi sıvı dolu iyi huylu kistik yapılara ne ad verilir?",
      answer: "Vajinal kist",
    },
    {
      question:
        "Doğum veya travma sonrası vajina dokusunda oluşan yırtılmaya ne ad verilir?",
      answer: "Vajinal yırtık",
    },
    {
      question:
        "Vajina mukozasının enfeksiyona bağlı olarak iltihaplanması sonucu akıntı, kaşıntı ve ağrı ile seyreden hastalık nedir?",
      answer: "Vajinit",
    },
    {
      question:
        "Kalbin kapaklarında yapısal bozukluklara bağlı olarak fonksiyon kaybı ve kan akışı problemleriyle seyreden hastalık grubuna ne ad verilir?",
      answer: "Valvüler kalp hastalığı",
    },
    {
      question:
        "Toplardamarların genişlemesi ve şekil bozulması sonucu bacaklarda ağrı, şişlik ve belirgin damarlarla seyreden hastalık nedir?",
      answer: "Varis",
    },
    {
      question:
        "Erkeklerde testis toplardamarlarının genişlemesi sonucu testiste ağrı ve kısırlık riskiyle seyreden damar hastalığı nedir?",
      answer: "Varikokel",
    },
    {
      question:
        "Varicella zoster virüsünün neden olduğu, kaşıntılı döküntülerle seyreden çocukluk çağı enfeksiyon hastalığı nedir?",
      answer: "Varicella zoster enfeksiyonu (Suçiçeği)",
    },
    {
      question:
        "Beyindeki damar hastalıkları sonucu gelişen ve unutkanlık, düşünme becerisinde azalma ile seyreden demans türü nedir?",
      answer: "Vasküler demans",
    },
    {
      question:
        "Doğumsal veya edinsel olarak damar yapısında gelişen anormal bağlantı ve genişlemelere ne ad verilir?",
      answer: "Vasküler malformasyon",
    },
    {
      question:
        "Kan damarlarının iltihaplanması sonucu organlara kan akışının bozulmasıyla seyreden hastalık grubuna ne ad verilir?",
      answer: "Vaskülit",
    },
    {
      question:
        "Vaskülit sonucu sinirlerde gelişen hasar ve buna bağlı his kaybı, ağrı veya güçsüzlükle seyreden durum nedir?",
      answer: "Vaskülitik nöropati",
    },
    {
      question:
        "Toplardamarlarda pıhtı oluşması sonucu damar tıkanıklığı ve şişlikle seyreden damar hastalığı nedir?",
      answer: "Venöz tromboz",
    },
    {
      question:
        "Toplardamar kapakçıklarının yetersiz çalışması sonucu bacaklarda şişlik, ağrı ve varislerle seyreden damar hastalığı nedir?",
      answer: "Venöz yetmezlik",
    },
    {
      question:
        "Venöz dolaşım bozukluğu nedeniyle bacaklarda kronik yaraların oluşması durumuna ne ad verilir?",
      answer: "Venöz ülser",
    },
    {
      question:
        "Omurga kemiklerinden birinin kırılması sonucu omurilik hasarı veya ağrı ile seyreden travmatik durum nedir?",
      answer: "Vertebra kırığı",
    },
    {
      question:
        "Omurgayı besleyen ana damarlardan birinin yırtılması sonucu felç veya ölüm riski taşıyan ciddi damar hastalığı nedir?",
      answer: "Vertebral arter diseksiyonu",
    },
    {
      question:
        "Omurga kemiklerinde enfeksiyon gelişmesiyle şiddetli sırt ağrısı ve ateşle seyreden hastalık nedir?",
      answer: "Vertebral osteomiyelit",
    },
    {
      question:
        "Omurga kanalının daralması sonucu omurilik ve sinirlerde baskı oluşarak ağrı, uyuşma ve güçsüzlükle seyreden hastalık nedir?",
      answer: "Vertebral kanal darlığı",
    },
    {
      question:
        "Ciltte siğil olarak bilinen, Human Papilloma Virus (HPV) enfeksiyonu sonucu gelişen iyi huylu cilt lezyonlarına ne ad verilir?",
      answer: "Verruka vulgaris (Siğil)",
    },
    {
      question:
        "İç kulakta dengeyi sağlayan sinirin iltihaplanması sonucu ani baş dönmesi ve denge kaybıyla seyreden durum nedir?",
      answer: "Vestibüler nörit",
    },
    {
      question:
        "Baş dönmesi atakları ve migren baş ağrılarının birlikte görüldüğü nörolojik hastalığa ne ad verilir?",
      answer: "Vestibüler migren",
    },
    {
      question:
        "İç kulakta denge sinirinden kaynaklanan, işitme kaybı ve baş dönmesiyle seyreden iyi huylu tümör nedir?",
      answer: "Vestibüler schwannoma",
    },
    {
      question:
        "Viral enfeksiyonların eklemlerde ağrı ve şişlik oluşturmasıyla ortaya çıkan geçici eklem iltihabına ne ad verilir?",
      answer: "Viral artrit",
    },
    {
      question:
        "Virüslerin beyin dokusunu enfekte etmesi sonucu bilinç değişikliği, ateş ve nörolojik belirtilerle seyreden hastalık nedir?",
      answer: "Viral ensefalit",
    },
    {
      question:
        "Hepatit virüslerinin karaciğeri enfekte etmesi sonucu karaciğer iltihabına yol açan bulaşıcı hastalıklara ne ad verilir?",
      answer: "Viral hepatit",
    },
    {
      question:
        "Virüslerin kalp kasında iltihap oluşturarak kalp fonksiyonlarını bozduğu hastalık nedir?",
      answer: "Viral kardiyomiyopati",
    },
    {
      question:
        "Virüslerin beyin zarlarını enfekte etmesiyle gelişen, baş ağrısı, ateş ve ense sertliği ile seyreden hastalık nedir?",
      answer: "Viral menenjit",
    },
    {
      question:
        "Virüslerin akciğerlere yerleşerek iltihap oluşturması sonucu öksürük, ateş ve nefes darlığı ile seyreden hastalık nedir?",
      answer: "Viral pnömoni",
    },
    {
      question:
        "Virüslerin gözün iç kısmındaki üvea tabakasını iltihaplandırması sonucu ağrı, kızarıklık ve görme bulanıklığı ile seyreden hastalık nedir?",
      answer: "Viral üveit",
    },
    {
      question:
        "Bebeklerde ve küçük çocuklarda virüslerin neden olduğu, küçük hava yollarında iltihap ve tıkanıklıkla seyreden solunum yolu hastalığı nedir?",
      answer: "Viral bronşiolit",
    },
    {
      question:
        "Virüslerin bağırsakları enfekte etmesiyle ishal, kusma ve karın ağrısı gibi belirtilerle seyreden sindirim sistemi enfeksiyonuna ne ad verilir?",
      answer: "Viral gastroenterit",
    },
    {
      question:
        "Ciltteki pigment hücrelerinin kaybı sonucu düzensiz beyaz lekelerin oluşmasıyla karakterize otoimmün cilt hastalığı nedir?",
      answer: "Vitiligo",
    },
    {
      question:
        "Gözün vitreus sıvısında kanama olması sonucu görme bulanıklığı ve karaltılarla seyreden durum nedir?",
      answer: "Vitreus hemorajisi",
    },
    {
      question:
        "Gözün iç kısmındaki vitreus jelinin retina tabakasından ayrılmasıyla gelişen ve ışık çakmaları, uçuşmalarla seyreden durum nedir?",
      answer: "Vitreus dekolmanı",
    },
  ],
  Y: [
    {
      question:
        "Kemik kırıkları veya yağ dokusu travmaları sonrası yağ partiküllerinin kana karışmasıyla gelişen ve solunum sıkıntısı ile seyreden durum nedir?",
      answer: "Yağ embolisi sendromu",
    },
    {
      question:
        "Travma veya cerrahi sonrası yağ dokusunun iltihaplanarak sert ve ağrılı bir kitle oluşturduğu durum nedir?",
      answer: "Yağ nekrozu",
    },
    {
      question:
        "Vücutta yağ dokusundan kaynaklanan iyi huylu veya kötü huylu tümörlere genel olarak ne ad verilir?",
      answer: "Yağ dokusu tümörleri",
    },
    {
      question:
        "Cilt altında gelişen, yumuşak, genellikle zararsız yağ hücrelerinden oluşan iyi huylu tümör nedir?",
      answer: "Yağ bezesi (Lipom)",
    },
    {
      question:
        "Yanak bölgesinde gelişen kötü huylu tümörlere verilen ad nedir?",
      answer: "Yanak kanseri",
    },
    {
      question:
        "Travma, cerrahi veya ciltteki açıklıklar sonrası bakterilerin girmesiyle gelişen doku enfeksiyonuna ne ad verilir?",
      answer: "Yara enfeksiyonu",
    },
    {
      question:
        "Yenidoğan bebekte akciğer damarlarındaki basıncın anormal derecede yüksek olması sonucu oksijenlenme problemleriyle seyreden ciddi durum nedir?",
      answer: "Yenidoğan pulmoner hipertansiyonu",
    },
    {
      question:
        "Yenidoğan bebeklerde bakteriyel enfeksiyonun kana yayılması sonucu ateş, solunum sıkıntısı ve şokla seyreden ciddi hastalık nedir?",
      answer: "Yenidoğan sepsisi",
    },
    {
      question:
        "Clostridium tetani bakterisinin neden olduğu ve kas spazmları ile seyreden, doğum sonrası enfekte göbek kordonu ile bulaşan ölümcül hastalık nedir?",
      answer: "Yenidoğan tetanozu",
    },
    {
      question:
        "Bilirubin metabolizmasının olgunlaşmamasına bağlı olarak yenidoğanlarda ciltte ve gözlerde sararma ile seyreden durum nedir?",
      answer: "Yenidoğan sarılığı",
    },
    {
      question:
        "Yenidoğan bebeklerde beyin fonksiyonlarını etkileyen ve istemsiz kasılmalarla ortaya çıkan nörolojik durum nedir?",
      answer: "Yenidoğan konvülsiyonları",
    },
    {
      question:
        "Yenidoğanlarda bakteriyel enfeksiyon sonucu beyin zarlarının iltihaplanması ile seyreden ciddi hastalık nedir?",
      answer: "Yenidoğan menenjiti",
    },
    {
      question:
        "Yenidoğan bebekte kırmızı kan hücresi eksikliği nedeniyle gelişen kansızlık durumuna ne ad verilir?",
      answer: "Yenidoğan anemisi",
    },
    {
      question:
        "Yenidoğan bebekte karaciğerin iltihaplanması sonucu sarılık ve karaciğer fonksiyon bozukluğu ile seyreden hastalık nedir?",
      answer: "Yenidoğan hepatiti",
    },
    {
      question:
        "Yenidoğan bebekte safra akışının azalması veya tıkanması sonucu sarılık ve karaciğer fonksiyon bozukluğu ile seyreden durum nedir?",
      answer: "Yenidoğan kolestazı",
    },
    {
      question:
        "Yenidoğan bebekte tiroid hormonlarının eksik olması sonucu gelişen büyüme ve gelişme geriliği ile seyreden hastalık nedir?",
      answer: "Yenidoğan hipotiroidisi",
    },
    {
      question:
        "Prematüre doğan bebeklerde retina damarlarının anormal gelişimi sonucu körlüğe kadar ilerleyebilen göz hastalığı nedir?",
      answer: "Yenidoğan retinopatisi",
    },
    {
      question:
        "Yenidoğan döneminde damar iltihabı gelişmesiyle, ciltte morluklar ve organ tutulumları ile seyreden durum nedir?",
      answer: "Yenidoğan vaskülitleri",
    },
    {
      question:
        "Yenidoğan döneminde gelişen bakteriyel kan enfeksiyonları için kullanılan genel terim nedir?",
      answer: "Yenidoğan sepsisleri",
    },
    {
      question:
        "Beynin ciddi hasarıyla sonuçlanan, çoğunlukla viral veya metabolik nedenlerle gelişen yıkıcı nörolojik hastalığa ne ad verilir?",
      answer: "Yıkıcı ensefalopati",
    },
    {
      question:
        "Kalp kasının yaygın hasarıyla seyreden ve kalp yetmezliğine yol açan ciddi kalp hastalığı nedir?",
      answer: "Yıkıcı myokardiyopati",
    },
    {
      question:
        "Anevrizma duvarının yırtılması sonucu ani iç kanamaya yol açan, hayatı tehdit eden damar hastalığına ne ad verilir?",
      answer: "Yırtık anevrizmalar",
    },
    {
      question:
        "Yaşlanma veya aşırı stres gibi faktörlere bağlı olarak vücuttaki organ ve sistemlerde genel yıpranma ile seyreden sendroma ne ad verilir?",
      answer: "Yıpranma sendromu",
    },
    {
      question:
        "Yüz kaslarını kontrol eden sinirin hasarlanması sonucu yüzde asimetri, kas güçsüzlüğü veya hareketsizlikle seyreden durum nedir?",
      answer: "Yüz felci (Fasiyal paralizi)",
    },
    {
      question:
        "Boğaz bölgesinde gelişen kötü huylu tümörlere verilen ad nedir?",
      answer: "Yutak kanseri",
    },
    {
      question:
        "Yutma işlemi sırasında zorlanma veya takılma hissi ile kendini gösteren duruma ne ad verilir?",
      answer: "Yutma güçlüğü (Disfaji)",
    },
    {
      question:
        "Yutma eyleminin koordinasyonunda veya mekanizmasında bozukluk gelişmesi sonucu yeme ve içme sırasında zorluk yaşanmasına ne ad verilir?",
      answer: "Yutma bozuklukları",
    },
    {
      question:
        "Boğazın viral veya bakteriyel ajanlarla enfekte olması sonucu ağrı, kızarıklık ve yutma güçlüğü ile seyreden hastalık nedir?",
      answer: "Yutak enfeksiyonları",
    },
  ],
  Z: [
    {
      question:
        "Akciğer dokusunun enfekte olması sonucu ateş, öksürük ve nefes darlığı ile seyreden enfeksiyon hastalığı nedir?",
      answer: "Zatürre (Pnömoni)",
    },
    {
      question:
        "Zararlı bir madde alımına bağlı olarak vücutta hasar ve çeşitli klinik belirtilerle seyreden durum nedir?",
      answer: "Zehirlenmeler",
    },
    {
      question:
        "Bağışıklık sisteminin tiroid bezine saldırması sonucu tiroid hormonlarının aşırı salgılandığı otoimmün hastalığa ne ad verilir?",
      answer: "Zehirli guatr (Graves hastalığı)",
    },
    {
      question:
        "Tarım ilaçlarına aşırı maruz kalınması sonucu sinir sistemi, solunum veya cilt üzerinde toksik etkiler oluşturan durum nedir?",
      answer: "Zehirli pestisit maruziyeti",
    },
    {
      question:
        "Varicella zoster virüsünün sinirleri enfekte etmesiyle ağrılı deri döküntüleri ve sinir ağrıları ile seyreden hastalık nedir?",
      answer: "Zona (Herpes zoster)",
    },
    {
      question:
        "Zona enfeksiyonu sırasında veya sonrasında beyinde gelişen iltihaplanmaya ne ad verilir?",
      answer: "Zona ensefaliti",
    },
    {
      question:
        "Doğum sırasında amniyon zarının yırtılması sonucu amniyon sıvısının dışarı sızmasıyla gelişen durum nedir?",
      answer: "Zar yırtılması (Doğumda amniyon zarı yırtılması)",
    },
    {
      question:
        "Amniyon, plevra veya meninks gibi vücut zarlarının enfeksiyon kapmasıyla oluşan hastalıklara genel olarak ne ad verilir?",
      answer: "Zar enfeksiyonları",
    },
    {
      question:
        "Vücut zarları üzerinde travma, enfeksiyon veya başka nedenlerle gelişen kanamaya ne ad verilir?",
      answer: "Zar kanamaları",
    },
    {
      question:
        "Orta kulakta bulunan kulak zarının yırtılması sonucu işitme kaybı ve enfeksiyon riski ile seyreden durum nedir?",
      answer: "Zar perforasyonu (Timpanik membran yırtılması)",
    },
    {
      question:
        "Plevra, perikard veya amniyon gibi zarların kalınlaşıp işlevlerini bozmasıyla karakterize patolojik duruma ne ad verilir?",
      answer: "Zar kalınlaşması",
    },
    {
      question:
        "Kasların gevşekliği ve kas tonusunun yetersiz olması sonucu hareket güçlüğü ile seyreden durum nedir?",
      answer: "Zayıf kas tonusu (Hipotoni)",
    },
    {
      question:
        "Hayvanlardan insanlara geçen, enfeksiyon oluşturabilen hastalıklara genel olarak ne ad verilir?",
      answer: "Zoonotik hastalıklar (Hayvanlardan bulaşan hastalıklar)",
    },
    {
      question:
        "Kuş gribi gibi hayvanlardan insanlara bulaşabilen grip enfeksiyonlarına ne ad verilir?",
      answer: "Zoonotik grip (Kuş gribi gibi)",
    },
    {
      question:
        "Hayvanlardan insanlara bulaşan virüs kaynaklı enfeksiyonlara ne ad verilir?",
      answer: "Zoonotik viral enfeksiyonlar",
    },
    {
      question:
        "Gastrin hormonunun aşırı üretimiyle mide asidinin artmasına ve peptik ülserlere yol açan nadir hastalığa ne ad verilir?",
      answer: "Zollinger Ellison Sendromu",
    },
  ],
};

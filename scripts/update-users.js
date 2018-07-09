const fs = require('fs');
const path = require('path');
const fb = require('firebase-admin');
const serviceAccount = require('../private/service-account.json');

fb.initializeApp({
  credential: fb.credential.cert(serviceAccount),
  databaseURL: 'https://parallel-cf800.firebaseio.com'
});

const GOLD = [
  "epenny@bulmershe.wokingham.sch.uk",
  "hike23@patana.ac.th",
  "alar23@patana.ac.th",
  "aych23@patana.ac.th",
  "marvielanceespinosa26059@lister.newham.sch.uk",
  "fabiha1406@gmail.com",
  "maya.lam@education.nsw.gov.au",
  "annahutchens@shcs.school.nz",
  "p180226@batleygirls.co.uk",
  "ste.casimiro@yahoo.co.uk",
  "erosterne123@gmail.com",
  "kernst@laurelschool.org",
  "martin.lieskovsky@jis.edu.bn",
  "jetske.voll@outlook.com",
  "mikeholden42@gmail.com",
  "7709@ratton.co.uk",
  "mcharlesworth29@hotmail.com",
  "argu23@patana.ac.th",
  "nonu23@patana.ac.th",
  "sukhy.ubhi@gmail.com",
  "aaku23@patana.ac.th",
  "ellierundle@gmail.com",
  "arba23@patana.ac.th",
  "sandipti@gmail.com",
  "stseng110499@gmail.com",
  "strawberriesandcream42@gmail.com",
  "huch23@patana.ac.th",
  "raco23@patana.ac.th",
  "reuben@mariaquinn.com",
  "murdoch@nbnet.nb.ca",
  "i.barry@hotmail.co.uk",
  "john.d.sommerville@gmail.com",
  "s.koshy@st-margaret.aberdeen.sch.uk",
  "218040@students.redlands.nsw.edu.au",
  "clara.headstrong@gmail.com",
  "yulu23@patana.ac.th",
  "icarson016@bulmershe.wokingham.sch.uk",
  "tapr23@patana.ac.th",
  "178110@mhchs.org.uk",
  "louise.tilsley@hotmail.co.uk",
  "008597@britishschool.be",
  "anmolbhambhani15@gmail.com",
  "erik@orring.se",
  "202942@gardenschool.edu.my",
  "007120@britishschool.be",
  "stefanwaal@hotmail.com",
  "atiyyatul3@hotmail.com",
  "isobel.booksmythe@gmail.com",
  "emhc2004@gmail.com",
  "trudieduke@hotmail.com",
  "201549@gardenschool.edu.my",
  "203920@gardenschool.edu.my",
  "nikitahandel@outlook.com",
  "yupa23@patana.ac.th",
  "arto23@patana.ac.th",
  "evelyn.lam@education.nsw.gov.au",
  "201542@gardenschool.edu.my",
  "pinkypop04@outlook.com",
  "john.greenbank66@gmail.com",
  "justkendra@gmail.com",
  "sophiecrooks05@hotmail.co.uk",
  "alan@thefishinglake.com",
  "annie.khuu@education.nsw.gov.au",
  "deanstewart67@hotmail.com",
  "raphaeldylandalida@gmail.com",
  "mika@fischerstrom.com",
  "16jecl@rosebery.surrey.sch.uk",
  "15obrice@stalbans.school",
  "santinirodriguez@hotmail.com",
  "17tudormarianc19@nwetss.ie",
  "sophie-m4@outlook.com",
  "006883@britishschool.be",
  "millie.gp@hotmail.co.uk",
  "mihalrahman26483@lister.newham.sch.uk",
  "justin.khuu@education.nsw.gov.au",
  "minbar@ommadawn.dk",
  "malcolmbarclayx@gmail.com",
  "yahyahusain.ulhasan@jis.edu.bn",
  "iona.tredget@gmail.com",
  "johnsonl16@stockportgrammar.co.uk",
  "andrew.d.fermor@gmail.com",
  "cannocka133@kesbath.com",
  "cally_barker@hotmail.com",
  "cple.wadley@gmail.com",
  "parallel@ferchel.co.uk",
  "gabedinicola@gmail.com",
  "hampus@fischerstrom.com",
  "purplepotatoes3@gmail.com",
  "joseph.ls.cross@gmail.com",
  "malcolm.barclay2004@gmail.com",
  "mathilda.orring@biss.org.in",
  "16119@bodmincollege.co.uk",
  "sbrown016@bulmershe.wokingham.sch.uk",
  "tuatramxo5@gmail.com",
  "eisfeld2@gmail.com",
  "huddersfieldtl@outlook.com",
  "tom.cousins6@icloud.com",
  "exdua@yahoo.com",
  "cdefreese@hotmail.com",
  "16ibhandary@kendrick.reading.sch.uk",
  "solia.lebid@gmail.com",
  "tomjamesosullivan@gmail.com",
  "i.mack7@btinternet.com",
  "bruno@brunokirby.uk",
  "kareem.kasaji@gmail.com",
  "konglesheng@gmail.com",
  "hudson.weir@studnet.tsc.nsw.edu.au",
  "17howard527@kechg.org.uk",
  "ellis_y81@icloud.com",
  "aclewett@hotmail.com",
  "7986@ratton.co.uk",
  "sophie@glencross.org",
  "201036@gardenschool.edu.my",
  "brainboxenglish@hotmail.com",
  "downtonh@wordsleyschool.co.uk",
  "sohilrathi@gmail.com",
  "carapischke@gmail.com",
  "sravanamsidhant@courtmoor.net",
  "aliairk@gmail.com",
  "remus2felix@yahoo.com",
  "katehorsley@doctors.org.uk",
  "d.mistry@whitgift.co.uk",
  "pwalder@blueyonder.co.uk",
  "stemayf@gmail.com",
  "thomasgee555@gmail.com",
  "i15cpatterson@challonershigh.com",
  "icybee@yahoo.com",
  "noella@prescod.net",
  "r.williams@oxf.gdst.net",
  "ginnj@ripleycourt.co.uk",
  "16021@bodmincollege.co.uk",
  "me@simeonmitchell.net",
  "michael.eder@gmail.com",
  "ste.casimiro@gmail.com",
  "chris@glencross.org",
  "teacherhaggis@gmail.com",
  "parallel81@palomar.co.uk",
  "gerbaz@iinet.net.au",
  "gav1377+i@gmail.com",
  "rohan.appadu@gmail.com",
  "samsonbament@hotmail.com",
  "isobel.booksmythe@monash.edu",
  "yuma.takemoto@stmaryleboneschool.com",
  "17mitra623@kechg.org.uk",
  "jopycroft@hotmail.com",
  "avanosaur@gmail.com",
  "michael.li@student.tsc.nsw.edu.au",
  "makarschool2004@gmail.com",
  "kendra.lockman@mail.ccsf.edu",
  "amydlam888@gmail.com",
  "zhanfang@gmail.com",
  "o.cross@oxf.gdst.net",
  "tdpsalter@outlook.com",
  "opmasteraarush@gmail.com",
  "marclewell@hotmail.com",
  "trudicannock@yahoo.co.uk",
  "toby.corrin.t@gmail.com",
  "viji81@gmail.com",
  "alison.copner@teacher.eursc.eu",
  "21eforbes@tgschool.net",
  "7949@ratton.co.uk",
  "rsommerville@gmail.com",
  "mr.charlie.wadley@gmail.com",
  "erin.dd@btinternet.com",
  "no@none.com",
  "maps.parallelproj.v.dehlbtel@recursor.net",
  "maps.parallelprojtest.v.dehlbtel@recursor.net"
];

const SILVER = [
  "16ibhandary@kendrick.reading.sch.uk",
  "shwetlanajha@gmail.com",
  "178094@mhchs.org.uk",
  "traceyt@heaton.school.nz",
  "15987@bodmincollege.co.uk",
  "aneeza.mohammadshamsul@jis.edu.bn",
  "remikriskovic05@gmail.com",
  "sc@bodmincollege.co.uk",
  "thsi23@patana.ac.th",
  "jamesdunster26482@lister.newham.sch.uk",
  "stacy.david@jis.edu.bn",
  "16146@bodmincollege.co.uk",
  "is7kh16@keaston.bham.sch.uk",
  "jazzy.j2004@icloud.com",
  "kareem.kasaji@gmail.com",
  "16031@bodmincollege.co.uk",
  "7555@ratton.co.uk",
  "elevenleamington@gmail.com",
  "chrislethbridge2001@yahoo.co.uk",
  "andreihuinok@gmail.com",
  "hannahzhang6322@gmail.com",
  "15961@bodmincollege.co.uk",
  "john.brown1325@gmail.com",
  "itle23@patana.ac.th",
  "178161@mhchs.org",
  "kasramoein4@gmail.com",
  "widad.sahraini@jis.edu.bn",
  "16gabaraonye@chelsea-academy.org",
  "manishaditi@gmail.com",
  "zuzankazuz@gmail.com",
  "16lclark@danecourt.kent.sch.uk",
  "issa23@patana.ac.th",
  "jgtaylor@ntlworld.com",
  "amb001@cliftoncollege.com",
  "olivia2eddie@yahoo.com",
  "kuba.dodo@outlook.com",
  "bibe23@patana.ac.th",
  "16021@bodmincollege.co.uk",
  "sophie-m4@outlook.com",
  "majadabegum26108@lister.newham.sch.uk",
  "amelia@gmak.net",
  "amei.lim@jis.edu.bn",
  "rossiterd@bcsd.com",
  "myuschh@gmail.com",
  "jason.taylor+parallel@abingdon.org.uk",
  "jess.flack21@cullomptoncollege.org",
  "159893@bodmincollege.co.uk",
  "005889@britishschool.be",
  "prch23@patana.ac.th",
  "y16abant@latymer.co.uk",
  "15971@bodmincollege.com",
  "farhanarshad26575@lister.newham.sch.uk",
  "mskmoorthy@gmail.com",
  "ziyan.mitha@gmail.com",
  "paulrichardroberts@hotmail.com",
  "kiwi23@patana.ac.th",
  "abgo23@patana.ac.th",
  "yaze16@holyportcollege.org.uk",
  "16087@bodmincollege.co.uk",
  "arapykalay14@gmail.com",
  "bebl23@patana.ac.th",
  "17howardj@birkdaleschool.org.uk",
  "kamalishunmugam26195@lister.newham.sch.uk",
  "ditrames@gmail.com",
  "nikhilmkknike@gmail.com",
  "peterjw2005@gmail.com",
  "prta23@patana.ac.th",
  "17pengs@birkdaleschool.org.uk",
  "kevinxholi@gmail.com",
  "ben.woollatt21@cullomptoncollege.org",
  "21field@liverpoolcollege.org.uk",
  "nawalfatima26185@lister.newham.sch.uk",
  "16164@bodmincollege.co.uk",
  "george.wakeham@spaldinggrammar.lincs.sch.uk",
  "han.hor@jis.edu.bn",
  "malaikadauptain26183@lister.newham.sch.uk",
  "nahidahrahman26775@lister.newham.sch.uk",
  "h.minniss04@gmail.com",
  "oscar.brown@cgs.act.edu.au",
  "16hendy_m@thehoward.org",
  "md.shafiurrahman25866@lister.newham.sch.uk",
  "rosemary.dray@wgacademy.org.uk",
  "cse_kata@yahoo.co.uk",
  "2670732836@qq.com",
  "abinjosemuthumala@gmail.com",
  "ssmith@utcoxfordshire.org.uk",
  "claire.riedlinger@live.com",
  "jade.jq.qiu@gmail.com",
  "clareandfil@hotmail.co.uk",
  "mitasevaj@gmail.com",
  "zago.melissa@gmail.com",
  "lili24@patana.ac.th",
  "cooperb@heaton.school.nz",
  "alice@goward.com",
  "islanewmansmith@gmail.com",
  "checkley_chris@yahoo.co.uk",
  "rob88au@yahoo.com",
  "alovett17@heathfieldcc.co.uk",
  "atbravo@yahoo.co.uk",
  "17datta523@kechg.org.uk",
  "r.williams@oxf.gdst.net",
  "gamalwafa248@gmail.com",
  "manishaditi1@gmail.com",
  "geetisha@hotmail.com",
  "grigg06@btinternet.com",
  "raymond.ton1@det.nsw.gov.au",
  "durbsmum@gmail.com",
  "elizabethcarver099@gmaill.com",
  "annathebishop@gmail.com",
  "elliottj01@icloud.com",
  "natasha.thorley@outlook.com",
  "junhao.chen@jca.cabot.ac.uk",
  "powerfurykevin@gmail.com",
  "elmiram@yahoo.com",
  "lsh0589@gmail.com",
  "henry@thejumps.co.uk",
  "chloeacooper2005@gmail.com",
  "17ysci@rosebery.surrey.sch.uk",
  "binnief@heaton.school.nz",
  "yolu24@patana.ac.th",
  "joeyjordan2005@outlook.com",
  "sadie@bsvrecruitment.co.uk",
  "sheetalwalke@gmail.com",
  "8052@ratton.co.uk",
  "rodney.rawson@det.nsw.edu.au",
  "7992@ratton.co.uk",
  "v.umashankari@gmail.com",
  "toby.corrin.t@gmail.com",
  "elha24@patana.ac.th",
  "17westj@qegs.lincs.sch.uk",
  "pasi24@patana.ac.th",
  "theshearmanfamily@btinternet.com",
  "gideon01793@gmail.com",
  "8024@ratton.co.uk",
  "hlamiddleton@gmail.com",
  "ngayathridevi@gmail.com",
  "davehedgehog2005@hotmail.co.uk",
  "martha.bozic@durham.ac.uk",
  "nina.correia22@cullomptoncollege.org",
  "shashidhar.honnungar@gmail.com",
  "22_tdu337@worleschool.org.uk",
  "jack.ruming@student.tsc.nsw.edu.au",
  "marnipip@gmail.com"
];

const BRONZE = [
  "iceberg@coolmail.com",
  "zach@sniggih.com",
  "7973@ratton.co.uk",
  "ujin.gankhuyag@stmaryleboneschool.com",
  "conor.press@student.tsc.nsw.edu.au",
  "grey.kaede@gmail.com",
  "andysummerskill@hotmail.com",
  "becky.brylka@tesco.net",
  "s.m.asplin@gmail.com",
  "17ewilliams@danecourt.kent.sch.uk",
  "leahalemayehu3@gmail.com",
  "lprice017@bulmershe.wokingham.sch.uk",
  "sophie.buckley@googlemail.com",
  "kfarley@thealegreen.w-berks.sch.uk",
  "martin.lo@student.tsc.nsw.edu.au",
  "p200098@batleygirls.co.uk",
  "raylenovo2016@outlook.com",
  "17090@dixonsca.com",
  "8069@ratton.co.uk",
  "tess.ali@stmaryleboneschool.com",
  "emmelinem@yahoo.com",
  "amlj24@patana.ac.th",
  "21ebarker@tgschool.net",
  "keira022006@icloud.com",
  "marwood-r-19@kcs.org.uk",
  "katherine.morris@stmaryleboneschool.com",
  "aidan.grainger@outlook.com",
  "durimxhema@icloud.com",
  "andy@ndpsoftware.com",
  "hannah.j.leary@gmail.com",
  "irischall@comcast.net",
  "michaelkennedy.ohri@gmail.com",
  "richam02@sky.com",
  "marsh@goodthinkingsociety.org",
  "joshuaboase@gmail.com",
  "17fhickmott@danecourt.kent.sch.uk",
  "kiranjotkaur326@gmail.com",
  "tildz.ellis@gmail.com",
  "17151@dixonsca.com",
  "sacheen@hotmail.com",
  "7892@ratton.co.uk",
  "nimisha_sha@yahoo.co.uk",
  "hollyloveridge68@gmail.com",
  "anna_jeffery@yahoo.co.uk",
  "freddiedavies@greenleas.wirral.sch.uk",
  "handmchaps@hotmail.co.uk",
  "cdharr@hawken.edu",
  "skenttaylor+lkt@gmail.com",
  "17tdrake@danecourt.kent.sch.uk",
  "andy_paula_reedsmith@me.com",
  "j.sun@oxf.gdst.net",
  "takumi.parker@gmail.com",
  "harriscottage@aol.com",
  "joc2482@googlemail.com",
  "satangpattanun@hotmail.com",
  "yyeh@taptonschool.co.uk",
  "sarahdry@gmail.com",
  "andy@oryxdigital.net",
  "16460@bodmincollege.co.uk",
  "aryan.bonneyjoseph1@education.nsw.gov.au",
  "milliemillard2006@gmail.com",
  "17tdaud@danecourt.kent.sch.uk",
  "harry.tanguy@icloud.com",
  "alovett17@heathfieldcc.co.uk",
  "sarah_margret@yahoo.co.uk",
  "g.brooks@towers.school",
  "lavenderj1@wordsleyschool.co.uk",
  "2020xera5662@is5q.org",
  "hazzarlatz@icloud.com",
  "l.delves@blueyonder.co.uk",
  "nora.voll@outlook.com",
  "17141@dixonsca.com",
  "michelle_lincoln77@yahoo.co.uk",
  "shaistahussain@yahoo.co.uk",
  "maxwell.halliday@tsc.student.nsw.au",
  "h.perry@oxf.gdst.net",
  "17amacura@danecourt.kent.sch.uk",
  "i8rasher@gmail.com",
  "7876@ratton.co.uk",
  "julia.e.rooney@googlemail.com",
  "pjlalfam@gmail.com",
  "anetaanwar@gmail.com",
  "26ikary@cheltenham.org",
  "phoebe.baylis@bullerswood.bromley.sch.uk",
  "sam.hirst@student.tsc.nsw.edu.au",
  "henrikbirkholm@gmail.com",
  "20rmorelli@tgschool.net",
  "tyisha.johnson@stmaryleboneschool.com",
  "15966@bodmincollege.com",
  "lali23@patana.ac.th",
  "tnolan016@bulmershe.wokingham.sch.uk",
  "marctantono@hotmail.com",
  "16048@bodmincollege.co.uk",
  "rory12345@icloud.com",
  "bridgettesutton@columbacollege.school.nz",
  "16246@bodmincollege.co.uk",
  "178078@mhchs.org.uk",
  "ben2005tucker@gmail.com",
  "sneugarten@gmail.com",
  "liakekkos@icloud.com",
  "enric5510@gmail.com",
  "22confra@hawken.edu",
  "lachlan.ho@cgs.act.edu.au",
  "ilyas.hakim@jis.edu.bn",
  "16078@bodmincollege.com",
  "charlottemilne@columbacollege.school.nz",
  "ildiko.pelczer@gmail.com",
  "16178@bodmincollege.co.uk",
  "beckyhollows@yahoo.com.au",
  "ahmad.jamsari@jis.edu.bn",
  "16fjones@chelsea-academy.org",
  "lanhjamint@gmail.com",
  "noabrad@icloud.com",
  "jadamba@hotmail.com",
  "16153@bodmincollege.co.uk",
  "ksps@hotmail.com",
  "jadeina.annor@stmaryleboneschool.com",
  "oliviathorn@columbacollege.school.nz",
  "alfred.luxton-keough21@cullomtoncollege.org",
  "giki23@patana.ac.th",
  "16144@bodmincollege.co.uk",
  "16150@bodmincollege.co.uk",
  "lauramilne@shcs.school.nz",
  "178189@mhchs.org.uk",
  "benbutlercampbell.bc@gmail.com",
  "adambarnes1984@gmail.com",
  "bsaunders016@bulmershe.wokingham.sch.uk",
  "dbonsu016@bulmershe.wokingham.sch.uk",
  "pjen100@yahoo.com",
  "erin.dd@btinternet.com",
  "16137@bodmincollage.co.uk",
  "jennawalsh12345@gmail.com",
  "kama23@patana.ac.th",
  "maya.prabhakar@outlook.com",
  "riyazmahdi26770@lister.newham.sch.uk",
  "tamarwarne@outlook.com",
  "tyler@tylerheathcote.com",
  "ddtirving55@glow.sch.uk",
  "finn@wittlich-triebow.com",
  "16163@bodmincollege.com",
  "kevinxholi@gmail.com",
  "lisa@pink-frog.co.uk",
  "yekm23@patana.ac.th",
  "charlotte.harris@jis.edu.bn",
  "ewolfel016@bulmershe.wokingham.sch.uk",
  "aung.koko@jis.edu.bn",
  "khe016@bulmershe.wokingham.sch.uk",
  "prasannayella@gmail.com",
  "16147@bodmincollege.co.uk",
  "oscar.morley@jis.edu.bn",
  "sosv23@patana.ac.th",
  "bowa23@patana.ac.th",
  "mikastalley@gmail.com",
  "yarah.al-silawi@stmaryleboneschool.com",
  "amelia@gmak.net",
  "lakhwir@hotmail.com",
  "16051@bodmincollege.co.uk",
  "emmarowe205@outlook.com",
  "hans.r.suter@bluewin.ch",
  "kgainy016@bulmershe.wokingham.sch.uk",
  "skylamurray@columbacollege.school.nz",
  "ceni23@patana.ac.th",
  "taslimabegum25848@lister.newham.sch.uk",
  "avidyoungreader@gmail.com",
  "yash23@patana.ac.th",
  "mmeadows016@bulmershe.wokingham.sch.uk",
  "magdalena@ringertz.se",
  "16071@bodmincollege.com",
  "joshcaps314@outlook.com"
];

async function run() {
  const file = path.join(__dirname, `../private/tmp-users.json`);
  const accounts = JSON.parse(fs.readFileSync(file)).users;
  let u = 0;

  for (let a of accounts) {
    let c = null;
    if (GOLD.indexOf(a.email) >= 0) c = 'gold';
    if (SILVER.indexOf(a.email) >= 0) c = 'silver';
    if (BRONZE.indexOf(a.email) >= 0) c = 'bronze';

    if (c) await fb.database().ref('users/' + a.localId).update({certificate: c});
    if (c) u += 1;
  }

  console.log('updated:', u);
}

run();
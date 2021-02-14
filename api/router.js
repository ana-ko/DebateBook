var express = require('express')
var router = express.Router()
var bodyParser = require('body-parser')
var jsonParser = bodyParser.json()



router.post('/updateSettings', jsonParser, (req, res) => {
  res.redirect("/posts");
})

router.post('/updateSettingsNames', jsonParser, (req, res) => {
  res.redirect("/settings");
})

router.post('/register', jsonParser, (req, res) => {
  res.redirect("/login");
})


router.post('/login', jsonParser, (req, res) => {
  var email = req.body.email;
  var password = req.body.password;

  if (email === 'ako' && password === "a") {
    return res.status(200).send(
      {
        "name": "ana",
        "email" : "ako",
        "password" : "a",
        "id": "1",
        "profileImageUrl": "https://m.media-amazon.com/images/I/61LtEG9S4yL._AC_SX522_.jpg",
        "joinDate" : "14.02.2019",
        "firstName" : "Ana",
        "lastName" : "Kokh",
        "myPostsAmount" : 1,
        "myOpnionsAmount" : 2
      }
    )
  }

  res.status(401).send();
})

router.get('/posts', (req, res) => {
  res.send(JSON.stringify({
    "1":{
      "id": "11",
      "author": "someUser",
      "question" : "Shekitxva 1: antrofologias chavabreb?",
      "backGround" : "amjerad silabusi sheicvala da ufro meti motivaciac maq mosashoreblad",
      "upvoteScore" : "16",
      "stronglyDisagree": "4",
      "disagree": "2",
      "neutral" : "3",
      "agree": "0",
      "stronglyAgree" : "1",
      "opinions": {
          "freeUser_1":{
            "user" : "freeUser",
              "text" : "ara ar dagemtavrebinos universiteti",
              "type" : 1
          },
          "ana_1":{
            "user" : "ana",
              "text" : "codna SHROMA tavisufleba slogani. me mjera sheni;>",
              "type" : 5
          }
       }
    },
    "2":{
      "id": "22",
      "author": "freeUser",
      "question" : "Freeunishi archeviti sagnebi daemateba?",
      "backGround" : "kreditebshi gviwirs xalxs 3 sasurveli sagnidan 3zeve uari gvitxres ar iqnebao:<",
      "upvoteScore" : "20",
      "stronglyDisagree": "2",
      "disagree": "2",
      "neutral" : "9",
      "agree": "11",
      "stronglyAgree" : "3",
      "opinions": {
        "ana_1":{
          "user" : "ana",
            "text" : "I want to break free, yvelaferi mogvardeba;>",
            "type" : 3
        },
        "ana_2":{
          "user" : "ana",
            "text" : "agaraferi agar iqneba kargad",
            "type" : 2
        },
        "freeUser_1":{
          "user" : "freeUser",
            "text" : "Au uazro xaxli nu mikomenatrebt ra. aq saqmistvis vart mosulebi. unda gairkvas ra sagnebis archeva sheidzleba!",
            "type" : 1
        }
     },
     
    },
    "3":{
      "id": "23",
      "author": "ana",
      "question" : "Rato miyvars komentarebshi debatebis kitxva?",
      "backGround" : "Ver mogcemt damatbeit informacias jer tvit shemecnebis fazashi var, ver mogcemt damatbeit informacias jer tvit shemecnebis fazashi var",
      "upvoteScore" : "4",
      "stronglyDisagree": "3",
      "disagree": "2",
      "neutral" : "0",
      "agree": "2",
      "stronglyAgree" : "1",
      "opinions": {
        "freeUser_1":{
          "user" : "freeUser",
            "text" : "reebs wer shen vera xar? gigitenebs xo cota tavshi?? codna SHROMA tavisfuleba wadi antro chaabre",
            "type" : 1
        },
        "someUser_1":{
          "user" : "someUser",
            "text" : "xalxs aq antor gvaq samecadino gtoxvt nu gvacdent uzaro postebit",
            "type" : 2
        },
        "freeUser_2":{
          "user" : "freeUser",
            "text" : "bodishi, wina gamoxotomistvis, cota gadaviwvi",
            "type" : 5
        }
     }
    },
    "4":{
      "id": "43",
      "author": "someUser",
      "question" : "Udziloba senia?",
      "backGround" : "dadis azri rom 8 saati dzili zedmetad bevria da sheileba shevamcirot dro",
      "upvoteScore" : "13",
      "stronglyDisagree": "3",
      "disagree": "2",
      "neutral" : "0",
      "agree": "2",
      "stronglyAgree" : "1",
      "opinions": {
        "freeUser_1":{
          "user" : "freeUser",
            "text" : "udziloba freeunelebis senia, gindoda uni? xoda sheirge",
            "type" : 1
        },
        "guest_1":{
          "user" : "guest",
            "text" : "kiki senia wadi imkurnale shvilo, sheni samezoblos saxelit droze daidzine da chvenc dagvdzine",
            "type" : 5
        },
        "someUser_1":{
          "user" : "someUser",
            "text" : "iasnia senia da codvac ari tvinis celebrospianluri fluidebi(tu rogorc gvaswavles) tu ar gagiwmenden tvins dawkenbi male.",
            "type" : 4
        },
        "freeUser_2":{
          "user" : "freeUser",
            "text" : "bodishi, wina gamoxotomistvis, mgoni seriozuli problema maq sibrazestan. vimushaveb chemi tavis gaumjobesebaze ar momaqciot yuradgeba",
            "type" : 3
        }
     }
    },
    "5":{
      "id": "54",
      "author": "someUser",
      "question" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
      "backGround" : "Etiam dapibus eu nulla in vehicula. Integer erat mi, porta non lacus nec, lobortis feugiat odio. Ut commodo, magna at pretium luctus, eros ligula pretium quam, nec gravida libero nisi eget nulla. In at velit quis justo malesuada tincidunt id non tellus. In lorem arcu, pretium vel nibh bibendum, interdum iaculis justo. Donec sit amet laoreet leo. Maecenas in vestibulum diam. Nulla auctor libero in rhoncus porttitor.",
      "upvoteScore" : "7",
      "stronglyDisagree": "3",
      "disagree": "2",
      "neutral" : "1",
      "agree": "2",
      "stronglyAgree" : "1",
      "opinions": {
        "freeUser_1":{
          "user" : "freeUser",
            "text" : "Duis lobortis ac eros et venenatis. Sed blandit, nunc a viverra commodo, diam odio interdum neque, et finibus lectus tortor et nisi.",
            "type" : 3
        },
        "guest_1":{
          "user" : "guest",
            "text" : "Praesent cursus cursus elementum. ",
            "type" : 2
        },
        "someUser_1":{
          "user" : "someUser",
            "text" : "Nullam eu neque quis turpis ullamcorper pellentesque ac id tellus. Nunc nibh enim, eleifend ac felis vel, pharetra gravida dolor. In tellus urna, tempor sit amet ante vel, interdum pretium ipsum. Fusce ut pellentesque orci, ultricies sodales erat. In hac habitasse platea dictumst. Sed sed maximus elit. In bibendum odio odio, nec placerat leo ultricies nec. ",
            "type" : 4
        },
        "freeUser_2":{
          "user" : "guest",
            "text" : "Aliquam mi enim, fermentum rhoncus tempor rutrum, dictum sit amet metus. Vivamus mattis nunc ut libero interdum, vitae consectetur elit pharetra.",
            "type" : 5
        }
     }
    },    
    "6":{
      "id": "64",
      "author": "ana",
      "question" : "Udziloba Curabitur ac sem a risus condimentum varius a a ante. Praesent aliquet tempus fermentum?",
      "backGround" : "Morbi eleifend quam orci, ut ornare tellus laoreet sed. Fusce tincidunt tortor ut nisi semper feugiat. In nec mollis felis, efficitur fringilla magna. Pellentesque eget turpis sed orci aliquet finibus. Curabitur non ex ac nisi varius consectetur sit amet in est.",
      "upvoteScore" : "1",
      "stronglyDisagree": "2",
      "disagree": "4",
      "neutral" : "2",
      "agree": "1",
      "stronglyAgree" : "1",
      "opinions": {
        "guest_1":{
          "user" : "guest",
            "text" : "Vivamus convallis vulputate libero et faucibus.",
            "type" : 1
        },
        "someUser_1":{
          "user" : "someUser",
            "text" : "Interdum et malesuada fames ac ante ipsum primis in faucibus.",
            "type" : 3
        },
        "guest_2":{
          "user" : "guest",
            "text" : "Nullam iaculis neque sit amet velit imperdiet dictum. Sed non mi in sapien faucibus commodo eget eget elit. Praesent eros dolor, aliquam a felis et, mollis pulvinar tortor.",
            "type" : 2
        },
        "ana_1":{
          "user" : "ana",
            "text" : "Donec urna quam, volutpat eu lobortis ac, dapibus sit amet eros. Integer varius egestas finibus. Cras porttitor, lacus nec lobortis dignissim, odio turpis molestie orci, nec congue eros nulla at ipsum. Fusce aliquet nisl orci, sed efficitur nisl elementum a. Mauris pretium ligula vitae volutpat lobortis.",
            "type" : 3
        },
        "someUser_2":{
          "user" : "someUser",
            "text" : "Praesent erat mauris, semper non lectus maximus, efficitur commodo nibh. Fusce eget fermentum urna. Cras vel interdum ex. Cras facilisis molestie interdum. Nunc vitae commodo lectus.",
            "type" : 1
        }
     }
    }
  }))
})




module.exports = router

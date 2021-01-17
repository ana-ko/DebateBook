var express = require('express')
var router = express.Router()


router.get('/test1', (req, res) => {
  res.send(JSON.stringify({
      "A": "B",
      "B" : "C"
  }))
})

router.get('/test2', (req, res) => {
  res.send(JSON.stringify({
      "C": "E"
  }))
})


router.get('/posts', (req, res) => {
  res.send(JSON.stringify({
    "1":{
      "id": "11",
      "author": "someUser",
      "question" : "Hello?",
      "backGround" : "backGorund infomration important",
      "upvoteScore" : "2",
      "stronglyDisagree": "4",
      "disagree": "2",
      "neutral" : "3",
      "agree ": "1",
      "stronglyAgree" : "0",
      "opinions": {
          "freeUser_1":{
            "user" : "freeUser",
              "text" : "freedom is very importnat",
              "type" : 1
          },
          "ana_1":{
            "user" : "ana",
              "text" : "something important",
              "type" : 5
          }
       }
    },
    "2":{
      "id": "22",
      "author": "freeUser",
      "question" : "Freeunis erxeva?",
      "backGround" : "codna shroma tavosuflbea backgornd infomration VERY important",
      "upvoteScore" : "20",
      "stronglyDisagree": "0",
      "disagree": "2",
      "neutral" : "9",
      "agree ": "11",
      "stronglyAgree" : "3",
      "opinions": {
        "ana_1":{
          "user" : "ana",
            "text" : "I want to break free",
            "type" : 3
        }
     }
    },
    "3":{
      "id": "23",
      "author": "ana",
      "question" : "Rato?",
      "backGround" : "Ravici",
      "upvoteScore" : "1",
      "stronglyDisagree": "3",
      "disagree": "2",
      "neutral" : "0",
      "agree ": "2",
      "stronglyAgree" : "1",
      "opinions": {
        "freeUser_1":{
          "user" : "freeUser",
            "text" : "reebs wer shen vera xar?",
            "type" : 1
        },
        "freeUser_2":{
          "user" : "freeUser",
            "text" : "freedom is very important",
            "type" : 5
        }
     }
    }
  }))
})

router.get('/test3', (req, res) => {
  res.send(
`<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title> Page App</title>
</head>

<body>

			login logout 
      <h1> test3 </h3>
	



</body>

</html>`

  )
})


module.exports = router

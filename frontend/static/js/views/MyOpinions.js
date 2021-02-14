import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(){
        super();
        this.setTitle("My Opinions");
    }

    async getHtml(){
        console.log("momaq data")
        
        var data = await fetch("/api/posts")
        .then(response => response.json())
        
       
     //   console.log(data)
        var postID;
        for (postID in data){
            console.log(data[postID].opinions)
            var opinionAuthor;
            for (opinionAuthor in data[postID].opinions){
                console.log("--opinionAuthor", opinionAuthor, "opinion: ",  data[postID].opinions[opinionAuthor])
            }
        }

        var user = JSON.parse(localStorage.getItem("user"))
        
        console.log(user)
      
        
        
        
        return /*html*/`
        <style>
            #demo {
                white-space: pre-wrap
            }

            li{
                float: left;
                clear: left;
            }

            .flex-container-background-posts{
                display: flex;
                flex-direction: column;  
                text-align: left;
                height: 100vh;
                width: 100%;
                max-width: 100%;
            }
            .flex-container-post-box{
                display:flex;
                justify-content: flex-start;  
                flex-direction: column;
                padding: 20px 40px;       
                border-radius: 1rem;
            }

            .flex-container-post{
                display:flex;
                flex-direction: column;
              /*  color: white; */
                max-width: 900px;
                
                border:2px solid white;
                border-radius: 1rem;
            }

            .flex-container-post-author{
                background-color: rgb(116, 219, 217);
                padding-left:20px;
                border-top-left-radius: 1em;
                border-top-right-radius: 1em;
            }

            .flex-container-post-question{
              /*  color:white; */
                background-color:  rgb(83, 212, 211);
                padding-left:20px;
                font-size: 28px;
                text-align: center;
            }
            .flex-container-post-background-description{
            /*   color:black; */
                background-color:  rgb(142, 230, 228);
                padding: 20px 20px;
                font-size: 18px;
            }

            .flex-container-post-statistics{
                display: flex;
                flex-direction: row;
                justify-content: flex-start;
                padding: 10px 10px;
                box-sizing: border-box;
              /*  color:black; */
                background-color: rgb( 116, 219, 217 );
                max-width: 100%;
            }

            .flex-container-post-statistics::-webkit-scrollbar-track {
                background-color: transparent;
            }

            .flex-container-post-statistics > div {
                display:flex;
                background-color: rgb(142, 230, 228);
                margin: 0 20px 0 0; 
                padding: 20px; 
                font-size: 15px;
                text-align: center;
                justify-content: center;
                align-items: center;
                border-radius: 1em;
            /*    color: white; */
            }

            .flex-opinions {
                display:flex;
                flex-direction: column;
                padding: 5px 10px;
                background-color: rgb(116, 219, 217);
                border-bottom-left-radius: 1rem;
                border-bottom-right-radius: 1rem;
            }

            .flex-opinion-box{
                display:flex;
                flex-direction: column;
                border-radius: 8px;
                padding: 5px 10px;
                margin: 5px 0 5px 0;
            }

            .flex-opinion-box-selected{
                display:flex;
                flex-direction: column;
                background-color: white;
                border-radius: 8px;
                padding: 4px 9px;
                margin: 5px 0 5px 0;
            }

            .flex-opinion-username{
                margin: 0;
                font-size: 16px;
            }

            .flex-opinion-opinion-text{
                font-size: 13px;
            /*    color: white; */
            }

            .header {
            
                display:flex;
                padding: 20px; 
                padding-left: 50px;
                font-size: 35px;
                font-weight: bold;
               
                background-color:  #222222;
                color: white;
            /*  color: black; */
            /* border-radius: 1em; */
            }

            .img-container {
                text-align: center;
                max-width:100%;
                height: auto;
                border-radius: 4em;
            
            }
            @media (max-width: 950px) {
                .flex-container-post-statistics {
                
                    /* max-width: 100%; */
                    overflow-x: scroll;
                }
            }
       
        </style>


        <div class="header">
            My Opinons
        </div>
        <div id ="demo" class = 'flex-container-background-posts'>  </div>

                
            <script>
                var data = JSON.parse('${JSON.stringify(data)}');
                var user = JSON.parse('${JSON.stringify(user)}');
                
                /*
                var postID;
                for (postID in data){
                    var opinionAuthor;
                    for (opinionAuthor in data[postID].opinions){
                        console.log(opinionAuthor,"===", user.name, typeof opinionAuthor, typeof user.name)
                        if (opinionAuthor.includes(user.name)){
                            console.log("opinion", typeof data[postID].opinions[opinionAuthor], data[postID].opinions[opinionAuthor])
                            var opinionText = JSON.stringify(data[postID].opinions[opinionAuthor], null, 2);
                         //   console.log("opinionText", opinionText)
                         var postData = JSON.stringify(data[postID], null, 4)

                        document.getElementById("demo").innerHTML += "<p>" + postData + "<br> <br>" + "</p>";
                        document.getElementById("demo").innerHTML += '<p style=\"color:blue\">' + opinionText + "<br>"+ "</p>";
                        }
                    }
                    
                   
                    
                } 
                */
               var postID;
                for (postID in data){
                    
                    var postData = JSON.stringify(data[postID], null, 4)
                    
                
                    
                    var opinionsHTML = "<div class='flex-opinions'>";
                    var opinionAuthor;
                    var isMyOpinionThere = false
                        for (opinionAuthor in data[postID].opinions){
                            if (opinionAuthor.includes(user.name)){
                                isMyOpinionThere = true
                            }
                        }

                        if (!isMyOpinionThere){
                            continue;
                        }

                        for (opinionAuthor in data[postID].opinions){
                            var opinionColor;
                            var opinionType = data[postID].opinions[opinionAuthor].type
                            switch(opinionType) {
                                case 1:
                                    opinionColor = "rgb(224, 137, 99);";
                                    break;
                                case 2:
                                    opinionColor = "rgb(255, 191, 163);";
                                    break;
                                case 4:
                                    opinionColor = "rgb(88, 185, 150);";
                                    break;
                                case 5:
                                    opinionColor = "rgb(56, 144, 112);";
                                    break;   
                                default:
                                    opinionColor = "rgb(254, 225, 145);";
                                }
                            
                            var flexOptionBoxDepending = "<div class='flex-opinion-box'>"
                            if (data[postID].opinions[opinionAuthor].user === user.name){
                                flexOptionBoxDepending = "<div class='flex-opinion-box-selected'>"
                            }
                            opinionsHTML += flexOptionBoxDepending 
                            +"<div class='flex-opinion-box' style='background-color:"+ opinionColor +"'>" 
                                + "<div class='flex-opinion-username'>" + data[postID].opinions[opinionAuthor].user + "</div>"
                                + "<div class='flex-opinion-opinion-text'>" + data[postID].opinions[opinionAuthor].text + "</div>"
                                
                                + "</div>"
                           
                            + "</div>"
                        
                        }
                        opinionsHTML += "</div>"
                        
                        document.getElementById("demo").innerHTML +=  "<div class='flex-container-post-box'>"
                        /*    + "<div class='img-container'> <img src='http://i.imgur.com/OUla6mK.jpg' width=50px height =50px> </div>" */
                            + "<div class='flex-container-post'>"
                            + "<div class='flex-container-post-author'> Author: " + data[postID].author + " </div>" 
                            + "<div class='flex-container-post-question'> "+ data[postID].question + "</div>"
                            + "<div class='flex-container-post-background-description'> "+ data[postID].backGround + " </div>"
                            + "<div class='flex-container-post-statistics'> "
                                
                                + "<div style='background-color:rgb(224, 137, 99);'>" + "Strongly<br>Disagree:<br>" + data[postID].stronglyDisagree + "</div>"
                                + "<div style='background-color:rgb(255, 191, 163);'>" + "Disagree:<br>" + data[postID].disagree + "</div>"
                                + "<div style='background-color:rgb(254, 225, 145);'>" + "Neutral:<br>" + data[postID].neutral + "</div>"
                                + "<div style='background-color:rgb(88, 185, 150);'>" + "Agree:<br>" + data[postID].agree + "</div>"
                                + "<div style='background-color:rgb(56, 144, 112);'>" + "Strongly<br>Agree:<br>" + data[postID].stronglyAgree + "</div>"
                                
                                + "<div style='font-weight:bold; margin: 0 0 0 auto;'>" + "Upovtes:<br>" + data[postID].upvoteScore + "</div>"

                            + "</div>"      
                            + opinionsHTML 
                            + "</div> </div>";
                           
                
                        
                    }
                
            

            </script>
        `;
    }
}
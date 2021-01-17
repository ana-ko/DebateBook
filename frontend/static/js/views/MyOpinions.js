import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(){
        super();
        this.setTitle("My Opinions");
    }

    async getHtml(){
        console.log("momaq data")
        
        const data = await fetch("/api/posts")
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

        const user = JSON.parse(localStorage.getItem("user"))
        
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
           
        </style>

            <h1>Posts:</h1>
            In total ${user.myOpnionsAmount}
            <p id ="demo">  </p>
            

                
            <script>
                const data = JSON.parse('${JSON.stringify(data)}');
                console.log("works");
                console.log(data)
                const user = JSON.parse('${JSON.stringify(user)}');
                console.log(user)
                
                var postID;
                for (postID in data){
                    var opinionAuthor;
                    for (opinionAuthor in data[postID].opinions){
                        console.log(opinionAuthor,"===", user.name, typeof opinionAuthor, typeof user.name)
                        if (opinionAuthor.includes(user.name)){
                            console.log("opinion", typeof data[postID].opinions[opinionAuthor], data[postID].opinions[opinionAuthor])
                            const opinionText = JSON.stringify(data[postID].opinions[opinionAuthor], null, 2);
                         //   console.log("opinionText", opinionText)
                         const postData = JSON.stringify(data[postID], null, 4)

                         document.getElementById("demo").innerHTML += "<p>" + postData + "<br> <br>" + "</p>";
                            document.getElementById("demo").innerHTML += '<p style=\"color:blue\">' + opinionText + "<br>"+ "</p>";
                        }
                    }
                    
                   
                    
                } 
                

            </script>
        `;
    }
}
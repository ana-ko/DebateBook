import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(){
        super();
        this.setTitle("Posts");
    }

    async getHtml(){
        console.log("momaq data")
        
        const data = await fetch("/api/posts")
        .then(response => response.json())
        
       
     //   console.log(data)
        var postID;
        for (postID in data){
            console.log(data[postID].upvoteScore, typeof data[postID])

        };


        var dataArray = [];

        for(var i in data)
            dataArray.push( data[i]);
        
        

       
        dataArray.sort((a,b) => {
            var aScore = parseInt(a.upvoteScore, 10)
            var bScore = parseInt(b.upvoteScore, 10)
            return bScore - aScore
        })

        console.log("did data array work?",   dataArray[0].upvoteScore, dataArray)
      
        var keyCount  = Object.keys(data).length
        
        
        
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
            In total ${keyCount}
            <p id ="demo">  </p>
            

                
            <script>
             const data = JSON.parse('${JSON.stringify(dataArray)}');
             console.log(data)
             for (postID in data){
                 console.log(data[postID].upvoteScore)
                 const postData = JSON.stringify(data[postID], null, 4)
                 document.getElementById("demo").innerHTML += "<p>" + postData + "</p>";
             }
            /*
               
            
                const data = JSON.parse('${JSON.stringify(data)}');
                console.log("works");
                console.log(data)
                var postID;
                for (postID in data){
                    
                    const postData = JSON.stringify(data[postID], null, 4)
                    console.log(postData)
                    console.log(Array.isArray(data[postID]))
                    document.getElementById("demo").innerHTML += "<p>" + postData + "</p>";
                    
                } 
                */
            </script>
        `;
    }
}
import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(){
        super();
        this.setTitle("My Posts");
    }

    async getHtml(){
        console.log("momaq data")
        
        const data = await fetch("/api/posts")
        .then(response => response.json())
        
       
     //   console.log(data)
        var postID;
        for (postID in data){
            console.log(postID)
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
            In total ${user.myPostsAmount}
            <p id ="demo">  </p>
            

                
            <script>
                const data = JSON.parse('${JSON.stringify(data)}');
                console.log("works");
                console.log(data)
                const user = JSON.parse('${JSON.stringify(user)}');
                console.log(user)
                var postID;
                for (postID in data){
                    
                    const postData = JSON.stringify(data[postID], null, 4)
                    console.log(data[postID].author,"===", user.name)
                    if (user.name === data[postID].author){
                        document.getElementById("demo").innerHTML += "<p>" + postData + "</p>";
                    }
                    
                } 
            </script>
        `;
    }
}
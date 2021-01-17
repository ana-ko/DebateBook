import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(){
        super();
        this.setTitle("My Profile");
    }

    async getHtml(){
        const user = JSON.parse(localStorage.getItem("user"))
        
        console.log(user)
        
        

        return /*html*/`
            <style>
            .img-container {
                text-align: center;
                max-width:100%;
                height: auto;
                border-radius: 4em;
               
              }
              .flex-container {
                display: flex;
                flex-direction: column;
                background-color:  #009579;
                border-radius : 2em;
              }

              .flex-container > div {
                background-color: #f1f1f1;
               
                margin: 10px;
                text-align: center;
                line-height: 75px;
                font-size: 30px;
                border-radius :2em;
              }
              
            </style>

            <h1>My Profile</h1>
            <p>
                <h1>${user.name} </h1>
                <div class = "img-container">
                     <img src="${user.profileImageUrl}" >


                </div>

                <div class="flex-container">
                <div>${user.firstName} ${user.lastName}</div>
                <div>${user.joinDate} </div>
                <div>My Posts: ${user.myPostsAmount} </div>
                <div>My Opnionions: ${user.myOpnionsAmount} </div>
                </div>

            </p>
        `;
    }
}
import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(){
        super();
        this.setTitle("My Profile");
    }

    async getHtml(){
        var user = JSON.parse(localStorage.getItem("user"))
        
        console.log(user)
        
        

        return /*html*/`
            <style>
            .img-container {
                text-align: center;
                max-width: 300px;
                height: auto;
                border-radius: 4em;
               
              }
              .header {  
                display:flex;
                padding: 20px;
                padding-left: 50px; 
                font-size: 35px;
                font-weight: bold;

                background-color:  #222222;
                color: white; 
            
              }

              
              .flex-container-profile-wrapper {
                padding: 20px 40px;
              }
              

              .flex-container-profile {
                display: flex;
                flex-direction: row;
                align-items: flex-start;
               /* background-color:  #009579; */
                max-width: 900px;
                background-color: rgb(116, 219, 217);
                border-radius: 1em;
                padding: 20px;
              }

              .flex-container-profile-stats {
                display: flex;
                flex-direction: column;
                margin: 0 0 0 10px;
                width: 100%;
               /* background-color:  #009579; */
              }

              .flex-container-profile-stat {
                background-color: #f1f1f1;
               
                margin: 0 0 10px 0;
                
                font-size: 20px;
                border:2px solid #f1f1f1;
                border-radius: 8px;
                white-space: nowrap;
                box-sizing: border-box;
              }

              .flex-container-profile-stats-top{
                background-color: rgb(73, 202, 201);
                border-top-left-radius: 8px;
                border-top-right-radius: 8px;
                padding: 0 0 2px 10px;
              }

              .flex-container-profile-stats-bottom{
                background-color: rgb(152, 240, 238);
                border-bottom-left-radius: 8px;
                border-bottom-right-radius: 8px;
                padding: 0 0 2px 10px;
              }

              .text-color{
                color: #222222;
              }

              .profile-image {
                max-width: 100%;
                height: auto;
              }

              
              @media (max-width: 600px) {
                .flex-container-profile {
                  flex-direction: column;
                }

                .flex-container-profile-stats {
                  margin: 10px 0 0 0;
                }

              }
            </style>

              <div class="header">
                My Profile
              </div>
            
                
                

                <div class="flex-container-profile-wrapper">
                  <div class="flex-container-profile">
                   
                    <div class = "img-container">
                      <img class="profile-image" src="${user.profileImageUrl}" >
                    </div>

                    <div class='flex-container-profile-stats'>
                      <div class='flex-container-profile-stat'> 
                        <div class='flex-container-profile-stats-top'>Username </div>
                        <div class='flex-container-profile-stats-bottom'>${user.name}  </div>
                      </div>

                      <div class='flex-container-profile-stat'> 
                        <div class='flex-container-profile-stats-top'>Full Name </div>
                        <div class='flex-container-profile-stats-bottom'>${user.firstName} ${user.lastName}</div>
                      </div>

                      <div class='flex-container-profile-stat'> 
                        <div class='flex-container-profile-stats-top'>Email </div>
                        <div class='flex-container-profile-stats-bottom'>${user.email} </div>
                      </div>

                      <div class='flex-container-profile-stat'> 
                        <div class='flex-container-profile-stats-top'>Join Date </div>
                        <div class='flex-container-profile-stats-bottom'>${user.joinDate}</div>
                      </div>

                      <div class='flex-container-profile-stat'> 
                        <div class='flex-container-profile-stats-top' style='border-bottom-left-radius:8px; border-bottom-right-radius:8px;'>My Posts Amount: ${user.myPostsAmount}</div>                
                      </div>
                      
                      
                      <div class='flex-container-profile-stat'>                    
                        <div class='flex-container-profile-stats-top' style='border-bottom-left-radius:8px; border-bottom-right-radius:8px;'>My Opinions Amount: ${user.myOpnionsAmount}</div>                      
                      </div>


                
                    </div>

                  </div>
                </div>

            
        `;
    }
}
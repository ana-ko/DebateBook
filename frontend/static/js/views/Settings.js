import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(){
        super();
        this.setTitle("Settings");
    }


    async getHtml(){
         /* if user is logged in */
        var user = JSON.parse(localStorage.getItem("user"))
        
        console.log(user)


        return /*html*/`
            
            <style>
                body {font-family: Arial, Helvetica, sans-serif;}
               /* form {border: 3px solid #f1f1f1;} */

                input[type=text], input[type=password] {
                    width: 100%;
                    padding: 12px 20px;
                    margin: 8px 0;
                    display: inline-block;
                    border: 1px solid #ccc;
                    box-sizing: border-box;
                }

                button {
                    background-color: #4CAF50;
                    color: white;
                    padding: 14px 20px;
                    margin: 8px 0;
                    border: none;
                    cursor: pointer;
                    width: 100%;
                }

                button:hover {
                    opacity: 0.8;
                }

                .cancelbtn {
                    width: auto;
                    padding: 10px 18px;
                    background-color: #f44336;
                    border-radius: 8px;
                }

                .submitbtn{
                    
                    border-radius: 10px;
                }

                .imgcontainer {
                    text-align: center;
                    margin: 24px 0 12px 0;
                }

                img.avatar {
                    width: 40%;
                    border-radius: 50%;
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

                .container {
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                /* background-color:  #009579; */
                    max-width: 900px;
                    background-color: rgb(116, 219, 217);
                    border-radius: 1em;
                    padding: 20px;
                }

                .container-button {
                    display: flex;
                    flex-direction: row;
                    justify-content: space-around;
                    background-color:rgb(217, 255, 248);
                    width: 100%;
                    border-radius: 10px;
                }

                .container-wrapper {
                    padding: 20px 40px;
                }

                span.psw {
                    float: right;
                    padding-top: 16px;
                    font-size: 15px;
                    
                }

                /* Change styles for span and cancel button on extra small screens */
                @media screen and (max-width: 300px) {
                    span.psw {
                        display: block;
                        float: none;
                    }
                    .cancelbtn {
                        width: 100%;
                    }
                }
                </style>

                <div class="header">
                    Settings
                </div>

                <form action="/api/updateSettingsNames" method="post">
               
                    <div class='container-wrapper'>
                        <div class="container">
                            <label for="uname"><b>Username</b></label>
                            <input type="text" placeholder="Enter Username" name="uname" value=${user.name} required>
                            
                            <label for="uname"><b>First Name</b></label>
                            <input type="text" placeholder="Enter Username" name="uname" value=${user.firstName} required>
                            

                            <label for="uname"><b>Last Name</b></label>
                            <input type="text" placeholder="Enter Username" name="uname" value=${user.lastName} required>
                            


                            <button type="submit">Edit</button>

                            <div class='container-button'>
                                <button type="button" class="cancelbtn">Cancel</button>
                            </div>
                        
                        </div>

                        
                            
                    </div>
                </form>

                <form action="/api/updateSettings" method="post">
               
                <div class='container-wrapper'>
                    <div class="container">          

                        <label for="psw"><b>Old Password</b></label>
                        <input type="password" placeholder="Enter Password" name="psw" required>
                        
                        <label for="psw"><b>New Password</b></label>
                        <input type="password" placeholder="Enter Password" name="psw" required>
                            

                        <button type="submit" class="submitbtn">Change</button>
                        <div class='container-button'>
                            <button type="button" class="cancelbtn">Cancel</button>
                            <span class="psw"> <a href="#">Forgot Password?</a></span>
                        </div>
                    </div>
                   

                </div>
                </form>

        `;
    }
}
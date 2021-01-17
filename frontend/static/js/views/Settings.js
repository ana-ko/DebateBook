import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(){
        super();
        this.setTitle("Settings");
    }
    



    async getHtml(){
         /* if user is logged in */
        const user = JSON.parse(localStorage.getItem("user"))
        
        console.log(user)


        return /*html*/`
            <h1>Settings</h1>
            <style>
                body {font-family: Arial, Helvetica, sans-serif;}
                form {border: 3px solid #f1f1f1;}

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
                }

                .imgcontainer {
                text-align: center;
                margin: 24px 0 12px 0;
                }

                img.avatar {
                width: 40%;
                border-radius: 50%;
                }

                .container {
                padding: 16px;
                }

                span.psw {
                float: right;
                padding-top: 16px;
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

                <form action="/action_page.php" method="post">
                <!--TODO: aq gadavamissamort -->
               

                <div class="container">
                    <label for="uname"><b>Username</b></label>
                    <input type="text" placeholder="Enter Username" name="uname" value=${user.name} required>
                    
                    <label for="uname"><b>First Name</b></label>
                    <input type="text" placeholder="Enter Username" name="uname" value=${user.firstName} required>
                    

                    <label for="uname"><b>Last Name</b></label>
                    <input type="text" placeholder="Enter Username" name="uname" value=${user.lastName} required>
                    


                    <button type="submit">Edit</button>
                   
                </div>

                <div class="container" style="background-color:#f1f1f1">
                    <button type="button" class="cancelbtn">Cancel</button>
                    
                </div>
                </form>

                <form action="/action_page.php" method="post">
                <!--TODO: aq gadavamissamort  passwordze-->
               

                <div class="container">          

                    <label for="psw"><b>Old Password</b></label>
                    <input type="password" placeholder="Enter Password" name="psw" required>
                    
                    <label for="psw"><b>New Password</b></label>
                    <input type="password" placeholder="Enter Password" name="psw" required>
                        

                    <button type="submit">Change</button>
                   
                </div>

                <div class="container" style="background-color:#f1f1f1">
                    <button type="button" class="cancelbtn">Cancel</button>
                    <span class="psw">Forgot <a href="#">password?</a></span>
                </div>
                </form>

        `;
    }
}
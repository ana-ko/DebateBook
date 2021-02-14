import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(){
        super();
        this.setTitle("Login");
    }

    async getHtml(){
        return /*html*/`
            <style>
                .container {
                    padding: 16px;
                    display: flex;
                    flex-direction: column;
                    max-width: 800px;
                    margin: auto;
                }

                input[type=text], input[type=password] {    
                    padding: 15px;
                    margin: 5px 0 22px 0;
                    display: inline-block;
                    border: none;
                    background: #f1f1f1;
                }

                input[type=text]:focus, input[type=password]:focus {
                    background-color: #ddd;
                    outline: none;
                }

            hr {
                border: 1px solid #f1f1f1;
                margin-bottom: 25px;
            }

            .registerbtn {
                background-color: #4CAF50;
                color: white;
                padding: 16px 20px;
                margin: 8px 0;
                border: none;
                cursor: pointer;
                width: 100%;
                opacity: 0.9;
            }

            .registerbtn:hover {
                opacity: 1;
            }

            .signin {
                background-color: #f1f1f1;
                text-align: center;
            }
            </style>

            
            <form action="/api/register" method="POST">
                <div class="container">
                    <h1>Register</h1>
                    
                    <label for="email"><b>Email</b></label>
                    <input type="text" placeholder="Enter Email" name="email" id="email" required>

                    <label><b>Password</b></label>
                    <input type="password" placeholder="Enter Password" name="psw" id="password" required>

                    <label><b>Repeat Password</b></label>
                    <input type="password" placeholder="Repeat Password" name="psw-repeat" id="psw-repeat" required>

                    <button type="submit" class="registerbtn">Register</button>
                </div>
            </form>
        `;
    }
}
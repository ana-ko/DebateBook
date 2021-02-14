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

            .login {
                background-color: #4CAF50;
                color: white;
                padding: 16px 20px;
                margin: 8px 0;
                border: none;
                cursor: pointer;
                width: 100%;
                opacity: 0.9;
            }

            .login:hover {
                opacity: 1;
            }

            .signin {
                background-color: #f1f1f1;
                text-align: center;
            }
            </style>

            
            
            <div class="container">
                <h1>Login</h1>
                
                <label for="email"><b>Email</b></label>
                <input type="text" id="input-email" placeholder="Enter Email" required>

                <label><b>Password</b></label>
                <input type="password" id="input-password" placeholder="Enter Password" required>

                <button class="login" id="login-button">Login</button>
            </div>

            <script>
                document.querySelector('#login-button').onclick = () => {
                    var email = document.querySelector('#input-email').value;
                    var password = document.querySelector('#input-password').value;

                    fetch('/api/login', {
                        method: 'POST',
                        body: JSON.stringify({
                            email: email,
                            password: password,
                        }),
                        headers: { "Content-Type": "application/json" }
                    }).then((res) => {
                        if (res.ok) {
                            return res.json();
                        }
                        throw new Error("Email or password incorrect");
                    }).then((user) => {
                        localStorage.setItem("user", JSON.stringify(user));
                        
                        /* Trick I found to change location with javascript*/
                        var a = document.createElement("a");
                        a.style.display = "none";
                        a.href = "/myProfile";
                        document.body.appendChild(a);
                        a.click();
                        a.remove();
                }).catch(err => {
                        console.log(err);
                        alert("Email or password is incorrect");
                    });
                }
            </script>
            
        `;
    }
}
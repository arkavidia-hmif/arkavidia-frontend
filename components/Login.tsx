import React from 'react'

function Login() {
    return (
        <div className="main">
            <div className="left">
                <h1>Login ke Dashboard</h1>
                <hr></hr>
                <form>
                    <label>Alamat Email</label>
                    <input type="text" placeholder="johndoe@gmail.com" />
                    <label>Kata Sandi</label>
                    <input type="password" placeholder="********" />
                    <button type="submit">Login</button>
                    <p>Lupa kata sandi ? <span>Reset</span></p>
                    <p>Belum terdaftar ? <span>Register</span></p>
                </form>

            </div>
            <img src="/img/bg.png"/>
            <style jsx>
                {`
                    .left {
                        display: inline-block;
                        // border: 1px solid red;
                        width: 45%;
                        height: auto;
                        margin-left: 70px;
                        float: left;
                    }

                    img {
                        position: absolute;
                        width: 55%;
                        // border: 1px solid blue;
                        float: right;
                        z-index: -1;
                    }
                    
                    h1 {
                        font-family: Viga;
                        font-style: normal;
                        font-weight: normal;
                        font-size: 60px;
                        letter-spacing: 0.01em;
                        width: 554px;
                        /* standard gradient background */
                        background: linear-gradient(rgba(254, 120, 154, 1), rgba(98, 63, 162, 1));
                      
                        /* clip hackery */
                        -webkit-background-clip: text;
                        -webkit-text-fill-color: transparent;
                    }

                    hr {
                        width: 35%;
                        float: left;
                        display: block;
                        color: red;
                        height: 10px;
                        background: linear-gradient(90deg, #FE789A 0%, #623FA2 100%);
                        left: 0;
                        margin-top: -40px;
                    }

                    form {
                        margin-top: 40px;
                        display: block;
                    }

                    label {
                        font-family: Roboto;
                        font-style: normal;
                        font-weight: bold;
                        font-size: 24px;
                        display: block;
                        margin-top: 10px;
                    }

                    input {
                        margin-top: 10px;
                        width: 60%;
                        border: none;
                        padding: 5px 0 10px 0;
                        border-bottom: 2px solid black;
                        box-sizing: border-box;
                        background: none;
                    }

                    input[type="text"], input[type="password"] {
                        font-size: 20px;
                        font-family: Roboto;
                        font-style: normal;
                        font-weight: bold;
                    }

                    input:focus {
                        outline: none;
                    }

                    ::placeholder {
                        font-family: Roboto;
                        font-style: normal;
                        font-weight: bold;
                        font-size: 20px;
                    }

                    button {
                        display: block;
                        background: #FE789A;
                        border-radius: 10px;
                        color: white;
                        border: none;
                        width: 120px;
                        height: 40px;
                        font-family: Roboto;
                        font-style: normal;
                        font-weight: bold;
                        font-size: 22px;
                        cursor: pointer;
                        margin: 30px 0 30px 0;
                    }

                    p {
                        font-family: Roboto;
                        font-style: normal;
                        font-weight: normal;
                        font-size: 22px;
                        line-height: 26px;
                        font-weight: bold;
                        color: #7446A1;
                        line-height: 0.3;
                    }

                    span {
                        color: #FE789A;
                    }

                    .main {
                        overflow: hidden;
                        margin: 0;
                        padding: 0;
                        position: relative;
                        width: 100%;
                        height: 100vh;
                        background: linear-gradient(180deg, rgba(255, 255, 255, 0.26) 20.31%, rgba(255, 163, 186, 0.38) 53.65%, rgba(168, 142, 215, 0.56) 100%);
                    }
                    
                `}
            </style>
        </div>
    )
}

export default Login

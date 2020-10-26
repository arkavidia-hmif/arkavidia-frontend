import React from 'react'

function Register() {
  return (
    <div className="flex-container">
      <div className="left">
        <h1>Registrasi Akun</h1>
        <hr />
        <form>
          <label>Nama Lengkap</label>
          <input type="text" placeholder="John Doe" />
          <label>Alamat Email</label>
          <input type="text" placeholder="johndoe@gmail.com" />
          <label>Kata Sandi</label>
          <input type="password" placeholder="*********" />
          <label>Ulang Kata Sandi</label>
          <input type="password" />
          <button type="submit">Daftar</button>
          <a href="#">Sudah punya akun ?</a>
        </form>
      </div>
      <div className="right">
        <img src="/img/bg-white.png" />
      </div>
      <style jsx>
        {`
          * {
            box-sizing: border-box;
          }
          
          .flex-container {
            display: flex;
            flex-direction: row;
            height: auto;
            background: linear-gradient(180deg, rgba(255, 255, 255, 0.26) 20.31%, rgba(255, 163, 186, 0.38) 53.65%, rgba(168, 142, 215, 0.56) 100%);
          }

          .left {
            flex: 45%;
            padding-left: 50px;
          }
            
          .right {
            padding: 10px;
            flex: 55%;
          }

          @media (max-width: 800px) {
            .flex-container {
              flex-direction: column;
            }
          }

          h1 {
            font-family: Viga;
            font-style: normal;
            font-weight: normal;
            font-size: 60px;
            line-height: 81px;
            letter-spacing: 0.01em;
            display: block;
            background: linear-gradient(rgba(254, 120, 154, 1), rgba(98, 63, 162, 1));
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }

          hr {
            width: 30%;
            height: 10px;
            background: linear-gradient(90deg, #FE789A 0%, #623FA2 100%);
            float: left;
            margin-top: -50px;
          }

          form {
            height: auto;
            width: 78%;
          }

          label {
            font-family: Roboto;
            font-style: normal;
            font-weight: bold;
            font-size: 22px;
            line-height: 26px;
            display: block;
            color: #000000;
            margin-top: 10px;
          }

          input {
            width: 100%;
            border: none;
            padding: 5px 0 10px 0;
            border-bottom: 2px solid black;
            box-sizing: border-box;
            background: none;
            margin-top: 10px;
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
            display: inline-block;
            background: #FE789A;
            border-radius: 10px;
            width: 110px;
            height: 45px;
            border: none;
            color: white;
            font-family: Roboto;
            font-style: normal;
            font-size: 20px;
            margin-right: 140px;
            cursor: pointer;
            margin-top: 20px;
          }

          a {
            display: inline-block;
            font-family: Roboto;
            font-style: normal;
            font-weight: bold;
            font-size: 20px;
            color: #7446A1;
            text-decoration: none;
          }

          img {
            width: 660px;
            float: right;
            margin: -45px 0 0 0;
          }
        `}
      </style>
    </div>
  )
}

export default Register

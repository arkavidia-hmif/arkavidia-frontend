import * as React from 'react'

const Login: React.FC = () => {
  return (
    <div className="flex-container">
      <div className="left">
        <h1>Login ke Dashboard</h1>
        <hr />
        <form>
          <label>Alamat Email</label>
          <input type="text" placeholder="johndoe@gmail.com" />
          <label>Kata Sandi</label>
          <input type="password" placeholder="*********" />
          <button type="submit">Login</button>
          <p>Lupa kata sandi ? <a href="#">Reset</a></p>
          <p>Belum terdafar ? <a href="#">Daftar</a></p>
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
            width: 100%;
            display: flex;
            flex-direction: row;
            height: auto;
            background: linear-gradient(180deg, rgba(255, 255, 255, 0.26) 20.31%, rgba(255, 163, 186, 0.38) 53.65%, rgba(168, 142, 215, 0.56) 100%);
          }

          .left {
            flex: 45%;
            padding-left: 60px;
          }
            
          .right {
            padding: 10px;
            flex: 55%;
          }

          @media (max-width: 800px) {
            .flex-container {
              flex-direction: column;
            }

            h1 {
                width: 50%;
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
            width: 40%;
            height: 10px;
            background: linear-gradient(90deg, #FE789A 0%, #623FA2 100%);
            float: left;
            margin-top: -40px;
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
            display: block;
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

          p {
            font-family: Roboto;
            font-style: normal;
            font-weight: normal;
            font-size: 22px;
            line-height: 3px;
            color: #7446A1;
          }

          a {
            display: inline-block;
            font-family: Roboto;
            font-weight: bold;
            font-style: normal;
            font-size: 20px;
            color: #FE789A;
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

export default Login

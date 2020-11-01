import * as React from 'react';
import FilledButton from "../FilledButton";
import ColorfulHeader from '../ColorfulHeader';
import { Theme } from '../../styles/theme';

const Login: React.FC = () => {
  return (
    <div className="flex-container">
      <div className="left">
        <ColorfulHeader
          color={Theme.headerColors.plpi}
          headingLevel={6}
          size="4rem"
        >
          Login ke Dashboard
        </ColorfulHeader>
        <hr />
        <br />
        <form>
          <label htmlFor="email">Alamat Email</label>
          <input id="email" type="email" placeholder="johndoe@gmail.com" />
          <label htmlFor="password">Kata Sandi</label>
          <input id="password" type="password" placeholder="*********" />
          <FilledButton text="LOGIN" padding="0.75em 1.5em" />
          <p className="mt-3">Lupa kata sandi ? <a href="/forget-password">Reset</a></p>
          <p>Belum terdafar ? <a href="/register">Daftar</a></p>
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
            margin-top: 2rem;
            width: 100%;
            display: flex;
            flex-direction: row;
            height: auto;
          }

          .left {
            flex: 50%;
            padding-left: 3rem;
          }

          .right {
            padding: 1rem;
            flex: 50%;
          }

          @media (max-width: 800px) {
            .flex-container {
              flex-direction: column;
            }

            h1 {
              width: 75%;
            }
          }

          hr {
            width: 40%;
            height: 0.4rem;
            background: linear-gradient(90deg, #fe789a 0%, #623fa2 100%);
            float: left;
            margin-top: -0.05rem;
            display: block;
          }

          form {
            margin-top: 2rem;
            height: auto;
            width: 78%;
            display: block;
          }

          label {
            font-family: Roboto;
            font-style: normal;
            font-weight: bold;
            font-size: 1.4rem;
            line-height: 1.2rem;
            display: block;
            color: #000000;
            margin-top: 0.8rem;
          }

          input {
            width: 100%;
            border: none;
            padding: 0.5rem 0 0.5rem 0;
            border-bottom: 0.15rem solid black;
            box-sizing: border-box;
            background: none;
            margin: 0.5rem 0 1rem 0;
          }

          input[type="text"],
          input[type="password"] {
            font-size: 1.2rem;
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
            font-size: 1.2rem;
          }

          p {
            font-family: Roboto;
            font-style: normal;
            font-weight: normal;
            font-size: 1.3rem;
            line-height: 0.5rem;
            color: #7446A1;
          }

          a {
            display: inline-block;
            font-family: Roboto;
            font-weight: bold;
            font-style: normal;
            font-size: 1.3rem;
            color: #fe789a;
            text-decoration: none;
          }

          img {
            width: 100%;
            float: right;
            margin: -3rem 0 0 0;
          }
        `}
      </style>
    </div>
  );
};

export default Login;

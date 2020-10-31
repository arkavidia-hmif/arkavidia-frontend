import * as React from 'react';
import { useContext, useState } from 'react';
import FilledButton from "../FilledButton";
import ColorfulHeader from '../ColorfulHeader';
import { Theme } from '../../styles/theme';
import { ApiContext } from '../../utils/context/api';
import { AuthContext } from '../../utils/context/auth';

const Login: React.FC = () => {

  interface UserStatus {
    data: {
      user?: {
        address: string;
        birthDate: string;
        currentEducation: string;
        dateJoined: string;
        email: string;
        fullName: string;
        institution: string;
        phoneNumber: string;
      };
      code?: string;
      detailWrong?: string;
      detailUnknown?: {
        email: [string];
        password: [string];
      }
    };

    status: number;
  }

  const authContext = useContext(AuthContext);
  const apiContext = useContext(ApiContext);

  const [result, setResult] = useState<UserStatus | undefined>(undefined);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="flex-container">
      <div className="left">
        <ColorfulHeader color={Theme.headerColors.plpi} headingLevel={6} size="4rem">Login ke Dashboard</ColorfulHeader>
        <hr />
        <br />
        <form>
          <label htmlFor="email">Alamat Email</label>
          <input id="email" type="email" placeholder="johndoe@gmail.com" value={email} onChange={(evt => {setEmail(evt.target.value);})} />
          {result?.data.code === "unknown_error" ? <p className="p-wrong">{result?.data.detailUnknown?.email}</p> : <p className="p-wrong">{result?.data.detailWrong}</p>}
          <label htmlFor="password">Kata Sandi</label>
          <input id="password" type="password" placeholder="*********" value={password} onChange={(evt => {setPassword(evt.target.value);})}/>
          {result?.data.code === "unknown_error" ? <p className="p-wrong">{result?.data.detailUnknown?.email}</p> : <p className="p-wrong">{result?.data.detailWrong}</p>}
          <FilledButton text="LOGIN" padding="0.75em 1.5em" onClick={() => {
            if (!authContext.authenticated) {
              apiContext.axios.post('/auth/login/', {
                email,
                password
              }).then((response) => {
                authContext.setAuthenticated(true);
                authContext.setAuth(response.data);
                setResult({
                  data: response.data.user,
                  status: response.status
                });
              }).catch((err) => {
                setResult({
                  data: {
                    code: err.response.data.code,
                    detailWrong: err.response.data.detail,
                    detailUnknown: err.response.data.detail,
                  },
                  status: err.response.status
                });
              });
            } else {
              authContext.setAuthenticated(!authContext.authenticated);
              authContext.setAuth();
            }
          }}/>
          <p className="mt-3">Lupa kata sandi ? <a href="#">Reset</a></p>
          <p className="mt-3">Belum terdafar ? <a href="/register">Daftar</a></p>
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
            background: linear-gradient(90deg, #FE789A 0%, #623FA2 100%);
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

          input[type="text"], input[type="password"] {
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

          .mt-3 {
            font-family: Roboto;
            font-style: normal;
            font-weight: normal;
            font-size: 1.2rem;
            line-height: 0.5rem;
            color: #7446A1;
          }

          a {
            display: inline-block;
            font-weight: bold;
            font-size: 1.3rem;
            color: #FE789A;
            text-decoration: none;
          }

          img {
            width: 100%;
            float: right;
            margin: -3rem 0 0 0;
          }

          .p-wrong {
            font-family: Roboto;
            font-style: normal;
            font-weight: bold;
            font-size: 1rem;
            line-height: 0.5rem;
            color: red;
            // visibility: hidden;
          }

        `}
      </style>
    </div>
  );
};

export default Login;

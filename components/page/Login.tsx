import * as React from 'react';
import { useState } from 'react';
import FilledButton from "../FilledButton";
import ColorfulHeader from '../ColorfulHeader';
import { Theme } from '../../styles/theme';
import { ApiContext } from '../../utils/context/api';
import { AuthContext } from '../../utils/context/auth';
import { login } from '../../api/auth';
import { LoginStatus } from "../../interfaces/auth";
import Alert from '../Alert';
import { ApiError, StandardError } from "../../api/error";
import InputField from '../auth/InputField';
import GradientSeparator from '../auth/GradientSeparator';

const Login: React.FC = () => {

  const authContext = React.useContext(AuthContext);
  const apiContext = React.useContext(ApiContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = () => {
    if (!authContext.authenticated) {
      setLoading(true);
      login(apiContext.axios, email, password).then(() => { 
        setError(null);
      }).catch((e) => { 
        if (e instanceof ApiError && e.code === LoginStatus.INVALID_CREDS) {
          setError('Email atau password salah');
        } else if (e instanceof ApiError && e.code === StandardError.ERROR) {
          setError('Tidak boleh kosong');
        } else if (e instanceof ApiError && e.code === LoginStatus.EMAIL_NOT_CONFIRMED) {
          setError('Email belum dikonfirmasi');
        }
      }).finally(() => { setLoading(false); });
    } else {
      authContext.setAuthenticated(authContext.authenticated);
      authContext.setAuth();
    }
  };

  return (
    <div className="flex-container">
      <div className="left">
        <ColorfulHeader color={Theme.headerColors.plpi} headingLevel={6} size="4rem">Login ke Dashboard</ColorfulHeader>
        <GradientSeparator />
        <form onSubmit={(evt) => {
          evt.preventDefault();
          handleSubmit();
        }}>
          <InputField name="Alamat Email" value={email} setValue={setEmail} placeholder="johndoe@email.com" />
          <Alert error={error} />
          <InputField name="Kata Sandi" type={"password"} value={password} setValue={setPassword} placeholder="***********" />
          <Alert error={error} />
          <div style={{width: "100%", margin: "1rem 0 1rem 0"}}></div>
          <FilledButton text="LOGIN" loading={loading} padding="0.75em 1.5em" onClick={handleSubmit}/>
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
            margin: 0.5rem 0 0.5rem 0;
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
        `}
      </style>
    </div>
  );
};

export default Login;

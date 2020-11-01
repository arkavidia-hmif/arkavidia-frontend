import * as React from 'react';
import { useState } from 'react';
import FilledButton from "../FilledButton";
import ColorfulHeader from '../ColorfulHeader';
import { Theme } from '../../styles/theme';
import GradientSeparator from '../auth/GradientSeparator';
import InputField from '../auth/InputField';
import { ApiContext } from '../../utils/context/api';
import { AuthContext } from '../../utils/context/auth';
import { register } from '../../api/auth';
import { ApiError } from "../../api/error";
import { RegisterStatus } from "../../interfaces/auth";
import Alert from '../Alert';

const Register: React.FC = () => {

  const authContext = React.useContext(AuthContext);
  const apiContext = React.useContext(ApiContext);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [emptyName, setEmptyName] = useState('');
  const [emptyEmail, setEmptyEmail] = useState('');
  const [emptyPassword, setEmptyPassword] = useState('');

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = () => {
    if (!authContext.authenticated) {
      if (name === '') {
        setEmptyName("Nama tidak boleh kosong");
        setEmptyPassword("");
        setEmptyEmail("");
      } else if (email === '') {
        setEmptyEmail("Email tidak boleh kosong");
        setEmptyPassword("");
        setEmptyName("");
      } else if (password === '') {
        setEmptyPassword("Password tidak boleh kosong");
        setEmptyEmail("");
        setEmptyName("");
      } else {
        setEmptyPassword("");
        setEmptyEmail("");
        setEmptyName("");

        setLoading(true);
        register(apiContext.axios, name, email, password).then(() => {
          setError(null);
        }).catch((e) => { 
          if (e instanceof ApiError && e.code === RegisterStatus.EMAIL_USED) {
            setError('Email sudah digunakan');
          }
        }).finally(() => { setLoading(false); });
      }
    } else {
      authContext.setAuthenticated(authContext.authenticated);
      authContext.setAuth();
    }
  };

  return (
    <div className="flex-container">
      <div className="left">
        <ColorfulHeader color={Theme.headerColors.plpi} headingLevel={6} size="4rem">Registrasi Akun</ColorfulHeader>
        <GradientSeparator />
        <form onSubmit={(evt) => {
          evt.preventDefault();
          handleSubmit();
        }}>
          <InputField name="Nama Lengkap" value={name} setValue={setName} placeholder="John Doe" />
          <Alert error={emptyName}/>
          <InputField name="Alamat Email" value={email} setValue={setEmail} placeholder="John Doe" />
          <Alert error={error || emptyEmail}/>
          <InputField type={"password"} name="Kata Sandi" value={password} setValue={setPassword} placeholder="********" />
          <Alert error={emptyPassword}/>
          <div style={{width: "100%", margin: "1rem 0 1rem 0"}}></div>
          <FilledButton text="DAFTAR" padding="0.75em 1.5em" loading={loading} />
          <a href="/login">Sudah punya akun ? </a>
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
            padding-bottom: 1rem;
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

          a {
            display: inline-block;
            font-family: Roboto;
            font-weight: bold;
            font-style: normal;
            font-size: 1.3rem;
            color: #7446A1;
            text-decoration: none;
            float: right;
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

export default Register;
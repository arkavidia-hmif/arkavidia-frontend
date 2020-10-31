import ColorfulHeader from '../components/ColorfulHeader';
import FilledButton from '../components/FilledButton';
import Layout from '../components/Layout';
import { Theme } from '../styles/theme';

const LoginPage: React.FC = () => (
  <Layout background={Theme.bgColors.whpipl} title="Login">
    <div className="container mx-auto row mb-3">
      <div className="col-md-6 px-4 px-md-5">
        <br />
        <br />
        <ColorfulHeader color={Theme.headerColors.plpi} headingLevel={6} size="3rem">Lupa Kata Sandi</ColorfulHeader>
        <hr />
        <br />
        <p className="my-3">Jangan khawatir, masukkan emailmu untuk mendapatkan tautan perubahan kata sandi</p>
        <form>
          <label htmlFor="email">Alamat Email</label>
          <input id="email" type="email" placeholder="johndoe@gmail.com" />
          <br />
          <br />
          <FilledButton text="KIRIM" padding="0.75em 1.5em" />
        </form>
      </div>
      <div className="col-md-6">
        <img src="/img/bg-white.png" />
      </div>
      <style jsx>
        {`
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

          p {
            font-family: Roboto;
            font-style: normal;
            font-weight: normal;
            font-size: 1.1rem;
            color: #7446A1;
          }

          img {
            width: 100%;
          }
        `}
      </style>
    </div>
  </Layout>
);

export default LoginPage;

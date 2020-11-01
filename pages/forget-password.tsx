import Link from 'next/link';
import { useContext, useState } from 'react';
import { resetPassword } from '../api/auth';
import Alert from '../components/Alert';
import GradientSeparator from '../components/auth/GradientSeparator';
import InputField from '../components/auth/InputField';
import ColorfulHeader from '../components/ColorfulHeader';
import FilledButton from '../components/FilledButton';
import Layout from '../components/Layout';
import { Theme } from '../styles/theme';
import { ApiContext } from '../utils/context/api';
import { isValidEmail } from '../utils/validator';

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const apiContext = useContext(ApiContext);

  const onSubmit = () => {
    setError(null);

    if (!isValidEmail(email)) {
      setError('Alamat email invalid');
    }

    setLoading(true);

    resetPassword(apiContext.axios, email)
      .then(() => {
        setSuccess(true);
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <Layout background={Theme.bgColors.whpipl} title="Lupa Kata Sandi">
      <div className="container mx-auto row mb-3">
        <div className="col-md-6 px-4 px-md-5 mt-5">
          <ColorfulHeader color={Theme.headerColors.plpi} headingLevel={6} size="3rem">Lupa Kata Sandi</ColorfulHeader>
          <GradientSeparator />
          <br />
          {!success ?
            <>
              <Alert error={error} />
              <p className="my-3">Jangan khawatir, masukkan emailmu untuk mendapatkan tautan perubahan kata sandi</p>
              <form onSubmit={(evt) => {
                evt.preventDefault();
                onSubmit();
              }}>
                <InputField name="Alamat Email" value={email} setValue={setEmail} placeholder="johndoe@email.com" />
                <br />
                <FilledButton onClick={onSubmit} text="KIRIM" loading={loading} padding="0.75em 1.5em" />
              </form>
            </>
            : <>
              <p className="my-3">Silahkan cek emailmu untuk menemukan tautan perubahan kata sandi</p>
              <Link href="/login">
                <FilledButton text="KEMBALI KE LOGIN" padding="0.75em 1.5em" />
              </Link>
            </>}
        </div>
        <div className="col-md-6">
          <img src="/img/bg-white.png" />
        </div>
        <style jsx>
          {`
          form {
            margin-top: 2rem;
            height: auto;
            width: 78%;
            display: block;
          }

          p {
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
};

export default LoginPage;

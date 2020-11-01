import Link from 'next/link';
import { useContext, useState } from 'react';
import { requestResetPassword } from '../api/auth';
import Alert from '../components/Alert';
import AuthWrapper from '../components/auth/AuthWrapper';
import InputField from '../components/auth/InputField';
import FilledButton from '../components/FilledButton';
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
      return;
    }

    setLoading(true);

    requestResetPassword(apiContext.axios, email)
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
    <AuthWrapper title="Lupa Kata Sandi">
      {!success ?
        <>
          <Alert error={error} />
          <p className="my-3 mb-4">Jangan khawatir, masukkan emailmu untuk mendapatkan tautan perubahan kata sandi</p>
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
      <style jsx>{`
        p {
          color: #7446A1;
        }
      `}</style>
    </AuthWrapper>
  );
};

export default LoginPage;

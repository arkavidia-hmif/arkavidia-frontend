import { useRouter } from "next/dist/client/router";
import Link from "next/link";
import { useContext, useState } from "react";
import { resetPassword } from "../../../api/auth";
import { ApiError } from "../../../api/error";
import Alert from "../../../components/Alert";
import GradientSeparator from "../../../components/auth/GradientSeparator";
import InputField from "../../../components/auth/InputField";
import ColorfulHeader from "../../../components/ColorfulHeader";
import FilledButton from "../../../components/FilledButton";
import Layout from "../../../components/Layout";
import { EmailResetPasswordStatus } from "../../../interfaces/auth";
import { Theme } from "../../../styles/theme";
import { ApiContext } from "../../../utils/context/api";

const EmailRecover: React.FC = () => {
  const apiContext = useContext(ApiContext);

  const router = useRouter();
  const { token } = router.query;

  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onSubmit = () => {
    setError(null);

    if (password.length < 8) {
      setError('Kata sandi minimal 8 karakter');
      return;
    }

    if (password !== confirmPassword) {
      setError('Pengulangan kata sandi harus sama');
      return;
    }

    if (!token) {
      setError('Tautan ini salah, silakan coba lakukan reset password lagi');
      return;
    }

    setLoading(true);

    resetPassword(apiContext.axios, token as string, password)
      .then(() => { setSuccess(true); })
      .catch((e) => {
        if (e instanceof ApiError && e.code === EmailResetPasswordStatus.INVALID_TOKEN) {
          setError('Tautan ini salah, silakan coba lakukan reset password lagi');
        } else {
          setError(e.message);
        }
      })
      .finally(() => { setLoading(false); });
  };

  return (
    <Layout background={Theme.bgColors.whpipl} title="Ganti Sandi">
      <div className="container mx-auto row mb-3">
        <div className="col-md-6 px-4 px-md-5 mt-5" >
          <ColorfulHeader color={Theme.headerColors.plpi} headingLevel={6} size="3rem">Ganti Kata Sandi</ColorfulHeader>
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
                <InputField name="Kata Sandi" type="password" value={password} setValue={setPassword} placeholder="************" />
                <InputField name="Konfirmasi Kata Sandi" type="password" value={confirmPassword} setValue={setConfirmPassword} placeholder="************" />
                <br />
                <FilledButton onClick={onSubmit} text="GANTI" loading={loading} padding="0.75em 1.5em" />
              </form>
            </>
            : <>
              <p className="my-3">Sukses, silahkan login dengan kata sandi barumu</p>
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

export default EmailRecover;
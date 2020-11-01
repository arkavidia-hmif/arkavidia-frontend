import { useRouter } from "next/dist/client/router";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { confirmEmailAddress } from "../../../api/auth";
import { ApiError } from "../../../api/error";
import Alert from "../../../components/Alert";
import AuthWrapper from "../../../components/auth/AuthWrapper";
import GradientSeparator from "../../../components/auth/GradientSeparator";
import ColorfulHeader from "../../../components/ColorfulHeader";
import FilledButton from "../../../components/FilledButton";
import Layout from "../../../components/Layout";
import { EmailVerifyStatus } from "../../../interfaces/auth";
import { Theme } from "../../../styles/theme";
import { ApiContext } from "../../../utils/context/api";

const ConfirmEmail: React.FC = () => {
  const apiContext = useContext(ApiContext);

  const router = useRouter();
  const { token } = router.query;

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setError(null);

    if (!token) {
      setError('Tautan ini salah, silakan coba lagi atau hubungi panitia');
      return;
    }

    confirmEmailAddress(apiContext.axios, token as string)
      .then(() => {
        setSuccess(true);
      }).catch((e) => {
        if (e instanceof ApiError && e.code === EmailVerifyStatus.INVALID_TOKEN) {
          setError('Tautan ini salah, silakan coba lagi atau hubungi panitia');
        } else {
          setError(e.message);
        }
      });
  }, []);


  return (
    <AuthWrapper title="Konfirmasi Email">
      {!success ?
        <>
          <Alert error={error} />
          <p className="my-3">Tunggu sebentar, kami sedang mengkonfirmasi email Anda</p>
        </>
        : <>
          <p className="my-3">Sukses, silahkan login dengan email dan kata sandi yang sudah didaftarkan</p>
          <Link href="/login">
            <FilledButton text="LOGIN" padding="0.75em 1.5em" />
          </Link>
        </>}

      <style jsx>
        {`
          p {
            color: #7446A1;
          }
        `}
      </style>
    </AuthWrapper>
  );
};

export default ConfirmEmail;
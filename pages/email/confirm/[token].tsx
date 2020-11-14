import { useRouter } from "next/dist/client/router";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import Alert from "../../../components/Alert";
import AuthWrapper from "../../../components/auth/AuthWrapper";
import FilledButton from "../../../components/FilledButton";
import { EmailVerifyStatus } from "../../../interfaces/auth";
import { ApiContext } from "../../../utils/context/api";
import { AuthContext } from "../../../utils/context/auth";
import { ApiError } from "interfaces/api";
import { confirmEmailAddress } from "api/auth";

const ConfirmEmail: React.FC = () => {
  const apiContext = useContext(ApiContext);
  const authContext = useContext(AuthContext);

  const router = useRouter();
  const { token } = router.query;

  if (!token) return null;

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (authContext.authenticated) {
      setError('Sedang login dengan akun lain, harap logout terlebih dahulu');
      return;
    }

    setError(null);

    confirmEmailAddress(apiContext.axios, token as string)
      .then(() => {
        setSuccess(true);
      })
      .catch((e) => {
        if (
          e instanceof ApiError &&
          e.code === EmailVerifyStatus.INVALID_TOKEN
        ) {
          setError("Tautan ini salah, silakan coba lagi atau hubungi panitia");
        } else {
          setError(e.message);
        }
      });
  }, []);

  return (
    <AuthWrapper title="Konfirmasi Email">
      {!success ? (
        <>
          <Alert error={error} />
          <p className="my-3">
            Tunggu sebentar, kami sedang mengkonfirmasi email Anda
          </p>
        </>
      )
        : (
          <>
            <p className="my-3">
              Sukses, silahkan login dengan email dan kata sandi yang sudah
              didaftarkan
            </p>
            <Link href="/login">
              <FilledButton text="LOGIN" padding="0.75em 1.5em" />
            </Link>
          </>
        )}

      <style jsx>
        {`
          p {
            color: #7446a1;
          }
        `}
      </style>
    </AuthWrapper>
  );
};

export default ConfirmEmail;

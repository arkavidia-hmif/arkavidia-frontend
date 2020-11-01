import { useRouter } from "next/dist/client/router";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { confirmEmailAddress } from "../../../api/auth";
import { ApiError } from "../../../api/error";
import Alert from "../../../components/Alert";
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
    <Layout background={Theme.bgColors.whpipl} title="Konfirmasi Email">
      <div className="container mx-auto row mb-3">
        <div className="col-md-6 px-4 px-md-5 mt-5" >
          <ColorfulHeader color={Theme.headerColors.plpi} headingLevel={6} size="3rem">Konfirmasi Email</ColorfulHeader>
          <GradientSeparator />
          <br />
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
        </div>
        <div className="col-md-6">
          <img src="/img/bg-white.png" />
        </div>
        <style jsx>
          {`
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

export default ConfirmEmail;
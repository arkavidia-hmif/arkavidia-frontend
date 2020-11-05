import { NextPage } from "next";
import Link from "next/link";
import * as Sentry from "@sentry/react";
import { useRouter } from "next/dist/client/router";
import FilledButton from "../components/FilledButton";
import Layout from "../components/Layout";

type Props = {
  statusCode: number;
};

const Error: NextPage<Props> = ({ statusCode }) => {
  if (typeof window !== undefined) {
    const router = useRouter();
    const scope = new Sentry.Scope();
    scope.setTag("path", router.pathname);
    Sentry.captureMessage('404', scope);
  }

  return (
    <Layout>
      <div className="container">
        <p>Waduh error :(</p>
        <h1>{statusCode}</h1>
        <Link href="/">
          <FilledButton text="Kembali ke homepage" />
        </Link>
      </div>
      <style jsx>{`
        div {
          height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        p {
          font-size: 2rem;
        }

        h1 {
          font-size: 10rem;
        }
      `}</style>
    </Layout>
  );
};

Error.getInitialProps = async ({ req }) => {
  const statusCode = req?.statusCode || 404;
  return { statusCode };
};

export default Error;

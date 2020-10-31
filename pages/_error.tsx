import { NextPage } from "next";
import Link from "next/link";
import FilledButton from "../components/FilledButton";
import Layout from "../components/Layout";

type Props = {
  statusCode: number
}

const Error: NextPage<Props> = ({ statusCode }) => {
  return (
    <Layout>
      <div className="container">
        <p>Waduh error :(</p>
        <h1>{statusCode}</h1>
        <Link href="/"><FilledButton text="Kembali ke homepage" /></Link>
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

        h1{
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
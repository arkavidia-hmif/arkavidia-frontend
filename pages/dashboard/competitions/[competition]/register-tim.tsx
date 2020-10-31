import DashboardWrapper from "../../../../components/page/Dashboard/DashboardWrapper";
import Layout from "../../../../components/Layout";
import FilledButton from "../../../../components/FilledButton";
import { Theme } from "../../../../styles/theme";

const RegisterTim: React.FC = () => (
  <Layout title="Competitions | Arkavidia 7.0" background="white">
    <DashboardWrapper />
    <div className="container">
      <div className="container-fluid mb-5 mt-5" id="main">
        <div id="content-container">
          <div id="heading">Buat Tim</div>
          <form className="mt-4">
            <label htmlFor="nama-tim">Nama tim</label>
            <input id="nama-tim" type="nama-tim" />
            <label htmlFor="asal">Asal universitas/sekolah</label>
            <input id="asal" type="asal" />
            <br />
            <br />
            <FilledButton text="SIMPAN DAN LANJUTKAN" padding="0.5rem 1.5rem" color={Theme.buttonColors.purpleButton}/>
          </form>
        </div>
        <div id="bg-container">
          <img src="../../../img/competitions/ctf.png" />
        </div>
      </div>
      <style jsx>{`
        #main {
          display: flex;
          margin-left: 4rem;
        }

        #content-container {
          flex: 60%;
        }

        #bg-container {
          flex: 40%;
          max-width: auto;
        }

        #heading {
          font-family: Viga;
          font-size: 2.25rem;

          color: #05058d;
        }

        form {
          height: auto;
          width: 90%;
          display: block;
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

        label {
          font-family: Roboto;
          font-size: 1.125rem;

          color: #696969;
        }

        input[type="nama-tim"],
        input[type="asal"] {
          font-size: 1.2rem;
          font-family: Roboto;
          font-style: normal;
        }

        input:focus {
          outline: none;
        }

        @media (max-width: 800px) {
          #bg-container {
            display: none;
          }
        }

        @media (max-width: 450px) {
          #main {
            margin-left: auto;
          }

          #heading {
            font-size: 1.25rem;
          }

          label {
            font-size: 1rem;
          }
        }
      `}</style>
    </div>
  </Layout>
);

export default RegisterTim;

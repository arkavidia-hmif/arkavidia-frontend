import { useContext } from "react";
import FilledButton from "../../../../components/FilledButton";
import { Theme } from "../../../../styles/theme";
import { ApiContext } from "../../../../utils/context/api";
import { useTeamCompetition } from "../../../../utils/hooks/useTeamCompetition";
import useFileUploader from "../../../../utils/hooks/useFileUploader";
import Alert from "../../../../components/Alert";
import Spinner from "../../../../components/Spinner";
import { Competition } from "../../../../interfaces/competition";
import FileUploader from "../../../FileUploader";

type Props = {
  competition: Competition;
  selection: number;
};

const PhotoInput: React.FC<Props> = ({ competition, selection }) => {
  const apiContext = useContext(ApiContext);
  const image = useFileUploader();
  const { isLoaded, isError } = useTeamCompetition(apiContext.axios);

  if (!competition) return null;

  if (isError) return <Alert error="Masalah koneksi" />;
  if (!isLoaded) return <Spinner height="200px" />;

  return (
    <>
      <div className="container-fluid mb-5 mt-5 col-sm-12 col-md-8" id="main">
        <div id="content-container">
          <div id="heading">Persyaratan Pendaftaran</div>
          <div id="ketentuan" className="mt-3">
            <div className="title">Ketentuan:</div>
            <ol>
              <li>{selection}</li>
              <li>Lorem</li>
              <li>Lorem</li>
            </ol>
          </div>
          <div id="upload" className="mt-3">
            <div className="title">Upload:</div>
            <FileUploader
              data={image}
              color={Theme.buttonColors.purpleButton}
              padding="0.5rem 1rem"
            />
          </div>
          <div id="status" className="mt-4">
            <div className="title">Status</div>
            <div className="subtitle">Belum diverivikasi</div>
          </div>
          <div id="simpan" className="mt-5">
            <FilledButton
              text="Simpan"
              color={Theme.buttonColors.purpleButton}
              padding="0.5rem 2rem"
            />
          </div>
        </div>
        <div id="bg-container">
          <img src="../../../img/competitions/ctf.png" />
        </div>

        <style jsx>{`
          #dashboard-area {
            min-height: 60vh;
          }

          #main {
            display: flex;
          }

          #content-container {
            flex: 60%;
            overflow-x: hidden;
          }

          #bg-container {
            flex: 40%;
            max-width: auto;
          }

          #heading {
            font-family: Viga;
            font-size: 1.5rem;
            color: #05058d;
          }

          .title {
            font-family: Roboto;
            font-weight: bold;
            color: #646464;
            font-size: 1.125rem;
          }

          .subtitle {
            font-family: Roboto;
            color: #646464;
            font-size: 1rem;
            padding: 0.5rem 1.125rem;
          }

          ol {
            padding: 0.5rem 1.125rem;
          }

          #upload-field {
            display: flex;
          }

          @media (max-width: 800px) {
            #bg-container {
              display: none;
            }
            .mt-5 {
              margin-top: 1rem !important;
            }
          }

          @media (max-width: 450px) {
            #main {
              margin-left: auto;
            }

            #heading {
              font-size: 1.25rem;
            }

            .title {
              font-size: 1rem;
            }

            .subtitle {
              font-size: 0.9375rem;
            }
          }
        `}</style>
      </div>
    </>
  );
};

export default PhotoInput;

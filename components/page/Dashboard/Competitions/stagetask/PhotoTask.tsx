// import { useContext } from "react";
// import { ApiContext } from "../../../../../utils/context/api";
import FilledButton from "../../../../FilledButton";
import { Theme } from "../../../../../styles/theme";
import useFileUploader from "../../../../../utils/hooks/useFileUploader";
import FileUploader from "../../../../FileUploader";
// import { uploadFile } from "../../../../../api/file";
import { TeamData } from "../../../../../interfaces/team";

type Props = {
  selection: number;
  team: TeamData;
};

const PhotoInput: React.FC<Props> = ({ team, selection }) => {
  // const apiContext = useContext(ApiContext);
  const image = useFileUploader();
  const handleSubmit = async () => {
    if (image?.value?.name) {
      // const res = await uploadFile(
      //   apiContext.axios,
      //   image.value,
      //   image.value.name
      // );
      // const submissionRes = res.id;
    }
  };
  return (
    <form
      encType="multipart/form-data"
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}
    >
      <div id="heading">Persyaratan Pendaftaran</div>
      <div id="ketentuan" className="mt-3">
        <div className="title">Ketentuan:</div>
        <ol>
          <li>{selection}</li>
          <li>{team?.category}</li>
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
          submit={true}
        />
      </div>

      <style jsx>{`
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

        @media (max-width: 800px) {
          .mt-5 {
            margin-top: 1rem !important;
          }
        }

        @media (max-width: 450px) {
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
    </form>
  );
};

export default PhotoInput;

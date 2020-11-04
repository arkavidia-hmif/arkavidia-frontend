import { useContext, useState } from "react";
import { ApiContext } from "../../../../../utils/context/api";
import FilledButton from "../../../../FilledButton";
import { Theme } from "../../../../../styles/theme";
import useFileUploader from "../../../../../utils/hooks/useFileUploader";
import { isValidFile } from "../../../../../utils/validator";
import FileUploader from "../../../../FileUploader";
import { uploadFile } from "../../../../../api/file";
import Alert from "../../../../Alert";
import Success from "../../../../Success";
import { TeamData } from "../../../../../interfaces/team";
import { Task } from "../../../../../interfaces/task";
import { submitTaskResponseCompetition } from "../../../../../api/competition";

type Props = {
  team: TeamData;
  widget: Task;
};

const PhotoTask: React.FC<Props> = ({ team, widget }) => {
  const apiContext = useContext(ApiContext);
  const file = useFileUploader();

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async () => {
    try {
      if (file?.value?.name && typeof widget.widgetParameters !== "string") {
        const bool = await isValidFile(file.value, widget.widgetParameters);
        if (bool) {
          const res = await uploadFile(
            apiContext.axios,
            file.value,
            file.value.name
          );
          const submissionRes = await submitTaskResponseCompetition(
            apiContext.axios,
            widget.id,
            team.id,
            res.id
          );
          if (submissionRes) {
            setSuccess(true);
            setError(null);
          }
        }
      }
    } catch (e) {
      setSuccess(false);
      setError(String(e));
    }
  };
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}
    >
      <div id="heading">Persyaratan Pendaftaran - {widget?.name}</div>
      <div id="ketentuan" className="mt-3">
        <div className="title">Ketentuan:</div>
        {typeof widget.widgetParameters !== "string" && (
          <div className="subtitle">{widget.widgetParameters?.description}</div>
        )}
      </div>
      <div id="upload" className="mt-3">
        <div className="title">Upload:</div>
        <FileUploader
          data={file}
          color={Theme.buttonColors.purpleButton}
          padding="0.5rem 1rem"
        />
      </div>
      <div id="status" className="mt-4">
        <div className="title">Status</div>
        <div className="subtitle">Belum diverivikasi</div>
      </div>
      <div id="status" className="mt-3">
        {error && !success && <Alert error={error} />}
        {success && <Success message="Successfully update" />}
      </div>
      <div id="simpan" className="mt-4">
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

export default PhotoTask;

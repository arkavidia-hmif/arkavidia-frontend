import { useContext, useState } from "react";
import { ApiContext } from "../../../../../utils/context/api";
import FilledButton from "../../../../FilledButton";
import { Theme } from "../../../../../styles/theme";
import useFileUploader from "../../../../../utils/hooks/useFileUploader";
import { isValidFile } from "../../../../../utils/validator";
import FileUploader from "../../../../FileUploader";
import { uploadFile } from "../../../../../api/file";
import Alert from "../../../../Alert";
import { TeamData } from "../../../../../interfaces/team";
import { Task } from "../../../../../interfaces/task";
import { submitTaskResponseCompetition } from "../../../../../api/competition";

type Props = {
  team: TeamData;
  task: Task;
};

const PhotoTask: React.FC<Props> = ({ team, task }) => {
  const apiContext = useContext(ApiContext);
  const file = useFileUploader();

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setError(null);
    setSuccess(false);
    setLoading(true);
    try {
      if (file?.value?.name && typeof task.widgetParameters !== "string") {
        const bool = await isValidFile(file.value, task.widgetParameters);
        if (bool) {
          const res = await uploadFile(
            apiContext.axios,
            file.value,
            file.value.name
          );
          const submissionRes = await submitTaskResponseCompetition(
            apiContext.axios,
            task.id,
            team.id,
            res.id
          );
          if (submissionRes) {
            setSuccess(true);
            setError(null);
            setLoading(false);
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
      <div id="heading">Persyaratan Pendaftaran - {task?.name}</div>
      <div id="ketentuan" className="mt-3">
        <div className="title">Ketentuan:</div>
        {typeof task.widgetParameters !== "string" && (
          <div className="subtitle">{task.widgetParameters?.description}</div>
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
        {success && (
          <Alert
            color={Theme.alertColors.greenAlert}
            error="Successfully submitted"
          />
        )}
      </div>
      <div id="simpan" className="mt-4">
        <FilledButton
          loading={loading}
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
          padding: 0.5rem 0;
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

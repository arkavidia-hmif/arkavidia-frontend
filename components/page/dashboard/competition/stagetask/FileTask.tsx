import { useContext, useEffect, useState } from "react";
import { ApiContext } from "../../../../../utils/context/api";
import FilledButton from "../../../../FilledButton";
import useFileUploader from "../../../../../utils/hooks/useFileUploader";
import { isValidFile } from "../../../../../utils/validator";
import FileUploader from "../../../../FileUploader";
import { uploadFile } from "../../../../../api/file";
import Alert from "../../../../Alert";
import { TeamData } from "../../../../../interfaces/team";
import { FileTaskParam, Task, TaskResponse } from "../../../../../interfaces/task";
import { submitTaskResponseCompetition } from "../../../../../api/competition";
import StatusBox from "./StatusBox";
import { Theme } from "styles/theme";

interface Props {
  team: TeamData;
  task: Task;
  selection: number;
  response?: TaskResponse;
  mutate: () => void;
}

const PhotoTask: React.FC<Props> = ({
  team,
  task,
  selection,
  response,
  mutate,
}) => {
  const apiContext = useContext(ApiContext);
  const file = useFileUploader();

  const [isEdit, setIsEdit] = useState(!response);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    file.set(null);
    setIsEdit(false);
    setSuccess(false);
    setError(null);
  }, [selection]);

  const handleSubmit = async () => {
    setError(null);
    setSuccess(false);
    try {
      if (file.value === null) {
        setError("File belum terupload");
        return;
      }
      setLoading(true);
      if (file?.value?.name && typeof task.widgetParameters !== "string") {
        const bool = await isValidFile(file.value, task.widgetParameters as FileTaskParam);
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
          if (submissionRes?.status !== "rejected") {
            mutate();
            setSuccess(true);
            setError(null);
            setLoading(false);
            setIsEdit(false);
          } else {
            setIsEdit(false);
            setLoading(false);
            setError(submissionRes.reason);
          }
        }
      }
    } catch (e) {
      setLoading(false);
      setSuccess(false);
      setError(String(e));
    }
  };
  return (
    <form>
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
          disabled={!!(!isEdit && response)}
          data={file}
          color={Theme.buttonColors.purpleButton}
          padding="0.5rem 1rem"
        />
      </div>
      <StatusBox response={response} />
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
        {!isEdit && response ? (
          <FilledButton
            text="Ubah"
            color={Theme.buttonColors.pinkButton}
            padding="0.5rem 2rem"
            onClick={() => setIsEdit(true)}
          />)
          : (
            <FilledButton
              loading={loading}
              text="Simpan"
              color={Theme.buttonColors.purpleButton}
              padding="0.5rem 2rem"
              onClick={(e) => {
                e.preventDefault();
                handleSubmit();
              }}
            />
          )}
        {isEdit && response && (
          <FilledButton
            text="Cancel"
            color={Theme.buttonColors.pinkButton}
            padding="0.5rem 2rem"
            onClick={() => setIsEdit(false)}
          />
        )}
      </div>

      <style jsx>{`
        #simpan {
          display: flex;
          gap: 1rem;
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

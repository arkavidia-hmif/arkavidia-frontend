import { useContext, useEffect, useState } from "react";
import StatusBox from "./StatusBox";
import StageTaskStyle from "./StageTask.module.css";
import { ApiContext } from "utils/context/api";
import FilledButton from "components/FilledButton";
import useFileUploader from "utils/hooks/useFileUploader";
import { isValidFile } from "utils/validator";
import FileUploader from "components/FileUploader";
import { uploadFile } from "api/file";
import Alert from "components/Alert";
import { FileTaskParam, TaskWidget } from "interfaces/task";
import { Theme } from "styles/theme";

const PhotoTask: React.FC<TaskWidget> = ({
  task,
  selection,
  response,
  submitFunction,
  mutate,
  editable
}) => {
  const apiContext = useContext(ApiContext);
  const file = useFileUploader();

  const [isEdit, setIsEdit] = useState(!response);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    file.set(null);
    setIsEdit(!response);
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
          const submissionRes = await submitFunction(
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

  const getEditButton = () => {
    if (!editable) return null;
    if (isEdit) {
      return (<FilledButton
        loading={loading}
        text="Simpan"
        color={Theme.buttonColors.purpleButton}
        padding="0.5rem 2rem"
        onClick={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      />);
    } else {
      return (<FilledButton
        text="Ubah"
        color={Theme.buttonColors.pinkButton}
        padding="0.5rem 2rem"
        onClick={() => setIsEdit(true)}
      />);
    }
  };

  return (
    <form>
      <div className={StageTaskStyle.heading}>Persyaratan Pendaftaran - {task?.name}</div>
      <div id="ketentuan" className="mt-3">
        <div className={StageTaskStyle.title}>Ketentuan:</div>
        {typeof task.widgetParameters !== "string" && (
          <div className={StageTaskStyle.text}>{task.widgetParameters?.description}</div>
        )}
      </div>
      <div id="upload" className="mt-3">
        <div className={StageTaskStyle.title}>Upload:</div>
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
        {getEditButton()}
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
      `}</style>
    </form>
  );
};

export default PhotoTask;

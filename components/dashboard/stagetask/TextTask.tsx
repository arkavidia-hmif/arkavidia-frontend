import { useState, useEffect } from "react";
import StatusBox from "./StatusBox";
import StageTaskStyle from "./StageTask.module.css";
import EditButton from "./EditButton";
import { TaskParam, TaskWidget } from "interfaces/task";
import Alert from "components/Alert";
import TextArea from "components/TextArea";
import { Theme } from "styles/theme";

const TextTask: React.FC<TaskWidget> = ({
  task,
  response,
  submitFunction,
  mutate,
  selection,
  editable
}) => {
  const parsedParam = (task.widgetParameters as unknown) as TaskParam;
  const valueInit = response ? response.response : "";

  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);
  const [value, setValue] = useState<string>("");

  useEffect(() => {
    setValue(valueInit);
    setIsEdit(!response);
    setSuccess(false);
    setError(null);
  }, [selection]);

  const handleSubmit = async () => {
    setError(null);
    setSuccess(false);

    try {
      if (value === null) {
        setError("Form belum diisi");
        return;
      }
      setLoading(true);
      const submissionRes = await submitFunction(
        value
      );

      if (submissionRes?.reason === "") {
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
    } catch (e) {
      setLoading(false);
      setSuccess(false);
      setError("Form kosong");
    }
  };
  return (
    <>
      <div className={StageTaskStyle.heading}>{task?.name}</div>
      <div className="mt-3">
        <div className={StageTaskStyle.title}>Pertanyaan:</div>
        <div className={StageTaskStyle.text}>{parsedParam.description}</div>
      </div>

      <form>
        <div className="mt-3">
          <div className={StageTaskStyle.title}>Jawaban:</div>
          <TextArea
            disabled={!isEdit}
            value={value}
            setValue={setValue}
          />
        </div>
        <StatusBox response={response} />
        <div id="status" className="mt-3">
          {error && !success && <Alert error={error} />}
          {success && (
            <Alert
              color={Theme.alertColors.greenAlert}
              error="Data tersimpan"
            />
          )}
        </div>
        <div id="simpan" className="mt-4">
          <EditButton
            isEdit={isEdit}
            editable={editable}
            handleSubmit={handleSubmit}
            setIsEdit={setIsEdit}
            loading={loading}
          />
        </div>
      </form>
    </>
  );
};

export default TextTask;
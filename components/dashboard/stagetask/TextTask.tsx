import { useState, useEffect } from "react";
import StatusBox from "./StatusBox";
import FilledButton from "components/FilledButton";
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
}) => {
  const parsedParam = (task.widgetParameters as unknown) as TaskParam;
  const valueInit = response ? response.response : "";

  const [isEdit, setIsEdit] = useState<boolean>();
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
      <div id="heading">Persyaratan Pendaftaran - {task?.name}</div>
      <div id="ketentuan" className="mt-3">
        <div className="title">Pertanyaan:</div>
        <div className="subtitle">{parsedParam.description}</div>
      </div>

      <form>
        <div className="mt-3">
          <div className="title">Jawaban:</div>
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
        </div>
      </form>

      <style jsx>{`
        #heading {
          font-family: Viga;
          font-size: 1.5rem;
          color: #05058d;
        }

        .subtitle {
          color: #646464;
          font-size: 1rem;
          padding: 0.5rem 0;
        }

        .title {
          font-weight: bold;
          color: #646464;
          font-size: 1.125rem;
        }

        @media only screen and (max-width: 450px) {
          .subtitle {
            font-size: 0.9375rem;
          }
          #heading {
            font-size: 1.25rem;
          }
        }
      `}</style>
    </>
  );
};

export default TextTask;
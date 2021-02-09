import { useState, useEffect } from "react";
import StatusBox from "./StatusBox";
import StageTaskStyle from "./StageTask.module.css";
import FilledButton from "components/FilledButton";
import { MultiTextFieldTaskParam, TaskWidget } from "interfaces/task";
import Alert from "components/Alert";
import { Theme } from "styles/theme";
import useProgress from "utils/hooks/useProgress";


const MultiTextFieldTask: React.FC<TaskWidget> = ({
  task,
  response,
  submitFunction,
  mutate,
  selection,
}) => {
  const parsedParam = task.widgetParameters as MultiTextFieldTaskParam;

  const progressObj = useProgress();
  let initialContent: Array<string> = [];

  if (response) {
    initialContent = JSON.parse(response.response);
  } else {
    initialContent = Array(parsedParam.field.length).fill("");
  }

  const [content, setContent] = useState<Array<string>>([]);
  const [isEdit, setIsEdit] = useState<boolean>();

  useEffect(() => {
    setContent(initialContent);
    setIsEdit(!response);
    progressObj.reset();
  }, [selection]);

  const handleSubmit = () => {
    progressObj.reset();

    for (let i = 0; i < content.length; i++) {
      const regexParam = parsedParam.field[i].regex;
      if (regexParam) {
        const regex = new RegExp(regexParam);
        const value = content[i];

        if (!regex.test(value)) {
          progressObj.setError(`${parsedParam.field[i].name} tidak valid`);
          return;
        }
      }
    }

    const submittedValue = JSON.stringify(content);

    progressObj.startLoad();

    submitFunction(
      submittedValue
    )
      .then(() => {
        progressObj.setSuccess(true);
        mutate();
      })
      .catch((e) => {
        progressObj.setError(e.message);
      })
      .finally(() => {
        progressObj.setLoading(false);
        setIsEdit(false);
      });
  };

  const fieldChangeCb = (idx: number, newText: string) => {
    const newArray = [...content];
    newArray[idx] = newText;
    setContent(newArray);
  };

  const getField = () => {
    return parsedParam.field.map((entry, idx) => {
      return (
        <div className="row mt-3" key={idx}>
          <div className="col-12">
            <label className={StageTaskStyle.title} htmlFor={entry.name}>{entry.name}</label>
            {entry.description && <p className="field-subtitle">{entry.description}</p>}
            <input
              id={entry.name}
              placeholder={entry.name}
              value={content[idx]}
              disabled={!isEdit}
              onChange={(evt) => fieldChangeCb(idx, evt.target.value)}
              type="text"
            />
          </div>
          <style jsx>{`
            .field-subtitle {
              color: #646464;
              margin-bottom: 0.5rem;
            }

            input {
              width: 100%;
              border: none;
              border-bottom: 0.15rem solid black;
              box-sizing: border-box;
              background: none;
              margin: 0rem 0 1rem 0;
              font-style: normal;
              font-weight: bold;
            }
          `}</style>
        </div>
      );
    });
  };

  return (
    <>
      <div className={StageTaskStyle.heading}>Persyaratan Pendaftaran - {task?.name}</div>
      <div id="ketentuan" className="mt-3">
        <div className={StageTaskStyle.title}>Keterangan:</div>
        <div className={StageTaskStyle.text}>{parsedParam.description}</div>
      </div>

      <form>
        <div className="mt-3">
          {getField()}
        </div>
        <StatusBox response={response} />
        <div id="status" className="mt-3">
          {isEdit && <Alert error={progressObj.error} closable={false} />}
          {!isEdit && progressObj.success && (
            <Alert color={Theme.alertColors.greenAlert} error="Data tersimpan" />
          )}
        </div>
        <div id="simpan" className="mt-4">
          {!isEdit ? (
            <FilledButton
              text="Ubah"
              color={Theme.buttonColors.pinkButton}
              padding="0.5rem 2rem"
              onClick={() => setIsEdit(true)}
            />)
            : (
              <FilledButton
                onClick={() => {
                  handleSubmit();
                }}
                loading={progressObj.loading}
                text="Simpan"
                color={Theme.buttonColors.purpleButton}
                padding="0.5rem 2rem"
              />
            )}
        </div>
      </form>
    </>
  );
};

export default MultiTextFieldTask;

import { useContext, useState, useEffect } from "react";
import StatusBox from "./StatusBox";
import FilledButton from "components/FilledButton";
import { TeamData } from "interfaces/team";
import { ApiContext } from "utils/context/api";
import { MultiTextFieldTaskParam, Task, TaskResponse } from "interfaces/task";
import { submitTaskResponseCompetition } from "api/competition";
import Alert from "components/Alert";
import { Theme } from "styles/theme";
import useProgress from "utils/hooks/useProgress";

interface Props {
  team: TeamData;
  task: Task;
  selection: number;
  response?: TaskResponse;
  mutate: () => void;
}



const MultiTextFieldTask: React.FC<Props> = ({
  team,
  task,
  response,
  mutate,
  selection,
}) => {
  const parsedParam = task.widgetParameters as MultiTextFieldTaskParam;

  const apiContext = useContext(ApiContext);

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
      const regex = new RegExp(parsedParam.field[i].regex);
      const value = content[i];

      if (!regex.test(value)) {
        progressObj.setError(`${parsedParam.field[i].name} tidak valid`);
        return;
      }
    }

    const submittedValue = JSON.stringify(content);

    progressObj.startLoad();

    submitTaskResponseCompetition(
      apiContext.axios,
      task.id,
      team.id,
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
            <label htmlFor={entry.name}>{entry.name}</label>
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
            label {
              width: 100%;
              font-weight: bold;
              color: #646464;
              font-size: 1.125rem;
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
      <div id="heading">Persyaratan Pendaftaran - {task?.name}</div>
      <div id="ketentuan" className="mt-3">
        <div className="title">Keterangan:</div>
        <div className="subtitle">{parsedParam.description}</div>
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

      <style jsx>{`
        #heading {
          font-family: Viga;
          font-size: 1.5rem;
          color: #05058d;
        }

        .subtitle {
          font-family: Roboto;
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

export default MultiTextFieldTask;

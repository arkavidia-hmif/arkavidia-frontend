import { useContext, useState, useEffect } from "react";
import FilledButton from "../../../../FilledButton";
import { Theme } from "../../../../../styles/theme";
import { TeamData } from "../../../../../interfaces/team";
import useChoice from "../../../../../utils/hooks/useChoice";
import { ApiContext } from "../../../../../utils/context/api";
import { Task, TaskResponse } from "../../../../../interfaces/task";
import { submitTaskResponseCompetition } from "../../../../../api/competition";
import Alert from "../../../../Alert";
import StatusBox from "./StatusBox";

interface Props {
  team: TeamData;
  task: Task;
  selection: number;
  response?: TaskResponse;
  mutate: () => void;
}

interface WidgetParam {
  description: string;
  options: string[];
}

const ChoiceTask: React.FC<Props> = ({
  team,
  task,
  response,
  mutate,
  selection,
}) => {
  const parsedParam = (task.widgetParameters as unknown) as WidgetParam;

  const choiceInit = response ? response.response : parsedParam.options[0];

  const apiContext = useContext(ApiContext);
  const choice = useChoice(choiceInit);

  const [isEdit, setIsEdit] = useState<boolean>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  useEffect(() => {
    choice.setValue(choiceInit);
    setIsEdit(!response);
    setSuccess(null);
    setError(null);
  }, [selection]);

  const handleSubmit = () => {
    setError(null);
    setSuccess(null);
    setLoading(true);

    submitTaskResponseCompetition(
      apiContext.axios,
      task.id,
      team.id,
      choice.value
    )
      .then(() => {
        setSuccess("Data tersimpan");
        mutate();
      })
      .catch((e) => {
        setError(e.message);
      })
      .finally(() => {
        setLoading(false);
        setIsEdit(false);
      });
  };

  const getOption = () => {
    return parsedParam.options.map((entry) => {
      return (
        <option key={entry} value={entry}>
          {entry}
        </option>
      );
    });
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
          <select
            disabled={!isEdit}
            value={choice.value}
            onChange={(e) => choice.setValue(e.target.value)}
          >
            {getOption()}
          </select>
        </div>
        <StatusBox response={response} />
        <div id="status" className="mt-3">
          {!isEdit && <Alert error={error} />}
          {!isEdit && success && (
            <Alert color={Theme.alertColors.greenAlert} error={success} />
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
        select {
          width: 100%;
          border: none;
          padding: 0.5rem 0 0.5rem 0;
          border-bottom: 0.15rem solid black;
          box-sizing: border-box;
          background: none;
          margin: 0rem 0 1rem 0;
          font-size: 1rem;
          font-style: normal;
          font-weight: bold;
        }
        select:focus {
          outline: none;
        }

        @media only screen and (max-width: 450px) {
          select {
            font-size: 1rem;
          }
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

export default ChoiceTask;

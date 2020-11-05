import { useContext, useState } from "react";
import FilledButton from "../../../../FilledButton";
import { Theme } from "../../../../../styles/theme";
import { TeamData } from "../../../../../interfaces/team";
import useChoice from "../../../../../utils/hooks/useChoice";
import { ApiContext } from "../../../../../utils/context/api";
import { Task } from "../../../../../interfaces/task";
import { submitTaskResponseCompetition } from "../../../../../api/competition";
import Alert from "../../../../Alert";

type Props = {
  team: TeamData;
  task: Task;
};

type WidgetParam = {
  description: string,
  options: string[]
}

const ChoiceTask: React.FC<Props> = ({ team, task }) => {
  const parsedParam = (task.widgetParameters as unknown) as WidgetParam;

  const apiContext = useContext(ApiContext);
  const choice = useChoice(parsedParam.options[0]);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handleSubmit = () => {
    setError(null);
    setSuccess(null);

    submitTaskResponseCompetition(apiContext.axios, task.id, team.id, choice.value)
      .then(() => {
        setSuccess('Sukses');
      }).catch((e) => {
        setError(e.message);
      }).finally(() => {
        setLoading(false);
      });
  };

  const getOption = () => {
    return parsedParam.options.map((entry) => {
      return (<option key={entry} value={entry}>{entry}</option>);
    });
  };

  return (
    <>
      <h2>{task.name}</h2>

      <Alert error={error} />
      <Alert color={Theme.alertColors.greenAlert} error={success} />

      <div className="title mt-3">{parsedParam.description}</div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}>
        <div className="mt-3">
          <div className="title">Jawaban:</div>
          <select
            value={choice.value}
            onChange={(e) => choice.setValue(e.target.value)}
          >
            {getOption()}
          </select>

        </div>
        <div id="simpan" className="mt-4">
          <FilledButton
            loading={loading}
            text="Simpan"
            color={Theme.buttonColors.purpleButton}
            padding="0.5rem 2rem"
            submit
          />
        </div>
      </form>

      <style jsx>{`
        h2 {
          font-size: 1.5rem;
          color: #05058d;
        }

        .title {
          font-weight: bold;
          color: #646464;
          font-size: 1.125rem;
        }
      `}</style>
    </>
  );
};

export default ChoiceTask;

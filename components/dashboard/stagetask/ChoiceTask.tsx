import { useState, useEffect } from "react";
import StandardInput from "../StandardInput";
import StatusBox from "./StatusBox";
import StageTaskStyle from "./StageTask.module.css";
import EditButton from "./EditButton";
import useChoice from "utils/hooks/useChoice";
import { ChoiceTaskParam, TaskWidget } from "interfaces/task";
import Alert from "components/Alert";
import { Theme } from "styles/theme";
import useProgress from "utils/hooks/useProgress";


const OTHER_VALUE = "Lainnya";

const ChoiceTask: React.FC<TaskWidget> = ({
  task,
  response,
  submitFunction,
  mutate,
  selection,
  editable
}) => {
  const parsedParam = task.widgetParameters as ChoiceTaskParam;

  const choiceInit = response ? response.response : parsedParam.options[0];

  const choice = useChoice(choiceInit);

  const progressObj = useProgress();

  const [otherVal, setOtherVal] = useState<string>("");

  const [isOther, setIsOther] = useState<boolean>(false);
  const [isEdit, setIsEdit] = useState<boolean>(false);

  useEffect(() => {
    if (parsedParam.options.includes(choiceInit)) {
      choice.setValue(choiceInit);
      setIsOther(false);
    } else {
      setIsOther(true);
      choice.setValue(OTHER_VALUE);
      setOtherVal(choiceInit);
    }
    setIsEdit(!response);
    progressObj.reset();
  }, [selection]);

  const handleSubmit = () => {
    progressObj.startLoad();

    let value = choice.value;
    if (isOther) {
      value = otherVal;
    }

    submitFunction(value)
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

  const getOption = () => {
    const options = [...parsedParam.options];
    if (parsedParam.other) {
      options.push(OTHER_VALUE);
    }

    return options.map((entry) => {
      return (
        <option key={entry} value={entry}>
          {entry}
        </option>
      );
    });
  };

  const optionCallback = (value: string) => {
    choice.setValue(value);
    setIsOther(value === OTHER_VALUE);
  };

  const getOtherBox = () => {
    if (isOther) {
      return (
        <StandardInput
          setValue={setOtherVal}
          value={otherVal}
          disabled={!isEdit}
          placeholder="Lainnya"
        />
      );
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
          <select
            disabled={!isEdit}
            value={choice.value}
            onChange={(e) => optionCallback(e.target.value)}
          >
            {getOption()}
          </select>
        </div>
        <div className="mt-3">
          {getOtherBox()}
        </div>
        <StatusBox response={response} />
        <div id="status" className="mt-3">
          {isEdit && <Alert error={progressObj.error} />}
          {!isEdit && progressObj.success && (
            <Alert color={Theme.alertColors.greenAlert} error="Data tersimpan" />
          )}
        </div>
        <div id="simpan" className="mt-4">
          <EditButton
            isEdit={isEdit}
            editable={editable}
            handleSubmit={handleSubmit}
            setIsEdit={setIsEdit}
            loading={progressObj.loading}
          />
        </div>
      </form>

      <style jsx>{`
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
        }
      `}</style>
    </>
  );
};

export default ChoiceTask;

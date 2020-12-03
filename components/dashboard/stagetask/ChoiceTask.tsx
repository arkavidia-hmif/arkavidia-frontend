import { useState, useEffect } from "react";
import StandardInput from "../StandardInput";
import StatusBox from "./StatusBox";
import FilledButton from "components/FilledButton";
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
          {!isEdit ? (
            <FilledButton
              text="Ubah"
              color={Theme.buttonColors.pinkButton}
              padding="0.5rem 2rem"
              onClick={() => setIsEdit(true)}
            />)
            : (
              <FilledButton
                loading={progressObj.loading}
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

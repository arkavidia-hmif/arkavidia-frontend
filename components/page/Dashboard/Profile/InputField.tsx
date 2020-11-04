import { useEffect, useRef } from "react";

type Props = {
  type?: string;
  value: string;
  shouldRef?: boolean;
  setValue: (newValue: string) => void;
  choices: Array<string>;
};

const InputField: React.FC<Props> = ({
  type = "text",
  value,
  setValue,
  shouldRef = false,
  choices,
}) => {
  const ref = useRef<HTMLInputElement>(null);
  useEffect(() => {
    ref?.current?.focus();
  }, [shouldRef]);

  return (
    <div>
      {shouldRef ? (
        <input
          ref={ref}
          type={type}
          value={value}
          onChange={(evt) => {
            setValue(evt.target.value);
          }}
        />
      ) : choices.length > 0 ? (
        <select value={value} onChange={(e) => setValue(e.target.value)}>
          {choices.map((choice) => (
            <option value={choice} key={choice}>
              {choice}
            </option>
          ))}
        </select>
      ) : (
        <input
          type={type}
          value={value}
          onChange={(evt) => {
            setValue(evt.target.value);
          }}
        />
      )}
      <style jsx>{`
        input,
        select {
          width: 100%;
          border: none;
          padding: 0.5rem 0 0.5rem 0;
          border-bottom: 0.15rem solid black;
          box-sizing: border-box;
          background: none;
          margin: 0rem 0 1rem 0;
          font-size: 1.3rem;
          font-style: normal;
          font-weight: bold;
        }

        input:focus,
        select:focus {
          outline: none;
        }

        @media only screen and (max-width: 767px) {
          input,
          select {
            font-size: 1rem;
          }
        }
      `}</style>
    </div>
  );
};

export default InputField;

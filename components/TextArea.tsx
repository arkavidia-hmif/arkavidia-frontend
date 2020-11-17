import React from "react";

interface Props {
  value: string;
  setValue: (newValue: string) => void;
  disabled?: boolean;
}

const TextArea: React.FC<Props> = ({
  value,
  setValue,
  disabled = false
}) => {
  return (
    <div id="text-area-wrapper">
      <label className="text-area">
        <textarea 
          name="text-area" 
          id="text-area" 
          value={value}
          placeholder="Masukkan jawaban disini"
          className={disabled ? "disabled" : ""}
          disabled={disabled}
          onChange={(evt) =>
            setValue(evt.target.value)
          } 
        />
      </label>
      <style jsx>{`
        #text-area-wrapper {
          margin-top: 1rem;
        }

        textarea {
          outline: none;
          resize: none;
          border: none;
          background: transparent;
          height: 20vh;
          width: 100%;
          padding-top: 0.5rem;
          border-bottom: 0.15rem solid black;
        }

        .disabled {
          border-bottom: 0.15rem solid grey;
        }

        .text-area {
          width: 100%;
        }
      `}</style>
    </div>
  );
};

export default TextArea;
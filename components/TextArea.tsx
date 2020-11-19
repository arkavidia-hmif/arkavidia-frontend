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
    <div className="my-3">
      <textarea
        name="text-area"
        value={value}
        placeholder="Masukkan jawaban disini"
        className={disabled ? "disabled" : ""}
        disabled={disabled}
        onChange={(evt) =>
          setValue(evt.target.value)
        }
      />
      <style jsx>{`
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
      `}</style>
    </div>
  );
};

export default TextArea;
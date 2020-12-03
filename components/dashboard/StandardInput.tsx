
interface Props {
  type?: string;
  value: string;
  setValue: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
}
const StandardInput: React.FC<Props> = ({
  value,
  setValue,
  type = "text",
  placeholder,
  disabled = false }) => {

  return (
    <>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        type={type}
        disabled={disabled}
        placeholder={placeholder} />
      <style jsx>{`
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
    </>
  );
};

export default StandardInput;
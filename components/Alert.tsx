import { AlertColor, Theme } from "../styles/theme";

type Props = {
  color?: AlertColor
  error: string | null;
};

const Alert: React.FC<Props> = ({ color = Theme.alertColors.redAlert, error }) => {
  if (!error) {
    return <></>;
  } else {
    return (
      <>
        <div>
          <p>{error}</p>
        </div>
        <style jsx>{`
          div {
            width: 100%;
            background-color: ${color.main};
            padding: 1rem;
            border-radius: 5px;
          }
          div p {
            margin: 0;
            color: ${color.text};
          }
        `}</style>
      </>
    );
  }
};

export default Alert;

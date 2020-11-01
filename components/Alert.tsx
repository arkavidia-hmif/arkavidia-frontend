type Props = {
  error: string | null
}

const Alert: React.FC<Props> = ({ error }) => {
  if (!error) {
    return (<></>);
  } else {
    return (
      <>
        <div>
          <p>{error}</p>
        </div>
        <style jsx>{`
          div {
            width: 100%;
            background-color: #ff5252;
            padding: 1rem;
            border-radius: 5px;
          }
          div p {
            margin: 0;
            color: white;
          }
        `}</style>
      </>
    );
  }
};

export default Alert;
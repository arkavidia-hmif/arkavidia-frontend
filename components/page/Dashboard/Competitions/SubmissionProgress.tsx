import * as React from "react";

type Props = {
  setActive: (integer: number) => void;
};
// type ClickableProps = {
//   icon: string;
// };

// const ClickableList: React.FC<ClickableProps> = ({ icon }) => {
//   return <div>defr</div>;
// };

const SubmissionProgress: React.FC<Props> = ({ setActive }) => {
  return (
    <div className="container mb-3 card">
      <h2 onClick={() => setActive(1)}>Nama Tim </h2>
      <p className="mt-1">Nama Lomba</p>

      <div className="not-dropdown">
        <div className="title">TIM</div>
      </div>
      <div className="not-dropdown">
        <div className="title">PRASYARAT PENDAFTARAN </div>
      </div>
      <style jsx>{`
        h2 {
          margin-bottom: 0;
          margin-top: 2rem;
          font-family: Viga;
          font-size: 23.4375px;
          line-height: 31px;
        }
        .not-dropdown {
          margin-top: 2rem;
        }
        p {
          font-size: 11.7187px;
          line-height: 14px;
        }
        .title {
          color: rgba(0, 0, 0, 0.6);
          font-size: 16.4062px;
          line-height: 19px;
        }
        .card {
          background: linear-gradient(
              180deg,
              #ffffff 0%,
              rgba(255, 255, 255, 0) 100%
            ),
            linear-gradient(180deg, #ffbdea 0%, rgba(255, 255, 255, 0) 100%),
            #f3a9dd;
          border: 0.46875px solid #05058d;
          box-sizing: border-box;
          border-radius: 10px;
        }

        .content {
          font-family: Roboto;
          font-size: 1.125rem;
          color: #646464;
        }

        .link {
          display: flex;
          justify-content: flex-end;
          font-family: Roboto;
          font-size: 1.125rem;
          font-weight: bold;
          color: #623fa2;
        }

        a {
          text-decoration: none;
        }
      `}</style>
    </div>
  );
};

export default SubmissionProgress;

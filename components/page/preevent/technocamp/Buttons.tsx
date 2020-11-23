import * as React from "react";
import { useRouter } from "next/dist/client/router";
import FilledButton from "../../../FilledButton";
import { Theme } from "styles/theme";

interface Props {
  guidebookLink: string;
  registerLink: string;
}

const Buttons: React.FC<Props> = ({ guidebookLink }) => {
  const router = useRouter();
  return (
    <div>
      <div className="flex-row-center">
        <div className="guidebook-button">
          <FilledButton
            color={Theme.buttonColors.blueButton}
            text="Download guidebook"
            padding="0.75em 1.5em"
            onClick={() => {
              router.push(guidebookLink);
            }}
          />
        </div>
        {/* <div className="daftar-sekarang-button">
          <FilledButton
            color={Theme.buttonColors.darkPinkButton}
            text="Daftar sekarang"
            padding="0.75em 1.5em"
            onClick={() => {
              router.push(registerLink);
            }}
          />
        </div> */}
      </div>
      <style jsx>{`
        .flex-row-center {
          display: flex;
          flex-direction: row;
        }

        .guidebook-button {
          border-radius: 10px;
          font-family: "Roboto";
          font-weight: bold;
          font-size: 1rem;
          display: flex;
          align-items: center;
          color: #ffffff;
          text-align: center;
          border-color: transparent;
        }

        .daftar-sekarang-button {
          border-radius: 10px;
          display: flex;
          align-items: center;
          font-size: 1rem;
          color: #ffffff;
          margin-left: 2%;
          padding: 0.8%;
          text-align: center;
          border-color: transparent;
        }

        @media only screen and (max-width: 1000px) {
          .flex-row-center {
            justify-content: center;
          }
          .guidebook-button,
          .daftar-sekarang-button {
            font-size: 1rem;
            min-width: 30%;
            margin-block-start: 1vw;
          }
        }
        @media only screen and (max-width: 500px) {
          .guidebook-button,
          .daftar-sekarang-button {
            font-size: 0.8rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Buttons;

import * as React from "react";

type Props = {
  title: string;
  caption: string;
};

const SmallRibbon: React.FC<Props> = ({ title, caption }) => (
  <div>
    <div className="background-no-ribbon">
      <p className="juara-text">{title}</p>
      <p className="hadiah-text">{caption}</p>
    </div>
    <style jsx>{`
      .background-no-ribbon {
        max-width: 100%;
        height: auto;
        width: 18rem;
        background: rgba(219, 205, 255, 0.8);
        border-radius: 20px;
        margin-right: 3%;
        padding: 0.5rem;
      }

      .juara-text {
        font-family: Roboto;
        font-size: 1.7rem;
        text-align: center;
        color: #000000;
        margin-block-start: 0em;
        margin-block-end: 0em;
      }

      .hadiah-text {
        font-family: "Roboto";
        font-size: 1.8rem;
        text-align: center;
        font-weight: bold;
        color: #431785;
        margin-block-start: 0em;
        margin-block-end: 0em;
        margin-inline-start: 0.5em;
        margin-inline-end: 0.5em;
      }

      @media only screen and (max-width: 1000px) {
        .background-no-ribbon {
          height: auto;
          width: 10rem;
          background: rgba(219, 205, 255, 0.72);
          border-radius: 10px;
          margin-right: 3%;
          padding: 1rem;
        }

        .juara-text {
          font-size: 0.9rem;
          margin-block-start: 0em;
          margin-block-end: 0em;
        }

        .hadiah-text {
          font-size: 0.8rem;
          color: #431785;
          margin-block-start: 0em;
          margin-block-end: 0em;
          margin-inline-start: 0.5em;
          margin-inline-end: 0.5em;
        }
      }
      @media only screen and (max-width: 1000px) {
        .background-no-ribbon {
          height: auto;
          width: auto;
          background: rgba(219, 205, 255, 0.72);
          border-radius: 10px;
          margin-right: 3%;
          padding: 0.8rem;
        }
      }
    `}</style>
  </div>
);

export default SmallRibbon;

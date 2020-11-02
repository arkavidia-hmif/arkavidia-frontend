import * as React from "react";

type Props = {
  category: string;
  fee: string;
};

const Category: React.FC<Props> = ({ category, fee }) => (
  <div id="pricing">
    <div className="wrapper">
      <div className="text">
        <p>Kategori</p>
      </div>
      <div className="coloredText">
        <p>{category}</p>
      </div>
    </div>
    <div className="wrapper">
      <div className="text">
        <p>Biaya Pendaftaran</p>
      </div>
      <div className="coloredText">
        <p>{fee}</p>
      </div>
    </div>
    <style jsx>{`
      p {
        margin: 0;
      }

      #pricing {
        margin-bottom: 1.5rem;
        font-size: 1.1rem;
      }

      .wrapper {
        margin: 1rem 0;
        display: flex;
        align-items: center;
      }

      .text {
        padding-right: 1rem;
        font-weight: 700;
      }

      .coloredText {
        display: flex;
        align-items: center;
        justify-content: center;
        color: #ffff;
        background: #906af7;
        border-radius: 15px;
        padding: 0.3rem 0.5rem;
      }

      @media (max-width: 1000px) {
        .wrapper {
          flex-direction: column;
        }

        .coloredText {
          margin-top: 2%;
        }
      }
    `}</style>
  </div>
);

export default Category;

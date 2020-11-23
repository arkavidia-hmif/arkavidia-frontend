import * as React from "react";

interface Props {
  category: string;
  fee: string;
  feeType?: string;
  color?: "purple" | "blue";
}

const EventCategory: React.FC<Props> = ({ category, fee, feeType = "Biaya Pendaftaran", color = "purple" }) => (
  <div id="pricing">
    <div className="wrapper">
      <div className="text p-0 pr-md-3">
        <p>Kategori</p>
      </div>
      <div className="coloredText">
        <p>{category}</p>
      </div>
    </div>
    <div className="wrapper">
      <div className="text p-0 pr-md-3">
        <p>{feeType}</p>
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
        font-weight: 700;
      }

      .coloredText {
        display: flex;
        align-items: center;
        justify-content: center;
        color: #ffff;
        background:${color === "purple" ? "#906af7" : "#0084B0"};
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

export default EventCategory;

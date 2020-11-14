import * as React from "react";

interface Props {
  link: string;
  text: string;
  alt?: string;
}

const BenefitBox: React.FC<Props> = ({ link, text, alt }) => (
  <div className="content-box">
    <div className="content">
      <img src={link} alt={alt} />
      <p>{text}</p>
    </div>
    <style jsx>{`
      .content-box {
        display: flex;
        align-items: center;
        justify-content: center;
        background: rgba(255, 221, 244, 0.8);
        border-radius: 24px;
        width: 35%;
        height: auto;
        padding: 3%;
      }

      .content p {
        margin-top: 1.5rem;
        font-size: 1.5rem;
        font-weight: 700;
        color: #094963;
      }

      @media (max-width: 1000px) {
        .content-box {
          padding-bottom: 0;
        }
        .content p {
          font-size: 1.3rem;
        }
        img {
          width: 100px;
        }
        .content h3 {
          font-size: 1rem;
        }
      }
      @media (max-width: 500px) {
        .content p {
          font-size: 0.8rem;
          margin-top: 0.5rem;
        }
        img {
          width: 50px;
        }
      }
    `}</style>
  </div>
);

export default BenefitBox;

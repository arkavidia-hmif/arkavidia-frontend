import * as React from "react";

interface Props {
  link: string;
  text: string;
  alt?: string;
}

const BenefitBox: React.FC<Props> = ({ link, text, alt }) => (
  <div className="content-box mt-3 mt-md-0 p-3">
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
        width: 30%;
        height: auto;
      }

      .content p {
        margin-top: 1.5rem;
        font-size: 1.5rem;
        font-weight: 700;
        color: #094963;
      }

      @media (max-width: 768px) {
        .content-box {
          margin: 0.5rem;
          width: 50%;
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
    `}</style>
  </div>
);

export default BenefitBox;

import * as React from "react";
import TechHeader from "./TechHeader";
import BenefitBox from "./BenefitBox";

const TechBenefits: React.FC = () => (
  <div id="benefits-container">
    <TechHeader title="BENEFITS" />
    <br />
    <div className="benefit-content">
      <BenefitBox
        alt="programming"
        link="/img/preevent/technocamp/programming.svg"
        text="Pengetahuan Dasar Pemrograman"
      />
      <BenefitBox
        alt="private mentor"
        link="/img/preevent/technocamp/mentor.svg"
        text="Private mentor"
      />
      <BenefitBox
        alt="certificate"
        link="/img/preevent/technocamp/certificate.svg"
        text="Sertifikat"
      />
    </div>
    <style jsx>{`
      #benefits-container {
        text-align: center;
        margin-bottom: 10%;
      }

      .benefit-content {
        display: flex;
        justify-content: space-evenly;
      }

      @media (max-width: 576px){
        .benefit-content {
          align-items: center;
          flex-direction: column;
        }
      }
    `}</style>
  </div>
);

export default TechBenefits;
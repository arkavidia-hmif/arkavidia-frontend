import * as React from 'react'
import TechHeader from './TechHeader'
import BenefitBox from './BenefitBox'

const TechBenefits : React.FC = () => (
    <div id="benefits-container">
        <TechHeader title="BENEFITS"/>
        <div className="benefit-content">
            <BenefitBox
            alt="programming" 
            link="/img/pre-event/technocamp/programming.svg" 
            text="Pengetahuan Dasar Pemrograman"
            />
            <BenefitBox
            alt="certificate" 
            link="/img/pre-event/technocamp/certificate.svg" 
            text="Sertifikat"
            />
        </div>
        <style jsx>{`
            #benefits-container {
                text-align: center;
                height: 70vh;
            }

            .benefit-content {
                display: flex;
                justify-content: space-evenly;
            }

            .content-box {
                display: flex;
                align-items: center;
                justify-content: center;
                background: rgba(255, 221, 244, 0.8);
                border-radius: 24px;
                width: 35%;
                height: auto;
                padding: 3rem;
            }

            .content h3 {
                font-size: 1.5em;
                font-weight: 700;
                color: #094963;
            }
        `}</style>
    </div>
)

export default TechBenefits
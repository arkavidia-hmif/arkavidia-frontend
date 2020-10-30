import * as React from 'react'

type Props = {
    link: string,
    text: string,
    alt?: string
}

const BenefitBox : React.FC<Props> = ({link, text, alt}) => (
    <div className="content-box">
        <div className="content">
            <img src={link} alt={alt}/>
            <h3>{text}</h3>    
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

            .content h3 {
                font-size: 1.5em;
                font-weight: 700;
                color: #094963;
            }

            @media (max-width: 1000px) {
                .content-box {
                    padding-bottom: 0;
                }
                .content img {
                    width: 70%;
                }

                .content h3 {
                    font-size: 1rem;
                }
            }
        `}</style>
    </div>
)

export default BenefitBox
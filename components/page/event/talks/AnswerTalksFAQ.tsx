import React from 'react';

interface Props {
	faq: {
		question: string;
		answer: string;
		open: boolean;
	};
	index: number;
	toggleFAQ:(index: number) => void;
}

const ArkavAnswer: React.FC<Props> = ({
  faq, 
  index, 
  toggleFAQ
}) => {
  return (
    <div className={"faq " + (faq.open ? 'open' : '')} key={index} onClick={() => toggleFAQ(index)}>
      <div className="faq-question">
        <p>{faq.question}</p>
      </div>
      <div className="faq-answer">
        <p>{faq.answer}</p>
      </div>
      <style jsx>{`
				p {
					font-size: 1rem;
					padding: 1rem;
					margin-block-start: 0;
					margin-block-end: 0;
				}

				.faq-question p {
					color: white;
				}

				.faq-answer p {
					color: black;
				}

				.faq {
					cursor: pointer;
				}
				
				.faq-question {
					padding: 0 1rem;
					border-radius: 0.5rem;
					position: relative;
					font-size: 1.5rem;
					background-color: #431785;
					transition: all 0.4s ease;
				}
				
				.faq-question::after {
					content: '';
					position: absolute;
					top: 50%;
					right: 0;
					transform: translate(-60%, -50%);
					width: 2rem;
					height: 2rem;
					background-image: url('/img/competitions/arrow-faq.png');
					background-position: center;
					background-size: contain;
					background-repeat: no-repeat;
				
					transition: all 0.4s ease-out;
				}
				
				.faq-answer {
					padding: 0 1rem;
					margin-bottom: 0.8rem;
					border-radius: 0.5rem;
					background-color: white;
					opacity: 0;
					max-height: 0;
					overflow-y: hidden;
					transition: all 0.4s ease-out;
				}
				
				.faq.open .faq-question::after {
					transform: translate(-50%, -50%) rotate(180deg);
				}
				
				.faq.open .faq-answer {
					max-height: 1000px;
					opacity: 1;
				}

				@media only screen and (max-width: 1000px) {
					.faq-question::after {
						transform: translate(-50%, -50%);
						width: 1.5rem;
						height: 1.5rem;
					}

					p {
						width: 90%;
						font-size: 0.9rem;
					}

					.faq-answer, .faq-question {
						padding: 0 0;
					}
				}
			`}</style>
    </div>
  );
};

export default ArkavAnswer;

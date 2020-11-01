import * as React from 'react';

type Props = {
    title: string,
    desc: string
  }

const Title : React.FC<Props> = ({title, desc}) => (
  <div>
    <div>
      <p className="competition-title">{title}</p>
      <p className="caption">{desc}</p>
    </div>
    <style jsx>{`
            .competition-title {
                font-family: 'Viga';
                font-size: 3.6rem;
                background: -webkit-linear-gradient(left,#835FBF,#00FFFF);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                margin-block-start: 0em;
                margin-block-end: 0.4em;
            }

            .caption {
                font-family: Roboto;
                font-size: 1.3rem;
                margin-right: 7%;
                display: flex;
                color: #000000;
                margin-block-start: 0em;
                margin-block-end: 0em;
            }
  
            @media only screen and (max-width: 1000px) {
                .competition-title {
                    font-size: 3.4rem;
                    text-align: center;
                    margin-block-start: 0.8em;
                    margin-block-end: 0.4em;
                }
                
                .caption {
                    font-size: 1.1rem;
                    margin-left: 7%;
                    margin-right: 7%;
                    display: flex;
                    align-items: center;
                    text-align: center;
                    color: #000000;
                    margin-block-start: 0em;
                    margin-block-end: 0em;
                }
            }
          `}</style>
  </div>
);
  
export default Title;
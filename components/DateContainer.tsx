import * as React from 'react'

type Props = {
    color?: string,
    dates: string[]
}

const DateContainer : React.FC<Props> = ({dates, color}) => (
  <div id="date-container">
    <img src="/img/date1.svg" alt="calendar"/>
    <div className="dates">
      {dates.map((date, index) => 
        <p key={index}>{date}</p>
      )}
    </div>
    <style jsx>{`
            #date-container {
                margin-top: 5%;
                display: flex;
                align-items: flex-start;
            }    

            .dates {
                margin-left: 5%;
            }

            .dates p {
                font-weight: 700;
                font-size: 1.2rem;
                color: ${color};
                margin: 0;
                padding-bottom: 5%;
            }

            .dates p:only-child {
                padding-top: 10px;
            }

            @media (max-width: 1000px) {
                #date-container {
                    display: block;
                }

                .dates {
                    margin-left: 0;
                    margin-top: 5%;
                }

                .dates p:only-child {
                    padding-top: 0;
                }
            }
        `}</style>
  </div>
)

export default DateContainer
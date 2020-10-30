import * as React from 'react'

type Props = {
    dates: string[]
}

const DateContainer : React.FC<Props> = ({dates}) => (
    <div id="date-container">
        <img src="/img/date1.svg" alt="calendar"/>
        <div className="dates">
            {dates.map((date) => 
                <h3>{date}</h3>
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

            .dates h3 {
                margin: 0;
                padding-bottom: 5%;
            }

            @media (max-width: 1000px) {
                #date-container {
                    display: block;
                }

                .dates {
                    margin-left: 0;
                    margin-top: 5%;
                }
            }
        `}</style>
    </div>
)

export default DateContainer
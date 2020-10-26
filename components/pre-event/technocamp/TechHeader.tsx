import * as React from 'react'

type Props = {
    title: string,
}

const TechHeader : React.FC<Props> = ({title}) => (
    <div className="header">
        <h1>{title}</h1>
        <style jsx>{`
            .header {
                text-align: center;
            }
            
            .header h1 {
                font-family: 'Viga';
                font-weight: 400;
                font-size: 3rem;
                color: #0084AF;
            }    
        `}</style>
    </div>
)

export default TechHeader
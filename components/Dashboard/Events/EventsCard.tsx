import * as React from 'react'
import Link from 'next/link'

const EventsCard: React.FC = () => {
  // example data
  const ex = [
    {
      title:'ARKAVIDIA TALKS',
      content: 'Advance Talk',
      isRegistered: false,
      isRegistrationOpen: true,
    },
  ]
  
  return (
    <div className="container mb-3">
      <div className="container-fluid">
        {ex?.map((link, index) => (
          <div key={index} className="card mt-3 col mr-4">
            <div className="title">
              {link.title}
            </div>
            <div className="content">
              {link.content}
            </div>
            <br />
            <hr />
            <div className="link">
              {link.isRegistrationOpen? 
              (<Link href="/"><a>{link.isRegistered? 
                ("View Application")
                :(
                  "Register"
                )
                }</a></Link>)
              :(
                <div className="content">
                  Anda tidak bisa mendaftar lomba ini
                </div>
              )
              }
            </div>
          </div>
        ))}
      </div>
      <style jsx>{`
        .card {
          padding: 0.625rem;
          border: 1px solid #431785;
          max-width: 320px;
          max-height: auto;
          border-radius: 10px;
          background-color: white;

          float:left;
        }

        .title{
          font-family: Viga;
          font-size: 1.25rem;

          color: #05058D;
        }

        .content{
          font-family: Roboto;
          font-size: 1.125rem;

          color: #646464;
        }

        .link{
          display: flex;
          justify-content: flex-end;
          font-family: Roboto;
          font-size: 1.125rem;
          font-weight: bold;

          color: #623FA2;
        }

        a{
          text-decoration: none;
        }
      `}</style>
    </div>
  )
}

export default EventsCard
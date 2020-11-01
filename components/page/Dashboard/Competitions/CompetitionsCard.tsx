import * as React from "react";
import Link from "next/link";

const CompetitionsCard: React.FC = () => {
  // example data
  const ex = [
    {
      title: "COMPETITIVE PROGRAMMING",
      content: "Untuk Mahasiswa",
      isRegistered: true,
      isRegistrationOpen: true,
    },
    {
      title: "CAPTURE THE FLAG",
      content: "Untuk SMA & Mahasiswa",
      isRegistered: false,
      isRegistrationOpen: true,
    },
    {
      title: "DATAVIDIA",
      content: "Untuk SMA & Mahasiswa",
      isRegistered: false,
      isRegistrationOpen: true,
    },
    {
      title: "GAMEDEV",
      content: "Untuk SMA & Mahasiswa",
      isRegistered: false,
      isRegistrationOpen: true,
    },
    {
      title: "ARKALOGICA",
      content: "Untuk SMA",
      isRegistered: false,
      isRegistrationOpen: false,
    },
  ];

  return (
    <div className="container mb-3">
      <div className="row container-fluid">
        {ex?.map((link, index) => (
          <div key={index} className="card col-4 mt-3 mr-4">
            <div className="title">{link.title}</div>
            <div className="content">{link.content}</div>
            <br />
            <hr />
            <div className="link">
              {link.isRegistrationOpen ? (
                <Link href="/">
                  <a>{link.isRegistered ? "View Application" : "Register"}</a>
                </Link>
              ) : (
                <div className="content">
                  Anda tidak bisa mendaftar lomba ini
                </div>
              )}
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
        }

        .title {
          font-family: Viga;
          font-size: 1.25rem;
          color: #05058d;
        }

        .content {
          font-family: Roboto;
          font-size: 1.125rem;
          color: #646464;
        }

        .link {
          display: flex;
          justify-content: flex-end;
          font-family: Roboto;
          font-size: 1.125rem;
          font-weight: bold;
          color: #623fa2;
        }

        a {
          color: #623fa2;
          text-decoration: none;
        }

        @media (max-width: 450px) {
          .title {
            font-size: 1.125rem;
          }
          .content {
            font-size: 1rem;
          }
          .link {
            font-size: 1rem;
          }
        }
      `}</style>
    </div>
  );
};

export default CompetitionsCard;

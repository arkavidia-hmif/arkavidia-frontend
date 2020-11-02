import Link from "next/link";

type Props = {
  title: string,
  body: string,
  buttonLink: string,
  buttonText: string,
  className?: string
}

const DashboardCard: React.FC<Props> = ({ title, body, buttonLink, buttonText, className }) => {
  // <div key={index} className="card col-md-4 col-xs-6 mt-3 mr-4">


  return (
    <div className={`card-container ${className}`}>
      <div className="card">
        <div className="title">{title}</div>
        <div className="content">{body}</div>
        <br />
        <hr />
        <div className="link">
          <Link href={buttonLink}>
            <a>{buttonText}</a>
          </Link>
        </div>
      </div>
      <style jsx>{`
        .card-container {
          width: 100%;
          position: relative;
          margin-bottom: 1rem;
        }

        hr {
          width: 100%;
          color: #646464;
        }

        .card {
          margin: auto;
          height: 100%;
          width: 100%;
          display: flex;
          flex-direction: column;
          padding: 0.625rem;
          border: 1px solid #431785;
          border-radius: 10px;
          background-color: white;
        }

        .title {
          font-family: Viga;
          font-size: 1.25rem;
          color: #05058d;
        }

        .content {
          flex-grow: 1;
          font-size: 1.125rem;
        }

        .link {
          display: flex;
          justify-content: flex-end;
          align-items: flex-end;
          font-size: 1.125rem;
          font-weight: bold;
          color: #623fa2;
        }

        a {
          color: #623fa2;
          text-decoration: none;
        }

        @media (max-width: 576px) {
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

export default DashboardCard;
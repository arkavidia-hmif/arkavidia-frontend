import Link from "next/link";

interface Props {
  title: string;
  body: string;
  buttonLink?: string | null;
  buttonText?: string | null;
  className?: string;
}

const DashboardCard: React.FC<Props> = ({
  title,
  body,
  buttonLink = null,
  buttonText = null,
  className,
}) => {
  const showLink = !!(buttonLink || buttonText);

  return (
    <div className={`card-container ${className}`}>
      <div className="card">
        <div className="title">{title}</div>
        <div className="content">{body}</div>
        <br />
        <hr />
        <div className="link">
          {buttonLink ? (
            <Link href={buttonLink}>
              <a>{buttonText}</a>
            </Link>
          ) : (
            <span>{buttonText}</span>
          )}
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
          padding: 1rem;
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
          color: #646464;
        }

        .link {
          display: flex;
          justify-content: flex-end;
          align-items: flex-end;
          font-size: 1.125rem;
          font-weight: bold;
        }

        a {
          color: #623fa2;
          text-decoration: none;
        }

        span {
          color: #646464;
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
      <style jsx>{`
        hr {
          ${!showLink ? "display: none;" : ""}
        }

        .link {
          ${!showLink ? "display: none;" : ""}
        }
      `}</style>
    </div>
  );
};

export default DashboardCard;

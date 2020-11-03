import Link from "next/link";
import * as React from "react";
import { Competition } from "../../../../interfaces/competition";
import { TeamData } from "../../../../interfaces/team";
import { useDashboard } from "../../../provider/DashboardProvider";

interface SubmissionProgressProps {
  team: TeamData;
  competition: Competition;
}

const SubmissionProgress: React.FC<SubmissionProgressProps> = (props) => {
  const { active, setActive } = useDashboard();

  const getTeamDashboardData = (slug: string) => [
    {
      text: "Informasi Tim",
      image: "/img/dashboard/submission/tim.png",
      link: `/dashboard/competitions/${slug}/`,
    },
    {
      text: "Anggota Tim",
      image: "/img/dashboard/submission/anggota.png",
      link: `/dashboard/competitions/${slug}/anggota-tim`,
    },
  ];

  const getTeamMemberData = (slug: string) => [
    {
      text: "Foto Diri",
      image: "../../../img/dashboard/submission/lingkaran.png",
      link: `/dashboard/competitions/${slug}/status-tim`,
    },
    {
      text: "KTP/KTM",
      image: "../../../img/dashboard/submission/jampasir.png",
      link: `/dashboard/competitions/${slug}/status-tim`,
    },
    {
      text: "SKMA",
      image: "../../../img/dashboard/submission/check.png",
      link: `/dashboard/competitions/${slug}/status-tim`,
    },
    {
      text: "Bukti Pembayaran",
      image: "../../../img/dashboard/submission/lingkaran.png",
      link: `/dashboard/competitions/${slug}/status-tim`,
    },
  ];

  const handleClick = (num: number) => {
    setActive(num);
  };

  return (
    <div className="container mb-3 card">
      <h2>{props.team.name || "Nama Tim"}</h2>
      <p className="">{props.competition.name || "Nama Lomba"}</p>
      <div className="not-dropdown">
        <div className="title">TIM</div>
      </div>
      <div className="dropdown">
        <ul className="list">
          {getTeamDashboardData(props.competition.slug).map((datum, i) => (
            <Link href={datum.link} key={datum.text}>
              <a>
                <li
                  onClick={() => handleClick(i)}
                  className={active === i ? "active" : ""}
                >
                  {active === i && <span id="right-roller"></span>}
                  <img src={datum.image} className="mr-3" />
                  {datum.text}
                </li>
              </a>
            </Link>
          ))}
        </ul>
      </div>
      <div className="not-dropdown">
        <div className="title">PRASYARAT PENDAFTARAN</div>
      </div>
      <div className="dropdown">
        <ul className="list">
          {getTeamMemberData(props.competition.slug).map((datum, i) => (
            <Link href={datum.link} key={datum.text}>
              <a>
                <li
                  onClick={() => handleClick(i + 2)}
                  className={active === i + 2 ? "active" : ""}
                >
                  {active === i + 2 && <span id="right-roller"></span>}
                  <img src={datum.image} className="mr-3" />
                  {datum.text}
                </li>
              </a>
            </Link>
          ))}
        </ul>
      </div>
      <style jsx>{`
        h2 {
          margin-bottom: 0;
          margin-top: 1rem;
          font-family: Viga;
          font-size: 23.4375px;
          line-height: 31px;
        }
        a {
          text-decoration: none;
        }
        img {
          max-width: 17px;
        }
        ul {
          list-style: none;
        }

        .dropdown li {
          color: #161f24;
          min-height: 2.4rem;
          line-height: 2.4rem;
          cursor: pointer;
          padding: 0.5rem;
          position: relative;
          font-size: 0.875rem;
        }
        .dropdown li.active {
          background: rgba(251, 188, 200, 0.3);
          margin: 0 -10px 0 -15px;
          padding: 0.5rem calc(0.5rem + 15px);
        }
        #right-roller {
          position: absolute;
          background: #fe94ab;
          opacity: 0.5;
          border-radius: 10.3125px;
          width: 10px;
          height: 3.4rem;
          top: 0;
          right: -5px;
        }
        .dropdown {
          padding: 0;
        }
        .list {
          padding: 0;
        }
        p {
          font-size: 0.8rem;
        }
        .title {
          color: rgba(0, 0, 0, 0.6);
          font-size: 1.2rem;
          line-height: 1.4rem;
        }
        .card {
          background: linear-gradient(
              180deg,
              #ffffff 0%,
              rgba(255, 255, 255, 0) 100%
            ),
            linear-gradient(180deg, #ffbdea 0%, rgba(255, 255, 255, 0) 100%),
            #f3a9dd;
          border: 0.46875px solid #05058d;
          box-sizing: border-box;
          border-radius: 10px;
        }

        .content {
          font-family: Roboto;
          font-size: 1rem;
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
          text-decoration: none;
        }

        @media (max-width: 450px) {
          h2 {
            font-size: 1.25rem;
          }
          .title {
            font-size: 1.125rem;
          }
          .link {
            font-size: 1rem;
          }
        }
      `}</style>
    </div>
  );
};

export default SubmissionProgress;

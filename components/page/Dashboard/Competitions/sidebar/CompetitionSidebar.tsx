import * as React from "react";
import { Competition } from "../../../../../interfaces/competition";
import { SidebarEntry } from "../../../../../interfaces/sidebar";
import { TeamData } from "../../../../../interfaces/team";
import SidebarSection from "./SidebarSection";

interface SubmissionProgressProps {
  team: TeamData;
  competition: Competition;
  selection: number;
  setSelection: (selection: number) => void;
}

const CompetitionSidebar: React.FC<SubmissionProgressProps> = ({ team, competition, selection, setSelection }) => {
  const sidebarData = [
    {
      name: "TIM",
      item: [
        {
          text: "Informasi Tim",
          image: "/img/dashboard/submission/tim.png",
        },
        {
          text: "Anggota Tim",
          image: "/img/dashboard/submission/anggota.png",
        }
      ] as SidebarEntry[]
    },
    {
      name: "Stage 1 (name)",
      item: [
        {
          text: "Foto Diri",
          image: "/img/dashboard/submission/lingkaran.png",
        },
        {
          text: "KTP/KTM",
          image: "/img/dashboard/submission/jampasir.png",
        },
        {
          text: "SKMA",
          image: "/img/dashboard/submission/check.png",
        },
        {
          text: "Bukti Pembayaran",
          image: "/img/dashboard/submission/lingkaran.png",
        },
      ] as SidebarEntry[]
    }
  ];

  return (
    <div className="container mb-3 card">
      <h2>{team.name || "Nama Tim"}</h2>
      <p className="">{competition.name || "Nama Lomba"}</p>
      <SidebarSection data={sidebarData} selection={selection} setSelection={setSelection} />
      <style jsx>{`
        h2 {
          margin-bottom: 0;
          margin-top: 1rem;
          font-size: 1.5rem;
          line-height: 31px;
        }
        
        p {
          font-size: 0.8rem;
        }

        .card {
          background: linear-gradient(180deg,#ffffff 0%, transparent 100%),
            linear-gradient(180deg, #ffbdea 0%, transparent 100%),#f3a9dd;
          border: 0.46875px solid #05058d;
          box-sizing: border-box;
          border-radius: 10px;
        }
      `}</style>
    </div>
  );
};

export default CompetitionSidebar;

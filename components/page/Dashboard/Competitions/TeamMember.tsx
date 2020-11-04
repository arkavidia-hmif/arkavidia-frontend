import { useContext, useState } from "react";
import useSWR from "swr";
import { getTeamDetail } from "../../../../api/team";
import { Competition } from "../../../../interfaces/competition";
import { TeamData } from "../../../../interfaces/team";
import { Theme } from "../../../../styles/theme";
import { ApiContext } from "../../../../utils/context/api";
import Alert from "../../../Alert";
import Spinner from "../../../Spinner";
import InsertMemberDialog from "./member/InsertMemberDialog";
import MemberCard from "./member/MemberCard";

type Props = {
  team: TeamData;
  competition: Competition;
};

const TeamMember: React.FC<Props> = ({ team, competition }) => {
  const apiContext = useContext(ApiContext);
  const [onAdd, setOnAdd] = useState(false);

  const { data: teamDetail, error, mutate: teamDetailMutate } = useSWR(
    `/competition/teams/${team.id}/`,
    () => getTeamDetail(apiContext.axios, team.id)
  );

  if (error) return <Alert error="Masalah koneksi" />;
  if (!teamDetail) return <Spinner height="200px" />;

  const getParticipantCountText = () => {
    if (competition.minTeamMembers === competition.maxTeamMembers) {
      return `berjumlah tepat ${competition.maxTeamMembers} orang`;
    } else {
      return `minimal ${competition.minTeamMembers} dan maksimal ${competition.maxTeamMembers} orang`;
    }
  };

  const getWarning = () => {
    if (teamDetail.teamMembers.length < competition.minTeamMembers) {
      return (
        <Alert
          error="Jumlah anggota tim belum memenuhi"
          color={Theme.alertColors.yellowAlert}
        />
      );
    }
  };

  const getAddSection = () => {
    if (teamDetail.teamMembers.length >= competition.maxTeamMembers) {
      return;
    }

    if (onAdd) {
      return (
        <InsertMemberDialog
          team={teamDetail}
          mutate={teamDetailMutate}
          closeAdd={() => { setOnAdd(false); }}
        />
      );
    } else {
      return (
        <div className="my-3" onClick={() => { setOnAdd(true); }}>
          <img src="/img/dashboard/add-member.png" />
          <style jsx>{`
            img {
              border-radius: 50%;
              width: 60px;
            }

            img:hover {
              filter: brightness(75%);
            }  
          `}</style>
        </div>
      );
    }
  }


  return (
    <div>
      <h2>{competition.name} - Anggota Tim</h2>
      <p>
        Jumlah peserta tim untuk {competition.name} {getParticipantCountText()}
      </p>
      {getWarning()}
      <div className="mt-4">
        {teamDetail.teamMembers.map((entry) => (
          <MemberCard key={entry.id} team={entry} />
        ))}
        {getAddSection()}
      </div>
      <style jsx>{`
        h2 {
          color: #05058d;
        }
      `}</style>
    </div>
  );
};

export default TeamMember;

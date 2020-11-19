import { useContext, useState } from "react";
import useSWR from "swr";
import InsertMemberDialog from "./member/InsertMemberDialog";
import MemberCard from "./member/MemberCard";
import { getTeamDetail } from "api/team";
import { Competition } from "interfaces/competition";
import { TeamData } from "interfaces/team";
import { ApiContext } from "utils/context/api";
import Alert from "components/Alert";
import Spinner from "components/Spinner";
import { Theme } from "styles/theme";

interface Props {
  team: TeamData;
  competition: Competition;
}

const TeamMember: React.FC<Props> = ({ team, competition }) => {
  const apiContext = useContext(ApiContext);
  const [onAdd, setOnAdd] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { data: teamDetail, error: teamDetailError, mutate: teamDetailMutate } = useSWR(
    `/competition/teams/${team.id}/`,
    () => getTeamDetail(apiContext.axios, team.id)
  );

  if (teamDetailError) return <Alert error="Masalah koneksi" />;
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
  };


  const renderList = () => {
    const memberList = [...teamDetail.teamMembers];
    memberList.sort((a, b) => {
      if (a.isTeamLeader) return -1;
      if (b.isTeamLeader) return 1;

      return 0;
    });

    return memberList.map((entry, i) => {
      return (
        <MemberCard
          key={i}
          member={entry}
          teamDetail={teamDetail}
          mutate={teamDetailMutate}
          setError={setError} />
      );
    });
  };


  return (
    <div>
      <h2>{competition.name} - Anggota Tim</h2>
      <p>
        Jumlah peserta tim untuk {competition.name} {getParticipantCountText()}
      </p>
      <Alert error={error} />
      {getWarning()}
      <div className="mt-4">
        {renderList()}
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

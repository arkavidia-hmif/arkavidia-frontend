import { useContext } from "react";
import useSWR from "swr";
import { getTeamDetail } from "../../../../api/team";
import { getTeamMemberDetail } from "../../../../api/teamMember";
import { Competition } from "../../../../interfaces/competition";
import { TeamData } from "../../../../interfaces/team";
import { ApiContext } from "../../../../utils/context/api";
import Alert from "../../../Alert";
import Spinner from "../../../Spinner";
import MemberCard from "./member/MemberCard";

type Props = {
  team: TeamData;
  competition: Competition;
}

const TeamMember: React.FC<Props> = ({ team, competition }) => {
  const apiContext = useContext(ApiContext);

  const { data: teamDetail, error } = useSWR(`/competition/teams/${team.id}/`, () => getTeamDetail(apiContext.axios, team.id));

  if (error) return (<Alert error="Masalah koneksi" />);
  if (!teamDetail) return (<Spinner height="200px" />);

  const getParticipantCountText = () => {
    if (competition.minTeamMembers === competition.maxTeamMembers) {
      return `berjumlah tepat ${competition.maxTeamMembers} orang`;
    } else {
      return `minimal ${competition.minTeamMembers} dan maksimal ${competition.maxTeamMembers} orang`;
    }
  };

  return (
    <div>
      <h2>{competition.name} - Anggota Tim</h2>
      <p>Jumlah peserta tim untuk {competition.name} {getParticipantCountText()}</p>
      <div className="mt-5">
        {teamDetail.teamMembers.map((entry) => <MemberCard key={entry.id} team={entry} />)}
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
import { TeamMember } from "../../../../../interfaces/team";

type Props = {
  team: TeamMember
}

const MemberCard: React.FC<Props> = ({ team }) => {
  return (
    <div id="member-container">
      <img src="/img/competitions/member.png" />
      <p className="m-0 ml-3">{team.fullName} {team.isTeamLeader ? '(ketua)' : ''}</p>
      <style jsx>{`
        #member-container {
          display: flex;
          flex-direction: row;

          align-items: center;
        }
      `}</style>
    </div>
  );
};

export default MemberCard;
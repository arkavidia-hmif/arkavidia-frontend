import MD5 from "crypto-js/md5";
import { TeamMember } from "../../../../../interfaces/team";
import { defaultProfileUrl } from "../../../../../utils/constants/profile-picture";

type Props = {
  team: TeamMember
}

const MemberCard: React.FC<Props> = ({ team }) => {

  const gravatarHash = MD5(team.email.toLowerCase()).toString();
  const gravatarUrl = `https://www.gravatar.com/avatar/${gravatarHash}?d=${defaultProfileUrl}`;


  return (
    <div id="member-container">
      <img src={gravatarUrl} />
      <p className="m-0 ml-3">{team.fullName} {team.isTeamLeader ? '(ketua)' : ''}</p>
      <style jsx>{`
        #member-container {
          display: flex;
          flex-direction: row;

          align-items: center;
        }

        img {
          border-radius: 50%;
          width: 60px;
        }
      `}</style>
    </div>
  );
};

export default MemberCard;
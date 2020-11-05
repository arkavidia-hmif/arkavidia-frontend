import MD5 from "crypto-js/md5";
import { useContext, useState } from "react";
import { responseInterface } from "swr";
import { deleteTeamMember } from "../../../../../api/teamMember";
import { TeamDetailData, TeamMember } from "../../../../../interfaces/team";
import { defaultProfileUrl } from "../../../../../utils/constants/profile-picture";
import { ApiContext } from "../../../../../utils/context/api";
import FilledButton from "../../../../FilledButton";

type Props = {
  member: TeamMember;
  teamDetail: TeamDetailData;
  mutate: responseInterface<TeamDetailData, string>['mutate'];
  setError: (error: string | null) => void;
};

const MemberCard: React.FC<Props> = ({ member, teamDetail, mutate, setError }) => {
  const apiContext = useContext(ApiContext);

  const gravatarHash = MD5(member.email.toLowerCase()).toString();
  const gravatarUrl = `https://www.gravatar.com/avatar/${gravatarHash}?d=${defaultProfileUrl}`;

  const [loading, setLoading] = useState(false);

  const deleteHandler = () => {
    setError(null);
    setLoading(true);

    deleteTeamMember(apiContext.axios, teamDetail.id, member.id)
      .then(() => {
        const newDetail = { ...teamDetail };
        newDetail.teamMembers = teamDetail.teamMembers.filter((entry) => entry.id !== member.id);
        mutate(newDetail);
      })
      .catch((e) => {
        setError(e.message);
      })
      .finally(() => { setLoading(false); });
  };


  return (
    <div id="member-container" className="my-3">
      <img src={gravatarUrl} />
      <div className="m-0 ml-3">
        <p>{member.fullName} {member.isTeamLeader ? "(ketua)" : ""} {!member.hasAccount ? "(belum mendaftar)" : ""}</p>
        <p className="email">{member.email}</p>
      </div>
      <div style={{ flex: 1 }} />
      {member.id !== -99 && !member.isTeamLeader && <FilledButton text="Hapus" loading={loading} onClick={deleteHandler} />}
      <style jsx>{`
        #member-container {
          display: flex;
          flex-direction: row;

          align-items: center;
        }

        p {
          margin: 0;
        }

        .email {
          color: #646464;
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

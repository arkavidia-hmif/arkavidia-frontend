import { Competition } from "../../../../interfaces/competition";
import { TeamData } from "../../../../interfaces/team"

type Props = {
  team: TeamData;
  competition: Competition;
}

const TeamMember: React.FC<Props> = () => {

  return (
    <div id="content-container">
      <div id="heading">Arkalogica - Anggota Tim</div>
      <div id="subtitle">
        Jumlah peserta tim untuk [nama lomba] maksimal adalah [n]
        orang</div>
      <div className="mt-5" id="team">
        <div className="member">
          <img src="/img/competitions/member.png" />
          <div className="name mt-3 ml-3">Nama Anggota 1</div>
        </div>
      </div>
    </div>
  );
};

export default TeamMember;
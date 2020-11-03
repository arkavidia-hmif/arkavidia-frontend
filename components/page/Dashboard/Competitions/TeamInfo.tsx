import { Competition } from "../../../../interfaces/competition";
import { TeamData } from "../../../../interfaces/team";
import { Theme } from "../../../../styles/theme";
import FilledButton from "../../../FilledButton";

type Props = {
  currentTeam: TeamData;
  currentCompetition: Competition;
}

const TeamInfo: React.FC<Props> = ({ currentCompetition, currentTeam }) => {
  return (
    <div id="content-container">
      <div id="heading">
        {currentCompetition.name} - Informasi Tim
      </div>
      <div className="mt-4">
        <div className="title">Nama Tim</div>
        <div className="subtitle">{currentTeam.name}</div>
      </div>
      <div className="mt-4">
        <div className="title">Asal Sekolah/Universitas</div>
        <div className="subtitle">{currentTeam.institution}</div>
      </div>
      <div className="mt-5" id="button">
        <div className="mr-5">
          <FilledButton
            text="Hapus Tim"
            color={Theme.buttonColors.purpleButton}
            padding="0.5rem 1.5rem"
          />
        </div>
        <div>
          <FilledButton
            text="Edit Tim"
            color={Theme.buttonColors.purpleButton}
            padding="0.5rem 1.5rem"
          />
        </div>
      </div>

      <style jsx>{`
          #main {
            display: flex;
          }

          #content-container {
            flex: 60%;
          }

          #bg-container {
            flex: 40%;
            max-width: auto;
          }

          #heading {
            font-family: Viga;
            font-size: 1.55rem;
            color: #05058d;
          }

          #button {
            display: flex;
          }

          .title {
            font-family: Roboto;
            color: #646464;
            font-weight: bold;
            font-size: 1.125rem;
          }

          .subtitle {
            font-family: Roboto;
            color: #646464;
            font-weight: normal;
            font-size: 1.125rem;
          }

          @media (max-width: 800px) {
            #bg-container {
              display: none;
            }
            .mt-5 {
              margin-top: 0rem !important;
            }
          }

          @media (max-width: 450px) {
            #main {
              margin-left: auto;
            }

            #heading {
              font-size: 1.25rem;
            }

            .title {
              font-size: 1rem;
            }

            .subtitle {
              font-size: 1rem;
            }
          }
        `}</style>
    </div>
  );
};

export default TeamInfo;
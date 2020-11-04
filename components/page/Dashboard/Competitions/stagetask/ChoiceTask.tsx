// import { useContext } from "react";
// import { ApiContext } from "../../../../../utils/context/api";
import FilledButton from "../../../../FilledButton";
import { Theme } from "../../../../../styles/theme";
// import { submitTaskResponseCompetition } from "../../../../../api/competition";
import { TeamData } from "../../../../../interfaces/team";
import useChoice from "../../../../../utils/hooks/useChoice";
import { Task } from "../../../../../interfaces/task";

type Props = {
  team: TeamData;
  widget: Task;
};

const ChoiceTask: React.FC<Props> = ({ team, widget }) => {
  // const apiContext = useContext(ApiContext);
  const choice = useChoice("3");
  // const teamId = team?.id;
  // const taskId = 4;

  const handleSubmit = async () => {
    if (choice) {
      // console.log(team);
      // const res = await submitTaskResponseCompetition(
      //   apiContext.axios,
      //   taskId,
      //   teamId
    }
  };
  return (
    <form
      encType="multipart/form-data"
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}
    >
      <div id="heading">Persyaratan Pendaftaran</div>
      <div id="ketentuan" className="mt-3">
        <div className="title">Ketentuan:</div>
        <ol>
          <li>{team?.id}</li>
          <li>{widget?.id}</li>
        </ol>
      </div>
      <div id="upload" className="mt-3">
        <div className="title">Upload:</div>
        <select
          value={choice.value}
          onChange={(e) => choice.setValue(e.target.value)}
        >
          <option value={"3"}>{"3"}</option>
          <option value={"4"}>{"5"}</option>
        </select>
      </div>
      <div id="status" className="mt-4">
        <div className="title">Status</div>
        <div className="subtitle">Belum diverivikasi</div>
      </div>
      <div id="simpan" className="mt-5">
        <FilledButton
          text="Simpan"
          color={Theme.buttonColors.purpleButton}
          padding="0.5rem 2rem"
          submit={true}
        />
      </div>

      <style jsx>{`
        #heading {
          font-family: Viga;
          font-size: 1.5rem;
          color: #05058d;
        }

        .title {
          font-family: Roboto;
          font-weight: bold;
          color: #646464;
          font-size: 1.125rem;
        }

        .subtitle {
          font-family: Roboto;
          color: #646464;
          font-size: 1rem;
          padding: 0.5rem 1.125rem;
        }

        @media (max-width: 800px) {
          .mt-5 {
            margin-top: 1rem !important;
          }
        }

        @media (max-width: 450px) {
          #heading {
            font-size: 1.25rem;
          }

          .title {
            font-size: 1rem;
          }

          .subtitle {
            font-size: 0.9375rem;
          }
        }
      `}</style>
    </form>
  );
};

export default ChoiceTask;

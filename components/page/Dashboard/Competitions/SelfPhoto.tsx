// import { useRouter } from "next/dist/client/router";
// import React, { useContext, useState } from "react";
// import { deleteTeam, editTeam, LIST_TEAM_URL } from "../../../../api/team";
import { Competition } from "../../../../interfaces/competition";
// import { TeamData } from "../../../../interfaces/team";
import { Theme } from "../../../../styles/theme";
// import competitionItems from "../../../../utils/constants/competition-items";
// import { ApiContext } from "../../../../utils/context/api";
// import Alert from "../../../Alert";
import FilledButton from "../../../FilledButton";

type Props = {
  competition: Competition;
};

const SelfPhoto: React.FC<Props> = ({ competition }) => {
  //   const apiContext = useContext(ApiContext);
  //   const router = useRouter();
  //   const [file, setFile] = useState();
  //   const [error, setError] = useState<string | null>(null);
  const handleSubmit = async () => {
    // console.log("helo");
    // await editTeam(
    //   apiContext.axios,
    //   {
    //     name: teamName,
    //     institution: institutionName,
    //   },
    //   props.currentTeam.id.toString()
    // )
    //   .then(() => {
    //     mutate(`${LIST_TEAM_URL}`);
    //     setEdit(false);
    //   })
    //   .catch(() => {
    //     setError("Pastikan field tidak kosong.");
    //   });
  };
  return (
    <>
      {/* <div className="my-2">{error ? <Alert error={error} /> : null}</div> */}
      <h2>{competition.name} - Informasi Tim</h2>
      <div className="mt-4">
        <div className="title">Nama Tim</div>
        {/* <input
          type="file"
          value={file}
          onChange={(event) => {
            console.log(event);
          }}
        /> */}
      </div>
      <div className="mt-5" id="button">
        <div>
          <FilledButton
            text="Simpan"
            color={Theme.buttonColors.purpleButton}
            padding="0.5rem 1.5rem"
            onClick={handleSubmit}
          />
        </div>
      </div>
      <style jsx>{`
        h2 {
          color: ${Theme.competitionColors.subHeadingColor};
        }

        #button {
          display: flex;
        }

        .title {
          color: #646464;
          font-weight: bold;
          font-size: 1.125rem;
        }

        .subtitle {
          color: #646464;
          font-size: 1.125rem;
        }

        form {
          height: auto;
          width: 90%;
          display: block;
        }

        input {
          width: 100%;
          border: none;
          padding: 0.5rem 0 0.5rem 0;
          border-bottom: 0.15rem solid black;
          box-sizing: border-box;
          background: none;
          margin: 0.5rem 0 1rem 0;
        }

        label {
          font-size: 1.125rem;
          color: #696969;
        }

        @media (max-width: 450px) {
          .title {
            font-size: 1rem;
          }

          .subtitle {
            font-size: 1rem;
          }
        }
      `}</style>
    </>
  );
};

export default SelfPhoto;

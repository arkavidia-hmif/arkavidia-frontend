import { useRouter } from "next/dist/client/router";
import React, { useContext, useState } from "react";
import { mutate } from "swr";
import { deleteTeam, editTeam, LIST_TEAM_URL } from "api/team";
import { Competition } from "interfaces/competition";
import { TeamData } from "interfaces/team";
import { ApiContext } from "utils/context/api";
import Alert from "components/Alert";
import FilledButton from "components/FilledButton";
import { Theme } from "styles/theme";

interface TeamInfoProps {
  currentTeam: TeamData;
  currentCompetition: Competition;
}

const TeamInfo: React.FC<TeamInfoProps> = (props: TeamInfoProps) => {
  const apiContext = useContext(ApiContext);
  const router = useRouter();

  const [edit, setEdit] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [teamName, setTeamName] = useState<string>(props.currentTeam.name);
  const [institutionName, setInstitutionName] = useState<string>(
    props.currentTeam.institution
  );

  if (edit) {
    return (
      <>
        <div className="my-2">{error ? <Alert error={error} /> : null}</div>
        <form
          onSubmit={async (event) => {
            event.preventDefault();
            setLoading(true);
            editTeam(
              apiContext.axios,
              {
                name: teamName,
                institution: institutionName,
              },
              props.currentTeam.id.toString()
            )
              .then(() => {
                mutate(`${LIST_TEAM_URL}`);
                setEdit(false);
              })
              .catch(() => {
                setError("Pastikan field tidak kosong.");
              })
              .finally(() => {
                setLoading(false);
              });
          }}
        >
          <h2>{props.currentCompetition.name} - Informasi Tim</h2>
          <div className="mt-4">
            <div className="title">Nama Tim</div>
            <input
              value={teamName}
              placeholder={props.currentTeam.name}
              onChange={(event) => {
                setTeamName(event.target.value);
              }}
            />
          </div>
          <div className="mt-4">
            <div className="title">Asal Sekolah/Universitas</div>
            <input
              value={institutionName}
              placeholder={props.currentTeam.institution}
              onChange={(event) => {
                setInstitutionName(event.target.value);
              }}
            />
          </div>
          <div className="mt-5" id="button">
            <div>
              <FilledButton
                text="Simpan"
                color={Theme.buttonColors.purpleButton}
                padding="0.5rem 1.5rem"
                loading={loading}
                submit
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
        </form>
      </>
    );
  } else {
    return (
      <>
        <h2>{props.currentCompetition.name} - Informasi Tim</h2>
        <div className="mt-4">
          <div className="title">Nama Tim</div>
          <div className="subtitle">{props.currentTeam.name}</div>
        </div>
        <div className="mt-4">
          <div className="title">Asal Sekolah/Universitas</div>
          <div className="subtitle">{props.currentTeam.institution}</div>
        </div>
        <div className="mt-5" id="button">
          {props.currentCompetition.isRegistrationOpen &&
            <div className="mr-5">
              <FilledButton
                text="Hapus Tim"
                color={Theme.buttonColors.purpleButton}
                padding="0.5rem 1.5rem"
                onClick={async () => {
                  await deleteTeam(
                    apiContext.axios,
                    props.currentTeam.id.toString()
                  ).then(() => {
                    router.push("/dashboard/competitions");
                  });
                }}
              />
            </div>
          }
          <div>
            <FilledButton
              text="Edit Tim"
              color={Theme.buttonColors.purpleButton}
              padding="0.5rem 1.5rem"
              onClick={() => {
                setEdit(true);
              }}
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
            font-weight: normal;
            font-size: 1.125rem;
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
  }
};

export default TeamInfo;

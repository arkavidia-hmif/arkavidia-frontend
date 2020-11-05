import { useContext, useState } from "react";
import { responseInterface } from "swr/dist/types";
import { ApiError } from "../../../../../api/error";
import { addTeamMember } from "../../../../../api/teamMember";
import { TeamDetailData } from "../../../../../interfaces/team";
import { AddTeamMemberStatus } from "../../../../../interfaces/teamMember";
import { Theme } from "../../../../../styles/theme";
import { ApiContext } from "../../../../../utils/context/api";
import { isValidEmail } from "../../../../../utils/validator";
import Alert from "../../../../Alert";
import FilledButton from "../../../../FilledButton";

type Props = {
  closeAdd: () => void;
  team: TeamDetailData;
  mutate: responseInterface<TeamDetailData, string>['mutate'];
}

const InsertMemberDialog: React.FC<Props> = ({ closeAdd, team, mutate }) => {
  const apiContext = useContext(ApiContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = () => {
    setError(null);

    if (email.length === 0) {
      setError('Email harus diisi');
      return;
    }

    if (name.length === 0) {
      setError('Nama harus diisi');
      return;
    }

    if (!isValidEmail(email)) {
      setError('Email tidak valid');
      return;
    }

    setLoading(true);

    addTeamMember(apiContext.axios, team.id, name, email)
      .then(() => {
        const newTeam = { ...team };
        newTeam.teamMembers.push({
          fullName: name,
          email,
          hasAccount: false,
          isTeamLeader: false,
          id: -99,
          createdAt: ''
        });
        mutate(newTeam);
        closeAdd();
      }).catch((err) => {
        if (err instanceof ApiError) {
          if (err.code === AddTeamMemberStatus.TEAM_FULL) {
            setError('Tim sudah penuh');
            return;
          }
          if (err.code === AddTeamMemberStatus.ALREADY_EXISTS) {
            setError('Anggota tim ini sudah terdaftar');
            return;
          }
          if (err.code === AddTeamMemberStatus.ALREADY_REGISTERED) {
            setError('Anggota ini sudah terdaftar di tim lain');
            return;
          }
        }
        setError(err.message);
      }).finally(() => {
        setLoading(false);
      });
  };

  return (
    <div id="container" className="pt-3">
      <p className="m-0"><b>Menambahkan Anggota Tim</b></p>
      <form onSubmit={(evt) => {
        evt.preventDefault();
        handleSubmit();
      }}>
        <Alert error={error} />
        <br />
        <label htmlFor="nameInput">Nama</label>
        <input id="nameInput" type="text" value={name} onChange={(evt) => { setName(evt.target.value); }} placeholder="Nama" />
        <br />
        <label htmlFor="emailInput">Email</label>
        <input id="emailInput" type="text" value={email} onChange={(evt) => { setEmail(evt.target.value); }} placeholder="email@email.com" />
        <br />
        <div id="button-holder">
          <FilledButton text="Tambahkan" color={Theme.buttonColors.purpleButton} loading={loading} submit />
          <FilledButton text="Batal" onClick={closeAdd} />
        </div>
      </form>
      <style jsx>{`
        #button-holder {
          display: flex;
          gap: 1rem;
        }

        #button-holder:first-child {
          margin-right: 1rem;
        }

        form {
          display: flex;
          max-width: 400px;
          flex-direction: column;
        }

        input {
          width: 100%;
          border: none;
          border-bottom: 0.1rem solid black;
          padding-bottom: 0.3rem;
          background: none;
        }

        input:focus {
          outline: none;
        }
      `}</style>
    </div>
  );
};

export default InsertMemberDialog;
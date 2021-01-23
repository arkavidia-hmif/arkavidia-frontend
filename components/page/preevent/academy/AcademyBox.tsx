import { useRouter } from "next/dist/client/router";
import FilledButton from "components/FilledButton";
import { AcademyEntry } from "interfaces/academy";
import { Theme } from "styles/theme";

interface Props {
  entry: AcademyEntry
}

const AcademyBox: React.FC<Props> = ({ entry }) => {
  const router = useRouter();

  return (
    <div id="box" className="p-4 my-3">
      <div className="row">
        <div className="col-md-3 d-flex align-items-center">
          <img src={entry.logo} className="w-100" />
        </div>
        <div className="col-md-9 mt-3 mt-md-0">
          <h2>{entry.title}</h2>
          <p><b>{entry.subTitle ? `"${entry.subTitle}"` : ""}</b></p>
          <div className="d-flex flex-row">
            <img className="tiny-logo mr-3" src="/img/academy/icon_company.png" />
            <p>{entry.company}</p>
          </div>
          <div className="d-flex flex-row">
            <img className="tiny-logo mr-3" src="/img/academy/icon_date.png" />
            <p>{entry.date}</p>
          </div>
          <p className="mb-1">Periode Pendaftaran : {entry.registrationDate}</p>
          {entry.registrationFee && <p>Biaya Kegiatan : {entry.registrationFee}</p>}
          <div className="d-flex flex-row justify-content-md-end justify-content-center mt-3">
            <FilledButton color={Theme.buttonColors.blueButton} text="Download Guidebook" onClick={() => {
              router.push(entry.guidebookLink);
            }} />
            <span style={{ width: "1rem" }} />
            <FilledButton text="Daftar" onClick={() => {
              router.push(entry.registerLink);
            }} />
          </div>
        </div>
      </div>
      <style jsx>{`
        #box {
          width: 100%;
          border-radius: 1rem;
          border: 0.2rem solid #5080C1;

          background-color: white;
        }

        h2 {
          color: #05058D;
        }

        .tiny-logo {
          height: 1.25rem;
        }
      `}</style>
    </div>
  );
};

export default AcademyBox;

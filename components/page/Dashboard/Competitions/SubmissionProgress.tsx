import * as React from "react";
import Link from "next/link";

type Props = {
  setActive: (integer: number) => void;
};
// type ClickableProps = {
//   icon: string;
// };

// const ClickableList: React.FC<ClickableProps> = ({ icon }) => {
//   return <div>defr</div>;
// };

const SubmissionProgress: React.FC<Props> = ({ setActive }) => {
  return (
    <div className="container mb-3 card">
      <h2 onClick={() => setActive(1)}>Nama Tim </h2>
      <p className="mt-1">Nama Lomba</p>

      <div className="not-dropdown">
        <div className="title">TIM</div>
      </div>
      <div className="dropdown">
        <ul className="list">
          {/* routenya diganti yaa */}
          <Link href="/dashboard/competitions/ctf"><a>
            <li className="mt-1">
              <img src="../../../img/dashboard/submission/tim.png" className="mr-3"/>
              Informasi Tim
            </li>  
          </a></Link>
          <Link href="/dashboard/competitions/ctf/anggota-tim"><a>
            <li className="mt-1">
              <img src="../../../img/dashboard/submission/anggota.png" className="mr-3"/>
              Anggota Tim
            </li>
          </a></Link>
        </ul>
      </div>
      <div className="not-dropdown">
        <div className="title">PRASYARAT PENDAFTARAN </div>
      </div>
      <div className="dropdown">
        <ul className="list">
          {/* routenya diganti yaa */}
          <Link href="/dashboard/competitions/ctf"><a>
            <li className="mt-1">
              <img src="../../../img/dashboard/submission/lingkaran.png" className="mr-3"/>
              Foto Diri
            </li>  
          </a></Link>
          <Link href="/dashboard/competitions/ctf"><a>
            <li className="mt-1">
              <img src="../../../img/dashboard/submission/jampasir.png" className="mr-3"/>
              KTP/KTM
            </li>
          </a></Link>
          <Link href="/dashboard/competitions/ctf"><a>
            <li className="mt-1">
              <img src="../../../img/dashboard/submission/check.png" className="mr-3"/>
              SKMA
            </li>  
          </a></Link>
          <Link href="/dashboard/competitions/ctf"><a>
            <li className="mt-1">
              <img src="../../../img/dashboard/submission/lingkaran.png" className="mr-3"/>
              Bukti Pembayaran
            </li>
          </a></Link>
        </ul>
      </div>
      <style jsx>{`
        h2 {
          margin-bottom: 0;
          margin-top: 2rem;
          font-family: Viga;
          font-size: 23.4375px;
          line-height: 31px;
        }
        a{
          text-decoration:none;
        }
        img{
          max-width: 17px;
        }
        ul{
          list-style:none;
        }
        .dropdown li{
          color: #161F24;
          max-width: 25rem;
          max-height: 3rem;
          padding: 0.5rem;
          font-size: 0.875rem;
        }
        .dropdown{
          padding: 0;
        }
        .list{
          padding: 0;
        }
        p {
          font-size: 11.7187px;
          line-height: 14px;
        }
        .title {
          color: rgba(0, 0, 0, 0.6);
          font-size: 16.4062px;
          line-height: 19px;
        }
        .card {
          background: linear-gradient(
              180deg,
              #ffffff 0%,
              rgba(255, 255, 255, 0) 100%
            ),
            linear-gradient(180deg, #ffbdea 0%, rgba(255, 255, 255, 0) 100%),
            #f3a9dd;
          border: 0.46875px solid #05058d;
          box-sizing: border-box;
          border-radius: 10px;
        }

        .content {
          font-family: Roboto;
          font-size: 1.125rem;
          color: #646464;
        }

        .link {
          display: flex;
          justify-content: flex-end;
          font-family: Roboto;
          font-size: 1.125rem;
          font-weight: bold;
          color: #623fa2;
        }

        a {
          text-decoration: none;
        }

        @media (max-width: 450px) {
          h2 {
            font-size: 1.25rem;
          }
          .title {
            font-size: 1.125rem;
          }
          .link {
            font-size: 1rem;
          }
        }
      `}</style>
    </div>
  );
};

export default SubmissionProgress;

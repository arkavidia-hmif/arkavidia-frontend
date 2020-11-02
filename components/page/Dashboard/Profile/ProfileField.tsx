import { useContext } from 'react';
import useSWR from "swr";
import {
  getProfile,
  PROFILE_URL,
} from "../../../../api/profile";
import { ApiContext } from "../../../../utils/context/api";
import Alert from "../../../Alert";
import Spinner from "../../../Spinner";
import ModalProfile from './ModalProfile';

const ProfileField: React.FC = () => {
  const apiContext = useContext(ApiContext);

  const {
    data: profile,
    error: errorProfile,
  } = useSWR(PROFILE_URL, () => getProfile(apiContext.axios));

  if (errorProfile) return <Alert error="Masalah koneksi" />;
  if (!profile ) return <Spinner height="200px" />;

  return (
    <div className="container mb-3" id='dashboard-area'>
      <div className="row container-fluid">
        <div className="field col-6 mt-3">
          <div className="title"><h1>Nama</h1></div>
          <div className="content">
            <p>{profile.fullName || '-'}</p>
          </div>
        </div>
        <div className="field col-6 mt-3">
          <div className="title"><h1>Nomor Telefon</h1></div>
          <div className="content">
            <p>{profile.phoneNumber || '-'}</p>
          </div>
        </div>
        <div className="field col-6 mt-3">
          <div className="title"><h1>Email</h1></div>
          <div className="content">
            <p>{profile.email || '-'}</p>
          </div>
        </div>
        <div className="field col-6 mt-3">
          <div className="title"><h1>Tanggal Lahir</h1></div>
          <div className="content">
            <p>{profile.birthDate || '-'}</p>
          </div>
        </div>
        <div className="field col-6 mt-3">
          <div className="title"><h1>Status</h1></div>
          <div className="content">
            <p>{profile.currentEducation || '-'}</p>
          </div>
        </div>
        <div className="field col-6 mt-3">
          <div className="title"><h1>Alamat</h1></div>
          <div className="content">
            <p>{profile.address || '-'}</p>
          </div>
        </div>
        <div className="field col-6 mt-3">
          <div className="title"><h1>Universitas</h1></div>
          <div className="content">
            <p>{profile.institution|| '-'}</p>
          </div>
        </div>     
      </div>
      <ModalProfile/>
      <style jsx>{`
        #dashboard-area {
          min-height: 60vh;
        }

        .field{
          max-width: 27rem;
        }

        .title h1{
          font-family: Roboto;
          font-size: 1.125rem;
          font-weight: bold;
  
          color: #646464;
        }

        .content{
          font-family: Roboto;
          font-size: 1.125rem;

          color: #646464;
        }

        #update{
          display:block;
        }
        form{
          display:block;
        }
      `}</style>
    </div>
  );
};

export default ProfileField;

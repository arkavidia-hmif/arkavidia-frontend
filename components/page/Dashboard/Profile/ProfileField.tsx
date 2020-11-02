import { useContext } from 'react';
import { AuthContext } from "../../../../utils/context/auth";
import ModalProfile from './ModalProfile';

const ProfileField: React.FC = () => {
  const authContext = useContext(AuthContext);

  return (
    <div className="container mb-3" id='dashboard-area'>
      <div className="row container-fluid">
        <div className="field col-6 mt-3">
          <div className="title"><h1>Nama</h1></div>
          <div className="content">
            <p>{authContext.auth?.user.fullName || '-'}</p>
          </div>
        </div>
        <div className="field col-6 mt-3">
          <div className="title"><h1>Nomor Telepon</h1></div>
          <div className="content">
            <p>{authContext.auth?.user.phoneNumber || '-'}</p>
          </div>
        </div>
        <div className="field col-6 mt-3">
          <div className="title"><h1>Email</h1></div>
          <div className="content">
            <p>{authContext.auth?.user.email || '-'}</p>
          </div>
        </div>
        <div className="field col-6 mt-3">
          <div className="title"><h1>Tanggal Lahir</h1></div>
          <div className="content">
            <p>{authContext.auth?.user.birthDate || '-'}</p>
          </div>
        </div>
        <div className="field col-6 mt-3">
          <div className="title"><h1>Status</h1></div>
          <div className="content">
            <p>{authContext.auth?.user.currentEducation || '-'}</p>
          </div>
        </div>
        <div className="field col-6 mt-3">
          <div className="title"><h1>Alamat</h1></div>
          <div className="content">
            <p>{authContext.auth?.user.address || '-'}</p>
          </div>
        </div>
        <div className="field col-6 mt-3">
          <div className="title"><h1>Institusi</h1></div>
          <div className="content">
            <p>{authContext.auth?.user.institution || '-'}</p>
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

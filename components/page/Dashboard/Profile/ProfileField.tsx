import * as React from 'react';
import ModalProfile from './ModalProfile';

const ProfileField: React.FC = () => {
  // example data
  const ex = [
    {
      title:'Nama',
      content: 'John Doe'
    },
    {
      title:'Nomor Telefon',
      content: '0'
    },
    {
      title:'Email',
      content: 'a@gmail.com'
    },
    {
      title:'Tanggal lahir',
      content: '1 Januari 2001'
    },
    {
      title:'Status',
      content: 'Mahasiswa'
    },
    {
      title:'Alamat',
      content: 'Cisitu Indah'
    },
    {
      title:'Universitas',
      content: 'Institut Teknologi Bandung'
    },
  ];
  
  return (
    <div className="container mb-3" id='dashboard-area'>
      <div className="row container-fluid">
        {ex?.map((link, index) => (
          <div key={index} className="field col-6 mt-3">
            <div className="title">
              {link.title}
            </div>
            <div className="content">
              {link.content}
            </div>
          </div>
        ))}        
      </div>
      <ModalProfile/>
      <style jsx>{`
        #dashboard-area {
          min-height: 60vh;
        }

        .field{
          max-width: 27rem;
        }

        .title{
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

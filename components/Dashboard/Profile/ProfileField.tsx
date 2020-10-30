import * as React from 'react'

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
  ]
  
  return (
    <div className="container mb-3">
      <div className="container-fluid">
        {ex?.map((link, index) => (
          <div key={index} className="field col mt-3">
            <div className="title">
              {link.title}
            </div>
            <div className="content">
              {link.content}
            </div>
          </div>
        ))}
      </div>
      <style jsx>{`
        .field{
          max-width: 27rem;
          float: left;
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
  )
}

export default ProfileField
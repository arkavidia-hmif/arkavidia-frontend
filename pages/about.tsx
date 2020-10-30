import ColorfulHeader from '../components/ColorfulHeader'
import Layout from '../components/Layout'
import { Theme } from '../styles/theme'

const AboutPage: React.FC = () => {

  return (
    <Layout title="About Arkavidia 7.0">
      <br />
      <div className="container-fluid">
        <div className="container">
          <br />
          <div className="row">
            <div className="col-12 col-md-6 offset-md-3">
              <img src="/img/about/hero.png" />
              <br />
              <img src="/img/about/photo-1-mobile.png" className="d-block d-md-none mt-3 mt-md-0" />
              <br />
              <ColorfulHeader color={Theme.headerColors.plpi} size="3rem" headingLevel={1}>Arkavidia 7.0</ColorfulHeader>
              <p className="p-1 p-md-0">Arkavidia 7.0 adalah acara prestisius tahunan yang diselenggarakan oleh Himpunan Mahasiswa Informatika Institut Teknologi Bandung (HMIF ITB). Bertemakan &quot;Establishing Digital Independence,&quot; Arkavidia hadir untuk memberikan kesadaran bagi setiap individu akan hak dan kewajibannya di dunia digital, sehingga mereka dapat mewujudkan kemerdekaan digital bagi dirinya. Dengan pengalaman lebih dari 6 tahun dan 2000 peserta, Arkavidia berkembang lebih jauh lagi untuk memajukan pemahaman teknologi Indonesia.</p>
            </div>
          </div>
          <br />
          <div className="row d-block d-md-none">
            <div className="col-12">
              <img src="/img/about/photo-2-mobile.png" />
            </div>
          </div>
          <br />
          <div id="vision-section" className="row">
            <div className="col-12 col-md-8 offset-md-2">
              <h2 className="blue-text">Vision Statement</h2>
              <ColorfulHeader headingLevel={6} size="4em" color="linear-gradient(180deg, #4583BC, #8382C6)">Establishing Digital</ColorfulHeader>
              <ColorfulHeader headingLevel={6} size="4em" color="linear-gradient(180deg, #9D82CB, #DE81D6)">Independence</ColorfulHeader>
            </div>
          </div>
          <br />
          <div className="row mt-5">
            <div className="col-12">
              <h2 className="blue-text">Missions</h2>
            </div>
          </div>
          <br />
          <div className="row mb-5 mt-3">
            <div className="col-md-4 mb-5 mb-md-0">
              <ColorfulHeader headingLevel={6} size="6rem">1</ColorfulHeader>
              <p>Mengadakan kegiatan untuk mengedukasi masyarakat umum mengenai isu di bidang IT</p>
            </div>
            <div className="col-md-4 mb-5 mb-md-0">
              <ColorfulHeader headingLevel={6} size="6rem">2</ColorfulHeader>
              <p>Menyediakan wadah kolaborasi dengan instansi dan komunitas terkait isu di bidang IT</p>
            </div>
            <div className="col-md-4 mb-5 mb-md-0">
              <ColorfulHeader headingLevel={6} size="6rem">3</ColorfulHeader>
              <p>Mengadakan kompetisi sebagai sarana pengembagan ilmu pengetahuan di bidang IT</p>
            </div>
          </div>
          <br />
          <br />
          <br />
        </div >
      </div>
      <style jsx>{`
        p {
          font-size: 1.1rem;
        }

        img {
          width: 100%;
        }

        .container {
          text-align: center;
        }

        .container-fluid {
          background: url('/img/about/bg-right.png') right bottom no-repeat, url('/img/about/bg-left.png') left top no-repeat;
        }

        #vision-section {
          font-size: 24px;
          margin: 5rem 0;
        }

        .blue-text {
          color: #22A8C4;
          font-size: 2.5rem;
          margin-bottom: 0;
        }
        
        @media (max-width: 768px) {
          .blue-text {
            font-size: 1.5rem;
          }

          #vision-section {
            font-size: 16px;
          }

          .container-fluid {
            background: url('/img/about/bg-right-mobile.png') right 250px no-repeat, url('/img/about/bg-left-mobile.png') left 300px no-repeat;
          }

          p {
            font-size: 1rem;
          }
        }
      `}</style>
    </Layout >);
}

export default AboutPage

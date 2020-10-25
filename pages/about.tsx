import Link from 'next/link'
import ColorfulHeader from '../components/ColorfulHeader'
import Layout from '../components/Layout'
import { Theme } from '../styles/theme'

const AboutPage: React.FC = () => {

  return (
    <Layout title="About Arkavidia 7.0">
      <br />
      <div className="container">
        <br />
        <div className="row">
          <div className="col-12 col-md-6 offset-md-3">
            <img src="/img/about/hero.png" />
            <br />
            <br />
            <ColorfulHeader color={Theme.headerColors.plpi} size={3} headingLevel={1}>Arkavidia 7.0</ColorfulHeader>
            <p>Arkavidia 7.0 adalah acara prestisius tahunan yang diselenggarakan oleh Himpunan Mahasiswa Informatika Institut Teknologi Bandung (HMIF ITB). Bertemakan "Establishing Digital Independence," Arkavidia hadir untuk memberikan kesadaran bagi setiap individu akan hak dan kewajibannya di dunia digital, sehingga mereka dapat mewujudkan kemerdekaan digital bagi dirinya. Dengan pengalaman lebih dari 6 tahun dan 2000 peserta, Arkavidia berkembang lebih jauh lagi untuk memajukan pemahaman teknologi Indonesia.</p>
          </div>
        </div>
        <br />
        <br />
        <div id="vision-section" className="row mt-5">
          <div className="col-12 col-md-8 offset-md-2">
            <h2 className="blue-text">Vision Statement</h2>
            <ColorfulHeader headingLevel={6} size="4em" color="linear-gradient(180deg, #4583BC, #8382C6)">Establishing Digital</ColorfulHeader>
            <ColorfulHeader headingLevel={6} size="4em" color="linear-gradient(180deg, #9D82CB, #DE81D6)">Independence</ColorfulHeader>
          </div>
        </div>
        <br />
        <div className="row mt-5">
          <div className="col-12">
            <h2 className="blue-text">Misions</h2>
          </div>
        </div>
        <br />
        <div className="row mb-5">
          <div className="col-md-4">
            <ColorfulHeader headingLevel={6} size="6rem">1</ColorfulHeader>
            <p>Mengadakan kegiatan untuk mengedukasi masyarakat umum mengenai isu di bidang IT</p>
          </div>
          <div className="col-md-4">
            <ColorfulHeader headingLevel={6} size="6rem">2</ColorfulHeader>
            <p>Menyediakan wadah kolaborasi dengan instansi dan komunitas terkait isu di bidang IT</p>
          </div>
          <div className="col-md-4">
            <ColorfulHeader headingLevel={6} size="6rem">3</ColorfulHeader>
            <p>Mengadakan kompetisi sebagai sarana pengembagan ilmu pengetahuan di bidang IT</p>
          </div>
        </div>
      </div >
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

        #vision-section {
          font-size: 24px;
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
        }
      `}</style>
    </Layout >);
}

export default AboutPage

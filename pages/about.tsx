import Link from 'next/link'
import ColorfulHeader from '../components/ColorfulHeader'
import Layout from '../components/Layout'

const AboutPage: React.FC = () => (
  <Layout title="About Arkavidia 7.0">
    <div className="container">
      <br />
      <div className="row">
        <div className="col-6">
          <img src="/img/about/hero.png" />
          <ColorfulHeader>asda</ColorfulHeader>
          <p>Arkavidia 7.0 adalah acara prestisius tahunan yang diselenggarakan oleh Himpunan Mahasiswa Informatika Institut Teknologi Bandung (HMIF ITB). Bertemakan "Establishing Digital Independence," Arkavidia hadir untuk memberikan kesadaran bagi setiap individu akan hak dan kewajibannya di dunia digital, sehingga mereka dapat mewujudkan kemerdekaan digital bagi dirinya. Dengan pengalaman lebih dari 6 tahun dan 2000 peserta, Arkavidia berkembang lebih jauh lagi untuk memajukan pemahaman teknologi Indonesia.</p>
        </div>
      </div>
      <div className="row">
        <div className="col-8">
          <p id="vision-statement">Vision Statement</p>
          <ColorfulHeader>Establishing Digital Independence</ColorfulHeader>
        </div>
      </div>
      <div className="row">
        <div className="col-12">

        </div>
      </div>
    </div>
  </Layout >
)

export default AboutPage

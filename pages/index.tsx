import { useRouter } from 'next/dist/client/router';
import Layout from '../components/Layout';
import Hero from '../components/page/home/Hero';
import Carousel from '../components/page/home/carousel/Carousel';
import CarouselItem from '../components/page/home/carousel/CarouselItem';
import { Theme } from '../styles/theme';
import ColorfulHeader from '../components/ColorfulHeader';
import FilledButton from '../components/FilledButton';

const IndexPage: React.FC = () => {
  const router = useRouter();

  return (
    <Layout title="Home">
      <div className="container">
        <br />
        <Hero />
        <div id="about" className="row mt-5">
          <div id="about-img" className="col-lg-6 mb-3 mb-lg-0">
            <div id="about-heading" className="d-block d-lg-none mb-3">
              <ColorfulHeader headingLevel={1} color={Theme.headerColors.plpi} size="1em">Tentang Arkavidia 7.0</ColorfulHeader>
            </div>
            <img src="/img/about/hero.png" />
          </div>
          <div className="col-lg-6">
            <div id="about-heading" className="d-none d-lg-block">
              <ColorfulHeader headingLevel={1} color={Theme.headerColors.plpi} size="1em">Tentang Arkavidia 7.0</ColorfulHeader>
            </div>
            <p className="mt-3">Arkavidia 7.0 adalah acara prestisius tahunan yang diselenggarakan oleh Himpunan Mahasiswa Informatika Institut Teknologi Bandung (HMIF ITB). Bertemakan &quot;Establishing Digital Independence,&quot; Arkavidia hadir untuk memberikan kesadaran bagi setiap individu akan hak dan kewajibannya di dunia digital, sehingga mereka dapat mewujudkan kemerdekaan digital bagi dirinya. Dengan pengalaman lebih dari 6 tahun dan 2000 peserta, Arkavidia berkembang lebih jauh lagi untuk memajukan pemahaman teknologi Indonesia. </p>
            <FilledButton text="Baca lebih lanjut" onClick={() => { router.push("/about"); }} />
          </div>
        </div>
        <div className="row mt-5">
          <div id="kompetisi" className="col-lg-6 order-lg-0 order-1">
            <h2>KOMPETISI</h2>
            <p className="mt-3">Asah logika, pengetahuan, dan talentamu lalu tunjukkan kemampuanmu di Arkavidia tahun ini. Arkavidia memiliki berbagai macam kompetisi bergengsi yang dapat membantu mengasah dan mempertajam kemampuanmu dengan bersaing menghadapi lawan dari seluruh Indonesia.</p>
          </div>
          <div className="col-lg-6 order-lg-1 order-0">
            <Carousel alignment="right">
              <CarouselItem url="/competition/arkalogica" desc={"ARKALOGICA"} backgroundImage={"/img/carousel/bg-arkalogica.png"} foregroundImage={"/img/carousel/arkalogica.png"} width={"150px"} type="competition" />
              <CarouselItem url="/competition/capture-the-flag" desc={"CAPTURE THE FLAG"} backgroundImage={"/img/carousel/bg-ctf.png"} foregroundImage={"/img/carousel/ctf.png"} width={"150px"} type="competition" />
              <CarouselItem url="/competition/competitive-programming" desc={"COMPETITIVE PROGRAMMING"} backgroundImage={"/img/carousel/bg-cp.png"} foregroundImage={"/img/carousel/cp.png"} width={"160px"} type="competition" />
              <CarouselItem url="/competition/datavidia" desc={"DATAVIDIA"} backgroundImage={"/img/carousel/bg-datavidia.png"} foregroundImage={"/img/carousel/datavidia.png"} width={"130px"} type="competition" />
              <CarouselItem url="/competition/gamedev" desc={"GAMEDEV"} backgroundImage={"/img/carousel/bg-gamedev.png"} foregroundImage={"/img/carousel/gamedev.png"} width={"150px"} type="competition" />
            </Carousel>
          </div>
        </div>
        <div className="row mt-5 mb-5">
          <div className="col-lg-6">
            <Carousel alignment="left" >
              <CarouselItem url="/event/it-festival" desc={"IT FEST"} backgroundImage={"/img/carousel/bg-itfest.png"} foregroundImage={"/img/carousel/itfest.png"} width={"170px"} type="event" />
              <CarouselItem url="/event/arkavidia-talks" desc={"ARKAVIDIA TALKS"} backgroundImage={"/img/carousel/bg-arkavtalks.png"} foregroundImage={"/img/carousel/arkavtalks.png"} width={"85px"} type="event" />
              <CarouselItem url="/preevent/arkavidia-goes-to-school" desc={"ARKAVIDIA GOES TO SCHOOL"} backgroundImage={"/img/carousel/bg-school.png"} foregroundImage={"/img/carousel/school.png"} width={"200px"} type="event" />
              <CarouselItem url="/preevent/technocamp" desc={"TECHNOCAMP"} backgroundImage={"/img/carousel/bg-tech.png"} foregroundImage={"/img/carousel/tech.png"} width={"200px"} type="event" />
            </Carousel>
          </div>
          <div id="mata-acara" className="col-lg-6">
            <h2>MATA ACARA</h2>
            <p className="mt-3">Asah logika, pengetahuan, dan talentamu lalu tunjukkan kemampuanmu di Arkavidia tahun ini. Arkavidia memiliki berbagai macam kompetisi bergengsi yang dapat membantu mengasah dan mempertajam kemampuanmu dengan bersaing menghadapi lawan dari seluruh Indonesia.</p>
          </div>
        </div>
      </div>
      <style jsx>{`
        h2 {
          font-size: 3rem;
          margin: 3rem 0 0 0;
        }

        #kompetisi {
          text-align: right;
        }

        #kompetisi h2 {
          color: #623FA2;
        }

        #mata-acara h2 {
          color: ${Theme.colors.pink.dark}
        }

        #about img {
          width: 80%;
        }

        #about-img {
          text-align: center;
        }

        #about-heading {
          font-size: 1.5rem;
        }

        @media (max-width: 992px) {
          #about{
            text-align: center;
          }

          h2 {
            margin: 1rem 0 0 0;
            font-size: 2rem;
          }
        }

        @media (max-width: 768px) {
          #about-heading {
            font-size: 1rem;
          }
        }
      `}</style>
    </Layout>
  );
};

export default IndexPage;

import { ReactNode } from 'react'
import Head from 'next/head'
import Footer from './Footer'
import Navbar from './Navbar/Navbar'
import { Theme } from '../styles/theme'

// import arkalogica from '../public/img/carousel/arkalogica.png'
// import bgArkalogica from '../public/img/carousel/bg-arkalogica.png'

// const arLeft = require("../public/img/carousel/ar-left.png");
// const arRight = require("../public/img/carousel/ar-right.png");

// const arkalogica = require("../public/img/carousel/arkalogica.png");
// const bgArkalogica = require("../public/img/carousel/bg-arkalogica.png");

// const ctf = require('./asset/ctf.png');
// const cp = require('./asset/cp.png');
// const datavidia = require('./asset/datavidia.png');
// const gamedev = require('./asset/gamedev.png');

// const bgCp = require('./asset/bg-cp.png');
// const bgArkalogica = require('./asset/bg-arkalogica.png');
// const bgCtf = require('./asset/bg-ctf.png');
// const bgDatavidia = require('./asset/bg-datavidia.png');
// const bgGameDev = require('./asset/bg-gamedev.png');

// const itfest = require('./asset/itfest.png');
// const arkavtalks = require('./asset/arkavtalks.png');
// const school = require('./asset/school.png');
// const tech = require('./asset/tech.png');

// const bgItfest = require('./asset/bg-itfest.png');
// const bgTalks = require('./asset/bg-arkavtalks.png');
// const bgSchool = require('./asset/bg-school.png');
// const bgTech = require('./asset/bg-tech.png');

type Props = {
  children?: ReactNode
  title?: string,
  background?: string
}

// let kompetisi: any = [
//   <ItemCarousel styles={bgArkalogica} src={arkalogica} desc={"ARKALOGICA"} width={"150px"} position={0}/>,
//   <ItemCarousel styles={bgCp} src={ctf} desc={"CAPTURE THE FLAG"} width={"150px"} position={0}/>,
//   <ItemCarousel styles={bgCtf} src={cp} desc={"COMPETITIVE PROGRAMMING"} width={"160px"} position={0}/>,
//   <ItemCarousel styles={bgDatavidia} src={datavidia} desc={"DATAVIDIA"} width={"130px"} position={0}/>,
//   <ItemCarousel styles={bgGameDev} src={gamedev} desc={"GAME DEV"} width={"150px"} position={0}/>
// ];

// let mataAcara: any = [
//   <ItemCarousel styles={bgItfest} src={itfest} desc={"IT FEST"} width={"170px"} position={1}/>,
//   <ItemCarousel styles={bgTalks} src={arkavtalks} desc={"ARKAVIDIA TALKS"} width={"85px"} position={1}/>,
//   <ItemCarousel styles={bgSchool} src={school} desc={"ARKAVIDIA GOES TO SCHOOL"} width={"200px"} position={1}/>,
//   <ItemCarousel styles={bgTech} src={tech} desc={"TECHNOCAMP"} width={"200px"} position={1}/>,
// ];

const Layout: React.FC<Props> = ({ children, title = 'Arkavidia 7.0', background = Theme.bgColors.whblpi }) => (
  <div>
    {/* <Carousel itemArr={kompetisi} position={0}/>
    <Carousel itemArr={mataAcara} position={1}/>  */}
    <Head>
      <title>{title}</title>
    </Head>
    <Navbar />
    <div id="main-container">
      {children}
    </div>
    <Footer />
    <style jsx>{`
      #main-container {
        overflow: auto;
        background: ${background};
      }
    `}
    </style>
  </div>
)

export default Layout
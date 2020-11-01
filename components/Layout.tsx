import { ReactNode } from 'react';
import Head from 'next/head';
import { Theme } from '../styles/theme';
import Footer from './Footer';
import Navbar from './navbar/Navbar';

type Props = {
  children?: ReactNode
  title?: string,
  background?: string
}

const Layout: React.FC<Props> = ({ children, title = 'Arkavidia 7.0', background = Theme.bgColors.whblpi }) => (
  <div>
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
);

export default Layout;
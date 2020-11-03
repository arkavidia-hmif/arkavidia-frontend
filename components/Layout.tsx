import { ReactNode } from "react";
import Head from "next/head";
import { Theme } from "../styles/theme";
import Footer from "./Footer";
import Navbar from "./navbar/Navbar";

type Props = {
  children?: ReactNode;
  title?: string;
  background?: string;
};

const Layout: React.FC<Props> = ({
  children,
  title = "Arkavidia 7.0",
  background = Theme.bgColors.whblpi,
}) => {
  return (
    <div id="parent-container">
      <Head>
        <title>{title} | Arkavidia 7.0</title>
      </Head>
      <Navbar />
      <div id="main-container">{children}</div>
      <Footer />
      <style jsx>{`
          #parent-container {
            display: flex;
            flex-direction: column;
            height: 100vh;
          }
          #main-container {
            background: ${background};
            flex: 1;
          }
        `}</style>
    </div>
  );
};

export default Layout;

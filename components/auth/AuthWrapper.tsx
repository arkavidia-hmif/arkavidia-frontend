import { ReactNode } from "react"
import { Theme } from "../../styles/theme";
import ColorfulHeader from "../ColorfulHeader";
import Layout from "../Layout";
import GradientSeparator from "./GradientSeparator";

type Props = {
  children: ReactNode | ReactNode[],
  title: string
}

const AuthWrapper: React.FC<Props> = ({ children, title }) => {
  return (
    <Layout background={Theme.bgColors.whpipl} title={title}>
      <div className="container mx-auto row mb-3">
        <div className="col-lg-6 px-4 px-md-5 mt-5">
          <ColorfulHeader color={Theme.headerColors.plpi} headingLevel={1} size="3rem">{title}</ColorfulHeader>
          <GradientSeparator />
          <br />
          {children}
        </div>
        <div className="col-lg-6">
          <img src="/img/bg-white.png" />
        </div>
        <style jsx>{`
        img {
          width: 100%;
        }
      `}</style>
      </div>
    </Layout>

  );
};

export default AuthWrapper;
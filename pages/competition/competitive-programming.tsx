import * as React from "react";
import Layout from "../../components/Layout";
import Category from "../../components/competition/CompetitionCategory";
import Buttons from "../../components/competition/CompetitionButton";
import Timeline from "../../components/competition/timeline/GeneralTimeline";
import CompetitionHeader from "../../components/CompetitionHeader";
import competitionItems from "../../utils/constants/competition-items";
import { Theme } from "../../styles/theme";
import TripleRibbon from "../../components/competition/ribbons/RibbonJuara";

const CPPage: React.FC = () => (
  <Layout background={Theme.bgColors.whblplc}>
    <div className="container pb-4">
      <CompetitionHeader {...competitionItems.cp}>
        <Category category="Mahasiswa & SMA/Sederajat" fee="Rp. 60.000,-" />
        <Buttons guidebookLink="https://drive.google.com/file/d/18w708UT1ySl9opJM0vaXpfAFgCTBKkil/view?usp=sharing" registerLink="/dashboard/competition/cp" />
      </CompetitionHeader>
      <div className="container">
        <TripleRibbon
          caption={["Rp 3.000.000", "Rp 5.000.000", "Rp 2.000.000"]}
        />
      </div>
      <Timeline />
    </div>
  </Layout>
);

export default CPPage;

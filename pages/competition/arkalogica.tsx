import * as React from "react";
import Layout from "../../components/Layout";
import Category from "../../components/competition/CompetitionCategory";
import Buttons from "../../components/competition/CompetitionButton";
import Ribbons from "../../components/competition/ribbons/RibbonsArka";
import Timeline from "../../components/competition/timeline/GeneralTimeline";
import CompetitionHeader from "../../components/CompetitionHeader";
import competitionItems from "../../utils/constants/competition-items";
import { Theme } from "../../styles/theme";

const ArkaPage: React.FC = () => (
  <Layout title={competitionItems.arkalogica.title} background={Theme.bgColors.whblplc}>
    <div className="container pb-4">
      <CompetitionHeader {...competitionItems.arkalogica}>
        <Category category="SMA/Sederajat" fee="Rp. 40.000,-" />
        <Buttons
          guidebookLink="https://drive.google.com/file/d/1VzpmeR1wk3MUUI7WSJFwa10PuP94YMoX/view?usp=sharing"
          registerLink="/dashboard/competition/arkalogica"
        />
      </CompetitionHeader>
      <Ribbons />
      <Timeline />
    </div>
  </Layout>
);

export default ArkaPage;

import * as React from "react";
import Layout from "../../components/Layout";
import Category from "../../components/competition/CompetitionCategory";
import Buttons from "../../components/competition/CompetitionButton";
import Timeline from "../../components/competition/timeline/GeneralTimeline";
import CompetitionHeader from "../../components/CompetitionHeader";
import competitionItems from "../../utils/constants/competition-items";
import { Theme } from "styles/theme";
import WinnerRibbon from "components/competition/ribbons/WinnerRibbon";

const CPPage: React.FC = () => (
  <Layout title={competitionItems.cp.title} background={Theme.bgColors.whblplc}>
    <div className="container pb-4">
      <CompetitionHeader {...competitionItems.cp}>
        <Category category="Mahasiswa" fee="Rp. 60.000,-" />
        <Buttons
          guidebookLink="https://link.arkavidia.id/guidebook_cp"
          registerLink="/dashboard/competitions/cp"
        />
      </CompetitionHeader>
      <div className="container">
        <WinnerRibbon
          caption={["Rp 3.000.000", "Rp 5.000.000", "Rp 2.000.000"]}
        />
      </div>
      <Timeline />
    </div>
  </Layout>
);

export default CPPage;

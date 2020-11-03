import * as React from "react";
import Layout from "../../components/Layout";
import Category from "../../components/competition/CompetitionCategory";
import Buttons from "../../components/competition/CompetitionButton";
import Timeline from "../../components/competition/timeline/GameJamTimeline";
import CompetitionHeader from "../../components/CompetitionHeader";
import competitionItems from "../../utils/constants/competition-items";
import { Theme } from "../../styles/theme";
import Ribbons from "../../components/competition/ribbons/RibbonsGameJam";
import FAQ_GameJam from "../../components/competition/faq/GameJamFAQ";

const GamedevPage: React.FC = () => (
  <Layout background={Theme.bgColors.whblplc}>
    <div className="container pb-4">
      <CompetitionHeader {...competitionItems.gamedev}>
        <Category category="Mahasiswa & SMA/Sederajat" fee="Free" />
        <Buttons
          guidebookLink="https://drive.google.com/file/d/16shlnXg-xVnen3VS1wtPRpq5HAHfu4wL/view?usp=sharing"
          registerLink="/dashboard/competition/gamedev"
        />
      </CompetitionHeader>
      <Ribbons />
      <Timeline />
      <FAQ_GameJam />
    </div>
  </Layout>
);

export default GamedevPage;

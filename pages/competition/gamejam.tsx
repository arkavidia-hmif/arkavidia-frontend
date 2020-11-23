import * as React from "react";
import Layout from "components/Layout";
import Buttons from "components/competition/CompetitionButton";
import CompetitionHeader from "components/CompetitionHeader";
import competitionItems from "utils/constants/competition-items";
import { Theme } from "styles/theme";
import GameJamRibbon from "components/competition/ribbons/GameJamRibbon";
import EventCategory from "components/EventCategory";
import GameJamTimeline from "components/competition/timeline/GameJamTimeline";

const GamedevPage: React.FC = () => (
  <Layout title={competitionItems.gamedev.title} background={Theme.bgColors.whblplc}>
    <div className="container pb-4">
      <CompetitionHeader {...competitionItems.gamedev}>
        <EventCategory category="Mahasiswa &amp; SMA/Sederajat" fee="Free" />
        <Buttons
          guidebookLink="https://link.arkavidia.id/guidebook_gamejam"
          registerLink="/dashboard/competitions/gamedev"
        />
      </CompetitionHeader>
      <GameJamRibbon />
      <GameJamTimeline />
    </div>
  </Layout>
);

export default GamedevPage;

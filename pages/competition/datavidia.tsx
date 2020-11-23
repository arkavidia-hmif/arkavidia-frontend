import * as React from "react";
import Layout from "../../components/Layout";
import Buttons from "../../components/competition/CompetitionButton";
import Timeline from "../../components/competition/timeline/DatavidiaTimeline";
import CompetitionHeader from "../../components/CompetitionHeader";
import competitionItems from "../../utils/constants/competition-items";
import { Theme } from "styles/theme";
import WinnerRibbon from "components/competition/ribbons/WinnerRibbon";
import EventCategory from "components/EventCategory";

const DatavidiaPage: React.FC = () => (
  <Layout title={competitionItems.datavidia.title} background={Theme.bgColors.whblplc}>
    <div className="container pb-4">
      <CompetitionHeader {...competitionItems.datavidia}>
        <EventCategory category="Mahasiswa &amp; SMA/Sederajat" fee="Rp. 60.000,-" />
        <Buttons
          guidebookLink="https://link.arkavidia.id/guidebook_datavidia"
          registerLink="/dashboard/competitions/gamedev"
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

export default DatavidiaPage;

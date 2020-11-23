import * as React from "react";
import Layout from "components/Layout";
import Buttons from "components/competition/CompetitionButton";
import CompetitionHeader from "components/CompetitionHeader";
import competitionItems from "utils/constants/competition-items";
import { Theme } from "styles/theme";
import GeneralTimeline from "components/competition/timeline/GeneralTimeline";
import WinnerRibbon from "components/competition/ribbons/WinnerRibbon";
import EventCategory from "components/EventCategory";

const CTFPage: React.FC = () => (
  <Layout title={competitionItems.ctf.title} background={Theme.bgColors.whblplc}>
    <div className="container pb-4">
      <CompetitionHeader {...competitionItems.ctf}>
        <EventCategory category="Mahasiswa &amp; SMA/Sederajat" fee="Rp. 60.000,-" />
        <Buttons guidebookLink="https://link.arkavidia.id/guidebook_ctf" registerLink="/dashboard/competitions/ctf" />
      </CompetitionHeader>
      <div className="container">
        <WinnerRibbon
          caption={["Rp 3.000.000", "Rp 5.000.000", "Rp 2.000.000"]}
        />
      </div>
      <GeneralTimeline />
    </div>
  </Layout>
);

export default CTFPage;

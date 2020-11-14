import * as React from "react";
import Category from "components/competition/CompetitionCategory";
import Layout from "components/Layout";
import competitionItems from "utils/constants/competition-items";
import { Theme } from "styles/theme";
import CompetitionHeader from "components/CompetitionHeader";
import Buttons from "components/page/preevent/technocamp/Buttons";
import ArkaRibbon from "components/competition/ribbons/ArkaRibbon";
import GeneralTimeline from "components/competition/timeline/GeneralTimeline";

const ArkaPage: React.FC = () => (
  <Layout title={competitionItems.arkalogica.title} background={Theme.bgColors.whblplc}>
    <div className="container pb-4">
      <CompetitionHeader {...competitionItems.arkalogica}>
        <Category category="SMA/Sederajat" fee="Rp. 40.000,-" />
        <Buttons
          guidebookLink="https://link.arkavidia.id/guidebook_arkalogica"
          registerLink="/dashboard/competitions/arkalogica"
        />
      </CompetitionHeader>
      <ArkaRibbon />
      <GeneralTimeline />
    </div>
  </Layout>
);

export default ArkaPage;

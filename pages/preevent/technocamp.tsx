import Layout from "../../components/Layout";
import BackgroundProps from "../../utils/constants/events-background";
import EventItems from "../../utils/constants/event-items";
import EventHeader from "../../components/EventHeader";
import TechDesc from "../../components/page/preevent/technocamp/TechDesc";
import TechBenefits from "../../components/page/preevent/technocamp/TechBenefits";
import TechTimeline from "../../components/page/preevent/technocamp/TechTimeline";
import Buttons from "components/page/preevent/technocamp/Buttons";
import EventCategory from "components/EventCategory";

const Technocamp: React.FC = () => (
  <Layout {...BackgroundProps.technocamp}>
    <div className="container pb-4">
      <EventHeader {...EventItems.technocamp}>
        <EventCategory category="SMA/Sederajat" fee="Rp50.000,-" feeType="Biaya Komitmen" color="blue" />
        <Buttons
          guidebookLink="https://link.arkavidia.id/guidebook_technocamp"
          registerLink="/dashboard/pre-events"
        />
      </EventHeader>
      <TechDesc />
      <TechBenefits />
      <TechTimeline />
    </div>
  </Layout>
);

export default Technocamp;

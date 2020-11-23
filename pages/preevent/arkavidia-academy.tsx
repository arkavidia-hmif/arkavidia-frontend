import Layout from "components/Layout";
import BackgroundProps from "utils/constants/events-background";
import EventItems from "utils/constants/event-items";
import Dates from "utils/constants/dates";
import DateColor from "utils/constants/date-color";
import DateContainer from "components/DateContainer";
import EventHeader from "components/EventHeader";
import FAQSection from "components/competition/faq/FAQSection";
import { AcademyFAQ } from "utils/constants/faq";
import EventCategory from "components/EventCategory";

const Academy: React.FC = () => (
  <Layout {...BackgroundProps.academy}>
    <div className="container pb-4">
      <EventHeader {...EventItems.academy}>
        <EventCategory category="Mahasiswa" fee="TBD" />
        <DateContainer dates={Dates.academy} color={DateColor.preevent} />
      </EventHeader>
      <FAQSection entries={AcademyFAQ} />
    </div>
  </Layout>
);

export default Academy;

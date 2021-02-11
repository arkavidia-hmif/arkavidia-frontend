import Layout from "components/Layout";
import BackgroundProps from "utils/constants/events-background";
import EventItems from "utils/constants/event-items";
import Dates from "utils/constants/dates";
import DateColor from "utils/constants/date-color";
import DateContainer from "components/DateContainer";
import FAQSection from "components/competition/faq/FAQSection";
import EventCategory from "components/EventCategory";
import { AcademyFAQItems } from "utils/constants/faq-items";
import AcademyBoxContainer from "components/page/preevent/academy/AcademyBoxContainer";
import EventHeader from "components/EventHeader";

const Academy: React.FC = () => (
  <Layout {...BackgroundProps.academy}>
    <div className="container pb-4 pt-4">
      <EventHeader {...EventItems.academy} reverse={true}>
        <EventCategory category="Mahasiswa" fee="Gratis" color="blue" />
        <DateContainer dates={Dates.academy} color={DateColor.preevent} />
      </EventHeader>
      <AcademyBoxContainer />
      <FAQSection entries={AcademyFAQItems} />
    </div>
  </Layout>
);

export default Academy;

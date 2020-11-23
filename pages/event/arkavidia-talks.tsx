import Layout from "../../components/Layout";
import BackgroundProps from "../../utils/constants/events-background";
import EventItems from "../../utils/constants/event-items";
import EventHeader from "../../components/EventHeader";
import TalksGallery from "../../components/page/event/talks/TalksGallery";
import FAQSection from "components/competition/faq/FAQSection";
import { TalksFAQItems } from "utils/constants/faq-items";
import TalksCalendar from "components/page/event/talks/TalksCalendar";

const Talks: React.FC = () => (
  <Layout {...BackgroundProps.talks}>
    <div className="container mb-3">
      <EventHeader {...EventItems.talks} >
        <TalksCalendar />
      </EventHeader>
      <TalksGallery />
      <FAQSection entries={TalksFAQItems} />
      <br />
    </div>
  </Layout>
);

export default Talks;

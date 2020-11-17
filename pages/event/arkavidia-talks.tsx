import Layout from "../../components/Layout";
import BackgroundProps from "../../utils/constants/events-background";
import EventItems from "../../utils/constants/event-items";
import EventHeader from "../../components/EventHeader";
import TalksGallery from "../../components/page/event/talks/TalksGallery";
import Dates from "../../utils/constants/dates";
import DateColor from "../../utils/constants/date-color";
import DateContainer from "../../components/DateContainer";
import ArkavTalksFAQ from "../../components/page/event/talks/ArkavTalksFAQ";

const Talks: React.FC = () => (
  <Layout {...BackgroundProps.talks}>
    <div className="container">
      <EventHeader {...EventItems.talks} >
        <DateContainer datesDetail={Dates.arkavtalks} color={DateColor.event} colorAbout={DateColor.eventAbout}/>
      </EventHeader>
      <ArkavTalksFAQ />
      <TalksGallery />
    </div>
  </Layout>
);

export default Talks;

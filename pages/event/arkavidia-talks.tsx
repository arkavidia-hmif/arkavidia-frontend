import Layout from "../../components/Layout";
import BackgroundProps from "../../utils/constants/events-background";
import EventItems from "../../utils/constants/event-items";
import EventHeader from "../../components/EventHeader";
import TalksGallery from "../../components/page/event/talks/TalksGallery";
import Dates from "../../utils/constants/dates";
import DateColor from "../../utils/constants/date-color";
import DateContainer from "../../components/DateContainer";

const Talks: React.FC = () => (
  <Layout {...BackgroundProps.talks}>
    <div className="container">
      <EventHeader {...EventItems.talks} >
        <DateContainer datesDetail={Dates.arkavtalks} color={DateColor.event} colorAbout={DateColor.eventAbout}/>
      </EventHeader>
      <TalksGallery />
    </div>
  </Layout>
);

export default Talks;

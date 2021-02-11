import Layout from "../../components/Layout";
import BackgroundProps from "../../utils/constants/events-background";
import EventItems from "../../utils/constants/event-items";
import Dates from "../../utils/constants/dates";
import DateColor from "../../utils/constants/date-color";
import DateContainer from "../../components/DateContainer";
import AGTSGallery from "../../components/page/preevent/agts/AGTSGallery";
import EventHeader from "components/EventHeader";


const Agts: React.FC = () => (
  <Layout {...BackgroundProps.agts}>
    <div className="container pb-4">
      <EventHeader {...EventItems.agts} reverse={true}>
        <DateContainer dates={Dates.agts} color={DateColor.preevent} />
      </EventHeader>
      <AGTSGallery />
    </div>
  </Layout>
);

export default Agts;

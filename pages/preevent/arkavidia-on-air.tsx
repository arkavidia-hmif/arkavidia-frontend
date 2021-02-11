import Layout from "components/Layout";
import EventHeader from "components/EventHeader";
import BackgroundProps from "utils/constants/events-background";
import EventItems from "utils/constants/event-items";


const Aoa: React.FC = () => (
  <Layout {...BackgroundProps.aoa}>
    <div className="container pb-4">
      <EventHeader {...EventItems.aoa} reverse={true} />
    </div>
  </Layout>
);

export default Aoa;

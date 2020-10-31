import Layout from '../../components/Layout';
import BackgroundProps  from '../../utils/constants/events-background';
import EventItems from '../../utils/constants/event-items';
import EventHeader from '../../components/EventHeader';
import TalksGallery from '../../components/event/talks/TalksGallery';

const Talks: React.FC = () => (
  <Layout {...BackgroundProps.talks}>
    <div className="container">
      <EventHeader {...EventItems.talks}/>
      <TalksGallery/>
    </div>
  </Layout>
);

export default Talks;
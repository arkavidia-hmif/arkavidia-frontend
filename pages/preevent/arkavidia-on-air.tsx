import Layout from '../../components/Layout';
import BackgroundProps  from '../../utils/constants/events-background';
import EventItems from '../../utils/constants/event-items';
import EventHeader from '../../components/EventHeader';

const Aoa: React.FC = () => (
  <Layout {...BackgroundProps.aoa}>
    <div className="container">
      <EventHeader {...EventItems.aoa}/>
    </div>
  </Layout>
);

export default Aoa;
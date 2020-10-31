import Layout from '../../components/Layout';
import BackgroundProps  from '../../utils/constants/events-background';
import EventItems from '../../utils/constants/event-items';
import Dates from '../../utils/constants/dates';
import DateColor from '../../utils/constants/date-color';
import DateContainer from '../../components/DateContainer';
import EventHeader from '../../components/EventHeader';

const Academy: React.FC = () => (
  <Layout {...BackgroundProps.academy}>
    <div className="container">
      <EventHeader {...EventItems.academy}>
        <DateContainer dates={Dates.academy} color={DateColor.preevent}/>
      </EventHeader>
    </div>
  </Layout>
);

export default Academy;
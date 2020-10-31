import Layout from '../../components/Layout';
import BackgroundProps from '../../utils/constants/events-background';
import EventItems from '../../utils/constants/event-items';
import EventHeader from '../../components/EventHeader';
import Buttons from '../../components/page/preevent/technocamp/Buttons';
import Pricing from '../../components/page/preevent/technocamp/Pricing';
import TechDesc from '../../components/page/preevent/technocamp/TechDesc';
import TechBenefits from '../../components/page/preevent/technocamp/TechBenefits';
import TechTimeline from '../../components/page/preevent/technocamp/TechTimeline';

const Technocamp: React.FC = () => (
  <Layout {...BackgroundProps.technocamp}>
    <div className="container">
      <EventHeader {...EventItems.technocamp}>
        <Pricing />
        <Buttons />
      </EventHeader>
      <TechDesc />
      <TechBenefits />
      <TechTimeline />
    </div>
  </Layout>
);

export default Technocamp;
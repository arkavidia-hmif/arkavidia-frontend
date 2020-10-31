import Layout from '../../components/Layout'
import BackgroundProps  from '../../utils/constants/events-background'
import EventItems from '../../utils/constants/event-items'
import EventHeader from '../../components/EventHeader'
import Buttons from '../../components/pre-event/technocamp/Buttons'
import Pricing from '../../components/pre-event/technocamp/Pricing'
import TechDesc from '../../components/pre-event/technocamp/TechDesc'
import TechBenefits from '../../components/pre-event/technocamp/TechBenefits'
import TechTimeline from '../../components/pre-event/technocamp/TechTimeline'

const Technocamp: React.FC = () => (
  <Layout {...BackgroundProps.technocamp}>
    <div className="container">
      <EventHeader {...EventItems.technocamp}>
        <Pricing/>
        <Buttons/>
      </EventHeader>
      <TechDesc/>
      <TechBenefits/>
      <TechTimeline/>
    </div>
  </Layout>
)

export default Technocamp
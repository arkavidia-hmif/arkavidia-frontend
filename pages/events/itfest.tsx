import EventItems from '../../utils/constants/event-items'
import Layout from '../../components/Layout'
import BackgroundProps  from '../../utils/constants/events-background'
import Dates from '../../utils/constants/dates'
import EventHeader from '../../components/EventHeader'
import DateContainer from '../../components/DateContainer'
import ItFestGallery from '../../components/event/itfest/ItFestGallery'

const ItFest: React.FC = () => (
  <Layout {...BackgroundProps.itfest}>
    <div className="container">
      <EventHeader {...EventItems.itfest}>
        <DateContainer dates={Dates.itfest}/>
      </EventHeader>
      <ItFestGallery/>
    </div>
  </Layout>
)


export default ItFest
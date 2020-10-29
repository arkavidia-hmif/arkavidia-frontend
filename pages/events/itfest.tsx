import EventItems from '../../utils/constants/event-items'
import Layout from '../../components/Layout'
import BackgroundProps  from '../../utils/constants/events-background'
import EventHeader from '../../components/EventHeader'
import ItFestGallery from '../../components/event/itfest/ItFestGallery'

const ItFest: React.FC = () => (
    <Layout {...BackgroundProps.itfest}>
        <div className="container">
            <EventHeader {...EventItems.itfest}/>
            <ItFestGallery/>
        </div>
    </Layout>
)

export default ItFest
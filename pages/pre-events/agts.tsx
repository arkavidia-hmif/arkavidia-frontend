import Layout from '../../components/Layout'
import BackgroundProps  from '../../utils/constants/events-background'
import EventItems from '../../utils/constants/event-items'
import EventHeader from '../../components/EventHeader'
import AGTSGallery from '../../components/pre-event/agts/AGTSGallery'

const Agts: React.FC = () => (
    <Layout {...BackgroundProps.agts}>
        <div className="container">
            <EventHeader {...EventItems.agts}/>
            <AGTSGallery/>
        </div>
    </Layout>
)

export default Agts
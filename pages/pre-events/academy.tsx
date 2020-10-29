import Layout from '../../components/Layout'
import BackgroundProps  from '../../utils/constants/events-background'
import EventItems from '../../utils/constants/event-items'
import EventHeader from '../../components/EventHeader'

const Academy: React.FC = () => (
    <Layout {...BackgroundProps.academy}>
        <div className="container">
            <EventHeader {...EventItems.academy}/>
        </div>
    </Layout>
)

export default Academy
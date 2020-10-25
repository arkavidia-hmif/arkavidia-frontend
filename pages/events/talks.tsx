import Layout from '../../components/Layout'
import BackgroundProps  from '../../utils/constants/events-background'
import TalksContent from '../../components/event/talks/TalksContent'
import TalksGallery from '../../components/event/talks/TalksGallery'

const Talks: React.FC = () => (
    <Layout {...BackgroundProps.talks}>
        <div className="container">
            <TalksContent/>
            <TalksGallery/>
        </div>
    </Layout>
)

export default Talks
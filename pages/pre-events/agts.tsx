import Layout from '../../components/Layout'
import BackgroundProps  from '../../utils/constants/events-background'
import AGTSContent from '../../components/pre-event/agts/AGTSContent'
import AGTSGallery from '../../components/pre-event/agts/AGTSGallery'

const Agts: React.FC = () => (
    <Layout {...BackgroundProps.agts}>
        <div className="container">
            <AGTSContent/>
            <AGTSGallery/>
        </div>
    </Layout>
)

export default Agts
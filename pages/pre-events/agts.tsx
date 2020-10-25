import Layout from '../../components/Layout'
import BackgroundProps  from '../../utils/constants/events-background'
import ItFestContent from '../../components/event/itfest/ItFestContent'
import ItFestGallery from '../../components/event/itfest/ItFestGallery'

const Agts: React.FC = () => (
    <Layout {...BackgroundProps.itfest}>
        <div className="container">
            <ItFestContent/>
            <ItFestGallery/>
        </div>
    </Layout>
)

export default Agts
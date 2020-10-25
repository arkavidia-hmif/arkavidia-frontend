import Layout from '../../components/Layout'
import BackgroundProps  from '../../utils/constants/events-background'
import ItFestContent from '../../components/event/itfest/ItFestContent'
import ItFestGallery from '../../components/event/itfest/ItFestGallery'

const Technocamp: React.FC = () => (
    <Layout {...BackgroundProps.itfest}>
        <div className="container">
            <ItFestContent/>
            <ItFestGallery/>
        </div>
    </Layout>
)

export default Technocamp
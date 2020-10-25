import Layout from '../../components/Layout'
import BackgroundProps  from '../../utils/constants/events-background'
import Content from '../../components/event/itfest/Content'
import Gallery from '../../components/event/itfest/Gallery'

const ItFest: React.FC = () => (
    <Layout {...BackgroundProps.itfest}>
        <div className="container">
            <Content/>
            <Gallery/>
        </div>
    </Layout>
)

export default ItFest
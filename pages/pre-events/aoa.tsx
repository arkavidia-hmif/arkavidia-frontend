import Layout from '../../components/Layout'
import BackgroundProps  from '../../utils/constants/events-background'
import AoaContent from '../../components/pre-event/aoa/AoaContent'

const Aoa: React.FC = () => (
    <Layout {...BackgroundProps.aoa}>
        <div className="container">
            <AoaContent/>
        </div>
    </Layout>
)

export default Aoa
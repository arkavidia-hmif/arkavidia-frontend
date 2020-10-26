import Layout from '../../components/Layout'
import BackgroundProps  from '../../utils/constants/events-background'
import TechContent from '../../components/pre-event/technocamp/TechContent'
import TechDesc from '../../components/pre-event/technocamp/TechDesc'
import TechBenefits from '../../components/pre-event/technocamp/TechBenefits'
import TechTimeline from '../../components/pre-event/technocamp/TechTimeline'

const Technocamp: React.FC = () => (
    <Layout {...BackgroundProps.technocamp}>
        <div className="container">
            <TechContent/>
            <TechDesc/>
            <TechBenefits/>
        </div>
        <TechTimeline/>
    </Layout>
)

export default Technocamp
import Layout from '../../components/Layout'
import BackgroundProps  from '../../utils/constants/events-background'
import AcademyContent from '../../components/pre-event/academy/AcademyContent'

const Academy: React.FC = () => (
    <Layout {...BackgroundProps.academy}>
        <div className="container">
            <AcademyContent/>
        </div>
    </Layout>
)

export default Academy
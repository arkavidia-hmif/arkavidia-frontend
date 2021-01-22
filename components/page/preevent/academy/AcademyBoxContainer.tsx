import AcademyBox from "./AcademyBox";
import { AcademySelection } from "utils/constants/academy-selection";

const AcademyBoxContainer: React.FC = () => {
  return (
    <div className="d-flex flex-column">
      {AcademySelection.map((entry) => {
        return (<AcademyBox key={entry.title} entry={entry} />);
      })}
    </div>
  );
};

export default AcademyBoxContainer;

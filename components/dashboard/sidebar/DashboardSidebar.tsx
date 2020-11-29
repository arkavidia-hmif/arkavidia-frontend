import SidebarSection from "./SidebarSection";
import { Stage } from "interfaces/competition";
import { SidebarGroup } from "interfaces/sidebar";
import { TaskResponse } from "interfaces/task";

interface SubmissionProgressProps {
  title: string;
  subtitle: string;
  status: string;
  registrationStage: Array<Stage>;
  taskResponse: Record<string, TaskResponse>;
  additionalSidebar?: Array<SidebarGroup>;
  selection: number;
  setSelection: (selection: number) => void;
}

const DashboardSidebar: React.FC<SubmissionProgressProps> = ({
  title,
  subtitle,
  status,
  taskResponse,
  registrationStage,
  additionalSidebar = [],
  selection,
  setSelection,
}) => {
  const sidebarData = [...additionalSidebar];

  const getImageSidebar = (response?: TaskResponse): string => {
    if (!response) return "/img/dashboard/submission/empty.svg";

    if (response.status === "completed") return "/img/dashboard/submission/check.svg";
    if (response.status === "awaiting_validation") return "/img/dashboard/submission/waiting.svg";
    if (response.status === "rejected") return "/img/dashboard/submission/cross.svg";

    return "/img/dashboard/submission/cross.svg";
  };

  for (const stage of registrationStage) {
    const item = [];
    for (const task of stage.tasks) {
      item.push({
        text: task.name,
        widget: task.widget,
        image: getImageSidebar(taskResponse[task.id]),
        param:
          typeof task.widgetParameters === "string"
            ? task.widgetParameters
            : task.widgetParameters.description,
      });
    }
    sidebarData.push({
      name: stage.name,
      item,
    });
  }

  return (
    <div className="container mb-3 card">
      <h2>{title}</h2>
      <p className="">{subtitle}</p>
      <p>Status : {status}</p>
      <SidebarSection
        data={sidebarData}
        selection={selection}
        setSelection={setSelection}
      />
      <style jsx>{`
        h2 {
          margin-bottom: 0;
          margin-top: 1rem;
          font-size: 1.5rem;
          line-height: 31px;
        }

        p {
          font-size: 0.8rem;
        }

        .card {
          background: linear-gradient(180deg, #ffffff 0%, #f3a9dd 100%);
          border: 0.1rem solid #05058d;
          box-sizing: border-box;
          border-radius: 10px;
        }
      `}</style>
    </div>
  );
};

export default DashboardSidebar;

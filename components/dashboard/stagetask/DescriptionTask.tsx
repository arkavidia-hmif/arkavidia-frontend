import { useEffect, ReactNode } from "react";
import StageTaskStyle from "./StageTask.module.css";
import { DescriptionTaskParam, TaskWidget } from "interfaces/task";

const DescriptionTask: React.FC<TaskWidget> = ({
  task,
  response,
  submitFunction,
  mutate,
  editable
}) => {
  const parsedParam = (task.widgetParameters as unknown) as DescriptionTaskParam;

  useEffect(() => {
    if (editable && response?.status !== "completed") {
      submitFunction("done");
      mutate();
    }
  }, [editable, response]);

  const getLinkList = (link?: Record<string, string>) => {
    const linkNode: Array<ReactNode> = [];
    for (const key in link) {
      linkNode.push(
        <li key={key}><a href={link[key]} target="_blank" rel="noreferrer">{key}</a></li>
      );
    }

    return linkNode;
  };


  return (
    <>
      <div className={StageTaskStyle.heading}>Informasi - {task?.name}</div>
      <br />
      <br />

      <p style={{ whiteSpace: "pre-line" }}>{parsedParam.description}</p>

      <br />

      <p className={parsedParam.link ? StageTaskStyle.title : "d-none"}>
        Beberapa Tautan Penting
      </p>

      <ul>
        {getLinkList(parsedParam.link)}
      </ul>
    </>
  );
};

export default DescriptionTask;
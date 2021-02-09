import { useEffect, ReactNode } from "react";
import { DescriptionTaskParam, TaskWidget } from "interfaces/task";

const DescriptionTask: React.FC<TaskWidget> = ({
  task,
  response,
  submitFunction
}) => {
  const parsedParam = (task.widgetParameters as unknown) as DescriptionTaskParam;

  useEffect(() => {
    if (response?.status !== "completed") {
      submitFunction("done");
    }
  }, [response]);

  const getLinkList = (link?: Record<string, string>) => {
    const linkNode: Array<ReactNode> = [];
    for (const key in link) {
      linkNode.push(
        <li key={key}><a href={link[key]}>{key}</a></li>
      );
    }

    return linkNode;
  };


  return (
    <>
      <div id="heading">Informasi Pendaftaran - {task?.name}</div>
      <br />
      <br />

      <p style={{ whiteSpace: "pre-line" }}>{parsedParam.description}</p>

      <br />

      <p className={parsedParam.link ? "title" : "d-none"}>Beberapa Tautan Penting</p>
      <ul>
        {getLinkList(parsedParam.link)}
      </ul>

      <style jsx>{`
        #heading {
          font-family: Viga;
          font-size: 1.5rem;
          color: #05058d;
        }

        .title {
          font-weight: bold;
          color: #646464;
          font-size: 1.125rem;
        }

        @media only screen and (max-width: 450px) {
          #heading {
            font-size: 1.25rem;
          }
        }
      `}</style>
    </>
  );
};

export default DescriptionTask;
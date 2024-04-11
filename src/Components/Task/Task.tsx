import { TaskType } from "../../types";
import "./Task.scss";
// import { Link } from "react-router-dom";
// import { useState } from "react";

type TaskProps = {
  allTasks: TaskType[];
};

export default function Task({
  allTasks,
}: TaskProps): JSX.Element | null | string {
  //   const [inhabitants, setInhabitants] = useState<string[]>([]);

  // POST function to add users (inhabitants) to a home

  //add task id and use as key below!!

  return (
    <>
      {allTasks.map((task) => (
        <article key={task.description} className="task">
          <p className="task__item">{task.description}</p>
        </article>
      ))}
    </>
  );
}

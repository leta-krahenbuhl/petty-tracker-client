import { useState } from "react";
import "./Tasks.scss";
import Task from "../Task/Task";

export default function Tasks(): JSX.Element | null | string {
  const [isAddTaskVisible, setIsAddTaskVisible] = useState<boolean>(false);
  const [taskName, setTaskName] = useState<string>("");

  return (
    <article className="tasks">
      <h3 className="tasks__header3">Your Tasks</h3>
      <div className="tasks__container">
        <Task />
      </div>
    </article>
  );
}

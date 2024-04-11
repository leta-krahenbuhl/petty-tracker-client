import { useState } from "react";
import "./Tasks.scss";
import Task from "../Task/Task";
import { type TaskType } from "../../types";

export default function Tasks(): JSX.Element | null | string {
  const [isAddTaskVisible, setIsAddTaskVisible] = useState<boolean>(false);
  const [taskName, setTaskName] = useState<string>("");
  const [allTasks, setAllTasks] = useState<TaskType[]>([]);

  function addTask(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    //put this type into the type file?
    const newTask: TaskType = {
      description: taskName,
      completed: false,
      owner: { id: "123" },
    };
    // send this to backend...
    setAllTasks([...allTasks, newTask]);
  }

  return (
    <article className="tasks">
      <h3 className="tasks__header3">Your Tasks</h3>
      <div className="tasks__container">
        <Task />
      </div>
      {isAddTaskVisible ? (
        <form className="form-add-task" onSubmit={addTask}>
          <label className="form-signup__label">
            <input
              className="form-add-task__input"
              type="text"
              placeholder="your new task"
              onChange={(e) => setTaskName(e.target.value)}
              name="homeName"
              value={taskName}
            />
          </label>
          <div className="tasks__button-container">
            <button className="tasks__add-tasks" type="submit">
              ADD NEW TASK
            </button>
            <button
              className="tasks__cancel-tasks"
              onClick={() => setIsAddTaskVisible(false)}
            >
              CANCEL
            </button>
          </div>
        </form>
      ) : (
        ""
      )}
      {isAddTaskVisible ? (
        ""
      ) : (
        <button
          className="homes__add-home"
          onClick={() => {
            setIsAddTaskVisible(true);
          }}
        >
          + NEW TASK
        </button>
      )}
    </article>
  );
}

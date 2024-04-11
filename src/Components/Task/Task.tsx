import "./Task.scss";
import { Link } from "react-router-dom";
// import { useState } from "react";

export default function Task(): JSX.Element | null | string {
  //   const [inhabitants, setInhabitants] = useState<string[]>([]);

  // POST function to add users (inhabitants) to a home

  return (
    <article className="task">
      <p className="task__item">Dishes</p>
      <p className="task__item task__item--done">Swipe floor</p>
    </article>
  );
}

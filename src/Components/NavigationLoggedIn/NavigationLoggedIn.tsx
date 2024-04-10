import "./NavigationLoggedIn.scss";
import navToDo from "../../assets/images/nav-todo.svg";
import navHome from "../../assets/images/nav-home.svg";
import { Link } from "react-router-dom";

export default function NavigationLoggedIn(): JSX.Element | null | string {
  return (
    <nav className="navigation-logged-in">
      <article className="navigation-logged-in__white">
        <Link to="/">
          <img
            src={navHome}
            alt="log-in icon"
            className="navigation-logged-in__icon"
          />
        </Link>
        <Link to="/">
          <img
            src={navToDo}
            alt="log-in icon"
            className="navigation-logged-in__icon"
          />
        </Link>
      </article>
    </nav>
  );
}

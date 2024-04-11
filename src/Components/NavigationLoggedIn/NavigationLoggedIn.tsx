import "./NavigationLoggedIn.scss";
import navToDo from "../../assets/images/nav-todo.svg";
import navHome from "../../assets/images/nav-home.svg";
import { Link, useNavigate } from "react-router-dom";

export default function NavigationLoggedIn(): JSX.Element | null | string {
  const navigate = useNavigate();

  function logOut() {
    localStorage.setItem("isLoggedIn", false.toString());

    navigate(`/`);
  }

  return (
    <nav className="navigation-logged-in">
      <article className="navigation-logged-in__white">
        <Link to="/user123">
          <img
            src={navHome}
            alt="log-in icon"
            className="navigation-logged-in__icon"
          />
        </Link>
        <button>
          <img
            src={navToDo}
            alt="log-in icon"
            className="navigation-logged-in__button"
            onClick={logOut}
          />
        </button>
      </article>
    </nav>
  );
}

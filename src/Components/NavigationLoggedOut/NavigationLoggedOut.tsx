import "./NavigationLoggedOut.scss";
import navLogIn from "../../assets/images/nav-login.svg";
import navSignUp from "../../assets/images/nav-signup.svg";
import { Link } from "react-router-dom";

export default function NavigationLoggedOut(): JSX.Element | null | string {
  return (
    <nav className="navigation-logged-out">
      <article className="navigation-logged-out__white">
        <Link to="/login">
          <img
            src={navLogIn}
            alt="log-in icon"
            className="navigation-logged-out__icon"
          />
        </Link>
        <Link to="/signup">
          <img
            src={navSignUp}
            alt="log-in icon"
            className="navigation-logged-out__icon"
          />
        </Link>
      </article>
    </nav>
  );
}

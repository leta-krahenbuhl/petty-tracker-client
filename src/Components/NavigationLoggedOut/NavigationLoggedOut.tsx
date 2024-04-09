import "./NavigationLoggedOut.scss";
import navLogIn from "../../assets/images/nav-login.svg";
import navSignUp from "../../assets/images/nav-signup.svg";

export default function NavigationLoggedOut(): JSX.Element | null | string {
  return (
    <nav className="navigation-logged-out">
      <article className="navigation-logged-out__white">
        <img
          src={navLogIn}
          alt="log-in icon"
          className="navigation-logged-out__icon"
        />
        <img
          src={navSignUp}
          alt="log-in icon"
          className="navigation-logged-out__icon"
        />
      </article>
    </nav>
  );
}

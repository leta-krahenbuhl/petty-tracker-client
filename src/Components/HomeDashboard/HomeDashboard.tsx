import "./HomeDashboard.scss";
import taskBar1 from "../../assets/images/task-bartask-bars-1.svg";
import taskBar2 from "../../assets/images/task-bartask-bars-2.svg";
import taskBar3 from "../../assets/images/task-bartask-bars-3.svg";
import taskBar4 from "../../assets/images/task-bartask-bars-4.svg";

export default function HomeDashboard() {
  //   const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <article className="home-dashboard">
      <article className="home-dashboard__button-container">
        <button className="home-dashboard__button-login">LOGIN</button>
        <button className="home-dashboard__button-signup">SIGN UP</button>
      </article>
      <p className="home-dashboard__text">
        The place for you to track who has been doing what around the house...
      </p>
      <div className="home-dashboard__examples-container">
        <div className="home-dashboard__taskbar-container">
          <img src={taskBar1} alt="example-task1" />
          <img src={taskBar2} alt="example-task1" />
          <img src={taskBar3} alt="example-task1" />
          <img src={taskBar4} alt="example-task1" />
        </div>
        <div className="home-dashboard__examples-text-container">
          <p className="home-dashboard__text-small">
            Add, assign, and track the tasks that need to be done
          </p>
          <p className="home-dashboard__text-small">
            Make sure your partner is “really” pulling their weight like they
            said they were...
          </p>
        </div>
      </div>
      <p className="home-dashboard__text">We believe you... </p>
      <p className="home-dashboard__text">It's them, they're the problem </p>
    </article>
  );
}

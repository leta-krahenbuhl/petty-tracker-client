import "./Home.scss";
import heroImage from "../../assets/images/hero-image.svg";
import { useState } from "react";
import NavigationLoggedOut from "../../Components/NavigationLoggedOut/NavigationLoggedOut";
import HomeDashboard from "../../Components/HomeDashboard/HomeDashboard";

export default function Home(): JSX.Element | null | string {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  return (
    <article className="home">
      <article className="hero">
        <p className="hero__paragraph1">
          Not getting credit for doing all the housework...?
        </p>
        <h1 className="hero__heading">PETTY TRACKER</h1>
        <img src={heroImage} className="hero__image" alt="Italian Trulli"></img>
      </article>
      <main className="home-main">
        <HomeDashboard />
      </main>
      <NavigationLoggedOut />
    </article>
  );
}

import "./Home.scss";
import heroImage from "../../assets/images/hero-image.svg";
import { useState } from "react";
import NavigationLoggedOut from "../../Components/NavigationLoggedOut/NavigationLoggedOut";

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <article className="home">
      <article className="hero">
        <p className="hero__paragraph1">
          Not getting credit for doing all the housework...?
        </p>
        <h1 className="hero__heading">PETTY TRACKER</h1>
        <img src={heroImage} className="hero__image" alt="Italian Trulli"></img>
      </article>
      <main className="home-main"></main>
      <NavigationLoggedOut />
    </article>
  );
}

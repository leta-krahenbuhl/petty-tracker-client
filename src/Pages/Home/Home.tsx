import "./Home.scss";
import heroImage from "../../assets/images/hero-image.svg";

export default function Home() {
  return (
    <article className="home">
      <article className="hero">
        <p className="hero__paragraph1">
          Not getting credit for doing all the housework...?
        </p>
        <h1 className="hero__heading">PETTY TRACKER</h1>
        <img src={heroImage} className="hero__image" alt="Italian Trulli"></img>
      </article>
    </article>
  );
}

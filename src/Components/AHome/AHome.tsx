import "./AHome.scss";
import { Link } from "react-router-dom";

export default function AHome(): JSX.Element | null | string {
  return (
    <article className="ahome">
      <p className="ahome__boatname">HOME1</p>
      <Link to="/">
        <div className="ahome__go-to-home">Visit this home</div>
      </Link>
    </article>
  );
}

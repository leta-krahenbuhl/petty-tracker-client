import "./AHome.scss";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function AHome(): JSX.Element | null | string {
  //   const [inhabitants, setInhabitants] = useState<string[]>([]);

  // POST function to add users (inhabitants) to a home

  return (
    <article className="ahome">
      <p className="ahome__boatname">HOME1</p>
      <Link to="/">
        <div className="ahome__go-to-home">Visit this home</div>
      </Link>
    </article>
  );
}

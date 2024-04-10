import AHome from "../AHome/AHome";
import "./Homes.scss";

export default function Homes(): JSX.Element | null | string {
  return (
    <article className="homes">
      <h3 className="homes__header3">Your Homes</h3>
      <div className="homes__container">
        <AHome />
        <AHome />
      </div>
    </article>
  );
}

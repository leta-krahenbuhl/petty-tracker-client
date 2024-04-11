import { useState } from "react";
import AHome from "../AHome/AHome";
import "./Homes.scss";
import { type Home } from "../../types";

export default function Homes(): JSX.Element | null | string {
  const [isAddHomeVisible, setIsAddHomeVisible] = useState<boolean>(false);
  const [homeName, setHomeName] = useState<string>("");

  function addHome(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const newHome: Home = {
      name: homeName,
      inhabitants: [],
    };

    console.log(newHome);

    //send HomeObject to backend
    //declare type of object to receive back??
  }

  // Function to get homes from backend

  return (
    <article className="homes">
      <h3 className="homes__header3">Your Homes</h3>
      <div className="homes__container">
        <AHome />
        <AHome />
      </div>
      {isAddHomeVisible ? (
        <form className="form-add-home" onSubmit={addHome}>
          <label className="form-signup__label">
            <input
              className="form-add-home__input"
              type="text"
              placeholder="your new home"
              onChange={(e) => setHomeName(e.target.value)}
              name="homeName"
              value={homeName}
            />
          </label>
          <div className="homes__button-container">
            <button className="homes__add-home" type="submit">
              ADD NEW HOME
            </button>
            <button
              className="tasks__cancel-tasks"
              onClick={() => setIsAddHomeVisible(false)}
            >
              CANCEL
            </button>
          </div>
        </form>
      ) : (
        ""
      )}
      {isAddHomeVisible ? (
        ""
      ) : (
        <button
          className="homes__add-home"
          onClick={() => {
            setIsAddHomeVisible(true);
          }}
        >
          + NEW HOME
        </button>
      )}
    </article>
  );
}

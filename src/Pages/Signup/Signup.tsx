import "./Signup.scss";
import { useState } from "react";
import { Link } from "react-router-dom";
import { type NewUser } from "../../types";

export default function Signup(): JSX.Element | null | string {
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    setUsername(formData.get("name") as string);
    setEmail(formData.get("email") as string);
    setPassword(formData.get("password") as string);

    if (password !== confirmPassword) {
      alert("Your passwords do not match.");
      return;
    }

    const newUser: NewUser = {
      id: new Date().getTime().toString(),
      username: username,
      email: email,
      password: password,
    };
    // POST request with info to backend
    // create type for object to receive back?
  }

  return (
    <article className="signup">
      <h1 className="signup__header1">PETTY TRACKER</h1>
      <h2 className="signup__header2">Sign Up</h2>
      <form onSubmit={handleSubmit} className="form-signup">
        <div className="form-signup__input-container">
          <label className="form-signup__label">
            USERNAME
            <input
              className="form-signup__input"
              type="text"
              id="input-name"
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
              name="name"
              value={username}
            />
          </label>
          <label className="form-signup__label">
            EMAIL
            <input
              className="form-signup__input"
              type="email"
              id="input-email"
              placeholder="Username"
              onChange={(e) => setEmail(e.target.value)}
              name="email"
              value={email}
            />
          </label>
          <label className="form-signup__label">
            PASSWORD
            <input
              className="form-signup__input"
              type="password"
              id="input-password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              name="password"
              value={password}
            />
          </label>
          <label className="form-signup__label">
            CONFIRM PASSWORD
            <input
              className="form-signup__input"
              type="password"
              id="input-confirm-password"
              placeholder="Password"
              onChange={(e) => setConfirmPassword(e.target.value)}
              name="confirm-password"
              value={confirmPassword}
            />
          </label>
        </div>
        <div className="form-signup__button-container">
          <button type="submit" className="form-signup__button">
            SIGNUP
          </button>
        </div>
        <Link to="/">
          <div className="form-signup__cancel">CANCEL</div>
        </Link>
      </form>
    </article>
  );
}

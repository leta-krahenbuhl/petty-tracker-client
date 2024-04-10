import "./Login.scss";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Login({
  setIsLoggedIn,
  setUserId,
}: {
  setIsLoggedIn: (isLoggedIn: boolean) => void;
  setUserId: (userId: string) => void;
}): JSX.Element | null | string {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    setUsername(formData.get("name") as string);
    setPassword(formData.get("password") as string);

    // send info to backend, create type for object to send and object
    // to receive
    // object that gets sent back should have the user Id identified
    // with this user if it finds it
    setUserId("123");
    setIsLoggedIn(true);
    navigate(`/user${123}`); // change 123 to userId (import as prop)
  }

  return (
    <article className="login">
      <h1 className="login__header1">PETTY TRACKER</h1>
      <h2 className="login__header2">Login</h2>
      <form onSubmit={handleSubmit} className="form-login">
        <div className="form-login__input-container">
          <label className="form-login__label">
            USERNAME
            <input
              className="form-login__input"
              type="text"
              id="input-name"
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
              name="name"
              value={username}
            />
          </label>
          <label className="form-login__label">
            PASSWORD
            <input
              className="form-login__input"
              type="password"
              id="input-password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              name="password"
              value={password}
            />
          </label>
        </div>
        <div className="form-login__button-container">
          <button type="submit" className="form-login__button">
            LOGIN
          </button>
          <Link to="/login">
            <div className="form-login__signup">SIGN UP</div>
          </Link>
        </div>
        <Link to="/">
          <div className="form-login__cancel">CANCEL</div>
        </Link>
      </form>
    </article>
  );
}

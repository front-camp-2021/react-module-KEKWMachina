import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setLoggedIn } from "../../redux/loggedInSlice";
import loginUser from "../../helper-functions/loginUser";
import { useHistory } from "react-router-dom";

function Login() {
  const [email, setUserName] = useState();
  const [password, setPassword] = useState();
  const [wrongEmail, setWrongEmail] = useState(false);
  const [wrongPassword, setWrongPassword] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    function hideButton() {
      document.querySelector(".header__login").style.visibility = "hidden";
    }
    hideButton();
    return function showButton() {
      document.querySelector(".header__login").style.visibility = "visible";
    };
  }, []);

  useEffect(() => {
    if (wrongEmail) {
      document.querySelector(".login__wrong-email").style.visibility =
        "visible";
    }
    if (!wrongEmail) {
      document.querySelector(".login__wrong-email").style.visibility = "hidden";
    }
    if (wrongPassword) {
      document.querySelector(".login__wrong-password").style.visibility =
        "visible";
    }
    if (!wrongPassword) {
      document.querySelector(".login__wrong-password").style.visibility =
        "hidden";
    }
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = await loginUser({
      email,
      password,
    });
    if (token.response === "wrong email") {
      setWrongEmail(true);
    } else if (token.response === "wrong password") {
      setWrongEmail(false);
      setWrongPassword(true);
    } else {
      setWrongEmail(false);
      setWrongPassword(false);
      history.push("/");
      dispatch(setLoggedIn({}));
    }
  };

  return (
    <div className="login">
      <h1>Please Log In</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Email</p>
          <input
            onChange={(event) => {
              setUserName(event.target.value);
            }}
            className="login__input"
            type="text"
          />
          <p className="login__wrong-email">Wrong Email</p>
        </label>
        <label>
          <p>Password</p>
          <input
            onChange={(event) => {
              setPassword(event.target.value);
            }}
            className="login__input"
            type="password"
          />
          <p className="login__wrong-password">Wrong Password</p>
        </label>
        <div>
          <button className="login__submit-button" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;

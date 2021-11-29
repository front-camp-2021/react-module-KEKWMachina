import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { logOut } from "../../redux/loggedInSlice";
import { useDispatch } from "react-redux";

function Header() {
  const dispatch = useDispatch();
  const loggedIn = useSelector((state) => state.loggedIn);

  return (
    <header className="header">
      <div className="header__logo-wrapper">
        <div className="header__logo"></div>
        <div className="header__text">Online Store</div>
      </div>
      {!loggedIn ? (
        <Link to="/login">
          <button className="header__login">Login</button>
        </Link>
      ) : (
        <button
          className="header__logout"
          onClick={() => {
            dispatch(logOut({}));
          }}
        >
          Log Out
        </button>
      )}
    </header>
  );
}

export default Header;

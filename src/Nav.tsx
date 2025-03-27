import { Link } from "react-router-dom";
import logo from "./images/Logo.svg";

function Nav() {
  return (
    <nav className="nav">
      <img src={logo} alt="Logo" />
      <ul className="nav-list">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/reservations">Reservations</Link>
        </li>
        <li>
          <Link to="/orderOnline">Order Online</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;

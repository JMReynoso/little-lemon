import { Link, useNavigate } from "react-router-dom";
import logo from "../images/Logo.svg";
import "./css/Nav.css";

function Nav() {
  const navigation = useNavigate();
  return (
    <nav className="nav">
      <img src={logo} alt="Logo" onClick={() => navigation("/")} />
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

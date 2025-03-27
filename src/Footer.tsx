import { Link } from "react-router-dom";
import restaurantFood from "./images/restauranfood.jpg";

function Footer() {
  return (
    <footer className="nav-footer">
      <img src={restaurantFood} alt="pic"></img>
      <ul>
        <li>Doormat Nav</li>
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
      <ul>
        <li>Contact</li>
        <li>
          <Link to="/address">Address</Link>
        </li>
        <li>
          <Link to="/phoneNumber">Phone Number</Link>
        </li>
        <li>
          <Link to="/email">Email</Link>
        </li>
      </ul>
      <ul>
        <li>Social Media</li>
        <li>
          <a href="#">Facebook</a>
        </li>
        <li>
          <a href="#">Instagram</a>
        </li>
        <li>
          <a href="#">Twitter</a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;

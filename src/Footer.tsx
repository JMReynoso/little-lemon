function Footer() {
  return (
    <footer>
      <img src={require('./images/restauranfood.jpg')} alt="pic"></img>
      <ul>
        <li>Doormat Nav</li>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Reservations</a>
        </li>
        <li>
          <a href="#">Order Online</a>
        </li>
        <li>
          <a href="#">Login</a>
        </li>
      </ul>
      <ul>
        <li>Contact</li>
        <li>
          <a href="#">Address</a>
        </li>
        <li>
          <a href="#">Phone Number</a>
        </li>
        <li>
          <a href="#">Email</a>
        </li>
      </ul>
      <ul>
        <li>Social Media</li>
        <li>
          <a href="#">Address</a>
        </li>
        <li>
          <a href="#">Phone Number</a>
        </li>
        <li>
          <a href="#">Email</a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;

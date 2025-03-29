import { redirect } from "react-router";
import restaurantFood from "./images/restauranfood.jpg";

function HeroSection() {
  return (
    <section className="hero-section">
      <div>
        <h1 className="title">Little Lemon</h1>
        <h2 className="sub-title">Chicago</h2>
        <p>
          We are a family-owned Mediterranean restaurant, focused on traditional
          recipes served with a modern twist.
        </p>
        <button
          onClick={() => {
            redirect("/reservations");
          }}
        >
          Reserve a Table
        </button>
      </div>
      <img src={restaurantFood} alt="pic"></img>
    </section>
  );
}

export default HeroSection;

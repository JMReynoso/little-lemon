import Card from "./Card";
import greekSalad from "./images/greek salad.jpg";
import bruchetta from "./images/bruchetta.svg";
import lemonDessert from "./images/lemon dessert.jpg";

function HighlightSection() {
  return (
    <section className="highlight">
      <div>
        <h1 className="title">This Week's Specials!</h1>
        <button>Online Menu</button>
      </div>
      <div className="card-container">
        <Card
          imagePath={greekSalad}
          title="Greek Salad"
          description="Delicious and fresh."
          price="$12.99"
        />
        <Card
          imagePath={bruchetta}
          title="Burchetta"
          description="Tasty and healthy."
          price="$5.99"
        />
        <Card
          imagePath={lemonDessert}
          title="Lemon Dessert"
          description="Sweet and tangy."
          price="$5.99"
        />
      </div>
    </section>
  );
}

export default HighlightSection;
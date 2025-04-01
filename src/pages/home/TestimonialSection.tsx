import TestimonialCards from "./TestimonialCards";
import person1 from "./images/people/08c5772c481233a30a46aeca552132053604e2a8.png";
import person2 from "./images/people/3ca412176fe4306326b04a78b51fa148c49f99c1.png";
import person3 from "./images/people/b64f988f077b50ffdab0afee9de4d701e4a9d5da.png";

function TestimonialSection() {
  return (
    <section className="testimonial-section">
      <h1 className="section-title">Testimonials</h1>
      <div className="all-testimonial-cards">
        <TestimonialCards
          rating={5}
          imagePath={person1}
          name="Jane Doe"
          review="Delicious and fresh."
        />
        <TestimonialCards
          rating={3}
          imagePath={person2}
          name="Some Person"
          review="Delicious and fresh."
        />
        <TestimonialCards
          rating={4}
          imagePath={person3}
          name="John Doe"
          review="Delicious and fresh."
        />
      </div>
    </section>
  );
}

export default TestimonialSection;

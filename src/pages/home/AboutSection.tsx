import image1 from "./images/Mario and Adrian A.jpg";
import image2 from "./images/Mario and Adrian b.jpg";

function AboutSection() {
  return (
    <section className="about-section">
      <div>
        <h1 className="title">Little Lemon</h1>
        <h2 className="sub-title">Chicago</h2>
        <p>
          Little Lemon is a restaurant serving Mediterranean food with a modern
          twist.
        </p>
      </div>
      <div>
        <img src={image1} alt="Mario and Adrian A" />
        <img src={image2} alt="Mario and Adrian B" />
      </div>
    </section>
  );
}

export default AboutSection;

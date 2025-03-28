interface TestimonialCardsProps {
    rating: number;
    imagePath: string;
    name: string;
    review: string;
}

function TestimonialCards(props: TestimonialCardsProps) {
    const stars = () => {
        let stars = "";
        for (let i = 0; i < props.rating; i++) {
          stars += "⭐";
        }
        return stars;
    }

  return (
    <div className="testimonial-card">
        <p>{stars()}</p>
        <div>
            <img src={props.imagePath} alt={`${props.name}'s testimonial`}/>
            <p>{props.name}</p>
        </div>
        <p>{props.review}</p>
    </div>
  );
}

export default TestimonialCards;

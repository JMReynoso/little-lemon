import "./css/Card.css";
import { useNavigate } from "react-router-dom";

interface CardProps {
  imagePath: string;
  title: string;
  price: string;
  description: string;
}

function Card(props: CardProps) {
  const navigate = useNavigate();
  return (
    <div className="card">
      <img src={props.imagePath} alt="Picture of Food" />
      <div>
        <h3>{props.title}</h3>
        <p>{props.price}</p>
      </div>
      <p>{props.description}</p>
      <button
        onClick={() => {
          navigate("/orderOnline");
        }}
        aria-label="Reserve a Table"
      >
        Order for Delivery
      </button>
    </div>
  );
}

export default Card;

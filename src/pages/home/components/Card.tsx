interface CardProps {
  imagePath: string;
  title: string;
  price: string;
  description: string;
}

function Card(props: CardProps) {
  return (
    <div className="card">
      <img src={props.imagePath} alt="food pic" />
      <div>
        <h3>{props.title}</h3>
        <p>{props.price}</p>
      </div>
      <p>{props.description}</p>
      <button>Order for Delivery</button>
    </div>
  );
}

export default Card;

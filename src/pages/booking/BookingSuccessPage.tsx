import { useNavigate } from "react-router-dom";
import "./css/BookingSuccessPage.css";

function BookingSuccessPage() {
  const navigate = useNavigate();
  return (
    <div className="booking-success">
      <h1>Booking Successful!</h1>
      <p>Thank you for your booking. We look forward to serving you!</p>
      <button onClick={() => navigate("/")}>Return Home</button>
    </div>
  );
}

export default BookingSuccessPage;

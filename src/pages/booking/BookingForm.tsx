import React, { useState } from "react";

interface BookingFormProps {
  onSubmit: (formData: BookingFormData) => void;
}

interface BookingFormData {
  name: string;
  email: string;
  date: string;
  time: string;
  occasion: string;
  guests: number;
}

function BookingForm({ onSubmit }: BookingFormProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [occasion, setOccasion] = useState("");
  const [guests, setGuests] = useState(1);

  const formData = { name, email, date, time, occasion, guests };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    switch (name) {
      case "name":
        setName(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "date":
        setDate(value);
        break;
      case "time":
        setTime(value);
        break;
      case "occasion":
        setOccasion(value);
        break;
      case "guests":
        setGuests(parseInt(value));
        break;
      default:
        break;
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "grid",
        gap: "20px",
        maxWidth: "400px",
        justifyItems: "center",
        margin: "0 auto",
        marginTop: "5%",
        marginBottom: "5%",
      }}
      className="booking-form"
    >
      <div>
        <label htmlFor="res-date">Choose date: </label>
        <input
          type="date"
          id="res-date"
          name="date"
          value={formData.date}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="res-time">Choose time: </label>
        <select
          id="res-time"
          name="time"
          value={formData.time}
          onChange={handleChange}
        >
          <option value="17:00">17:00</option>
          <option value="18:00">18:00</option>
          <option value="19:00">19:00</option>
          <option value="20:00">20:00</option>
          <option value="21:00">21:00</option>
          <option value="22:00">22:00</option>
        </select>
      </div>
      <div>
        <label htmlFor="guests">Number of guests: </label>
        <input
          type="number"
          id="guests"
          name="guests"
          placeholder="1"
          min="1"
          max="10"
          value={formData.guests}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="occasion">Occasion: </label>
        <select
          id="occasion"
          name="occasion"
          value={formData.occasion || ""}
          onChange={handleChange}
        >
          <option value="Birthday">Birthday</option>
          <option value="Anniversary">Anniversary</option>
        </select>
      </div>
      <input type="submit" value="Make Your reservation" />
    </form>
  );
}

export default BookingForm;

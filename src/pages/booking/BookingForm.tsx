import React, { useState } from "react";

interface BookingFormProps {
  onSubmit: (formData: BookingFormData) => void;
  dispatch: (day: string) => void;
  times: string[];
  setIsSuccessful: (isSuccessful: boolean) => void;
}

interface BookingFormData {
  date: string;
  occasion: string;
  guests: number;
}

function BookingForm({
  times,
  dispatch,
  onSubmit,
  setIsSuccessful,
}: BookingFormProps) {
  const [date, setDate] = useState("");
  const [occasion, setOccasion] = useState("");
  const [guests, setGuests] = useState(1);

  const formData = { date, times, occasion, guests };

  const validateForm = () => {
    if (!date) {
      alert("Date is required.");
      return false;
    }
    if (!occasion) {
      alert("Occasion is required.");
      return false;
    }
    if (guests < 1 || guests > 10) {
      alert("Guests must be between 1 and 10.");
      return false;
    }
    setIsSuccessful(true);
    return true;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    switch (name) {
      case "date":
        setDate(value);
        const day: string = new Date(value).getDay().toString(); //0-6 where 0 is Sunday and 6 is Saturday
        dispatch(day);
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
    validateForm();
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
        padding: "5%",
        color: "#fff",
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
          value={formData.times}
          onChange={handleChange}
        >
          {times.map((times) => (
            <option key={times}>{times}</option>
          ))}
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
          value={formData.occasion}
          onChange={handleChange}
        >
          <option value="">Select an occasion</option>
          <option value="Birthday">Birthday</option>
          <option value="Anniversary">Anniversary</option>
        </select>
      </div>
      <input type="submit" value="Make Your reservation" />
    </form>
  );
}

export default BookingForm;

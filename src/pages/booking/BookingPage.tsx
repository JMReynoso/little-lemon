import BookingForm from "./BookingForm";

interface BookingPageProps {
  time: string;
  setTime: (time: string) => void;
}

function BookingPage({ time, setTime }: BookingPageProps) {
  return (
    <div style={{ backgroundColor: "#495E57" }}>
      <BookingForm
        time={time}
        setTime={setTime}
        onSubmit={(formData) => console.log(formData)}
      />
    </div>
  );
}
export default BookingPage;

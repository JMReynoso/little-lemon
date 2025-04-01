import BookingForm from "./BookingForm";

interface BookingPageProps {
  time: string;
  setTime: (time: string) => void;
}

function BookingPage({time, setTime}: BookingPageProps) {
  return (
    <>
      <BookingForm
        time={time}
        setTime={setTime}
        onSubmit={(formData) => console.log(formData)}
      />
    </>
  );
}
export default BookingPage;

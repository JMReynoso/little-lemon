import BookingForm from "./BookingForm";

interface BookingPageProps {
  times: string[];
  dispatch: (day: string) => void;
}

function BookingPage({ times, dispatch }: BookingPageProps) {
  return (
    <div style={{ backgroundColor: "#495E57" }}>
      <BookingForm
        times={times}
        dispatch={dispatch}
        onSubmit={(formData) => console.log(formData)}
      />
    </div>
  );
}
export default BookingPage;

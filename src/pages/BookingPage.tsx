import BookingForm from "../BookingForm";

function BookingPage() {
  return (
    <>
      <BookingForm onSubmit={(formData) => console.log(formData)} />
    </>
  );
}
export default BookingPage;

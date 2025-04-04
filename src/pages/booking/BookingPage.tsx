import { useState } from "react";
import BookingForm from "./BookingForm";
import BookingSuccessPage from "./BookingSuccessPage";

interface BookingPageProps {
  times: string[];
  dispatch: (date: string) => void;
}

function BookingPage({ times, dispatch }: BookingPageProps) {
  const [isSuccessful, setIsSuccessful] = useState(false);

  return (
    <>
      <header>
        <h1>Book an exclusive table</h1>
      </header>
      <div style={{ backgroundColor: "#495E57" }}>
        {!isSuccessful ? (
          <BookingForm
            times={times}
            dispatch={dispatch}
            onSubmit={(formData) => console.log(formData)}
            setIsSuccessful={setIsSuccessful}
          />
        ) : (
          <BookingSuccessPage />
        )}
      </div>
    </>
  );
}
export default BookingPage;

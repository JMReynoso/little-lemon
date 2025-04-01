import { useState } from "react";
import BookingForm from "./BookingForm";
import BookingSuccessPage from "./BookingSuccessPage";

interface BookingPageProps {
  times: string[];
  dispatch: (day: string) => void;
}

function BookingPage({ times, dispatch }: BookingPageProps) {
  const [isSuccessful, setIsSuccessful] = useState(false);

  return (
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
  );
}
export default BookingPage;

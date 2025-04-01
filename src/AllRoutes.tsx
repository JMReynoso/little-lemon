import { Route, Routes } from "react-router";
import HomePage from "./pages/home/HomePage";
import BookingPage from "./pages/booking/BookingPage";
import AboutPage from "./pages/AboutPage";
import OrderOnlinePage from "./pages/OrderOnlinePage";
import LoginPage from "./pages/LoginPage";
import AddressPage from "./pages/AddressPage";
import PhoneNumberPage from "./pages/PhoneNumberPage";
import EmailPage from "./pages/EmailPage";

interface AllRoutesProps {
  times: string[];
  dispatch: (day: string) => void;
}

function AllRoutes({ times, dispatch }: AllRoutesProps) {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/reservations" element={<BookingPage times={times} dispatch={dispatch}/>}></Route>
      <Route path="/about" element={<AboutPage />}></Route>
      <Route path="/orderOnline" element={<OrderOnlinePage />}></Route>
      <Route path="/login" element={<LoginPage />}></Route>
      <Route path="/address" element={<AddressPage />}></Route>
      <Route path="/phoneNumber" element={<PhoneNumberPage />}></Route>
      <Route path="/email" element={<EmailPage />}></Route>
    </Routes>
  );
}

export default AllRoutes;

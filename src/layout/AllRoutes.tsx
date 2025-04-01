import { Route, Routes } from "react-router";
import HomePage from "../pages/home/HomePage";
import BookingPage from "../pages/booking/BookingPage";
import AboutPage from "../pages/about/AboutPage";
import OrderOnlinePage from "../pages/order/OrderOnlinePage";
import LoginPage from "../pages/login/LoginPage";
import AddressPage from "../pages/contact/AddressPage";
import PhoneNumberPage from "../pages/contact/PhoneNumberPage";
import EmailPage from "../pages/contact/EmailPage";

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

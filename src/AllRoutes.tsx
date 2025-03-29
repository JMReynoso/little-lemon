import { Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import BookingPage from "./pages/BookingPage";
import AboutPage from "./pages/AboutPage";
import OrderOnlinePage from "./pages/OrderOnlinePage";
import LoginPage from "./pages/LoginPage";
import AddressPage from "./pages/AddressPage";
import PhoneNumberPage from "./pages/PhoneNumberPage";
import EmailPage from "./pages/EmailPage";

function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/reservations" element={<BookingPage />}></Route>
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

import { Routes } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import Nav from "./Nav";
import HomePage from "./pages/HomePage";
import AllRoutes from "./AllRoutes";

function Main() {
  return (
    <>
      <AllRoutes />

      <Header />
      <body>
        <Nav />
        <HomePage />
        <Footer />
      </body>
    </>
  );
}

export default Main;

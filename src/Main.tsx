import AllRoutes from "./AllRoutes";
import Footer from "./Footer";
import Header from "./Header";
import Nav from "./Nav";

//All router dynamically changes main body content based on the URL path
// Header and Nav are static components that are always present
function Main() {
  return (
    <>
      <Header />
      <Nav />
      <AllRoutes />
      <Footer />
    </>
  );
}

export default Main;

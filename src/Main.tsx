import React, { useReducer } from "react";
import AllRoutes from "./AllRoutes";
import Footer from "./Footer";
import Header from "./Header";
import Nav from "./Nav";

//All router dynamically changes main body content based on the URL path
// Header and Nav are static components that are always present
function Main() {

  function updateTimes(state: string[], day: string): string[] {
    if(day === "0") {
      return ["17:00", "18:00", "19:00"];
    } else if(day === "1") {
      return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
    } else if(day === "2") {
      return ["17:00", "18:00", "19:00", "20:00", "21:00"];
    } else if(day === "3") {
      return ["17:00", "18:00", "19:00", "20:00"];
    } else if(day === "4") {
      return ["17:00", "18:00"];
    } else if(day === "5") {
      return ["17:00", "18:00", "19:00", "20:00", "21:00"];
    } else if(day === "6") {
      return ["17:00", "18:00", "19:00"];
    }

    return initializeTimes();
  }

  function initializeTimes(): string[] {
    //all times available
    return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
  }

  const [times, dispatch] = useReducer(updateTimes, initializeTimes());

  return (
    <>
      <Header />
      <Nav />
      <AllRoutes times={times} dispatch={dispatch} />
      <Footer />
    </>
  );
}

export default Main;

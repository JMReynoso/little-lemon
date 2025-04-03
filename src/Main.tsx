import React, { useReducer } from "react";
import AllRoutes from "./layout/AllRoutes";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import Nav from "./layout/Nav";
import { fetchAPI } from "./api/api.js";

export function initializeTimes(): string[] {
  return fetchAPI(new Date());
}

export function updateTimes(state: string[], date: string): string[] {
  return fetchAPI(new Date(date));
}

//All router dynamically changes main body content based on the URL path
// Header and Nav are static components that are always present
function Main() {
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

import AllRoutes from "./AllRoutes";
import "./App.css";
import Main from "./Main";

//<> is called a fragment and always ends in </>
//Fragments allow you to group a list of children without adding extra nodes to the DOM.
//basically a div without the div
function App() {
  return (
    <>
      <Main />
      <AllRoutes />
    </>
  );
}

export default App;

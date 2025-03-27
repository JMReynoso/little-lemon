import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Main from "./Main";

//<> is called a fragment and always ends in </>
//Fragments allow you to group a list of children without adding extra nodes to the DOM.
//basically a div without the div
function App() {
  return (
    <>
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    </>
  );
}

export default App;

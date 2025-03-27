import "./App.css";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
import Nav from "./Nav";

//<> is called a fragment and always ends in </>
//Fragments allow you to group a list of children without adding extra nodes to the DOM.
//basically a div without the div
function App() {
  return (
    <>
      <Header/>
      <body>      
      <Nav/>
      <Main/>
      <Footer/>
      </body>
    </>
  );
}

export default App;

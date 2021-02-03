import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Dashboard from "./components/layouts/Dashboard";
import NavBar from "./components/layouts/NavBar";

function App() {
  function scrollTop() {
    console.log(">>>>cclickke");
    // document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  return (
    <div className="App">
      <NavBar onClick={scrollTop()} />
      <div className="container-fluid main">
        <Dashboard />
      </div>
    </div>
  );
}

export default App;

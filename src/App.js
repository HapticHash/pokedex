import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Dashboard from "./components/layouts/Dashboard";
import NavBar from "./components/layouts/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="container-fluid main">
        <Dashboard />
      </div>
    </div>
  );
}

export default App;

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Dashboard from "./components/layouts/Dashboard";
import NavBar from "./components/layouts/NavBar";

function App() {
  return (
    <div className="App">
      <div class="container-fluid">
        <NavBar />
        <Dashboard />
      </div>
    </div>
  );
}

export default App;

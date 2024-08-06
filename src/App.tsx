import "./App.css";
import Cards from "./components/Cards";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <div className="app-container">
      <Navbar />
      <Cards />
    </div>
  );
}

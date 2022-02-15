import './App.css';
import Info from "./components/info";
import About from "./components/about";
import Interests from "./components/interests";
import Footer from "./components/footer";

export default function App() {
  return (
    <div className="col-3 offset-4 bg">
      < Info />
      < About />
      < Interests />
      < Footer />
    </div>
  )
}
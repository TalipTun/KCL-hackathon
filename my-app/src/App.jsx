import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/home"
import Cart from "./pages/cart"
import Calculator from "./pages/calculator"
import Favourites from './pages/favourites';
import ShoppingPage from "./pages/shoppingPage"
import WeatherPage from "./pages/weatherPage";
import DiseaseDetector from "./pages/diseasedetector";

function App() {
  return (
    <>
    <Router>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/home/cart" element={<Cart />} />
          <Route path="/home/calculator" element={<Calculator />} />
          <Route path="/home/favourites" element={<Favourites />} />
          <Route path="/home/shoppingPage" element={<ShoppingPage />} />
          <Route path="/home/weather-condition" element={<WeatherPage />} />
          <Route path="/home/disease-detector" element={<DiseaseDetector />} />
        </Routes>
    </Router>
  </>
  )
}

export default App

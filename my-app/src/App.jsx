import './App.css'
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/home"
import Cart from "./pages/cart"
import Calculator from "./pages/calculator"
function App() {
  return (
    <>
    <Router>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/signup" element={<Cart />} />
          <Route path="/favourites" element={<Calculator />} />
        </Routes>
    </Router>
  </>
  )
}

export default App

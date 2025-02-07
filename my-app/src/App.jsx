import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/home"
import Cart from "./pages/cart"
import Calculator from "./pages/calculator"
import Favourites from './pages/favourites';
import ShoppingPage from "./pages/shoppingPage"
import SignUp from './pages/signup';
function App() {
  return (
    <>
    <Router>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/favourites" element={<Favourites />} />
          <Route path="/shoppingPage" element={<ShoppingPage />} />
        </Routes>
    </Router>
  </>
  )
}

export default App

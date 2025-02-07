import './App.css'
import Navbar from "./components/navigationBar"
import Footer from './components/footer'
import ShoppingPage from './components/shopping-page'
function App() {
  return (
    <>
      <div className='bg-green-200 min-h-screen w-screen'>
        <Navbar />
        <ShoppingPage />
        <Footer />
      </div>
    </>
  )
}

export default App

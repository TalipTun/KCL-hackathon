import './App.css'
import Navbar from "./components/navigationBar"
import Footer from './components/footer'
function App() {
  return (
    <>
      <div className='bg-green-200 h-screen w-screen'>
        <Navbar />
        <Footer />
      </div>
    </>
  )
}

export default App

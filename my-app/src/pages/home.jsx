import Navbar from "../components/navigationBar"
import Footer from "../components/footer"
function Home() {
  return (
    <>
      <div className='bg-green-200 min-h-screen w-screen'>
        <Navbar />
        <h1>hi you'rea at home page</h1>
        <Footer />
      </div>
    </>
  )
}

export default Home

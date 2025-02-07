import Navbar from "../components/navigationBar"
import Footer from "../components/footer"
import ShoppingPage from "../components/shopping-page"
function Home() {
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

export default Home

import Navbar from "../components/navigationBar"
import Footer from "../components/footer"
import ShoppingItems from "../components/shopping-page"
function ShoppingPage() {
  return (
    <>
      <div className='min-h-screen w-screen'>
        <Navbar />
        <ShoppingItems />
        <Footer />
      </div>
    </>
  )
}

export default ShoppingPage
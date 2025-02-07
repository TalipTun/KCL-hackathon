import WeatherForecast from "../components/weather";

import Navbar from "../components/navigationBar"
import Footer from "../components/footer"
function WeatherPage() {
  return (
    <>
      <div className='min-h-screen w-screen'>
        <Navbar />
        <WeatherForecast />
        <Footer />
      </div>
    </>
  )
}

export default WeatherPage
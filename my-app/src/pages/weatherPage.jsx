import WeatherForecast from "../components/weather";
import Navbar from "../components/navigationBar";
import Footer from "../components/footer";
import '../components/yaseen.css'; // Make sure to create this CSS file

function WeatherPage() {
  return (
    <>
      <div className='min-h-screen w-screen'>
        <Navbar />
        <div className="weather-container">
          <div className="explanation-text">
            <h1>Why Use Weather Prediction?</h1>
            <p>
              Weather prediction helps farmers plan their activities more effectively. By knowing the weather forecast, farmers can make informed decisions about planting, irrigation, and harvesting. 
              This not only helps in optimizing crop yield but also reduces the risk of crop damage due to unexpected weather conditions. 
              Using weather prediction tools contributes to more sustainable and efficient farming practices.
            </p>
          </div>
          <WeatherForecast />
        </div>
      </div>
    </>
  );
}

export default WeatherPage;
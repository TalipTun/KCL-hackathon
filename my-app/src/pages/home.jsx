import Navbar from "../components/navigationBar";
import Footer from "../components/footer";
import AgriTrack from "../pictures/AgriTrack.jpg"; // Importing image
import WeatherForecast from "../components/weather";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="min-h-screen w-screen flex flex-col bg-cover bg-center" style={{ backgroundImage: `url(${AgriTrack})` }}>
      <Navbar />
      <main className="relative flex-grow flex flex-col items-center justify-center text-center p-6 bg-black bg-opacity-50">
        <div className="relative z-10">
          <h1 className="text-4xl font-bold text-white">Welcome to Our Sustainable Marketplace</h1>
          <p className="text-lg text-white mt-4 max-w-2xl">
            Discover eco-friendly and sustainable crops that contribute to a healthier planet. Shop with us and be part of the change!
          </p>
          <Link to="/shoppingPage">
            <button className="mt-6 px-6 py-3 bg-green-600 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-green-700 transition">
              Explore Our Products
            </button>
          </Link>
        </div>
      </main>
    </div>
  );
}

export default Home;
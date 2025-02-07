import Navbar from "../components/navigationBar";
import Footer from "../components/footer";
import WeatherForecast from "../components/weather";

function Home() {
  return (
    <div className=" min-h-screen w-screen flex flex-col">
      <Navbar />
      <main className="flex-grow flex flex-col items-center justify-center text-center p-6">
        <h1 className="text-4xl font-bold text-green-900">Welcome to Our Sustainable Marketplace</h1>
        <p className="text-lg text-gray-700 mt-4 max-w-2xl">
          Discover eco-friendly and sustainable crops that contribute to a healthier planet. Shop with us and be part of the change!
        </p>
        <button className="mt-6 px-6 py-3 bg-green-600 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-green-700 transition">
          Explore Our Products
        </button>
        
        <div className="mt-10 w-full max-w-4xl">
          <h2 className="text-2xl font-semibold text-green-800">Check Weather Conditions</h2>
          <WeatherForecast />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Home;

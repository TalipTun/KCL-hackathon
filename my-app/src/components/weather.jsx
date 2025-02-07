import { useEffect, useState } from "react";

const API_KEY = "42daaf0f9adb141876d567bb95f80a41";
const CITY = "London";
const API_URL = `https://api.openweathermap.org/data/2.5/forecast?q=${CITY}&units=metric&appid=${API_KEY}`;

export default function WeatherForecast() {
  const [forecast, setForecast] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => {
        const dailyData = data.list.filter((reading) => reading.dt_txt.includes("12:00:00"));
        setForecast(dailyData.slice(0, 5));
      })
      .catch((error) => console.error("Error fetching weather data:", error));
  }, []);

  return (
    <div className="flex flex-col items-center p-4">
      <h1 className="text-2xl font-bold mb-4">5-Day Weather Forecast</h1>
      <p className="text-md text-gray-700 mb-6">This page provides a 5-day weather forecast, displaying the expected conditions and temperatures for each day.</p>
      <div className="grid grid-cols-5 gap-4">
        {forecast.map((day, index) => (
          <div key={index} className="p-4 shadow-lg rounded-xl bg-blue-100 text-center">
            <p className="text-lg font-bold">
              {new Date(day.dt_txt).toLocaleDateString("en-US", {
                weekday: "short",
              })}
            </p>
            <img
              src={`https://openweathermap.org/img/wn/${day.weather[0].icon}.png`}
              alt={day.weather[0].description}
              className="mx-auto"
            />
            <p className="text-md">{day.main.temp.toFixed(1)}°C</p>
            <p className="text-sm text-gray-600">{day.weather[0].description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

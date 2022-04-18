import { useEffect, useState } from "react";
import axios from "axios";

function Weather() {
  const [temprature, setTemprature] = useState("");
  const [location, setLocation] = useState("");
  const [icon, setIcon] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const apiKey = "d1750e2b77a5de2ddf972570becea518";

  navigator.geolocation.getCurrentPosition((position) => {
    setLatitude(position.coords.latitude);
    setLongitude(position.coords.longitude);
  });

  useEffect(() => {
    const getWeather = async () => {
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`
      );
      const data = await res.data;
      const { name, main, weather } = data;
      console.log({ name, main, weather });
      setLocation(name);
      setTemprature(Math.round(main.temp - 273.15));
      setIcon(weather[0].icon);
    };
    getWeather();
  }, [latitude, longitude, location, icon]);

  return (
    <div>
      <div className="weather-icon">
        <img src={`https://openweathermap.org/img/wn/${icon}@2x.png`} />
        <div className="temprature-display">
          {temprature}
          <span>&#176;</span>
        </div>
      </div>
      <div className="location-display">{location}</div>
    </div>
  );
}

export default Weather;

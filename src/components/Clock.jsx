import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountryListAction } from "../store/country-list/action";
import { getTimeForSelectedCountry } from "../api";

const Clock = () => {
  const [selectedCountry, setSelectedCountry] = useState("Africa/Abidjan");
  const [totalMilliseconds, setTotalMilliseconds] = useState(0);
  const [isRunning, setIsRunning] = useState(true);

  const countries = useSelector((state) => state?.country?.countries);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCountryListAction());
  }, []);

  const fetchTime = async (country) => {
    if (country) {
      try {
        const response = await getTimeForSelectedCountry(country);

        const unixtime = new Date(response.utc_datetime).getTime(); // Convert to milliseconc
        const utcOffset = parseInt(response.raw_offset * 1000); // Convert to millisecond
        const correctTime = unixtime + utcOffset;

        setTotalMilliseconds(correctTime);
      } catch (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    fetchTime(selectedCountry);
  }, [selectedCountry]);

  useEffect(() => {
    if (isRunning) {
      const interval = setInterval(() => {
        setTotalMilliseconds(
          (prevTotalMilliseconds) => prevTotalMilliseconds + 1000
        );
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [isRunning]);

  const handleCountry = (e) => {
    setSelectedCountry(e.target.value);
    setIsRunning(true);
  };

  return (
    <div className="flex gap-[1rem] items-center">
      <select
        value={selectedCountry}
        onChange={handleCountry}
        className="border border-black rounded-lg dark:bg-blue-300 h-[3rem]"
      >
        <option value="">Select a country</option>
        {countries.map((country, index) => (
          <option key={index} value={country}>
            {country}
          </option>
        ))}
      </select>
      <div>
        <div className="flex gap-[1rem]  items-center">
          <p className="bg-black text-white px-[1rem] py-[0.7rem] rounded-md">
            Time: {new Date(totalMilliseconds).toLocaleTimeString()}
          </p>
          <button
            onClick={() => setIsRunning(!isRunning)}
            className={`px-[1rem] py-[0.4rem] bg-green-300 hover:bg-green-400 text-[1.3rem] rounded-md font-[400]`}
          >
            {isRunning ? "Pause" : "Start"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Clock;

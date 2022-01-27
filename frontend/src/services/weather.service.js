import axios from "axios";
export const fetchWeather = async (id) => {
    try {
        const res = axios.post("http://localhost:3001/weather/current-weather", { city_id: id })
        return res
    }
    catch (error) {
        console.error(error);
    }
}
export const fetchWeatherForecast = async (id) => {
    try {
        const res = axios.post("http://localhost:3001/weather/forecast-weather", { city_id: id })
        return res
    }
    catch (error) {
        console.error(error);
    }
}
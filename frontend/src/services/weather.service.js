import axios from "axios";
export const fetchWeather = async (id) => {
    try {
        const res = axios.post(`${process.env.REACT_APP_BASEURL}/current-weather`, { city_id: id })
        return res
    }
    catch (error) {
        console.error(error);
    }
}
export const fetchWeatherForecast = async (id) => {
    try {
        const res = axios.post(`${process.env.REACT_APP_BASEURL}/forecast-weather`, { city_id: id })
        return res
    }
    catch (error) {
        console.error(error);
    }
}
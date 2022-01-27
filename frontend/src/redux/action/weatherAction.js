import { WEATHER_FETCH_REQUEST, WEATHER_FETCH_SUCCESS, WEATHER_FETCH_FAILED, WEATHER_FETCH_FORECAST_SUCCESS } from "../../shared/constants/actionTypes";

export const fetchWeatherRequest = () => {
    return {
        type: WEATHER_FETCH_REQUEST,
    };
};
export const fetchWeatherSuccess = (data) => {
    return {
        payload: data,
        type: WEATHER_FETCH_SUCCESS,
    };
};
export const fetchWeatherForecastSuccess = (data) => {
    return {
        payload: data,
        type: WEATHER_FETCH_FORECAST_SUCCESS,
    };
};
export const fetchWeatherFailure = (error) => {
    return {
        payload: error,
        type: WEATHER_FETCH_FAILED,
    };
};
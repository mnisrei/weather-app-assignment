import { WEATHER_FETCH_REQUEST, WEATHER_FETCH_SUCCESS, WEATHER_FETCH_FAILED, WEATHER_FETCH_FORECAST_SUCCESS } from "../../shared/constants/actionTypes";

const initialState = {
    loading: false,
    currentWeather: null,
    weatherForecast: null,
    error: null
};

const weatherReducer = (state = initialState, action) => {
    switch (action.type) {
        case WEATHER_FETCH_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case WEATHER_FETCH_SUCCESS:
            return {
                ...state,
                currentWeather: action.payload,
                error: null
            };
        case WEATHER_FETCH_FORECAST_SUCCESS:
            return {
                ...state,
                loading: false,
                weatherForecast: action.payload,
                error: null
            };
        case WEATHER_FETCH_FAILED:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};

export default weatherReducer;

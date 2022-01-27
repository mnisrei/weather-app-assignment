import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Typography } from '@mui/material';

// utils
import { cityList } from '../../shared/constants/cityList';
import { fetchWeather, fetchWeatherForecast } from '../../services/weather.service';
import { fetchWeatherFailure, fetchWeatherForecastSuccess, fetchWeatherRequest, fetchWeatherSuccess } from '../../redux/action/weatherAction';

// Components
import WeatherCard from '../../components/WeatherCard/WeatherCard';
import Dropdown from "../../components/Dropdown/DropDown"
import Button from "../../components/Button/Button"
import Loader from "../../components/Loader/Loader"

// Helper functions
import { calcKelvToFahTemp } from '../../shared/utils/temperature';

// Styles
import "./style.scss";

function Weather() {
    const dispatch = useDispatch();
    const [city, setCity] = useState('');
    const [showForecast, setShowForecast] = useState(false)
    const [currentForecastData, setCurrentForecastData] = useState('')
    const [error, setError] = useState(null)
    const { weatherState } = useSelector(redux => redux)

    useEffect(() => {
        if (city) {
            fetchData()
        }
    }, [city]);

    const fetchData = () => {
        // Fetching Current Weather 
        dispatch(fetchWeatherRequest())
        fetchWeather(city).then((res) => {
            dispatch(fetchWeatherSuccess(res.data))
        }).catch((error) => {
            dispatch(fetchWeatherFailure(error))
            setError("Failed to Fetch the Data.");
            setTimeout(() => setError(null), 3000)
        })

        // Fetching WeatherForecast
        fetchWeatherForecast(city).then((res) => {
            let forecasteObj = {};
            let forecasteObjsArr = [];
            for (const Forecast of res.data.list) {
                // Checking if date is present in the object
                if (forecasteObj[(new Date(Forecast.dt_txt).toLocaleDateString())]) {
                    forecasteObjsArr.push(Forecast);
                    continue;
                }
                // if all the data of the date is seperated
                if (forecasteObjsArr.length) {
                    forecasteObj[(new Date(Forecast.dt_txt).toLocaleDateString())] = forecasteObjsArr
                    forecasteObjsArr = [];
                    continue;
                }
                // if initially date is not present
                forecasteObj[(new Date(Forecast.dt_txt).toLocaleDateString())] = [Forecast]
            }
            dispatch(fetchWeatherForecastSuccess(forecasteObj))
        }).catch((error) => {
            dispatch(fetchWeatherFailure(error))
            setError("Failed to Fetch the Data.");
            setTimeout(() => setError(null), 3000)
        })
    }
    // Handling city change
    const handleChange = (event) => {
        setCity(event.target.value);
    };
    // handling forecast change details 
    const handleForecast = (date) => {
        setCurrentForecastData(date)
    }
    return (
        <div className='weatherWrapper'>
            <h1>Weather Forecast Application </h1>
            <Dropdown
                label="Select City"
                value={city}
                options={cityList}
                onChange={handleChange}
            />
            <div className='weatherWrapper-current'>
                {
                    (!weatherState.currentWeather && weatherState.loading) ?
                        <Loader /> :
                        (weatherState.currentWeather) ?
                            <>
                                <WeatherCard
                                    name={weatherState.currentWeather?.name}
                                    date={new Date().toDateString()}
                                    temp={calcKelvToFahTemp(weatherState.currentWeather?.main.temp)}
                                    humidity={weatherState.currentWeather?.main.humidity}
                                    weather={weatherState.currentWeather?.weather[0].main}
                                    temp_min={calcKelvToFahTemp(weatherState.currentWeather?.main.temp_min)}
                                    temp_max={calcKelvToFahTemp(weatherState.currentWeather?.main.temp_max)}
                                />
                                <Button margin={"10px 0px"} onClick={() => setShowForecast(s => !s)} text={showForecast ? "Hide Forecast" : "See Forecast"} />
                            </>
                            : <Typography variant="h6">"Select A City from the Dropdown to view the Weather"</Typography>
                }
            </div>
            <div className='weatherWrapper-forecast'>
                <div className='buttonWrapper-forecast'>
                    {
                        (!weatherState.weatherForecast && weatherState.loading) ?
                            <Loader /> :
                            (weatherState.weatherForecast && showForecast) ?
                                Object.keys(weatherState.weatherForecast).map((Forecast, index) => {
                                    return (
                                        <Button
                                            margin="10px"
                                            onClick={() => handleForecast(Forecast)}
                                            text={Forecast} />
                                    )
                                }) : null
                    }
                </div>
                <div className='weatherCardWrapper-forecast'>
                    {
                        !currentForecastData && showForecast ?
                            <Typography variant="h6">"Click on a date to see the forecast"</Typography> :
                            currentForecastData && showForecast ?
                                weatherState.weatherForecast[currentForecastData].map((forecast) =>
                                    <WeatherCard
                                        forecast={{ margin: "20px", fontSize:"1.5rem" }}
                                        name={currentForecastData}
                                        date={new Date(forecast.dt_txt).toLocaleTimeString()}
                                        temp={calcKelvToFahTemp(forecast.main.temp)}
                                        humidity={forecast.main.humidity}
                                        weather={forecast.weather[0].main}
                                        temp_min={calcKelvToFahTemp(forecast.main.temp_min)}
                                        temp_max={calcKelvToFahTemp(forecast.main.temp_max)}
                                    />
                                ) : null
                    }
                </div>

            </div>
        </div >
    );
}

export default Weather;

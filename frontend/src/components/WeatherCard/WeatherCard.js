import React, { useState } from 'react';
import "./weatherCard.scss"

function WeatherCard({ name, date, temp, humidity, temp_min, temp_max, weather, forecast }) {
    return (
        <div className='wrapper' style={forecast}>
            <div className='wrapper_title'>
                <h3 className='date'>{name}</h3>
            </div>
            <div className='wrapper_body'>
                <div className='column left'>
                    <h3>{date}</h3>
                    <p>Temperature: {temp}°C</p>
                    <p>Min Temp: {temp_min}°C</p>
                </div>
                <div className='column right'>
                    <h3>{weather}</h3>
                    <p>Humidity: {humidity}%</p>
                    <p>Max Temp: {temp_max}°C</p>

                </div>
            </div>
        </div >
    );
}

export default WeatherCard;

const express = require('express');
const router = new express.Router();

// Using axios to make external API calls.
const axios = require('axios');

router.post('/current-weather', async (req, res) => {

    try {

        const { city_id } = req.body;
        let weatherData = null;

        // check if city id is present in body
        if (city_id) {
            weatherData = await axios.get(`http://api.openweathermap.org/data/2.5/weather?id=${city_id}&appid=${process.env.OPEN_WEATHER_API_KEY}`);
            return res.status(200).send(weatherData.data);
        } else {
            // Handling error in API
            return res.status(500).send({ message: "Encountered an Error", err: 'Please Provide City ID' });
        }

    } catch (e) {
        // TBD: Error handling to be done via a generic file
        res.status(500).send({ message: "Encountered an Error", err: e });
    }
});

router.post('/forecast-weather', async (req, res) => {
    try {
        const { city_id } = req.body;
        let weatherData = null;

        // check if city id is present in body
        if (city_id) {
            weatherData = await axios.get(`http://api.openweathermap.org/data/2.5/forecast?id=${city_id}&appid=${process.env.OPEN_WEATHER_API_KEY}`);

            return res.status(200).send(weatherData.data);
        } else {
            // Handling any error in API
            return res.status(500).send({ message: "Encountered an Error", err: 'Please Provide City ID' });
        }

    } catch (e) {
        // Handling error in axios
        res.status(500).send({ message: "Encountered an Error", err: e });
    }
});

module.exports = router;
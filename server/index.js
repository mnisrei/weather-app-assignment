// Getting environment variables in the project
require('dotenv').config()

// Creating a server using express and importing cors
const express = require("express");
const http = require("http");
const app = express();
const server = http.createServer(app);
const cors = require('cors');
// Importing Routes
const weatherRoute = require('./routers/weather');

// CORS to allow requrests from different servers.
app.use(cors());

// To set the body format as JSON
app.use(express.json());

// Port to run the API on
const port = process.env.PORT || 80;

// Base route for the server
app.get('/', (req, res) => {
    const msg = 'Weather API';
    res.send({ msg, status: true });
});

// Using the Weather Routes
app.use(weatherRoute);

server.listen(port, () => console.log(`server is running on port ${port}`));
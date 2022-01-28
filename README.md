# Weather application which fetches the data from openweather API and show it on the frontend.

To run the project, follow the steps:

1. Create two env files one in the frontend/ and other one in the server/.  
```
server: 
   PORT=3001
   
   OPEN_WEATHER_API_KEY=538882fc8387290c6cee83f313a6acf5
   
frontend: 
   REACT_APP_BASEURL=http://localhost:3001
 ```
2. Then go to the server folder and run npm i.
3. After installation of the packages, run npm run start:prod. This will start your server on port 3001.
4. Then go to frontend folder and run npm i to install the required frontend dependencies.
5. After installation, run npm start. This will start your application on port 3000.
6. On your browser, application will start on localhost:3000 if not you can manually type in the url http://localhost:3000.
7. Run the application and see the current and the forecast data after selecting the city from the dropdown menu!

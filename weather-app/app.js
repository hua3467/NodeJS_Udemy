const request = require("postman-request");
const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");



const address = process.argv[2];

if(!address) {
    console.log("Please provide an address");
} else {

    geocode(address, (error, { latitude, longtitude, location } = {}) => {

        if (error) {
            return console.log(error);
        }

        forecast(latitude, longtitude, (error, forecastData) => {

            if(error) {
                return console.log(error);
            }

            console.log(location);
            console.log(forecastData);
        });

    });
}


// const url = "http://api.weatherstack.com/current?access_key=8441b2bd3f37eb45c9637e4247b44961&query=46.8772,-96.7898&units=f";

// request({ url: url, json: true }, (error, response) => {
//     if (error) {
//         console.log("Unable to connect to weather service!");
//     } else if (response.body.error) {
//         console.log("Unable to find the location.");
//     } else {
//         const data = response.body.current;
//         console.log(`${data.weather_descriptions}. It feels like ${data.feelslike} degrees`); 
//     }
// });

// const geocodeURL = "https://api.mapbox.com/geocoding/v5/mapbox.places/Fargo.json?access_token=pk.eyJ1IjoiYWF5YW5nIiwiYSI6ImNrY3RxeXp5OTBqdHEycXFscnV0czY4ajQifQ.jtVkyvY29tGsCZSQlELYDA";

// request({ url: geocodeURL, json: true}, (error, response) => {
//     if (error) {
//         console.log("Cannot connect to the server.");
//     } else if (response.body.features.length === 0) {
//         console.log("Cannot find the location.");
//     } else {
//         const latitude = response.body.features[0].center[1];
//         const longtitude = response.body.features[0].center[0];
//         console.log(latitude, longtitude);
//     }
    
// })





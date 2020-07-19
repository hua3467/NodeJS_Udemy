const request = require("postman-request");
const url = "http://api.weatherstack.com/current?access_key=8441b2bd3f37eb45c9637e4247b44961&query=46.8772,-96.7898&units=f";

request({ url: url, json: true }, (error, response) => {
    const data = response.body.current;
    console.log(`${data.weather_descriptions}. It feels like ${data.feelslike} degrees`);
});
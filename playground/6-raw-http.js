const http = require("http");
const url = "http://api.weatherstack.com/current?access_key=8441b2bd3f37eb45c9637e4247b44961&query=45,-75&units=f";

const request = http.request(url, (response) => {

        let data = '';

        response.on("data", (chunk) => {
            // console.log(chunk); chunk is buffer
            data = data + chunk.toString();
        })

        response.on("end", () => {
            const body = JSON.parse(data);
            console.log(body);
        })
    })

request.on("error", (error) => {
    console.log("An error", error);
})

request.end();
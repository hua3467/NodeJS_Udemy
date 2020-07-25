const path = require("path");
const express = require("express");
const hbs = require("hbs");

const app = express();

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, '../templates/partials');

// Setup handlebars engin and views location
app.set('view engine', 'hbs');
app.set("views", viewsPath);
hbs.registerPartials(partialsPath);

// Setup static directory to serve
app.use(express.static(publicDirectoryPath));

app.get("", (req, res) => {
    res.render("index", {
        title: "Weather App",
        name: "Aaron Yang"
    });
});

app.get("/about", (req, res) => {
    res.render("about", {
        title: "About the App",
        name: "Aaron Yang"
    })
})

app.get("/help", (req, res) => {
    res.render("help", {
        title: "Help",
        name: "Aaron Yang"
    })
})

app.get("/weather", (req, res) => {
    res.send({
        forecast: 'It is snowing',
        location: 'Philadelphia'
    });
});

app.get("/help/*", (req, res) => {
    res.render("404", {
        message: "Help article not fount."
    });
});

app.get("*", (req, res) => {
    res.render("404", {
        message: "The page you are looking for is not found."
    });
});

app.listen(3000, () => {
    console.log("Server is up on port 3000.");
});
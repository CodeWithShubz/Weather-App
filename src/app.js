const express = require('express');
const { Server } = require('http');
const app = express();
const hbs = require('hbs');
const path = require('path')
const port = process.env.PORT || 80

// Set the path
const static_path = path.join(__dirname, "../public");
const template_path = path.join(__dirname, "../templates/views");
const partials_path = path.join(__dirname, "../templates/partials");

app.set('view engine', 'hbs');
app.set('views', template_path);
hbs.registerPartials(partials_path);

app.use(express.static(static_path));

// Starting the Server
app.get("", (req, res) => {
    res.render('index')
});

app.get("/about", (req, res) => {
    res.render('about')
});

app.get("/weather", (req, res) => {
    res.render('weather')
});

app.get("*", (req, res) => {
    res.render('404error')
});

app.listen(port, () => {
    console.log(`The webpage is Successafuly Host on port ${port}`)
});
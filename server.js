require("dotenv").config(); // Load ENV Variables
const express = require("express"); // import express
const morgan = require("morgan"); //import morgan
const methodOverride = require("method-override");
const path = require("path")
const app = require("liquid-express-views")(express())
const mongoose = require('mongoose')
// const router = express.Router();
const session = require("express-session");
//const MongoStore = require("connect-mongo");

const userRoutes = require('./routes/users'); // import the routes

app.use(express.json());

app.get('/', function(req, res, next) {
    res.redirect('/users');
  });

app.use('/users', userRoutes); //to use the routes

const listener = app.listen(process.env.PORT || 3000, () => {
    console.log('Your app is listening on port ' + listener.address().port)
})

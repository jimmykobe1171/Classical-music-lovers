require("dotenv").config(); // Load ENV Variables
const express = require("express"); // import express
const morgan = require("morgan"); //import morgan
const methodOverride = require("method-override");
const path = require("path")
const app = require("liquid-express-views")(express())
const mongoose = require('mongoose')

// const router = express.Router();
const session = require("express-session");
const MongoStore = require("connect-mongo");
const bcrypt = require("bcryptjs");
const bodyParser = require('body-parser')
const composers = require('./data/composers.js');
////////////////////////////////////////////
app.use(session({ secret: process.env.SECRET,
    store: MongoStore.create({ mongoUrl: process.env.DATABASE_URL}),
    saveUninitialized: true,
    resave: false,}))

app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
app.use(express.static('public'));
//const logoutRoutes = require('./routes/logout')
const userRoutes = require('./routes/users'); 
const composerRoutes = require('./routes/composers'); 
const songRoutes = require('./routes/songs');
const playlistRoutes = require('./routes/playlists');
app.use(express.json());


app.use('/users', userRoutes); 
app.use('/composers', composerRoutes);
app.use('/songs', songRoutes);
app.use('/playlists', playlistRoutes);
//app.use('/logout', logoutRoutes)
app.get('/', function(req, res, next) {
    res.render("./index.liquid");
  });

const listener = app.listen(process.env.PORT || 3000, () => {
    console.log('Your app is listening on port ' + listener.address().port)
})

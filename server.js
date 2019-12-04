// SETUP
const express = require("express");
const app = express();
const mongoose = require('mongoose');
app.listen(8000, () => console.log("listening on port 8000"));
app.use(express.urlencoded({extended: true})); // post requests
app.use(express.static(__dirname + "/static")); // get requests
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

require('./server/config/database')
require('./server/config/routes')(app)



var express = require ("express");
var app = express();
var bodyparser = require("body-parser");
var upload = require("express-fileupload")
var userroute = require("./routes/userroutes")
var adminroute = require("./routes/adminroutes");
var session = require('express-session');
// var RedisStore = require('connect-redis')("session");
require('dotenv').config();


app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: true,
}));

app.use("/",userroute);
app.use("/admin",adminroute);


const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
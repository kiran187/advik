var express = require ("express");
var app = express();
var bodyparser = require("body-parser");
var upload = require("express-fileupload")
var userroute = require("./routes/userroutes")
var adminroute = require("./routes/adminroutes");
var session = require('express-session');
var RedisStore = require('connect-redis')(session);
require('dotenv').config();

// var app = express();
// app.use(bodyparser.urlencoded({extended:true}));
// app.use(upload());
// app.use(express.static("public"));
// app.use(session({
//     secret:"asdfghjkl;",
//     resave :true,
//     saveUninitialized:true
// }));
app.use(session({
    store: new RedisStore({ host: 'localhost', port: 6379 }), // Update Redis settings for your environment
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: true,
}));

app.use("/",userroute);
app.use("/admin",adminroute);


const PORT = process.env.PORT || 1000;  // Default to 1000 if no PORT is defined
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

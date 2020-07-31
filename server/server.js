const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");
//const session = require("express-session");
const errorHandler = require("errorhandler");
const morgan = require("morgan");

const database = require("./database/db");
const route = require("./routes/articlesroutes");

const app = express();

mongoose.Promise = global.Promise;


mongoose.connect(database.db, {useNewUrlParser: true})
.then(()=> {
    return console.log("database connected succesfully")
}, error => {
    return console.log("Database could not be conected" + error)
});

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());
//app.use(express.static('routes'));
//app.use(morgan("dev"));
app.use("/articles", route);
//app.use(database);
//app.use(route);
//app.use(session({secret: "THE-TATAFO-BLOG", cookie: {maxAge:60000}, resave: false, saveUninitialized: false}));

app.listen("4000", () => {
    console.log("Server is running on Port 4000");
});

app.use((req, res, next) => {
    next (createError(404));
});

app.use((req, res, next, error) => {
    console.error(err.message);
    if(!err.statusCode) err.statusCode = 500;
    res.status(err.statusCode).send(err.message);
});

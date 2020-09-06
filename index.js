const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");
//const session = require("express-session");
const errorHandler = require("errorhandler");
const morgan = require("morgan");

require("./database/db");

const route = require("./routes/articlesroutes");

const app = express();

const port = process.env.PORT || 5000;


if (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'staging') {
    app.use(express.static('client/build'));
    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname + '/client/build/index.html'));
    });
  };

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());
//app.use(express.static('routes'));
//app.use(morgan("dev"));
app.use("/api/articles", route);
//app.use(database);
//app.use(route);
//app.use(session({secret: "THE-TATAFO-BLOG", cookie: {maxAge:60000}, resave: false, saveUninitialized: false}));

app.listen(port, () => {
    console.log("Server is running on Port" + port);
});

app.use((req, res, next) => {
    next (createError(404));
});

app.use((req, res, next, error) => {
    console.error(err.message);
    if(!err.statusCode) err.statusCode = 500;
    res.status(err.statusCode).send(err.message);
});

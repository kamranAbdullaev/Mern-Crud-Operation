const createError = require("http-errors");
const express = require("express");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");
const errorMiddleware = require("./middleware/error.middleware");

require("./startup/db")();

const app = express();

var corsOptions = {
    origin: "http://localhost:3000",
};
app.use(cors(corsOptions));

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use("/index", (req, res, next) => {
    res.status(200).send({ message: "Server is up", status: 200 });
}); // test route
require("./routes")(app);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

app.use(errorMiddleware);

module.exports = app;

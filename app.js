const express = require('express');
const app = express();
const bodyParser = require('body-parser');
var cors = require('cors');


const shellRoutes = require("./api/routes/shell");
const userRoutes = require("./api/routes/user");


app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use("/api/shell", shellRoutes);
app.use("/api/user", userRoutes);



app.use((req, res, next) => {
    const error = new Error('Not found');
    error.status = 404
    next(error);
})


app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        message: error.message
    });
})


module.exports = app;

//require mongoose module
const mongoose = require('mongoose');

// require dotenv to acquire momgouri from .env file
require('dotenv').config()

mongoose.Promise = global.Promise

//require chalk module to give colors to console text
const chalk = require('chalk');

//require database URL from properties file
const dbURL = process.env.MONGOURI;

// db options
const dbOptions = {
    useUnifiedTopology: true,
    useNewUrlParser: true
}
let connected = chalk.bold.cyan;
let error = chalk.bold.yellow;
let disconnected = chalk.bold.red;
let termination = chalk.bold.magenta;



mongoose.connect(dbURL, dbOptions);

mongoose.connection.on('connected', () => {
    console.log(connected("Mongoose default connection is open"));
});

mongoose.connection.on('error', (err) => {
    console.log(error("Mongoose default connection has occured "+err+" error"));
});

mongoose.connection.on('disconnected', () => {
    console.log(disconnected("Mongoose default connection is disconnected"));
});

process.on('SIGINT', () => {
    mongoose.connection.close(function(){
        console.log(termination("Mongoose default connection is disconnected due to application termination"));
        process.exit(0)
    })})

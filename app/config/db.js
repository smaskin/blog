const mongoose = require('mongoose'),
    config = require('./params');

mongoose.connect(config.db);

const connection = mongoose.connection;

connection.on('error', function (err) {
    console.log('connection error:', err.message);
});

connection.once('open', function callback() {
    console.log("Connected to DB!");
});

exports.mongoose = mongoose;

var mongoose = require( 'mongoose' );

var DB_URL = process.env.DB_URL || 'mongodb://127.0.0.1:27017/chessMEAN';

var MONGO_USER = process.env.MONGO_USER;
var MONGO_PASS = process.env.MONGO_PASS;

mongoose.connect(DB_URL,{user: MONGO_USER, pass: MONGO_PASS});

mongoose.connection.on('connected', function () { 
 console.log('Mongoose connected to ' + DB_URL); 
}); 

mongoose.connection.on('error', function (err) { 
 console.log('Mongoose connection error: ' + err); 
}); 

mongoose.connection.on('disconnected', function () { 
 console.log('Mongoose disconnected'); 
});

var user = require('./models/users');
var game = require('./models/games');

exports.user = user; 
exports.game = game;

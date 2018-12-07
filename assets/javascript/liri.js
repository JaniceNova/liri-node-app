require("dotenv").config();
var fs = require("fs");
var request = require("request");
 var Spotify = require("node-spotify-api");
// const keys = require('keys.js');
// var spotify = new Spotify(keys.spotify);
// console.log(spotify)

var keys = require("./keys");

var spotify = new Spotify({

    id: process.env.SPOTIFY_ID,
    secret: process.env.SPOTIFY_SECRET

});
console.log(spotify)


var APIKeyOMDB= "e707b8fc"
var urlOMDB = "http://www.omdbapi.com/?t=" + name + "&y=&plot=full&tomatoes=true&apikey=" + APIKeyOMDB;
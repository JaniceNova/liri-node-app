require("dotenv").config();
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
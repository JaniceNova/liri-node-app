
var keys = require("./keys");


require("dotenv").config();

var axios = require("axios");
var request = require("request");


var fs = require("fs");
 //var Spotify = require("node-spotify-api");
// const keys = require('keys.js');
// var spotify = new Spotify(keys.spotify);
// console.log(spotify)



// var spotify = new Spotify({

//     id: process.env.SPOTIFY_ID,
//     secret: process.env.SPOTIFY_SECRET

// });
// console.log(spotify)

var name = process.argv[3];
var APIKeyOMDB= "";
var urlOMDB = "http://www.omdbapi.com/?t=" + name + "&y=&plot=full&tomatoes=true&apikey=trilogy";
var movieThis=process.argv[2];
if (movieThis ==="moviethis"){
    console.log("yo")
    axios.get(urlOMDB).then(
        function(response) {
            console.log(response)
            var jsonData = JSON.parse(response);

      console.log("Title: " + jsonData.Title);
         // console.log("Release Year: " + response.data.Year);
        }
      )

};

// request(urlOMDBt, function(error, response, body) {
//     if ( ){
//       var jsonData = JSON.parse(body);
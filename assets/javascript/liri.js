
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





////omdb start----------------------------
var name = process.argv[3];
var APIKeyOMDB = "";
var urlOMDB = "http://www.omdbapi.com/?t=" + name + "&y=&plot=full&tomatoes=true&apikey=trilogy";
var urlMr = "http://www.omdbapi.com/?t=" + "Mr. Nobody" + "&y=&plot=full&tomatoes=true&apikey=trilogy";
var doThis = process.argv[2];
if (doThis === "moviethis") {
    if (name = "undefined") {
        axios.get(urlMr).then(
            function (response) {
                console.log("Title: " + response.data.Title)
                console.log("Year: " + response.data.Year)
                console.log("Rated: " + response.data.Rated)
                console.log("Country: " + response.data.Country)
                console.log("Language: " + response.data.Language)
                console.log("Plot: " + response.data.Plot)
                console.log("Actors: " + response.data.Actors)
            }
        )
    }
    else {
        axios.get(urlOMDB).then(
            function (response) {
                console.log("Title: " + response.data.Title)
                console.log("Year: " + response.data.Year)
                console.log("Rated: " + response.data.Rated)
                console.log("Country: " + response.data.Country)
                console.log("Language: " + response.data.Language)
                console.log("Plot: " + response.data.Plot)
                console.log("Actors: " + response.data.Actors)
            }
        )
    }
};
//omdb end----------------------------




///node liri.js concert-this <artist/band name here>

var urlBandName = "https://rest.bandsintown.com/artists/" + name + "/events?app_id=codingbootcamp"


if(doThis=== "concertthis"){
        axios.get(urlBandName).then(
            function (response) {
                console.log(response)
                console.log("Title: " + response.data.Title)
                console.log("Year: " + response.data.Year)
                console.log("Rated: " + response.data.Rated)
                console.log("Country: " + response.data.Country)
                console.log("Language: " + response.data.Language)
                console.log("Plot: " + response.data.Plot)
                console.log("Actors: " + response.data.Actors)
            }
        )
    

}
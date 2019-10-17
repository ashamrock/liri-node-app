require("dotenv").config();

var keys = require("./keys.js");
var argTwo = process.argv[2];
var argThree = process.argv[3];
var fs = require("fs");
var request = require("request");
var Spotify = require('node-spotify-api');
var axios = require("axios");

switch (argTwo) {
    case "concert-this":
    concertThis();
    break;

    case "spotify-this-song":
    spotifyThisSong();
    break;
          
    case "movie-this":
    movieThis();
    break;
          
    case "do-what-it-says":
    doThis();
    break;
}

function concertThis(concert) {
    var concert = process.argv[3];
    var URL = "https://rest.bandsintown.com/artists/" + concert + "/events?app_id=codingbootcamp`";

    axios.get(URL).then(function(response) {
        var jsonData = response.data;

    request(URL, function () {

        if(argThree === undefined){
            argThree = "Celine Dion";
            console.log(jsonData.concert.venue.name);
            console.log(jsonData.concert.venue.city);
            console.log(jsonData.concert.datetime);
        }
        else {
            console.log(jsonData.concert.venue.name);
            console.log(jsonData.concert.venue.city);
            console.log(jsonData.concert.datetime);
        }  
    })
    })
};

function spotifyThisSong (song){
    var song = process.argv[3];
    var spotify = new Spotify(keys.spotify);
        
    axios.get(URL).then(function(response) {
        var jsonData = response.data;

	spotify.search({
	type:"track",
    query: song,
    }, 

    function(){
	    if(argThree === undefined){
            argThree = "The Sign";
            console.log(jsonData.song.artist);
            console.log(jsonData.song.songName);
            console.log(jsonData.song.songLink);
            console.log(jsonData.song.album);
	    }
        else {
            console.log(jsonData.song.artist);
            console.log(jsonData.song.songName);
            console.log(jsonData.song.songLink);
            console.log(jsonData.song.album);
        }  
	});	
});
}


function movieThis(movie) {
    var movie = process.argv[3];
    var queryUrl = "http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&tomatoes=true&apikey=trilogy";

    axios.get(URL).then(function(response) {
        var jsonData = response.data;

    request(queryUrl, function () {

        if(argThree = undefined){
            argThree = "Mr. Nobody.";
            console.log(jsonData.movie.title);
            console.log(jsonData.movie.year);
            console.log(jsonData.movie.ratings);
            console.log(jsonData.movie.country);
            console.log(jsonData.movie.language);
            console.log(jsonData.movie.plot);
            console.log(jsonData.movie.actors);
        }
        else {
            console.log(jsonData.movie.title);
            console.log(jsonData.movie.year);
            console.log(jsonData.movie.ratings);
            console.log(jsonData.movie.country);
            console.log(jsonData.movie.language);
            console.log(jsonData.movie.plot);
            console.log(jsonData.movie.actors);
        }  

    });
});
}

function doThis() {
    fs.readFile("random.txt", "utf8", function (data) {
        var space = data.toString().split(',');
    });
}
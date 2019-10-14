require("dotenv").config();

// var keys = require('./keys.js');
// var Spotify = require('node-spotify-api');
var question = process.argv[2];
// var queryUrl;
var queryURL = "https://rest.bandsintown.com/artists/celine+dion/events?app_id=codingbootcamp" + bandName + "/events?app_id=[key]";

    switch(question) {
        case "concert-this":
            concertThis(response);
            break;
        case "movie-this" :
            movieThis(response);
            break;    
        case 'spotify-this-song':
            spotifyThis(response); 
            break;
    }

axios.get(queryURL).then(
        function(bandResponse){
            console.log(bandResponse.data.venue.name + bandResponse.data.venue.city + bandResponse.data.datetime);
    }
);
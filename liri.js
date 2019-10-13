require("dotenv").config();

var keys = require("./keys.js");
var spotify = new Spotify(keys.spotify);
var band = process.argv[2];
var concert = "https://rest.bandsintown.com/artists/" + bandName + "/events?app_id=codingbootcamp";
    
    console.log(queryURL); 

    axios.get(queryURL).then(
        function(data){
            console.log("City: " + data.data[0].venue.city);
            console.log("Venue: " + data.data[0].venue.name);
            console.log(moment(data.data[0].datetime).format("MM/DD/YYYY"));
        }
    );

var ask = function (question, response){
    switch(question) {
        case "concert-this":
            concertIt(response);
            break;
        case "movie-this" :
            movieIt(response);
            break;    
        case 'spotify-this-song':
            spotifyIt(response); 
            break;
        default:
        console.log("Invalid command. Please try again");
    }
};

axios.get(queryURL).then(
    function(data){
        console.log("Venue: " + data.data[0].venue.name);
        console.log("City: " + data.data[0].venue.city);
        console.log(moment(data.data[0].datetime).format("MM/DD/YYYY"));
    }
);

console.log(queryURL); 

if (action === "concert-this" ) {
    queryUrl = "http://www.omdbapi.com/?t=mr+nobody&y=&plot=short&apikey=trilogy"
  } 

if (action === "movie-this") {
    queryUrl = "http://www.omdbapi.com/?t=" + mediaName + "&y=&plot=short&apikey=trilogy";
  } 

if (action === "spotify-this-song") {
   fs.readFile("movies.txt", "utf8", function(error, data) {
    console.log(data);
    var dataArr = data.split(",");
    console.log(dataArr);
  });
 }


var keys = require("./keys.js");
var inspect = require('inspect');

console.log("liri.js is working");
// console.log(keys.spotify.id)


var spotifyCon = require('node-spotify-api'); 


var Spot = new spotifyCon({
  		id: keys.spotify.id,
   		secret: keys.spotify.secret
		});
 

console.log(Spot);



Spot.search({ type: 'track', query: 'snows in april',limit : 2 }, function(err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);
  };

// console.log( JSON.stringify(data,null,2)); 

var spotResult = JSON.stringify(data,null,2);

// console.log(spotResult);

var artist = data.tracks;
// console.log(JSON.stringify(data,null,2))


	// var artist = data.
});

module.exports= Spot.js;
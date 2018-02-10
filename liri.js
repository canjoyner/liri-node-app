
var keys = require("./keys.js");
var inspect = require('inspect');

console.log("liri.js is working");
// console.log(keys.spotify.id)


var spotifyCon = require('node-spotify-api'); 
var twitterCon = require('twitter');

var Spot = new spotifyCon({
  		id: keys.spotify.id,
   		secret: keys.spotify.secret
		});
 
var tweet = new twitterCon ({
 	consumer_key: keys.twitter.consumer_key,
  	consumer_secret: keys.twitter.CONSUMER_SECRET,
  	access_token_key: keys.twitter.ACCESS_TOKEN_KEY,
  	access_token_secret: keys.twitter.ACCESS_TOKEN_
 });

 // console.log(tweet);
 console.log(Spot);



Spot.search({ type: 'track', query: 'snows in april',limit : 2 }, function(err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);
  };

// console.log( JSON.stringify(data,null,2)); 

var spotResult = JSON.stringify(data,null,2);

console.log(spotResult);

var artist = data.tracks;
// console.log(JSON.stringify(data,null,2))


	// var artist = data.
});
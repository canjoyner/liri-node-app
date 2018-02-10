
var keys = require("./keys.js");

console.log("liritweet.js is working");

var twitterCon = require('twitter');

var tweet = new twitterCon ({
 	consumer_key: keys.twitter.consumer_key,
  	consumer_secret: keys.twitter.CONSUMER_SECRET,
  	access_token_key: keys.twitter.ACCESS_TOKEN_KEY,
  	access_token_secret: keys.twitter.ACCESS_TOKEN_
  	 // request_options: {
    // proxy: 'http://myproxyserver.com:1234'}
 });

 // console.log(tweet);
 tweet.get('favorites/list', function(error, tweets, response) {
  if (!error) {
    console.log(tweets);}
});


 var tweetId = lirijoy;
client.post('statuses/retweet/' + tweetId, function(error, tweet, response) {
  if (!error) {
    console.log(tweet);
  }
});


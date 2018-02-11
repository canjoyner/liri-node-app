
var keys = require("./keys.js");

console.log("liritweet.js is working");

var twitterCon = require('twitter');

var client = new twitterCon ({
 	consumer_key: keys.twitter.consumer_key,
  	consumer_secret: keys.twitter.consumer_secret,
  	access_token_key: keys.twitter.access_token_key,
  	access_token_secret: keys.twitter.access_token_secret
 });


// console.log(client)

var params = "liricanjoy";
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (error) 
  	{ console.log(error);}
   else{ 
    // for (var i = 0; (i < tweets.length) && (i < 20); i++) {
    //   console.log("I tweeted: " + tweets[i].text + "\n" + "At this time: " + tweets[i].created_at + "\n");
    console.log(tweets)
  }
// };
});


// client.get('statuses/update', params, callback);

var tweetResult = JSON.stringify(client,null,2);

// console.log(tweetResult);
module.exports= tweetResult.js;
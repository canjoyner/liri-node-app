var request = require('request');
console.log("movie time")
var moviestuff;


var pickMovie= function(){
var title = "cars";
var queryURL="https://www.omdbapi.com/?t=" + title + "&y=&plot=short&apikey=40e9cece";
//borrowed api key from perevious class assignment.  the one I requested is giving me an error/.


request(queryURL, function (error, response, body) {
  console.log('error:', error); // Print the error if one occurred
  // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log(body); 
  // var titleR=data.Title;
  // console.log(titleR)
  var moviestuff=body;
});

}


module.exports = moviestuff;
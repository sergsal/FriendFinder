//pulling in data from friends.js
var personData = require('../data/friends.js');
//initializing array to hold the difference in scores between the user and all people currently in the personData object.
var scoresArray = [];
//initializing sum array to hold the sum of the differences in scoresArray
var sumArray = [];
//function that gets the absolute value of the difference between user and stored users, this function helps push values into sumArray.
Array.prototype.SumArray = function (arr) {

 var difference = this.map(function (num, idx) {
  return Math.abs(num - arr[idx]);
 });

 return difference;
};

function add(a, b) {
 return a + b;
}
module.exports = function (app) {

 app.get('/api/friends', function (req, res) {
  res.json(personData);
 });

 app.post('/api/friends', function (req, res) {
  personData.push(req.body);
  console.log(req.body);
  for (i = 0; i < personData.length - 1; i++) {
   //finds absolute value of difference between form data and existing user data
   scoresArray.push(personData[i].scores.SumArray(req.body.scores));
   //takes absolute value and sums values, then pushes to sumArray.
   sumArray.push(scoresArray[i].reduce(add, 0))
  };
  //finds the index of the lowest value in sumArray
  var indexOfMinValue = sumArray.reduce((iMin, x, i, arr) => x < arr[iMin] ? i : iMin, 0);
  console.log(indexOfMinValue);
  //sends the index value of the lowest sum in sumArray, index value corresponds to the correct user in the personData object.
  res.send(personData[indexOfMinValue]);
  console.log(scoresArray);
  console.log(sumArray);
  //empty arrays after postin
  scoresArray=[];
  sumArray = [];
 });

};

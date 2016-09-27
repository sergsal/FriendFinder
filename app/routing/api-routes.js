var personData = require('../data/friends.js');
var scoresArray = [];
var sumArray = [];
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
  console.log(req.body.scores);
  var match = {};
  for (i = 0; i < personData.length - 1; i++) {
   scoresArray.push(personData[i].scores.SumArray(req.body.scores));
   sumArray.push(scoresArray[i].reduce(add, 0))
  };
  var indexOfMinValue = sumArray.reduce((iMin, x, i, arr) => x < arr[iMin] ? i : iMin, 0);
  console.log(indexOfMinValue);
  res.send(personData[indexOfMinValue]);
  console.log(scoresArray);
  console.log(sumArray);
 });

};

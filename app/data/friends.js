//including standard user for testing purposes.

var personArray = [
 {
  name: 'Sergio',
  photo: 'http://img.lum.dolimg.com/v1/images/Darth-Vader_6bda9114.jpeg',
  scores: [
   1,
   2,
   3,
   4,
   5,
   5,
   4,
   3,
   2,
   1
		]

	},
 {
  name: 'Billy',
  photo: 'http://img.lum.dolimg.com/v1/images/Darth-Vader_6bda9114.jpeg',
  scores: [
   5,
   2,
   3,
   2,
   1,
   3,
   4,
   3,
   5,
   1
		]

	}
];

//export module for use in api-routes.js
module.exports = personArray;

//var scoresArray = [];

//for (i=0; i< personArray.length; i++) {
// scoresArray.push(personArray[i].scores)
// };
//console.log(scoresArray)
//
//Array.prototype.SumArray = function (arr) {
//
//        var difference = this.map(function (num, idx) {
//          return Math.abs(num - arr[idx]);
//        });
//
//        return difference;
//    }
//var array1 = personArray[0].scores;
//var array2 = personArray[1].scores;
//var difference = array1.SumArray(array2);
//console.log(difference);
//
//for (i=1; i< personArray.length; i++) {
// scoresArray.push(personArray[i].scores.SumArray(personArray[i-1].scores));
// };
//console.log(scoresArray)
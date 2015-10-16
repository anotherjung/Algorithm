//1 loop through 1 to 100, and print 10
// for (var i=1; i<100; i++) {
// 	if (i==10) {
// 		break;
// 	} 
// }
// console.log(i);

//2 loop through 1 to 20, and print next until you reach 11
// for (var i=1; i<=20; i++ ) {
// 	if (i==11) {
// 		break;
// 	} else {
// 		console.log("next",i)
// 	}
// }
// console.log("reached",i);

//3 loop through any text, and print each squence until the end, then print the text
// var text = 'iamwenrock';
//  for (var i=1; i<text.length; i++) {
//  	if (i == text.length) {
//  		break;
//  	} else {
//  		console.log("",i)
//  	}
//  }
// console.log(text)

//4 print the sum of all odd numbers from 1 to 50
// var sum = 0;
// for (var i=1; i<50; i=i+2) {
// 	console.log(i)
// 	sum = sum + i;
// }
// console.log('sum is ',sum);

//5 given array of random numbers, iterate through the array and print each value
// var x = [1,3,5,7,11]
// for (var i=1; i<x.length; i++) {
// 	console.log(x[i]);
// }

//6 given array of random numbers, print out the max number in the array
//var x = [1,2,4,7,9,2,6]
// var x = [-1,-2,-4,-7,-9,-2,-6]
// //TIP: set first number in the array to be the max
// var max = x[0];
// for (var i=0; i<x.length; i++) {
// 	if (x[i] > max) {
// 		max = x[i]
// 	} 
// }
// console.log(max)


//7 given an array of random numbers, print out the avg
//var x = [2,2,2,7,100];
// var x = [-2,-2,-2,-7,-100];
// var sum = 0;
// for (var i=0; i<x.length; i++) {
// 	sum = sum + x[i];
// }
// //console.log('sum is ', sum);
// var avg = (sum / x.length);
// console.log('avg is ', avg);

//8 create an array of odd numbers, print out only odd numbers
// var y = [];
// for (var i=1; i<100; i=i+2) {
// 	y.push(i)
// }
// console.log(y);

//9 given an array, create an array of only values greater than a given number
// var x = [1,24,8,3, 0]
// var y = 7
// var z = []
// for (var i=0; i<x.length; i++) {
// 	if (x[i] > y) {
// 		z.push(x[i])
// 	}
// }
// console.log(z)

//10 given an array, create an array of values which is squared of the given array
// var x = [1,4,7,9,-9]
// var y = []
// for (var i=0; i<x.length; i++) {
// 	z = x[i] * x[i]
// 	y.push(z)
// }
// console.log(y)


//11 given an array with negative, print out only positive number 
// var x = [44, -4, 77, -3]
// var y = []
// for (var i=0; i<x.length; i++) {
// 	if (x[i] > 0){
// 		y.push(x[i])
// 	}
// }
// console.log(y)

//12 given an array, print out the max number, min number, and the avg
var x = [22,6,99,-5,0]
var min = x[0]
var max = x[0]
var sum = 0
for (var i=0; i<x.length; i++) {
	if (x[i] < min) {
		min = x[i]
	}
	if (x[i] > max) {
		max = x[i]
	}
	sum = sum + x[i]
}
console.log('min is ', min)
console.log('max is ', max)
var avg = sum / x.length
console.log('avg is ', avg)






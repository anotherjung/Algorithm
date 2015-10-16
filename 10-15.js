//1 given an array, print out the max, min avg
// var x = [1,33,77,95,3]
// var min = x[0]
// var max = x[0]
// var sum = 0

// for (var i=0; i<x.length; i++) {
// 	if ( x[i] < min ) {
// 		min = x[i]
// 	}

// 	if ( x[i] > max ) {
// 		max = x[i]
// 	}
// 	sum = sum + x[i]
// }
// console.log('min is ', min)
// console.log('max is ', max)
// var avg = sum / x.length
// console.log('avg is ', avg)

//2 given an array, shift each number to the front, first number should loop to the end
// var x = [1,44,77,99,-3]
// var y = x[0]
// for (var i=0; i<x.length; i++) {
// 	//console.log('1', x[i])
// 	//set the current x[i] to the next
// 	x[i] = x[i+1];
// 	//console.log('2', x[i])
// }
// x[x.length-1] = y
// console.log(x)

//3 given an array of numbers, replace all negative number with your name
// var x = [22,-77,99,-33]
// var name = 'batman'
// for (var i=0; i<x.length; i++) {
// 	if (x[i] < 0) {
// 		x[i] = name
// 	}
// }
// console.log(x)

//4 create an array with 10 numbers, generated randomly from 1 to 100, print out the array
// var x = []
// for (var i=0; i<10; i++) {
// 	//Math.random will return 0 to .9999, up to 0 but not 1
// 	//Math.floor will round the number down, removed the decimal 
// 	var random = Math.floor(Math.random()*101)
// 	x.push(random)
// }
// console.log(x)

//5 given an array of numbers, swap the first number with the last number without creating another array
// var x = [11,3,-99,44]
// var temp = x[0]
// x[0] = x[x.length-1]
// x[x.length-1] = temp
// console.log(x)

//6 given an array of numbers, reverse the numbers without creating another array
// var x = [1,2,3,4,5,6,7,8,9]
// for (var i=0; i<Math.floor(x.length/2); i++) {
// 	//take the first number as the temp
// 	var temp = x[i]
// 	console.log('temp', temp)
// 	//swap the last number with the first number - i
// 	x[i] = x[x.length - 1 - i]
// 	console.log('x[i]', x[i])
// 	//swap the temp number with last number - i
// 	x[x.length - 1 - i] = temp

// }
// console.log(x)

//7 given an array of numbers, insert a given number in a given spot
// var arr = [1,2,3,4]
// var x = 55
// var y = 2
// //adding extra spot
// arr.push(00)
// console.log('take 1',arr)
// //console.log(arr[arr.length-1])
// arr[arr.length -1] = arr[arr.length-2]
// console.log('take 2',arr)
// arr[arr.length -2] = arr[arr.length-3]
// console.log('take 3',arr)
// arr[y] = x
// console.log('take 4',arr)
// console.log('final',arr)
// arr[y] = x;
// console.log(arr)

//8 give any array of numbers, insert a given number in a given spot
// var arr = [1,2,3,4]
// var x = 55
// var y = 2
// //adding extra spot
// arr.push(00)

// //reverse for loop
// for (var i = arr.length-1; i > y; i--) {
// 	arr[i] = arr[i-1];
// }
// arr[y] = x;
// console.log(arr)

//9 given an array of positive and one or two negative numbers, remove all negative numbers without creating an array
// var arr = [1,-2,3,4]

// //expected output
// //[1,2,-1,-2]

// var len = arr.length
// for (var i=0; i<len; i++) {
// 	console.log('i',arr[i])

// 	arr.push(arr[0])
// 	console.log(arr)

// 	for (var j=1; j < arr.length; j++) {
// 		console.log('j',arr[j])
// 		arr[j-1] = arr[j];
// 	}

// 	if(arr[arr.length - 1] < 0) {
// 		arr.pop();
// 		arr.pop();
// 	} else {
// 		arr.pop();
// 	}

// }
// console.log(arr)

//10 write a function called iSum that take in number as an argument, solve it iterativerly

function iSum(num) {
	var sum = 0
	for(var i=0; i<= num; i++) {
		sum = sum + i
		console.log(i)
	}
	return sum
}
console.log(iSum(5))









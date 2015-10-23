//1 given an array, shift each number to the front, first number should loop to the end
var arr = [3,66,77,99,-1]
//store first number in temp
var temp = arr[0]
for (var i=0; i<arr.length; i++) {
	console.log(arr[i])
	//set the current index to be the next index
	arr[i] = arr[i+1];
}
//set temp to be the last index
arr[arr.length-1] = temp
console.log(arr)

//2 write a function called iSum that takes in a number as an argument, solve it iterativerly
// iSum(1)=1
// iSum(2)=1+2
// iSum(3)=1+2+3
// iSum(4)=1+2+3+4
// iSum(5)=1+2+3+4+5

function iSum(num) {
	var sum = 0
	for (var i=0; i<=num; i++) {
		//console.log(i)
		sum = sum + i
	}
	return sum
}
console.log(iSum(1))
console.log(iSum(2))
console.log(iSum(3))
console.log(iSum(4))
console.log(iSum(5))

//Everything that can be solved with recursion can be solved through iteration.  However this is not always true the other way around.
//3 write a funcation called rSum that takes in a number as an argument, solve it rescurion
//recursive functions call itself within its own implemenatation.  This can be done when the problem can be solved when it can be broken down to smaller version of the same solution unit it hits the base case.  
//base case is when the problem become so small, we can get some return value from it. 
// rSum(5)=rSum(4)+5
// rSum(4)=rSum(3)+4
// rSum(3)=rSum(2)+3
// rSum(2)=rSum(1)+2
// rSum(1)=1

// function rSum(num) {
// 	if (num === 1) {
// 		return 1
// 	} else {
// 		return rSum(num - 1) + num
// 	}
// }
// console.log(rSum(1))
// console.log(rSum(2))
// console.log(rSum(3))
// console.log(rSum(4))
// console.log(rSum(5))

//4 write a interially function iFactorial that behaves like the following
// iFactorial(1) = 1                  => 1
// iFactorial(2) = 2 * 1              => 2
// iFactorial(3) = 3 * 2 * 1          => 6
// iFactorial(4) = 4 * 3 * 2 * 1      => 24
// iFactorial(5) = 5 * 4 * 3 * 2 * 1  => 120


function iFactorial(num) {
	var multiplier = 1;
	for(var i=1; i<=num; i++) {
		multiplier *= i
	}
	return multiplier
}
console.log(iFactorial(1))
console.log(iFactorial(2))
console.log(iFactorial(3))
console.log(iFactorial(4))
console.log(iFactorial(5))


//5 write a recursive function rFactorial that behaves like the following:
// iFactorial(1) = 1                  => 1
// iFactorial(2) = 2 * 1              => 2
// iFactorial(3) = 3 * 2 * 1          => 6
// iFactorial(4) = 4 * 3 * 2 * 1      => 24
// iFactorial(5) = 5 * 4 * 3 * 2 * 1  => 120

// function iFactorial(num) {
// 	if (num == 1) {
// 		return 1
// 	} else {
// 		return num * iFactorial(num-1)
// 	}

// }
// console.log(iFactorial(1))
// console.log(iFactorial(2))
// console.log(iFactorial(3))
// console.log(iFactorial(4))
// console.log(iFactorial(5))


//6 write a iterative function iFibonacci 
// iFibonacci(0) = 0           => 0 static
// iFibonacci(1) = 1           => 1 static
// iFibonacci(2) = 1           => 1 
// iFibonacci(3) = 1 + 1       => 2  
// iFibonacci(4) = 1 + 2       => 3
// iFibonacci(5) = 2 + 3       => 5
// iFibonacci(6) = 3 + 5       => 8

// function iFibonacci (num) {
// 	var fibs = [0,1] 
// 	for (i=0; i<num; i++) {
// 		console.log('test',i,fibs)
// 		fibs.push(fibs[0] + fibs[1])
// 		fibs.shift()
// 	}
// 	return fibs[0]
// }
// console.log(iFibonacci(0))
// console.log(iFibonacci(1))
// console.log(iFibonacci(2))
// console.log(iFibonacci(3))
// console.log(iFibonacci(4))
// console.log(iFibonacci(5))
// console.log(iFibonacci(6))

//7 write a recursive function rFibonacci 
// iFibonacci(0) = 0        => 0 static
// iFibonacci(1) = 1        => 1 static
// iFibonacci(2) = 1     	=> 1 static
// iFibonacci(3) = iFibonacci(1) + iFibonacci(2)      => 2  
// iFibonacci(4) = iFibonacci(2) + iFibonacci(3)      => 3
// iFibonacci(5) = iFibonacci(3) + iFibonacci(4)      => 5
// iFibonacci(6) = iFibonacci(4) + iFibonacci(5)      => 8

// function rFibonacci(num) {
// 	if (num == 0) {
// 		return 0
// 	}
// 	if (num == 1 || num == 2) {
// 		return 1
// 	} else {
// 		return rFibonacci(num - 1) + rFibonacci(num - 2)
// 	}
// }
// console.log(rFibonacci(0));
// console.log(rFibonacci(1));
// console.log(rFibonacci(2));
// console.log(rFibonacci(3));
// console.log(rFibonacci(4));
// console.log(rFibonacci(5));


//8 When the property accessor is applied to the variable five, its type is converted to Object. This is called “boxing” and it relies on the Number constructor, which produces an Object, not a Number primitive. The second line of the example is equivalent to this:  (new Number(five)).three = 3;
// var five = 5;
// five.three = 3;
// console.log(five + five.three);


//9 Question: What is the value of foo.x?
// var foo = {n: 1};
// var bar = foo;
// foo.x = foo = {n: 2};
// console.log(foo.x)

//10 Question: What does the following code print?
console.log('one');
setTimeout(function() {
  console.log('two');
}, 0);
console.log('three');



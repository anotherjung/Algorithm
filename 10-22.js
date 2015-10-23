// var bob = new Object();
// bob.age = 34;
// console.log(bob.age);


// bob.setAge = function(newAge) {
// 	bob.age = newAge;
// }

// bob.getYearOfBirth = function () {
// 	return 2015 - bob.age;
// }

// console.log(bob.getYearOfBirth());

// var setColor = function(newColor) {
// 	this.color = newColor;
// }

// var wendy = new Object ();
// wendy.setColor = setColor;
// wendy.setColor('blue');
// console.log('wendy likes', wendy.color);

// //instance 
// //Tre is a constructor function because we use keyword to invoke it 
// function Tree (typeOfTree) {}
// console.log(Tree); //[Function: Tree]
// //Tree is both an object and a function, because functions are objects in JavaScript

// //bananaTree is an instarnce of Tree
// var bananaTree = new Tree ("banana");
// console.log(bananaTree);
// //banaTreee is an object that was created from the Tree Constructor function.


// var myObj = {name: "Richard", profession: "Developer"};
// console.log(myObj);
// console.log(myObj.name);
// console.log(myObj.profession);

// //you can use the prototype pattern
// function Employee () {}
// Employee.prototype.firstName = "Wen";
// Employee.prototype.lastName = "Rock";
// Employee.prototype.statDate = new Date();
// Employee.prototype.signedNDA = true;
// Employee.prototype.fullName = function () {
// 	return (this.firstName + " " + this.lastName);
// };

// var wendy = new Employee()
// console.log(wendy.fullName());
// console.log(wendy.signedNDA);
// console.log(wendy.startDate);

// //you can use the constructor pattern, a constructor function (Functions in JavaScript)
// function Worker (name, profession) {
// 	this.name = name;
// 	this.profession = profession;
// }

// //worker () is the constructor function because we use the new keyword below to invoke it
// var bluegirl = new Worker("WenRock", "Aerial")
// //Wenrock is a new object we create from the Employee() constructor function 
// console.log(bluegirl.name); //wenRock
// console.log(bluegirl.profession); //Aerial


// console.log(ispalindrome('popop'))

// function ispalindrome (word) {
// 	for (var i = word.length-1, j=0; i>=0 && j < word.length; i--, j++) {
// 		if (word[i] != word[j]) {
// 			return false;
// 		}
// 	}
// 	return true
// }


//write a recursive fuvcntion fFibonacci
// console.log(rFibonacci(0));
// console.log(rFibonacci(1));
// console.log(rFibonacci(2));
// console.log(rFibonacci(3));
// console.log(rFibonacci(4));
// console.log(rFibonacci(5));
// console.log(rFibonacci(51));

// function rFibonacci(num) {
// 	if (num == 0 ) {
// 		return 0
// 	}
// 	if (num == 1 || num == 2) {
// 		return 1
// 	} else {
// 		return rFibonacci(num - 1) + rFibonacci(num-2)
// 	}
// 	//console.log(11)
// }


// for (var i=0; i<100;i++) {
// 	var x = rFibonacci(i);
// 	if (x > 50) {
// 		//return x ;
// 		console.log(x)
// 		return x;
// 	}
// 	//console.log(x)
// 	//console.log(rFibonacci(11));
// }


//give an array, shift each number to the 




var prizes = ['Apple', 'Orange', 'Lemon'];
    
    for (var btnNum = 0; btnNum < prizes.length; btnNum++) {
 
                // tell her what she's won!
                console.log(prizes[btnNum]);
         };
    }
// // bob is an constructor object
// // var bob  = new Object();
// // bob.name = "Bob Smith";
// // bob.age = 30;
// // console.log(bob);

// //creating and using an object method
// //an object method is stored as a function definition, in an object property
// var person = { 
// 	fname: "jon",
// 	lname: "doe",
// 	fullName: function(){ 
// 		return this.fname + " " + this.lname;
// 	}
// };
// //console.log(person.fullName());

// //use built-in method
// var name = "batman";
// //console.log(name.toUpperCase());

// //defining method to an object is done inside the constructor function
function app(firstName, lastName, age, eyeColor) {
	this.firstName = firstName;
	this.lastName = lastName;
	this.age = age;
	this.eyeColor = eyeColor;
	this.changeName = function (name) {
		this.firstName = name;
	}
}

var object = new app("superman","wendy",11,"blue");
console.log('constructor1:', object.firstName, object.lastName );
object.changeName("batman");
console.log('constructor2:', object.firstName, object.lastName );


//standard way to create an object protoype is to use an object constructor function
function person3(first, last, age, eyeColor) {
	this.firstName = first;
	this.lastName = last;
	this.age = age;
	this.eyeColor = eyeColor;
}
//with a constructor function, you can use the new keyword to create new objects from the smae protoype
var myFather2 = new person3("jo", "bb", 11, "blue");
var myMother2 = new person3("wendy", "cc", 22, "green");
console.log(myFather2.firstName + " " + myFather2.age);
console.log(myMother2.firstName + " " + myMother2.age);




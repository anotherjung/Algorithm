var bob = new Object();
bob.age = 34; 
console.log(bob.age);

//1
bob.setAge = function(newAge) {
	bob.age = newAge;
};

bob.getYearOfBirth = function () {
	return 2015 - bob.age;
}

console.log(bob.getYearOfBirth());

//1 use method to change age
bob.setAge(21);

console.log(bob.getYearOfBirth());


//2 using this keyword
var setColor = function(newColor) {
	this.color = newColor;
};

var wendy = new Object ();
wendy.setColor = setColor;
wendy.setColor('blue');
console.log('wendy likes', wendy.color);



//instance -OOP baby!
//Tree is a constructor function because we will use keyword to invoke it
function Tree (typeOfTree) {}
console.log(Tree); //[Function: Tree] 
//Tree is both an object and a function, because functions are objects in JavaScript.  

//bananaTree is an instance of Tree
var bananaTree = new Tree ("banana");
console.log(bananaTree); //Tree {} 
//banaTree is an object that was created from the Tree constructor function.  We say that the bananaTree object is an instance of the Tree object.  bananaTree can have its own methods and properties and inherit methods and properties from the Tree object, as we will dicuss in detail when we study inheritance below


//ubiquitous object literal pattern:
var myObj = {name: "Richard", profession: "Developer"};
console.log(myObj)
console.log(myObj.name)
console.log(myObj.profession)


//you can use the prototyoe pattern, adding each method and property directly on the object's protoype
function Employee () {}
Employee.prototype.firstName = "Wen";
Employee.prototype.lastName = "Rock";
Employee.prototype.startDate = new Date();
Employee.prototype.signedNDA = true;
Employee.prototype.fullName = function () {
	return (this.firstName + " " + this.lastName);
};

var wendy = new Employee() 
console.log(wendy.fullName());
console.log(wendy.signedNDA);
console.log(wendy.startDate);


//you can use the constructor pattern, a constructor function (Functions in JavaScript)
function Worker (name, profession) {
	this.name = name;
	this.profession = profession;
} 
//Worker () is the constructor function because we use the <em>new</em> keyword below to invoke it. 
var bluegirl = new Worker("WenRock", "Aerial") 
//WenRock is a new object we create from the Employee() constructor function
console.log(bluegirl.name); //WenRock 
console.log(bluegirl.profession); //Aerial





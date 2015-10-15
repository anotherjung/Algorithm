//Write a program (sets of instructions) that would print all the numbers from 1 to 10.
// for (var i=1;i<10;i++) {
// 	console.log(i)
// }


//Print odd numbers between 1-10
// for (var i=1;i<10;i++) {
// 	if (!i%2===0) {
// 		console.log(i)
// 	} 
// }

//print even numbers between 1-10
// for (var i=1;i<10;i++) {
// 	if (i%2===0) {
// 		console.log(i)
// 	}
// }


//goes throug each value in array 
//x = ['',5,'one', 'two', 'three', 'four']
// x = 'i like blue';
// y = x.split(" ");
// z = [];
 
// for (var i=0;i<y.length;i++) {
// 	console.log('start ',y.length)
// 	indexArr = Math.floor(Math.random()*y.length)
// 	console.log('random ', indexArr)
// 	z.push(y[indexArr])
// 	console.log('push ', z)
// 	y.splice(indexArr,1)
// 	console.log('new y arrary ', y)

// }
// console.log('end ',z)



// x = 'i like blue';
// y = x.split(" ");
// z = [];
 
// while (y.length) {
// 	console.log('start ',y.length)
// 	indexArr = Math.floor(Math.random()*y.length)
// 	console.log('random ', indexArr)
// 	z.push(y[indexArr])
// 	console.log('push ', z)
// 	y.splice(indexArr,1)
// 	console.log('new y arrary ', y)

// }
// console.log('end ',z)




// x = 'blue like i';
// y = x.split(" ");
// z = [];
 
// while (y.length) {
// 	console.log('start ',y.length)
// 	indexArr = Math.floor(Math.random()*y.length)
// 	console.log('random ', indexArr)
// 	z.push(y[indexArr])
// 	console.log('push ', z)
// 	y.splice(indexArr,1)
// 	console.log('new y arrary ', y)

// }
// console.log('end ',z)



var input = "cat, atc, dog, gdo, dell, god, ledl";
var words = input.split(", ");

for ( var i = 0; i < words.length; i++) {

    var word = words[i];
    var alphabetical = word.split("").sort().join("");

    for (var j = 0; j < words.length; j++) {
    	//console.log('word: ', word)

        if (i === j) {
            continue;
        }

        var other = words[j];
        if(alphabetical === other.split("").sort().join("")){
            console.log(word + " - " + other + " (" + i + ", " + j + ")");
        }
    }
}




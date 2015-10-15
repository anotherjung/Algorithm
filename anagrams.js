//app will match anagrams

//string of words, split of comment and space
var input = "cat, atc, dog, gdo, dell, god, ledl";
//define what to split into array
var words = input.split(", ");

console.log(words)
//first loop to array
for ( var i = 0; i < words.length; i++) {

    var word = words[i];
    var alphabetical = word.split("").sort().join("");
    console.log(alphabetical)

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
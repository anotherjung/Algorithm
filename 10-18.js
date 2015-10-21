console.log(ispalindrome('popop'))

// function ispalindrome (word) {
// 	for (var i = word.length-1, j = 0; i >= 0 && j < word.length; i--, j++ ) {
// 		if (word[i] == word[j]) {
// 			continue;
// 		} else {
// 			return false;	
// 		}
// 	}
// 	return true;
// }

// function ispalindrome (word) {
// 	for (var i = word.length-1, j = 0; i >= 0 && j < word.length; i--, j++ ) {
// 		if (word[i] != word[j]) {
// 			return false;	
// 		}
// 	}
// 	return true;
// }

function ispalindrome (word) {
	for (var i = word.length-1, j = 0; i >= 0 && j < word.length; i--, j++ ) {
		console.log('i',i)
		console.log('j',j)
		if (word[i] != word[j]) {
			return false;
		}
	}
	return true;
}

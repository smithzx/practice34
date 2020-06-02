var sentence = "Чего-с изволите-с?Барин-с!";
console.log(sentence, fixSentence(sentence));

function fixSentence(sentence) {

	var words = sentence.split(/[\.\?\,;\:\! ]/);
	var i = 0;

	// remove "" from words array
	while (words.indexOf("") !== -1) {
		words.splice(words.indexOf(""), 1);
	}

	// find equal chars
	var firstWordChars = words[0].split("");
	var eqChars = [];
	for (var ch = 0; ch < firstWordChars.length; ch++) {
		if (words.every(function (word) {
			return (word.toLowerCase().indexOf(firstWordChars[ch].toLowerCase()) !== -1);
		})) {
			eqChars.push(firstWordChars[ch]);
		}
	}
	eqChars.sort();// '-' char should be first in regexp

	return sentence.replace(new RegExp("[" + eqChars.join("") + "]", "gi"), "");
}
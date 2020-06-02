var expr = "3.5 землекопа +4 поросенка *10 рублей - 5.5 $ /5 человек =";
console.log(expr, calculateExpression(expr));

function calculateExpression(rawString) {

	var expr = rawString.replace(/[^\d\.\+\-\*\/]/g, "");
	var chars = expr.split("");
	var numbers = [];		//numbers array
	var operators = [];		//operators array
	var i = 0;
	var lastCharIsNumber = true;
	numbers[i] = "";

	// parse the expression
	for (var ch = 0; ch < chars.length; ch++) {
		if (isNaN(parseInt(chars[ch])) && chars[ch] !== "." && !lastCharIsNumber) {
			operators[i] = chars[ch];
			i++;
			numbers[i] = "";
			lastCharIsNumber = true;
		} else {
			numbers[i] += chars[ch];
			lastCharIsNumber = false;
		}
	}

	// calculate the expression
	var result = parseFloat(numbers[0]);
	for (var op = 0; op < operators.length; op++) {
		var num = parseFloat(numbers[op + 1]);
		switch (operators[op]) {
			case "+":
				result += num;
				break;
			case "-":
				result -= num;
				break;
			case "*":
				result *= num;
				break;
			case "/":
				result /= num;
				break;
			default:
				throw "Unsupported operator!";
		}
	}

	return result.toFixed(2);// output result with accuracy of 2 decimal places
}
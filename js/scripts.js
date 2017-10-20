
// Business (or back-end) logic:

var add = function(number1, number2) {
	return number1 + number2;
};

var multiply = function(number1, number2) {
	return number1 * number2;
};

var subtract = function(number1, number2) {
	return number1 - number2;
};

var divide = function(number1, number2) {
	return number1 / number2;
};

// Everything below this line is user interface (or front-end) logic:

$(document).ready(function() {
	$("form#calculator").submit(function(event) {
		event.preventDefault();
		var number1 = parseFloat($("#input1").val());
		var number2 = parseFloat($("#input2").val());
		var operator = $("input:radio[name=operator]:checked").val();
		console.log("1st number: " + number1);
		console.log("2nd number: " + number2);
		console.log("operator: " + operator);
		var result = add(number1, number2);
		$("#output").text(result);
	});
});

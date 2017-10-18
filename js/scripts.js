
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
	$("form#add").submit(function(event) {
		event.preventDefault();
		var number1 = parseFloat($("#add1").val());
		var number2 = parseFloat($("#add2").val());
		var result = add(number1, number2);
		$("#outputadd").text(result);
	});
	$("form#subtract").submit(function(event) {
		event.preventDefault();
		var number1 = parseInt($("#subtract1").val());
		var number2 = parseInt($("#subtract2").val());
		var result = subtract(number1, number2);
		$("#outputsubtract").text(result);
	});
	$("form#multiply").submit(function(event) {
		event.preventDefault();
		var number1 = parseInt($("#multiply1").val());
		var number2 = parseInt($("#multiply2").val());
		var result = multiply(number1, number2);
		$("#outputmultiply").text(result);
	});
	$("form#divide").submit(function(event) {
		event.preventDefault();
		var number1 = parseInt($("#divide1").val());
		var number2 = parseInt($("#divide2").val());
		var result = divide(number1, number2);
		$("#outputdivide").text(result);
	});
});

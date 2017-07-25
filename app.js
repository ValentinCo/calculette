$("#buttonForm").click(function() {
	
	var input1 = $("#input1").val();
	var input2 = $("#input2").val();
	var operateur = $("#selectOperation").val();
	var result;
	// console.log(input1);
	// console.log(input2);
	// console.log(operateur);

	if (operateur === "+") {
	result = add(input1, input2);


	console.log(result);
}else if (operateur === "-"){
	result = sub(input1, input2);
	console.log(result);
} else if (operateur === "*"){
	result = multi(input1, input2);
	console.log(result);
} else if (operateur === "/") {
	result = divide(input1, input2);
	console.log(result);
}
$( "#result" ).text(result);
});




function add (a, b) {
	return parseInt(a) + parseInt(b);
}

function multi (a, b) {
	return parseInt(a) * parseInt(b);
}

function divide (a, b) {
	return parseInt(a) / parseInt(b);
}

function sub (a, b) {
	return parseInt(a) - parseInt(b);
}



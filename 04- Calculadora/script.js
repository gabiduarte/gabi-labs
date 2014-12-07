$(document).ready(function() {

	$(".regbutton, .b0, .bequal").hover(function() {
		$(this).animate({backgroundColor: "#595959"});
	}, function() {
		$(this).animate({backgroundColor: "#000000"});
	});

}); 

function numScreen(id) {
	document.getElementById("screen").innerHTML += parseFloat(document.getElementById(id).value);
}

function opScreen(op) {
	document.getElementById("screen").innerHTML +=" " + op + " ";
}

function floatScreen(op) {
	document.getElementById("screen").innerHTML +=  op;
}
function enterButton() {
	document.getElementById("screen").innerHTML = eval(document.getElementById("screen").innerHTML);
} 
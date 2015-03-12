$(document).ready(function () {
	$("button").click(function () {
		function hex() {
			return Math.floor(Math.random() * 256).toString(16);
		}
		var color = '#' + hex() + hex() + hex();
		$('body').css('background-color', color);
		$('p').html('Your color is ' + color);
	});
});
//Console Notes
console.log('This was my "Hello World" project back when I started to learn Javascript (probably september 2014). \n' +
'For this tiny study session, I used http://jquery.com/, Jennifer Dewalt\'s idea for day 3 (http://jenniferdewalt.com/) and Font Awesome for cool icons');
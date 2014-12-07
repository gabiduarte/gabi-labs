$(document).ready(function () {
	var hexColor;
	function getHex() {
			function color() {
				return Math.floor(Math.random()*256).toString(16)
			}
		hexColor = "#"+color()+color()+color();
		return hexColor;
	}
		$("#button").click(function () {
			$('body').css('background-color', getHex());
			$(this).text("Your color is  \n " + hexColor.toUpperCase());
		
	});
	
	
});
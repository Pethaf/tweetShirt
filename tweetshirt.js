window.onload = function()
{
	var canvas = document.getElementById("canvas");
	var painter = canvas.getContext("2d");
	painter.font = "30px Arial";
	painter.fillText("Hello World", 10,50);
}
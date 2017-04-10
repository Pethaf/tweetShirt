window.onload = function()
{
	var canvas = document.getElementById("canvas");
	var painter = canvas.getContext("2d");
	painter.font = "30px Arial";
	painter.fillText("Hello World", 10,50);
	painter.fillRect(280,50,100,100);
	document.getElementById("previewButton").addEventListener("click",previewFunction);
	document.getElementById("resetButton").addEventListener("click",resetFunction);
}

function previewFunction() 
{
	function getSelection(theProperty)
	{
		var tmp = document.getElementsByName(theProperty)[0];
		return tmp.options[tmp.selectedIndex].text;
	}
	var backgroundColor = getSelection("backgroundColor");
	var foregroundColor = getSelection("foregroundColor");
	var shape = getSelection("shape");
	console.log(backgroundColor);
	console.log(foregroundColor);
	console.log(shape);
}

function drawShape(numberOfShapes, shape, foregroundColor, backgroundColor)
{
	var canvas = document.getElementById("canvas");
	var painter = canvas.getContext("2d");
	function drawSquare(numberOfShapes)
	{
		if(numberOfShapes != 0)
		{
			var randX = Math.round(canvas.width*Math.random());
			var randY = Math.round(canvas.height*Math.random());
			var rectWidth = 10;

		}
	}
}
function resetFunction()
{
	var canvas = document.getElementById("canvas");
	var painter = canvas.getContext("2d");
	var oldStyle = painter.fillStyle;
	painter.fillStyle = "#FFFFFF";
	painter.fillRect(0,0,canvas.width,canvas.height);
	painter.fillStyle = oldStyle;
}
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

function drawSquare(numberOfShapes,canvas,context)
	{
		if(numberOfShapes != 0)
		{
			var randX = Math.round(canvas.width*Math.random());
			var randY = Math.round(canvas.height*Math.random());
			var w = Math.round(Math.random()*40);
			context.fillStyle ="lightblue";
			context.fillRect(randX,randY,w,w);
			drawSquare(numberOfShapes-1,canvas,context);
		}
	}
function drawShape(numberOfShapes, shape, foregroundColor, backgroundColor,context)
{
	function drawSquare(numberOfShapes)
	{
		if(numberOfShapes != 0)
		{
			var randX = Math.round(canvas.width*Math.random());
			var randY = Math.round(canvas.height*Math.random());
			var w = Math.round(Math.random()*40);
			context.fillStyle ="lightblue";
			context.fillRect(randX,randY,w,w);
			drawSquare(numberOfShapes-1);
		}
	}
	drawSquare(numberOfShapes);

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
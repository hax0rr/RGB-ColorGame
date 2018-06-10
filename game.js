// // js
// var color = [
// 			"rgb(255, 0, 0)",
// 			"rgb(0, 255, 0)",
// 			"rgb(0, 0, 255)",
// 			"rgb(255, 255, 0)",
// 			"rgb(255, 0, 255)",
// 			"rgb(0, 255, 255)"
// ];	
// var pickedcolor = color[3];
var numOfSquares = 6;
var color = generateRandomColors(numOfSquares);
var h1selector = document.querySelector("h1");
var pickedcolor = pickColor();
var res = document.querySelector("#result");
var colorDisplay = document.querySelector("#colorDisplay");
var easybtn = document.querySelector("#easybtn");
var hardbtn = document.querySelector("#hardbtn");
colorDisplay.textContent = pickedcolor;
var colorbox = document.querySelectorAll(".square");


var btn = document.querySelector("#newcolor");

for(var i=0;i<colorbox.length;i++){
	colorbox[i].style.backgroundColor = color[i];
	// add click listeners
	colorbox[i].addEventListener("click",function(){
		var clickedColor = this.style.backgroundColor;
		if(clickedColor === pickedcolor){
			//right color clicked 
		res.textContent = "Correct";
		for(var x=0;x<colorbox.length;x++){
			colorbox[x].style.backgroundColor = clickedColor;
		}
		h1selector.style.backgroundColor = clickedColor;
		btn.textContent  = "Play Again?";
		}
		else{
			this.style.backgroundColor = "#232323";
			res.textContent = "Try again";
		}
	});
}
function pickColor(){
	var index = Math.floor(Math.random() * color.length);
	return color[index];
}
function generateRandomColors(num){
	// make array
	var arr = [];
	//generate num random colors
	for(var i=0;i<num;i++){
		// get random color and push in rray

		arr.push(randomColor());
	}
	//return the array
	return arr;
}
function randomColor(){
	// red from 0 to 255
	var r = Math.floor(Math.random() *256);
	//green
	var g = Math.floor(Math.random() *256);
	//blue
	var b = Math.floor(Math.random() *256);

	return "rgb(" +r +", " +g +", " +b +")";
}
// Button

btn.addEventListener("click",function(){
	// generate new colors array
	color = generateRandomColors(numOfSquares);
	pickedcolor = pickColor();
	// change colorDisplay to match  of picked color
	colorDisplay.textContent = pickedcolor;
	// actually dislay boxes of colors
	for(var i=0;i<colorbox.length;i++){
	colorbox[i].style.backgroundColor = color[i];
	}
	h1selector.style.backgroundColor = "steelblue";
	res.textContent = "";
	this.textContent = "New Color";
});

// Buttons Easy and Hard

easybtn.addEventListener("click",function(){
	this.classList.add("selected");
	hardbtn.classList.remove("selected");
	numOfSquares = 3;
	h1selector.style.backgroundColor = "steelblue";
	color = generateRandomColors(numOfSquares);
btn.textContent = "New Color";
	pickedcolor = pickColor();
	colorDisplay.textContent = pickedcolor;
		res.textContent = "";
	for(var i = 0 ;i<colorbox.length;i++){
		if(color[i]){
			colorbox[i].style.backgroundColor=color[i];
		}
		else{
			colorbox[i].style.display = "none";
		}
	}
});
hardbtn.addEventListener("click",function(){
	this.classList.add("selected");
	easybtn.classList.remove("selected");
	h1selector.style.backgroundColor = "steelblue";
	btn.textContent = "New Color";
		res.textContent = "";
	numOfSquares = 6;
	color = generateRandomColors(numOfSquares);
	pickedcolor = pickColor();
	colorDisplay.textContent = pickedcolor;
	for(var i = 0 ;i<colorbox.length;i++){
		
			colorbox[i].style.backgroundColor=color[i];
		
			colorbox[i].style.display = "block";
		
	}
});
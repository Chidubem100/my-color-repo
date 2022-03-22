var numSquares = 6;
var colours = generateRandomColours(numSquares);
    resetButton = document.querySelector("#reset");
    hardMode = document.getElementById("hardBtn");
    easyMode = document.getElementById("easyBtn");
    button  =    document.querySelector(".drake");
    body    =    document.querySelector("body");
    squares =    document.querySelectorAll(".square");
    colourDisplay = document.getElementById("uju");
    message  =   document.getElementById("nazo");
    h1     = document.querySelector("h1");
    pickedColour = pickColour();



colourDisplay.textContent = pickedColour;


for (var  i = 0; i < squares.length; i++){
	squares[i].style.backgroundColor = colours[i];

	//add clickListener to square
	squares[i].addEventListener("click", function(){
		//grab colour of picked quare
		var clickedColour = this.style.backgroundColor;
		// compare colour to picked colour
		if(clickedColour === pickedColour){
			message.textContent = "correct"
			resetButton.textContent = "Play Again?"
			changeColours(clickedColour);
			h1.style.backgroundColor = clickedColour;
		}else{
			this.style.backgroundColor = "white";
			message.textContent = "Try Again"
		}
	});
}

resetButton.addEventListener("click", function(){
	// generate randomcolour
	colour = generateRandomColours(numSquares);
    // pick a new colour
    pickedColour = pickColour();
    // change colour display to match picked colour
    colourDisplay.textContent = pickedColour;
    message.textContent = "";
    this.textContent = "New Game";
    // change colours of square
    for (var i = 0; i < squares.length; i++){
    	squares[i].style.backgroundColor = colours[i];
    }
    h1.style.backgroundColor = "white";
});

hardMode.addEventListener("click", function(){
	easyMode.classList.remove("selected");
	hardMode.classList.add("selected");
	numSquares = 6;
	colours = generateRandomColours(numSquares);
	pickedColour = pickColour();
	colourDisplay.textContent = pickedColour;
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = colours[i];
		squares[i].style.display = "block";
	}
});

easyMode.addEventListener("click", function(){
	easyMode.classList.add("selected");
	hardMode.classList.remove("selected");
	numSquares = 3;
	colours = generateRandomColours(numSquares);
	pickedColour = pickColour();
	colourDisplay.textContent = pickedColour;
	for (var i = 0; i < squares.length; i++) {
		if(colours[i]){
			squares[i].style.backgroundColor = colours[i];
		} else {
			squares[i].style.display = "none";
		}
	}
});

function changeColours(colour){
	//loop through all squares
	for (var i = 0; i < squares.length; i++) {
		// change each colour to match given colour
		squares[i].style.backgroundColor = colour;
	}
}

function pickColour(){
 var random = Math.floor(Math.random() * colours.length);
 return colours[random];
}
function generateRandomColours(num){
	// make an empty array
	var arr = []
	// add num random colours to array
	for (var i = 0; i < num; i++) {
		arr.push(randomColour());
	}
	// return the array
	return arr;
}
function randomColour(){
   var r = Math.floor(Math.random() * 256);
   var g = Math.floor(Math.random() * 256);
   var b = Math.floor(Math.random() * 256);
   return "rgb(" + r + ", " + g + ", " + b + ")";
}
button.addEventListener("click", function(){
	document.body.classList.toggle("change")
});
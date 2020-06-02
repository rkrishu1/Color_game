//  var colors=[
// "rgb(255 , 0, 0)",
// "rgb(255 ,255, 0)",
// "rgb(0, 255, 0)",
// "rgb(0, 255, 255)",
// "rgb(0, 0, 255)",
// "rgb(255, 0 , 255)",
// ]



var colors=generateRandomColors(6);
var squares=document.querySelectorAll(".square");//select all squares first
// var pickedColor=colors[3];
var pickedColor=pickColor();          //function is used to pick random color from the array
var colorDisplay=document.getElementById('colorDisplay');
 var messages=document.querySelector("#message");//it display whether option is correct or wrong
 var h1=document.querySelector("h1");
 var resetButton=document.querySelector("#reset");
  

  resetButton.addEventListener("click",function(){
  colors=generateRandomColors(6);//generate random colors
  pickedColor=pickColor();//pick the new random color
colorDisplay.textContent=pickedColor;// changes color display to match picked color
this.textContent="New Colors"
messages.textContent ="";
    for (var i = 0; i <squares.length; i++) {     // change color of all sqaures

squares[i].style.backgroundColor=colors[i];
                                   
}
h1.style.background=rgb(33, 227, 191);// reset back h1 to original color on start of new game
 });



colorDisplay.textContent=pickedColor;
for (var i = 0; i <squares.length; i++) {

squares[i].style.backgroundColor=colors[i];


squares[i].addEventListener("click",function () {
	// alert("square are clicked");
	// ** grab color of clicked square
 var clickedColor = this.style.backgroundColor; 
 // **compare color to picked color 
 if (clickedColor === pickedColor) {
// alert("correct");
messages.textContent="Correct!";
resetButton.textContent="Play Again?";
changeColors(clickedColor);//as we grab color using clickedColor and when it is true all color matches to right color
h1.style.background=rgb(33, 227, 191);
}
else{
	// alert("wrong");
	this.style.backgroundColor="#232323";//change  color to background color if it did'nt match
		messages.textContent="Try Again";//it display try again when user choose wrong answer
}
});
}

function changeColors(color){   //it matches whole color with correct color when when user guess it right
 	for (var i = 0; i < squares.length; i++) //loop through all squares{
 		squares[i].style.backgroundColor=color;
 }

function pickColor(){
 var random = Math.floor(Math.random() * colors.length)	//pick random number //Math.random is used to pick random colors from the array and Math.floor is used to give integer vlaue rather than the float
   return colors[random];//returns color 

}


// it generate random color
function generateRandomColors(num){
	var arr=[] //arr will made when we push value in it from function randomColor
 for (var i = 0; i < num; i++) //repeat num times
  {
          arr.push(randomColor());                          //get random color and push into an array with the help of randomColor() function

 }
 return arr;
}

function randomColor() {
var r=Math.floor(Math.random() * 256); //pick a red from 0-255//math.random gives value between 0-1// range of rgb varies from 0-255
var g=Math.floor(Math.random() * 256); //pick a green
var b=Math.floor(Math.random() * 256); // pick a blue
// 	"rgb(r,g,b)"
 return "rgb(" + r + ", " + g + ", " + b +")";
}


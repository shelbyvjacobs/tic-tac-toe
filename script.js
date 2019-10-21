//Pseudocode
// Define the elements
// 	create a variable for each box
const gameBoard = document.querySelector("#gameBoard");
const boxes = document.querySelectorAll(".box");
const A1 = document.querySelector("#A1");
const A2 = document.querySelector("#A2");
const A3 = document.querySelector("#A3");
const B1 = document.querySelector("#B1");
const B2 = document.querySelector("#B2");
const B3 = document.querySelector("#B3");
const C1 = document.querySelector("#C1");
const C2 = document.querySelector("#C2");
const C3 = document.querySelector("#C3");
let redOrBlue = 0;

function determineWinner () {
//determine all scenarios; conditional statement
	//row1
	if (A1.style.backgroundColor == "red" && A2.style.backgroundColor == "red" && A3.style.backgroundColor == "red"){
		console.log("Red team wins!")
	//row2
	} else if (B1.style.backgroundColor == "red" && B2.style.backgroundColor == "red" && B3.style.backgroundColor == "red"){
		console.log("Red team wins!")
	//row3
	} else if (C1.style.backgroundColor == "red" && C2.style.backgroundColor == "red" && C3.style.backgroundColor == "red"){
		console.log("Red team wins!")
	//column1
	} else if (A1.style.backgroundColor == "red" && B1.style.backgroundColor == "red" && C1.style.backgroundColor == "red"){
		console.log("Red team wins!")
	//column2
	} else if (A2.style.backgroundColor == "red" && B2.style.backgroundColor == "red" && C2.style.backgroundColor == "red"){
		console.log("Red team wins!")
	//column3
	} else if (A3.style.backgroundColor == "red" && B3.style.backgroundColor == "red" && C3.style.backgroundColor == "red"){
		console.log("Red team wins!")
	//diagonal from top left
	} else if (A1.style.backgroundColor == "red" && B2.style.backgroundColor == "red" && C3.style.backgroundColor == "red"){
		console.log("Red team wins!")
	//diagonal from top right
	} else if (A3.style.backgroundColor == "red" && B2.style.backgroundColor == "red" && C1.style.backgroundColor == "red"){
		console.log("Red team wins!")
	} else {
		console.log("blah blah blah")
	}
};

//eventlisteners & determine if it's red or blue

	for (let i=0; i<boxes.length; i++){
		boxes[i].addEventListener("click", function(evt){
			evt.preventDefault();
			if (redOrBlue%2 === 0){
				this.style.backgroundColor = "red"
				redOrBlue = redOrBlue +=1;
				console.log("Blue team's turn.")
					//change to .innerText
			} else {
				this.style.backgroundColor = "blue"
				redOrBlue = redOrBlue +=1;
				console.log("Red team's turn.")
					//change to .innerText
			} 
		})
	}
/*
	General UI elements
*/

var movesContainer = document.createElement("div");

movesContainer.className = "moves-container";

var staticText = document.createElement("span");
var moves = document.createElement("span");

staticText.textContent = "Moves: ";
moves.textContent = 0;

movesContainer.appendChild(staticText);
movesContainer.appendChild(moves);

document.body.appendChild(movesContainer);
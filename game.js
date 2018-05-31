 var prompt = require('prompt');

var board = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '];
var xMove = true;

var printBoard = function() {
	if (xMove) {
		console.log("X's turn");
	} else {
		console.log("O's turn");
	}

	console.log('Enter a number between 1-9 to make your move');


	return '\n' +
        ' ' + board[0] + ' | ' + board[1] + ' | ' + board[2] + '\n' +
        ' ---------\n' +
        ' ' + board[3] + ' | ' + board[4] + ' | ' + board[5] + '\n' +
        ' ---------\n' +
        ' ' + board[6] + ' | ' + board[7] + ' | ' + board[8] + '\n';
}

var makeMove = function() {

	if (checkWinner) {
		if (xMove) {
			console.log("X Wins!");
		} else {
			console.log("O Wins!");
		}
	}

}

var checkWinner = function() {
	if (board[0] === board[1] === board[2]) {
		return true;
	} else if (board[3] === board[4] === board[5]) {
		return true;
	} else if (board[6] === board[7] === board[8]) {
		return true;
	} else if (board[0] === board[3] === board[6]) {
		return true;
	} else if (board[1] === board[4] === board[7]) {
		return true;
	} else if (board[2] === board[5] === board[8]) {
		return true;
	} else if (board[0] === board[4] === board[8]) {
		return true;
	} else if (board[2] === board[4] === board[6]) {
		return true;
	}

	return false;
}

var makeMove = function() {
	prompt.start();

	prompt.get(['Move'], function (err, result) {
	  if (err) { return onErr(err); }
	  if (xMove) {
	  	board[result.Move - 1] = 'X';
	  } else {
	  	board[result.Move - 1] = 'O';
	  }
	  console.log(printBoard());

		if (checkWinner()) {
			if (xMove) {
				console.log("X Wins!");
			} else {
				console.log("O Wins!");
			}
		}

		xMove = !xMove;

	  makeMove();
	});
}

console.log(printBoard());
makeMove();



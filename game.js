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

var checkWinner = function(board) {
	if (board[0] !== ' ' && board[0] === board[1] && board[0] === board[2]) {
		return true;
	} else if (board[3] !== ' ' && board[3] === board[4] && board[3] === board[5]) {
		return true;
	} else if (board[6] !== ' ' && board[6] === board[7] && board[6] === board[8]) {
		return true;
	} else if (board[0] !== ' ' && board[0] === board[3] && board[0] === board[6]) {
		return true;
	} else if (board[1] !== ' ' && board[1] === board[4] && board[1] === board[7]) {
		return true;
	} else if (board[2] !== ' ' && board[2] === board[5] && board[2] === board[8]) {
		return true;
	} else if (board[0] !== ' ' && board[0] === board[4] && board[0] === board[8]) {
		return true;
	} else if (board[2] !== ' ' && board[2] === board[4] && board[2] === board[6]) {
		return true;
	} else {
		return false;
	}
}

var newGame = function(winner) {
	console.log(winner + " Wins! Type yes to play again!");
	prompt.start();

	prompt.get(['Restart'], function (err, result) {
	  if (err) { return onErr(err); }
	  if (result.Restart === 'yes') {
	  	board = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '];
	  	console.log(printBoard());
	  	makeMove();
	  }
	});
}

var makeMove = function() {
	prompt.start();

	prompt.get(['Move'], function (err, result) {
	  if (err) { return onErr(err); }

	  if (board[result.Move - 1] !== ' ') {
	  	console.log('This is an Invalid Move!');
	  	makeMove();
	  } else {	  	
		  if (xMove) {
		  	board[result.Move - 1] = 'X';
		  } else {
		  	board[result.Move - 1] = 'O';
		  }
		  console.log(printBoard());

			if (checkWinner(board)) {
				if (xMove) {
					newGame('X');
					return;
				} else {
					newGame('O');
					return;
				}
			} else {
				xMove = !xMove;
				makeMove();
			}
	  }
	});
}

console.log(printBoard());
makeMove();



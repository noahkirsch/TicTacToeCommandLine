
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

	printBoard();
}

var checkWinner = function() {

}





console.log(printBoard());
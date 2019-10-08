class TicTacToe {
    constructor() {
        this.oPlayer = 'o';
        this.xPlayer = 'x';
        this.winCombinations = [
            ['00', '01', '02'],
            ['00', '10', '20'],
            ['00', '11', '22'],
            ['01', '11', '21'],
            ['02', '12', '22'],
            ['02', '11', '20'],
            ['10', '11', '12'],
            ['20', '21', '22']
        ];
        this.turn = 0;
        this.board = [];
        this.currentPlayerSymbol = 'x';

        for (let i = 0; i < 3; i++) {
            this.board[i] = []; // pre-fill 3 empty rows;
        }
    }

    changePlayer() {
        this.currentPlayerSymbol === 'x'
            ? this.currentPlayerSymbol = this.oPlayer
            : this.currentPlayerSymbol = this.xPlayer;
    }

    getCurrentPlayerSymbol() {
        return this.currentPlayerSymbol;
    }

    nextTurn(rowIndex, columnIndex) {
        if (this.board[rowIndex][columnIndex] === undefined) { //check position is empty
            this.board[rowIndex][columnIndex] = this.currentPlayerSymbol;
            this.turn += 1;
            this.changePlayer()
        }
    }

    isFinished() {
        return (this.getWinner() !== null) || this.isDraw(); //if there is a winner or the board is full
    }

    getWinner() {
        for (let i = 0; i < this.winCombinations.length; i++) { //check with the winCombinations
            let combination = this.winCombinations[i];
            let row = combination.map(elem => {
                let coordinates = elem.split('');

                return this.board[coordinates[0]][coordinates[1]];
            });

            let firstSymbol = row[0]; //check if all symbols are the same (x or o);
            if (firstSymbol !== undefined) { // the exception, if it is x or o, not undefined
                if (row.filter(el => el === firstSymbol).length === 3) { //if all symbols are the same (the number is 3)
                    return firstSymbol; //who is the winner;
                }
            }
        }
        return null;
    }

    noMoreTurns() {
        return this.turn === 9;
    }

    isDraw() {
        if (this.getWinner() !== null) {
            return false
        }

        return this.noMoreTurns();
    }

    getFieldValue(rowIndex, colIndex) {
        return this.board[rowIndex][colIndex] //if not empty (undefined), return the symbol, else null
            ? this.board[rowIndex][colIndex]
            : null;
    }
}

module.exports = TicTacToe;

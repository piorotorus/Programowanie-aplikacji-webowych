var Cell = /** @class */ (function () {
    function Cell(sign) {
        this.sign = sign;
    }
    Cell.prototype.ChangeSign = function (id) {
        var buttonID = document.getElementById(id).id;
        if (this.sign) {
            document.getElementById(buttonID).innerHTML = "O";
        }
        else {
            document.getElementById(buttonID).innerHTML = "X";
        }
    };
    return Cell;
}());
var Board = /** @class */ (function () {
    function Board() {
        this.cellArray = [null, null, null, null, null, null, null, null, null];
    }
    Board.prototype.ChangeCellBoolean = function (arrayNumber) {
        {
            if (this.player1Turn) {
                this.cellArray[parseInt(arrayNumber)] = new Cell(true);
                this.cellArray[(parseInt(arrayNumber))].ChangeSign(arrayNumber);
                this.player1Turn = !this.player1Turn;
            }
            else {
                this.cellArray[parseInt(arrayNumber)] = new Cell(false);
                this.cellArray[(parseInt(arrayNumber))].ChangeSign(arrayNumber);
                this.player1Turn = !this.player1Turn;
            }
        }
        this.IsWin();
    };
    Board.prototype.IsWin = function () {
        if (this.cellArray[0].sign == this.cellArray[1].sign && this.cellArray[2].sign == this.cellArray[0].sign && this.cellArray[0].sign == false) {
            alert("Player X Win");
        }
    };
    return Board;
}());
var game = new Board();

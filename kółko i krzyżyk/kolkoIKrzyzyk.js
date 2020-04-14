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
        this.numberOfMoves = 0;
        this.canAIMove = true;
        this.cellArray = [new Cell(null), new Cell(null), new Cell(null), new Cell(null), new Cell(null), new Cell(null), new Cell(null), new Cell(null), new Cell(null)];
        this.player1Turn = false;
    }
    Board.prototype.ChangeCellBoolean = function (arrayNumber) {
        {
            this.numberOfMoves++;
            if (this.player1Turn) {
                this.cellArray[(parseInt(arrayNumber) - 1)].sign = true;
                this.cellArray[(parseInt(arrayNumber) - 1)].ChangeSign(arrayNumber);
                this.player1Turn = !this.player1Turn;
            }
            else {
                this.cellArray[parseInt(arrayNumber) - 1].sign = false;
                this.cellArray[(parseInt(arrayNumber) - 1)].ChangeSign(arrayNumber);
                this.player1Turn = !this.player1Turn;
            }
            if (this.canAIMove && this.numberOfMoves < 9) {
                this.canAIMove = false;
                this.AIChose();
            }
            else {
                this.canAIMove = true;
            }
            this.CheckWin();
        }
    };
    Board.prototype.AIChose = function () {
        do {
            this.arrayNumbers = this.randomIntFromInterval(0, 8);
        } while (this.cellArray[this.arrayNumbers].sign != null);
        this.arrayNumbers = this.arrayNumbers + 1;
        this.ChangeCellBoolean(this.arrayNumbers.toString());
    };
    Board.prototype.randomIntFromInterval = function (min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    };
    Board.prototype.CheckWin = function () {
        if ((this.cellArray[0].sign == this.cellArray[1].sign && this.cellArray[0].sign == this.cellArray[2].sign && this.cellArray[2].sign == true)
            || ((this.cellArray[3].sign == this.cellArray[4].sign && this.cellArray[3].sign == this.cellArray[5].sign && this.cellArray[3].sign == true))
            || ((this.cellArray[6].sign == this.cellArray[7].sign && this.cellArray[6].sign == this.cellArray[8].sign && this.cellArray[6].sign == true))
            || ((this.cellArray[0].sign == this.cellArray[3].sign && this.cellArray[6].sign == this.cellArray[3].sign && this.cellArray[3].sign == true))
            || ((this.cellArray[1].sign == this.cellArray[4].sign && this.cellArray[7].sign == this.cellArray[1].sign && this.cellArray[1].sign == true))
            || ((this.cellArray[2].sign == this.cellArray[5].sign && this.cellArray[5].sign == this.cellArray[8].sign && this.cellArray[8].sign == true))
            || ((this.cellArray[0].sign == this.cellArray[4].sign && this.cellArray[0].sign == this.cellArray[8].sign && this.cellArray[8].sign == true))
            || ((this.cellArray[2].sign == this.cellArray[4].sign && this.cellArray[6].sign == this.cellArray[4].sign && this.cellArray[4].sign == true))) {
            alert("Player O Win");
        }
        else if ((this.cellArray[0].sign == this.cellArray[1].sign && this.cellArray[0].sign == this.cellArray[2].sign && this.cellArray[2].sign == false)
            || ((this.cellArray[3].sign == this.cellArray[4].sign && this.cellArray[3].sign == this.cellArray[5].sign && this.cellArray[3].sign == false))
            || ((this.cellArray[6].sign == this.cellArray[7].sign && this.cellArray[6].sign == this.cellArray[8].sign && this.cellArray[6].sign == false))
            || ((this.cellArray[0].sign == this.cellArray[3].sign && this.cellArray[6].sign == this.cellArray[3].sign && this.cellArray[3].sign == false))
            || ((this.cellArray[1].sign == this.cellArray[4].sign && this.cellArray[7].sign == this.cellArray[1].sign && this.cellArray[1].sign == false))
            || ((this.cellArray[2].sign == this.cellArray[5].sign && this.cellArray[5].sign == this.cellArray[8].sign && this.cellArray[8].sign == false))
            || ((this.cellArray[0].sign == this.cellArray[4].sign && this.cellArray[0].sign == this.cellArray[8].sign && this.cellArray[8].sign == false))
            || ((this.cellArray[2].sign == this.cellArray[4].sign && this.cellArray[6].sign == this.cellArray[4].sign && this.cellArray[4].sign == false))) {
            alert("Player X Win");
        }
    };
    return Board;
}());
var game = new Board();

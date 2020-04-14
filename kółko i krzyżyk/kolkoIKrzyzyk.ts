class Cell {

    sign: boolean;
    constructor(sign: boolean) {
        this.sign = sign;
    }

    ChangeSign(id: string) {
        var buttonID = (<HTMLInputElement>document.getElementById(id)).id;
        if (this.sign) {

            document.getElementById(buttonID).innerHTML = "O";
        } else {
            document.getElementById(buttonID).innerHTML = "X";
        }

    }

}

class Board {
    cellArray: Array<Cell> = [null, null, null, null, null, null, null, null, null];
    player1Turn: boolean;

    constructor() {
        this.cellArray=[new Cell(null), new Cell(null),new Cell(null), new Cell(null), new Cell(null), new Cell(null), new Cell(null), new Cell(null), new Cell(null)];
        this.player1Turn=false;
    }


    ChangeCellBoolean(arrayNumber: string) {

        {this.numberOfMoves++;
            if (this.player1Turn) {
                this.cellArray[(parseInt(arrayNumber)-1)].sign = true;
               
                this.cellArray[(parseInt(arrayNumber)-1)].ChangeSign(arrayNumber);
                this.player1Turn = !this.player1Turn;

            } else {
                this.cellArray[parseInt(arrayNumber)-1].sign = false;
                this.cellArray[(parseInt(arrayNumber)-1)].ChangeSign(arrayNumber);
                this.player1Turn = !this.player1Turn;

            }
            if(this.canAIMove&&this.numberOfMoves<9){
                this.canAIMove=false;
            this.AIChose();
            
            }else{this.canAIMove=true}
            this.CheckWin();
        }

    }
    numberOfMoves:number=0;
    canAIMove:boolean=true;
    arrayNumbers:number;
    AIChose(){
        do {
            
           this.arrayNumbers=this.randomIntFromInterval(0,8);
        } while (this.cellArray[this.arrayNumbers].sign!=null);
        this.arrayNumbers=this.arrayNumbers+1;
        this.ChangeCellBoolean(this.arrayNumbers.toString());
    }

    randomIntFromInterval(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
      }

    CheckWin(){
        if((this.cellArray[0].sign==this.cellArray[1].sign&&this.cellArray[0].sign==this.cellArray[2].sign&&this.cellArray[2].sign==true)
            ||((this.cellArray[3].sign==this.cellArray[4].sign&&this.cellArray[3].sign==this.cellArray[5].sign&&this.cellArray[3].sign==true))
            ||((this.cellArray[6].sign==this.cellArray[7].sign&&this.cellArray[6].sign==this.cellArray[8].sign&&this.cellArray[6].sign==true))
            ||((this.cellArray[0].sign==this.cellArray[3].sign&&this.cellArray[6].sign==this.cellArray[3].sign&&this.cellArray[3].sign==true))
            ||((this.cellArray[1].sign==this.cellArray[4].sign&&this.cellArray[7].sign==this.cellArray[1].sign&&this.cellArray[1].sign==true))
            ||((this.cellArray[2].sign==this.cellArray[5].sign&&this.cellArray[5].sign==this.cellArray[8].sign&&this.cellArray[8].sign==true))
            ||((this.cellArray[0].sign==this.cellArray[4].sign&&this.cellArray[0].sign==this.cellArray[8].sign&&this.cellArray[8].sign==true))
            ||((this.cellArray[2].sign==this.cellArray[4].sign&&this.cellArray[6].sign==this.cellArray[4].sign&&this.cellArray[4].sign==true))
            ){
alert("Player O Win");
        }else if((this.cellArray[0].sign==this.cellArray[1].sign&&this.cellArray[0].sign==this.cellArray[2].sign&&this.cellArray[2].sign==false)
        ||((this.cellArray[3].sign==this.cellArray[4].sign&&this.cellArray[3].sign==this.cellArray[5].sign&&this.cellArray[3].sign==false))
        ||((this.cellArray[6].sign==this.cellArray[7].sign&&this.cellArray[6].sign==this.cellArray[8].sign&&this.cellArray[6].sign==false))
        ||((this.cellArray[0].sign==this.cellArray[3].sign&&this.cellArray[6].sign==this.cellArray[3].sign&&this.cellArray[3].sign==false))
            ||((this.cellArray[1].sign==this.cellArray[4].sign&&this.cellArray[7].sign==this.cellArray[1].sign&&this.cellArray[1].sign==false))
            ||((this.cellArray[2].sign==this.cellArray[5].sign&&this.cellArray[5].sign==this.cellArray[8].sign&&this.cellArray[8].sign==false))
            ||((this.cellArray[0].sign==this.cellArray[4].sign&&this.cellArray[0].sign==this.cellArray[8].sign&&this.cellArray[8].sign==false))
            ||((this.cellArray[2].sign==this.cellArray[4].sign&&this.cellArray[6].sign==this.cellArray[4].sign&&this.cellArray[4].sign==false))){
            alert("Player X Win");   
        }
    }

}

let game = new Board();

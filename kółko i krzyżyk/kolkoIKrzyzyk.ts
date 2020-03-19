class Cell{

sign:boolean;
constructor(sign:boolean){
    this.sign=sign;
}

ChangeSign(id:string){
    var buttonID=(<HTMLInputElement>document.getElementById(id)).id;
   if(this.sign){
 
    document.getElementById(buttonID).innerHTML = "O";
   }else{
    document.getElementById(buttonID).innerHTML = "X";
   }
    
}

}

class Board{
    cellArray:Array<Cell>=[null,null,null,null,null,null,null,null,null];
    player1Turn:boolean;


    ChangeCellBoolean(arrayNumber:string)
    {
        
        {if(this.player1Turn){
            this.cellArray[parseInt(arrayNumber)]=new Cell(true);
            this.cellArray[(parseInt(arrayNumber))].ChangeSign(arrayNumber);
        this.player1Turn=!this.player1Turn;
      
        }else{
            this.cellArray[parseInt(arrayNumber)]=new Cell(false);
            this.cellArray[(parseInt(arrayNumber))].ChangeSign(arrayNumber);
            this.player1Turn=!this.player1Turn;
            
        }
    }
 
    }

  
}

let game=new Board();

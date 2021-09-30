class World{
    constructor(CanvasX, CanvasY ,tileSize, fc){
        this.pixelsX = CanvasX
        this.pixelsY = CanvasY
        this.tS = tileSize
        this.sX = (this.pixelsX-this.tS)/this.tS
        this.sY = (this.pixelsY-this.tS)/this.tS
        this.fC = fc

        this.matrix = emptyMatrix(this.pixelsX, this.pixelsY, this.tS, this.fC)
        
    }
    resetWorld(){
        this.matrix = emptyMatrix(this.pixelsX, this.pixelsY, this.tS, this.fC)
    }
    drawWorld(){
        drawTiles(this.matrix)
    }
    fillColor(x,y,color){
        this.matrix[x][y] = color
    }
    fillRand(color){
        let x = round(random(this.sX))
        let y = round(random(this.sY))
        if (!(x==this.eX || y==this.eY)){
            this.fillColor(x, y, color)
        }
        
    }
    fillBoardRand(num, color){
        for (let i = 0; i<num; i++){
            this.fillRand(color)
        }
    }
    placeExit(){
        this.eX = round(random(this.sX))
        this.eY = round(random(this.sY))
        this.fillColor(this.eX,this.eY,'yellow')
    }
    pixelIsEmpty(x,y){

        return ((this.matrix[Math.floor(x/this.tS)][Math.floor(y/this.tS)] == this.fC) 
        && (this.matrix[Math.floor((x+this.tS-1)/this.tS)][Math.floor((y+this.tS-1)/this.tS)] == this.fC)
        && (this.matrix[Math.floor((x)/this.tS)][Math.floor((y+this.tS-1)/this.tS)] == this.fC)
        && (this.matrix[Math.floor((x+this.tS-1)/this.tS)][Math.floor((y)/this.tS)] == this.fC)
        
        )

    }



}
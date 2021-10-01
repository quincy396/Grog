class World{
    constructor(CanvasX, CanvasY ,tileSize, fc, wc){
        this.pixelsX = CanvasX
        this.pixelsY = CanvasY
        this.tS = tileSize
        this.sX = (this.pixelsX-this.tS)/this.tS
        this.sY = (this.pixelsY-this.tS)/this.tS
        this.fC = fc
        this.wC = wc

        this.resetWorld()
        
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
    fillRandWall(){
        let x = round(random(this.sX))
        let y = round(random(this.sY))
        if (this.matrix[x][y] == this.fC){
            this.fillColor(x, y, this.wC)
        }   
    }
    fillRandFloor(){
        let x = round(random(this.sX))
        let y = round(random(this.sY))
        if (this.matrix[x][y] == this.wC){
            this.fillColor(x, y, this.fC)
        }   
    }
    fillRand(color){
        let x = round(random(this.sX))
        let y = round(random(this.sY))
        if (this.matrix[x][y] == this){
            this.fillColor(x, y, color)
        }   
    }
    fillBoardRand(num){
        for (let i = 0; i<num; i++){
            this.fillRandWall()
        }
    }
    placeExit(){
        this.eX = round(random(this.sX))
        this.eY = round(random(this.sY))
        this.fillColor(this.eX,this.eY,'yellow')
    }
    placeEntity(e){
        this.matrix[e.x][e.y] = e
    }

    moveEntity(object, x, y){
        if(object.x+x > this.sX || object.y+y > this.sY || object.x+x < 0 || object.y+y < 0) {
            return false
        }
        if (this.matrix[object.x+x][object.y+y] == this.fC){
            this.matrix[object.x][object.y] = 0
            this.matrix[object.x+x][object.y+y] = object
            object.x = object.x+x
            object.y = object.y+y
            return true
        }
        if (this.matrix[object.x+x][object.y+y] == "yellow" && object == g){
            console.log("almost")
            nextStage()
        }
        
        return false
    }

}
class World{
    constructor(CanvasX, CanvasY ,tileSize, f, w){
        this.pixelsX = CanvasX
        this.pixelsY = CanvasY
        this.tS = tileSize
        this.sX = (this.pixelsX-this.tS)/this.tS
        this.sY = (this.pixelsY-this.tS)/this.tS
        this.f = f
        this.w = new Tile(w)
        this.exitColor = new Tile(endImg)

        this.resetWorld()
    }
    resetWorld(){
        this.matrix = emptyMatrix(this.pixelsX, this.pixelsY, this.tS, this.f)
    }
    drawWorld(){
        drawTiles(this.matrix)
        image(end2Img, this.eX*tileS, this.eY*tileS,64,64)
    }
    fillColor(x,y,color){
        this.matrix[x][y] = color
    }
    fillWall(x,y){
        this.matrix[x][y] = this.w
    }
    fillRandWall(){
        let x = round(random(this.sX))
        let y = round(random(this.sY))
        if (this.matrix[x][y] == this.f){
            this.fillWall(x, y)
        }   
    }
    fillRandFloor(){
        let x = round(random(this.sX))
        let y = round(random(this.sY))
        if (this.matrix[x][y] == this.w){
            this.fillColor(x, y, this.f)
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
        this.eX = round(random(this.sX-2))+1
        this.eY = round(random(this.sY-2))+1
        for (let i = this.eX; i<=this.eX+1; i++){
            for (let j = this.eY; j<=this.eY+1; j++){
                this.fillColor(i,j,this.exitColor)
            }
        }
    }
    placeEntity(entity){
        this.matrix[entity.x][entity.y] = entity
    }

    moveEntity(object, x, y){
        if(object.x+x > this.sX || object.y+y > this.sY || object.x+x < 0 || object.y+y < 0) {
            return false
        }
        if (this.matrix[object.x+x][object.y+y] == this.f){
            this.matrix[object.x][object.y] = this.f
            this.matrix[object.x+x][object.y+y] = object
            object.x = object.x+x
            object.y = object.y+y
            return true
        }
        
        if (this.matrix[object.x+x][object.y+y] == this.exitColor && object == g){
            nextStage()
        }

        return false
    }
    fight(object, x, y, bool){
        if (this.matrix[x][y] == this.w && bool){
            this.matrix[x][y] = this.f
            object.x = x
            object.y = y
            return true
        }
        if (e.includes(this.matrix[x][y]) && object == g && !this.matrix[x][y].dead){
            this.matrix[x][y].die()
            g.kill()
        }
        return false
    }

}
class World{
    constructor(CanvasX, CanvasY ,tileSize, f, w1, w2){
        this.pixelsX = CanvasX
        this.pixelsY = CanvasY
        this.tS = tileSize
        this.sX = (this.pixelsX-this.tS)/this.tS
        this.sY = (this.pixelsY-this.tS)/this.tS
        this.f = f
        this.w1 = new Tile(w1)
        this.w2 = new Tile(w2)
        this.w = this.w1
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
    fillFloor(x, y){
        this.fillColor(x, y, this.f)
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
            this.fillFloor(x, y)
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
    changeWall(){
        if(this.w==this.w1){
            this.w=this.w2
        } else{
            this.w=this.w1
        }
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
        if (this.matrix[object.x+x][object.y+y] == this.w && bool){
            this.matrix[object.x][object.y] = this.f
            this.matrix[object.x+x][object.y+y] = object
            object.x = object.x+x
            object.y = object.y+y
            return true
        }
    
        if (e.includes(this.matrix[object.x+x][object.y+y]) && object == g && !this.matrix[object.x+x][object.y+y].dead){
            this.matrix[object.x+x][object.y+y].die()

            g.kill()
        }
        return false
    }

}
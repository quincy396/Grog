class Grog {
    constructor(Img, x, y, rage){
        this.Img = Img
        this.x = x
        this.y = y
        this.rage = rage
        this.speed = 10
        this.moveCount = this.speed

    }
    drawImg(){
        image(this.Img, this.x*tileS, this.y*tileS)
    }
    moveX(value){
        if (this.x + value>=0 && this.x + value<=CanvasX){
            if (w.pixelIsFloor(this.x + value, this.y)){
                this.x = this.x + value
            }
        }
        
    }
    moveY(value){
        if (this.y + value>=0 && this.y + value<=CanvasY){
            if (w.pixelIsFloor(this.x, this.y + value)){
                this.y = this.y + value
            }
        }
        
        
    }
    update(){ 
        if (this.moveCount>0){
            this.moveCount--
            return
        }
        this.moveCount = this.speed
        if (keyIsDown(87) && w.moveEntity(this, 0, -1)) {
        } else
        if (keyIsDown(83) && w.moveEntity(this, 0, 1)) {
        } else
        if (keyIsDown(65) && w.moveEntity(this, -1, 0)) {
            
        } else
        if (keyIsDown(68) && w.moveEntity(this, 1, 0)) {
            
        }
    }
}
class Grog {
    constructor(Img, x, y, rage){
        this.Img = Img
        this.x = x
        this.y = y
        this.rage = rage
        this.speed = 1

    }
    drawImg(){
        image(this.Img, this.x, this.y)
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
        
        if (keyIsDown(87)) {
            g.moveY(-this.speed)
        } 
        if (keyIsDown(83)) {
            g.moveY(this.speed)
        } 
        if (keyIsDown(65)) {
            g.moveX(-this.speed)
        } 
        if (keyIsDown(68)) {
            g.moveX(this.speed)
        }
    }
}
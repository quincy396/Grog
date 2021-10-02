class Grog {
    constructor(Imgs, x, y, rage){
        this.Imgs = Imgs
        this.Img = this.Imgs[0]
        this.x = x
        this.y = y
        this.rage = rage
        this.speed = 10
        this.moveCount = this.speed

    }
    drawImg(){
        image(this.Img, this.x*tileS, this.y*tileS,32,32)
    } 
    kill(){
        this.rage++
        this.speed -=1
        this.Img = this.Imgs[1]
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
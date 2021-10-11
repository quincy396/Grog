class Enemy {
    constructor(Imgs, x, y){
        this.Imgs = Imgs
        this.ImgCounter = 0
        this.x = x
        this.y = y
        this.speed = 15
        this.moveCount = this.speed
        this.dead = false
        this.deathSpeed = 5

    }
    drawImg(){
        image(this.Imgs[this.ImgCounter], this.x*tileS, this.y*tileS, 32, 32)
    } 
    die(){
        this.dead = true
        this.moveCount = this.deathSpeed
    }
    
    update(){ 
        if (this.moveCount>0){
            this.moveCount--
            return
        }
        if (this.dead){
            if (this.ImgCounter==this.Imgs.length-1){
                w.fillColor(this.x, this.y,floorColor)
            }
            this.ImgCounter ++
            this.moveCount = this.deathSpeed
            return
        }
        this.moveCount = this.speed

        if (this.ImgCounter == 1){
            this.ImgCounter --
        } else{
            this.ImgCounter ++
        }

        for (let i = 1; i<=7; i++){
            let d = round(random(4))
            if ((d==1) && w.moveEntity(this, 0, -1)) {
                return 
            } else
            if ((d==2) && w.moveEntity(this, 0, 1)) {
                return 
            } else
            if ((d==3) && w.moveEntity(this, -1, 0)) {
                return 
            } else
            if ((d==4) && w.moveEntity(this, 1, 0)) { 
                return 
            }
        }
    }
    update1(){ 
        if (this.moveCount>0){
            this.moveCount--
            return
        }
        if (this.dead){
            if (this.ImgCounter==this.Imgs.length-1){
                w.fillColor(this.x, this.y,floorColor)
            }
            this.ImgCounter ++
            this.moveCount = this.deathSpeed
            return
        }
        this.moveCount = this.speed


        if ((g.y>this.y) && w.moveEntity(this, 0, -1)) {
        } else
        if ((g.y<this.y) && w.moveEntity(this, 0, 1)) {
        } else
        if ((g.x>this.x) && w.moveEntity(this, -1, 0)) {
        } else
        if ((g.x<this.x) && w.moveEntity(this, 1, 0)) { 
        }

    }
}
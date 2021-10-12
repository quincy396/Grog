class Enemy {
    constructor(Imgs, pow, x, y){
        this.Imgs = Imgs
        this.Imgs2 = pow
        this.ImgCounter = 0
        this.x = x
        this.y = y
        this.normalspeed = 25
        this.speed = this.normalspeed
        this.moveCount = this.speed
        this.dead = false
        this.deathSpeed = 5

    }
    drawImg(){
        image(this.Imgs[this.ImgCounter], this.x*tileS, this.y*tileS, 32, 32)
    } 
    die(){
        this.dead = true
        this.speed = this.deathSpeed
        this.ImgCounter = 0
    }
    deathAnimation(){
        this.Imgs = this.Imgs2
        if (this.ImgCounter==this.Imgs.length-1){
            w.fillColor(this.x, this.y,floorColor)
        }
        this.ImgCounter ++
    }
    
    update(){ 
        if (this.moveCount>0){
            this.moveCount--
            return
        }
        this.moveCount = this.speed
        if (this.dead){
            this.deathAnimation()
            return
        }

        if (g.x + 3 > this.x && g.x - 3 <this.x && g.y + 3 > this.y && g.y - 3 <this.y){
            this.speed = this.deathSpeed

            this.ImgCounter ++
            if (this.ImgCounter>this.Imgs.length-1){
                this.ImgCounter = 0
            }
            return
        } else if (this.ImgCounter == 1){
            this.ImgCounter = 0
        } else{
            this.ImgCounter = 1
        }
        this.speed = this.normalspeed

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
    update2(){ 
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


        if ((g.y<this.y) && w.moveEntity(this, 0, -1)) {
        } else
        if ((g.y>this.y) && w.moveEntity(this, 0, 1)) {
        } else
        if ((g.x<this.x) && w.moveEntity(this, -1, 0)) {
        } else
        if ((g.x>this.x) && w.moveEntity(this, 1, 0)) { 
        }

    }
}
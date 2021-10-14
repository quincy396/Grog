class Enemy {
    constructor(type, pow, x, y){
        this.type = type
        if (type == 1){
            this.Imgs = minoImgs
        }else if (type == 0){
            this.Imgs = muckImgs
        }
        
        this.ImgsPow = pow
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
        this.Imgs = this.ImgsPow
        if (this.ImgCounter==this.Imgs.length-1){
            if (this.type == 0){
                nextState()
            }
            w.fillFloor(this.x, this.y)
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
                if (this.type == 0){
                    gameState = 1
                    stages = 4
                }
                this.ImgCounter = 0
            }
            return
        } else if (this.ImgCounter == 1){
            this.ImgCounter = 0
        } else{
            this.ImgCounter = 1
        }
        this.speed = this.normalspeed



        if (this.type == 0){
            this.updateRand()
        } else if (this.type == 1){
            this.updateApproach()
        }
    }
    
    updateRand(){ 

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
    updateFlee(){ 


        if ((g.y>this.y) && w.moveEntity(this, 0, -1)) {
        } else
        if ((g.y<this.y) && w.moveEntity(this, 0, 1)) {
        } else
        if ((g.x>this.x) && w.moveEntity(this, -1, 0)) {
        } else
        if ((g.x<this.x) && w.moveEntity(this, 1, 0)) { 
        }

    }
    updateApproach(){ 

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
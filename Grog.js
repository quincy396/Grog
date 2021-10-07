class Grog {
    constructor(Imgs, x, y, rage){
        this.Imgs = Imgs
        this.Img = this.Imgs[0]
        this.x = x
        this.y = y
        this.rage = 0
        this.speed = 9
        this.moveCount = this.speed
        this.direction = 0

    }
    drawImg(){
        image(this.Img, this.x*tileS, this.y*tileS,32,32)
    } 
    kill(){
        this.rage +=3
        this.speed = this.speed-1
        this.Img = this.Imgs[1]
    }

    kickDowntheDoor(){
        let i = 5
        if(this.rage<=0){
            return 

        }
        if (keyIsDown(87) && w.kickWall(this.x, this.y-1)) {
            this.rage --
        } else if (keyIsDown(83) && w.kickWall(this.x, this.y+1)) {
            this.rage --
        } else if (keyIsDown(65) && w.kickWall(this.x -1, this.y)) {
            this.rage --
        } else if (keyIsDown(68) && w.kickWall(this.x+1, this.y)) {
            this.rage --   
        }
        console.log(this.speed )
        if (this.rage<=0){
            this.Img = this.Imgs[0]
        }
    }
    
    update(){ 
        if (this.moveCount>0){
            this.moveCount--
            return
        }
        this.checkDown()
        if (this.direction == 0){
            
            return
        }
        this.moveCount = this.speed
        if (this.direction==1 && w.moveEntity(this, 0, -1)) {
        } else
        if (this.direction==2 && w.moveEntity(this, 0, 1)) {
        } else
        if (this.direction==3 && w.moveEntity(this, -1, 0)) {
        } else
        if (this.direction==4 && w.moveEntity(this, 1, 0)) { 
        }
        this.direction = 0
    }
    checkDown(){
        if ((keyIsDown(87)||keyIsDown(UP_ARROW))) {
            this.direction=1
        } else if ((keyIsDown(83)||keyIsDown(DOWN_ARROW))) {
            this.direction=2
        } else if ((keyIsDown(65)||keyIsDown(LEFT_ARROW))) {
            this.direction=3
        } else if ((keyIsDown(68)||keyIsDown(RIGHT_ARROW))) { 
            this.direction=4
        }
    }
    sad(){
        if ((keyIsDown(87)||keyIsDown(UP_ARROW)) && w.moveEntity(this, 0, -1)) {
        } else
        if ((keyIsDown(83)||keyIsDown(DOWN_ARROW)) && w.moveEntity(this, 0, 1)) {
        } else
        if ((keyIsDown(65)||keyIsDown(LEFT_ARROW)) && w.moveEntity(this, -1, 0)) {
        } else
        if ((keyIsDown(68)||keyIsDown(RIGHT_ARROW)) && w.moveEntity(this, 1, 0)) { 
        }
    }
}
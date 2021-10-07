class Tile {
    constructor(Img, x, y){
        this.Img = Img
        this.x = x
        this.y = y
    }
    drawImg(x,y){
        image(this.Img, x*tileS, y*tileS,32,32)
    } 
}
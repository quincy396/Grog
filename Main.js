
let maxX = window.innerWidth
let maxY = window.innerHeight
let CanvasX
let CanvasY

let tileS = 32
let gameState = 3
let stages = 5
let w
let g
let e
let numEnemies = 1
let count = 10
let cur = count
let boardFill = 200
let numReplace = 3
let floorColor 
let wallColor = [100,100,100]

function preload(){
    CanvasX = (round(maxX/32)-2)*32
    CanvasY = (round(maxY/32)-2)*32
    loadImages()
}

function setup(){
    floorColor = [random(150),random(150),random(150)]
    createCanvas(CanvasX, CanvasY)
    w = new World(CanvasX, CanvasY, tileS, floorColor, wallImg)
    g = new Grog(mainImg, Math.floor(random(w.sX)), Math.floor(random(w.sY)), 0)
    setWorld()
    
    background(floorColor)
}

function draw(){
    //background(0)

    switch(gameState){
        case 0:
            image(VMImg,0,0,CanvasX,CanvasY)
            break;
        case 1:
            image(VEImg,0,0,CanvasX,CanvasY)
            break;
        case 2:
            image(GAImg,0,0,CanvasX,CanvasY)
            break;
        case 3:
            runGame()
            break;
        case 4:
            image(GRImg,0,0,CanvasX,CanvasY)
            break;
        case 5:
            image(FVImg,0,0,CanvasX,CanvasY)
            break;
        case 6:
            image(VM2Img,0,0,CanvasX,CanvasY)
            break;
        
            
    }
}

function setWorld(){
    e = Array.from({length: numEnemies}, () => {
        return new Enemy(minoImgs, powImgs, Math.floor(random(w.sX)), Math.floor(random(w.sY)))
    })
    w.placeExit()
    w.placeEntity(g)
    e.forEach(element => w.placeEntity(element))
    w.fillBoardRand(boardFill)
}

function runGame(){
    background(floorColor)
    g.update()
    e.forEach(element => element.update())
    if (cur<0){
        for (let i = 0; i<= numReplace; i++){
            w.fillRandWall()
            w.fillRandFloor()
        }
        cur = count
    }
    cur--
    w.drawWorld()
}



function nextStage() {
    if (stages<=0){
        nextState()
    } else{
        floorColor = [random(150),random(150),random(150)]
        background(floorColor)
        //w.f = floorColor
        w.resetWorld()
        numReplace +=2
        //count -=2
        numEnemies ++
        boardFill += 63
        stages --
        setWorld()
        
    }
}





function keyTyped(){
    if (gameState == 3){
        if(keyCode == 32 || keyCode == 84){
            g.fight()
        } else if (keyCode == 87 || keyCode == UP_ARROW) {
            g.direction = 1
        } else if (keyCode == 83 || keyCode == DOWN_ARROW) {
            g.direction = 2
        } else if (keyCode == 65 || keyCode == LEFT_ARROW) {
            g.direction = 3
        } else if (keyCode == 68 || keyCode == RIGHT_ARROW) { 
            g.direction = 4
        }
    } 
}
function keyPressed(){
    press()
}
function mousePressed(){
    press()
}
function press(){
    if (gameState != 3){
        nextState()
    }
}
function nextState() {
    gameState ++
    
}


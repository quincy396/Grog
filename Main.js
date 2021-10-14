
let maxX = window.innerWidth
let maxY = window.innerHeight
let CanvasX
let CanvasY

let tileS = 32
let gameState = 0
let stages = 4
let w
let g
let e
let numEnemies = 1
let count = 10
let cur = count
let boardFill
let numReplace = 3
let floorColor 
let wallColor = [100,100,100]
let currentEnemyImgs

function preload(){
    CanvasX = (round(maxX/32)-2)*32
    CanvasY = (round(maxY/32)-2)*32
    boardFill = (CanvasX/32 * CanvasY/32)/3
    loadImages()
    currentEnemyImgs = muckImgs
}

function setup(){
    floorColor = [random(150),random(150),random(150)]
    createCanvas(CanvasX, CanvasY)
    w = new World(CanvasX, CanvasY, tileS, floorColor, wallImg, wall2Img)
    g = new Grog(mainImg, Math.floor(random(w.sX)), Math.floor(random(w.sY)), 0)
    setWorld()
    
    background(floorColor)
}

function draw(){
    //background(0)

    switch(gameState){
        case 0:
            image(gazingImg,0,0,CanvasX,CanvasY)
            break;
        case 1:
            image(attackImg,0,0,CanvasX,CanvasY)
            break;
        case 2:
            image(introImg,0,0,CanvasX,CanvasY)
            break;
        case 3:
            runGame()
            break;
        case 4:
            image(happyEndingImg,0,0,CanvasX,CanvasY)
            break;
        // case 5:
        //     image(FVImg,0,0,CanvasX,CanvasY)
        //     break;
        // case 6:
        //     image(VM2Img,0,0,CanvasX,CanvasY)
        //     break;
        
            
    }
}

function setWorld(){
    createEnemies()
    w.placeExit()
    w.placeEntity(g)
    e.forEach(element => w.placeEntity(element))
    w.fillBoardRand(boardFill)
}
function createEnemies(){
    e = Array.from({length: numEnemies}, () => {
        return new Enemy(1, powImgs, Math.floor(random(w.sX)), Math.floor(random(w.sY)))
    })
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
    if (stages<=1){
        finalStage()
    } else{
        floorColor = [random(150),random(150),random(150)]
        w.changeWall()
        background(floorColor)
        //w.f = floorColor
        w.resetWorld()
        numReplace +=2
        //count -=2
        numEnemies ++
        boardFill = boardFill * 1.2
        stages --
        setWorld()
        
    }
}

function finalStage(){
    floorColor = [150,0,0]
    w.changeWall()
    background(floorColor)
    w.resetWorld()
    numReplace +=2
    stages --
    e = Array.from({length: 1}, () => {
        return new Enemy(0, powImgs, Math.floor(random(w.sX)), Math.floor(random(w.sY)))
    })
    w.placeEntity(g)
    e.forEach(element => w.placeEntity(element))
    w.fillBoardRand(boardFill)
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


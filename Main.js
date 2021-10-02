
let CanvasX = 1184
let CanvasY = 672
let tileS = 32
let gameState = 0
let w
let g
let count = 10
let cur = count
let floorColor = [40,20,0]
let wallColor = [100,100,100]

function preload(){
    grogImg = []
    grogImg[0] = loadImage('assets/grog.png')
    grogImg[1] = loadImage('assets/grog2.png')
    EnemyImgs = []
    for (let i = 1; i<=6; i++){
        EnemyImgs [i-1] = loadImage(`assets/Enemy${i}.png`)
    }
    VMImg = loadImage('assets/VM.png')
    VEImg = loadImage('assets/VecnaEvil.png')
    GAImg = loadImage('assets/GrogAlone.png')
    FVImg = loadImage('assets/FallOfVecna.png')
}


function setup(){
    createCanvas(CanvasX, CanvasY)
    setWorld(200)
}


function draw(){
    background(floorColor)

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
            image(FVImg,0,0,CanvasX,CanvasY)
            break;
        

            
    }
}

function setWorld(fill){
    w = new World(CanvasX, CanvasY, tileS, floorColor, wallColor)
    g = new Grog(grogImg, Math.floor(random(w.sX)), Math.floor(random(w.sY)), 0)
    e = new Enemy(EnemyImgs, Math.floor(random(w.sX)), Math.floor(random(w.sY)))
    w.placeExit()
    w.placeEntity(g)
    w.placeEntity(e)
    w.fillBoardRand(fill)
}

function runGame(){
    g.update()
    e.update()
    if (cur<0){
        w.fillRandWall()
        w.fillRandFloor()
        cur = count
    }
    cur--
    w.drawWorld()
}

function nextStage() {
    gameState ++
}
function keyPressed(){
    if (gameState != 3){
        nextStage()
    }
}
function mousePressed(){
    if (gameState != 3){
        nextStage()
    }
}


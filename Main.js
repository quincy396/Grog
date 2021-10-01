
let CanvasX = 1184
let CanvasY = 672
let tileS = 32
let gameState = 0
let w
let g
let count = 10
let cur = count

function preload(){
    grogImg = loadImage('assets/grog.png')
    EnemyImgs =[]
    for (let i = 1; i<=6; i++){
        EnemyImgs [i-1] = loadImage(`assets/Enemy${i}.png`)
    }
    //VMImg = loadImage('assets/VM.png')
}


function setup(){
    createCanvas(CanvasX, CanvasY)
    background(0)
    g = new Grog(grogImg, 1,1,0)
    w = new World(CanvasX, CanvasY, tileS, 0, 100)
    w.placeExit()
    w.placeEntity(g)
    w.fillBoardRand(200)
}

function draw(){
    g.update()

    if (cur<0){
        w.fillRandWall()
        w.fillRandFloor()
        cur = count
    }
    cur--
    
    
    w.drawWorld()
}



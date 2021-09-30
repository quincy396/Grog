
let CanvasX = 1184
let CanvasY = 672
let tileS = 32
let gameState = 0
let w
let g

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
    g = new Grog(grogImg, 0,0,0)
    w = new World(CanvasX, CanvasY, tileS, 0)
    w.placeExit()
    w.fillBoardRand(200,100)
}

function draw(){
    w.fillRand(100)
    w.fillRand(0)
    w.drawWorld()

    g.update()

    g.drawImg()
}



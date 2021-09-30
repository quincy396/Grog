
let CanvasX = 1200
let CanvasY = 700
let gameState = 0
let world 



function preload(){
    grogImg = loadImage('assets/GrogB.png')
    EnemyImgs =[]
    for (let i = 1; i<=6; i++){
        EnemyImgs [i-1] = loadImage(`assets/Enemy${i}.png`)
    }
    //VMImg = loadImage('assets/VM.png')
}


function setup(){
    createCanvas(CanvasX, CanvasY)
    world = emptyMatrix(CanvasX, CanvasY)
    console.log(world)
    //console.log("hi")

}

function draw(){
    //world[0][0]=100
    let x =round(random((CanvasX-20)/20))
    let y = round(random((CanvasY-20)/20))
    //console.log(x,y)
    world[x][y] = 100
    drawTiles(world)

}



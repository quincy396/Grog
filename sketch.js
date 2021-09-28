
const Grog = {
    x: 0,
    y: 0,
    currentLocation: 'the endless maze',
    rage: 10000,
    enemiesKilled: 99,
    currentEnemy: 'Vecna',
    encounter: function(person){
        if(person = 'enemy'){
            return 'incredible violence'
        } else if (person = 'friend') {
            return 'undying love'
        } else {
            return 'joke'
        }
    }
}
let gameState = 0
var count = 0
var d = 200
var offset = 200

function preload(){
    grogImg = loadImage('assets/GrogB.png')
    EnemyImgs =[]
    for (let i = 1; i<=6; i++){
        EnemyImgs [i-1] = loadImage(`assets/Enemy${i}.png`)
    }
    //VMImg = loadImage('assets/VM.png')
}

function setup(){
    createCanvas(1200, 600)
    //background(95, 138, 245)
    frameRate(10)

}


function draw(){
    background(150)
    //rect(100, 100, 152,160)
    
    image(grogImg, 100,100)
    //image(EnemyImgs[0], offset+d, 44)
    if (d>0) {
        image(EnemyImgs[0], offset+d, 44)
        d -= 20
    } else if (count>5){
        d = 200
        count = 0
    } else {
        image(EnemyImgs[count], offset+d, 44)
        count +=1
    }

    
}



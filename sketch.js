
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

function preload(){
    grogImg = loadImage('assets/grog.png')
    VMImg = loadImage('assets/VM.png')
}

function setup(){

    noSmooth()
    createCanvas(1200, 600)
    //background(95, 138, 245)
    //frameRate(15)

}

function draw(){
    background(150)
    image(VMImg, 0,0,840, 600)
    //fill(110, 59, 21)
    //rect(0, 400, 1000, 200)
}



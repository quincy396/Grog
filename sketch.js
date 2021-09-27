
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

function preload(){
    grogImg = loadImage('assets/grog.png')
}

function setup(){

    noSmooth()
    createCanvas(1000, 600)
    //background(95, 138, 245)
    //frameRate(15)

}

function draw(){
    background(150)
    image(grogImg, 200,200,400,400)
    //fill(110, 59, 21)
    //rect(0, 400, 1000, 200)
}



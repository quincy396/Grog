
const loadImages = () => {
    grogImg = []
    grogImg[0] = loadImage('assets/grog.png')
    grogImg[1] = loadImage('assets/grog2.png')
    EnemyImgs = []
    for (let i = 1; i<=6; i++){
        EnemyImgs [i-1] = loadImage(`assets/Enemy${i}.png`)
    }
    wallImg = loadImage('assets/wall.png')
    VMImg = loadImage('assets/VM.png')
    VEImg = loadImage('assets/VecnaEvil.jpg')
    GAImg = loadImage('assets/GrogAlone.jpg')
    GRImg = loadImage('assets/GrogReturn.jpg')
    FVImg = loadImage('assets/FallOfVecna.jpg')
    VM2Img = loadImage('assets/VM2.jpg')
}



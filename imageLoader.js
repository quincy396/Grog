
const loadImages = () => {
    grogImg = []
    grogImg[0] = loadImage('assets/grog.png')
    grogImg[0] = loadImage('assets/main.png')
    grogImg[1] = loadImage('assets/grog2.png')
    mainImg = []
    mainImg[0] = loadImage('assets/main.png')
    mainImg[1] = loadImage('assets/main2.png')

    EnemyImgs = []
    for (let i = 1; i<=6; i++){
        EnemyImgs [i-1] = loadImage(`assets/Enemy${i}.png`)
    }
    minoImgs = []
    for (let i = 1; i<=7; i++){
        minoImgs [i-1] = loadImage(`assets/mino${i}.png`)
    }
    muckImgs = []
    for (let i = 1; i<=8; i++){
        muckImgs[i-1] = loadImage(`assets/Muck${i}.png`)
    }
    powImgs = []
    for (let i = 3; i<=8; i++){
        powImgs [i-3] = loadImage(`assets/pow${i}.png`)
    }
    wallImg = loadImage('assets/wall2.png')
    wall2Img = loadImage('assets/wall3.png')
    VMImg = loadImage('assets/VM.png')
    VEImg = loadImage('assets/VecnaEvil.jpg')
    GAImg = loadImage('assets/GrogAlone.jpg')
    GRImg = loadImage('assets/GrogReturn.jpg')
    FVImg = loadImage('assets/FallOfVecna.jpg')
    VM2Img = loadImage('assets/VM2.jpg')
    endImg = loadImage('assets/end.png')
    end2Img = loadImage('assets/end2.png')
    attackImg = loadImage('assets/An_Attack.png')
    introImg = loadImage('assets/directions.png')
    gazingImg = loadImage('assets/gazing.png')
    happyEndingImg = loadImage('assets/happyending.png')
}



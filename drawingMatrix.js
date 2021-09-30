let tileSize
const drawTiles = (matrix) => {

    noStroke()
    for (let i = 0; i< matrix.length; i++){
        for (let j = 0; j< matrix[0].length; j++){
            fill(matrix[i][j])
            //console.log(matrix[i][j])
            rect(i*tileSize, j*tileSize,tileSize,tileSize)
        }
    }

}

const emptyMatrix = (x,y,tileS, color) => {
    tileSize = tileS
    let a =[]
    for (let i = 0; i< x/tileSize; i++){
        let b=[]
        for (let j = 0; j< y/tileSize; j++){
            b[j]=color
        }
        a[i]=b
    }

    return a
}

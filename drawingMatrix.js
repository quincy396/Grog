let tileSize
const drawTiles = (matrix) => {
    noStroke()
    for (let i = 0; i< matrix.length; i++){
        for (let j = 0; j< matrix[0].length; j++){
            if(!Array.isArray(matrix[i][j])) {
                matrix[i][j].drawImg(i,j)
            } else{
                fill(matrix[i][j])

                //fill(matrix[i][j][0],matrix[i][j][1],matrix[i][j][2])
                rect(i*tileSize, j*tileSize,tileSize,tileSize)
            }
            
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

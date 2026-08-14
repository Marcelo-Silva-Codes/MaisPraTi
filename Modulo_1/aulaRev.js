// let array = [[1,2,3],
//              [4,1,6],
//              [7,8,1]]

const PromptSync = require("prompt-sync")


// let n = 7

// let MI = []

// for( let i = 1; i <= n ; i++){
//     MI[i] = []
//     for(let j = 1 ; j <= n; j++){
//         if(i === j){
//             MI[i][j] = 1
//         }
//         else{
//             MI[i][j] = null
//         }
//     }

// }

// console.log("Matriz MI")

// for(let i = 1 ; i<= n; i++){
//     let linha = ""
//     for(let j = 1; j<=n ; j++){
//         linha+= MI[i][j] + " "
//     }
//     console.log(linha)
// }



//console.table(array)

const prompt = require("prompt-sync")()

const LINHAS = 6
const COLUNAS = 8

let m = []

for(let i = 1 ; i<= LINHAS ; i++){
    m[i] = []
    for(let j = 1 ; j<=COLUNAS ; j++){
        m[i][j] = parseInt(prompt(`M[${i}][${j}]`))
    }
}


const C = []

for(let i = 1 ; i<= LINHAS ; i++){
    let contador = 0
    for(let j = 1 ; i<=COLUNAS ; j++){
        if(m[i][j] < 0){
            contador++
        }
    }
    C[i] = contador

}

console.table(C)


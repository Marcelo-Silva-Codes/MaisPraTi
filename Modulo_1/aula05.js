// let meuNumero = 10


// while(meuNumero >= 1){
//     console.log(meuNumero -- )

// }

// let contador = 0


// while(contador <= 5){
//     console.log(`o numero é: ${contador}`)
//     contador ++
// }

//somar um numero

// let conta = 1

// while(conta < 10){
//     console.log(`${conta} = ${conta} + 1`)
//     conta++
// }


// let contador = 0 

// let soma = 0

// while(contador <=10){
//     soma = soma + contador
//     contador++
// }

// console.log(soma)

/*
Solicitem ao usuário um número e mostrem a tabuada deste numero

exwemplo

1 x 10 = 10
2 x numero = x
*/

const prompt = require("prompt-sync")()

// let valor = Number(prompt("Digite um valor: "))
// let i = 0

// while( i <= 10){
//     console.log(`${i} X ${valor} = ${i*valor}`)
//     i++
// }

// let contador = 1

// do{
//     console.log(contador)
//     contador++
// }while(contador <= 10)

/*
Solicite ao usuário que digite um valor, quando ele digita 0. Seone tidis is vakires digitados por ele


*/


let soma = 0

let valor = ''

do{
valor = Number(prompt("Digite um valor: "))
soma = soma + valor

}while(valor != 0)

console.log(soma)
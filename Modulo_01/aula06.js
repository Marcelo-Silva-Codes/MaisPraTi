const prompt = require('prompt-sync')()

// let celsius = Number(prompt('Informe a temperatura em celsius para fahrenheit:'))


// if(celsius < -273.15){
//     console.error('Temperatura abaixo do zero absoluto!')
// }

// let fahrenheit = (celsius * 9/5) + 32

// console.log(`Em fahrenheit é ${fahrenheit}`)


// console.log("Voto ciclano - 1 /n voto em branco - 2 /n voto nulo -3 /n voto negativo para o programa")

// let totalEleitores = 60
// let votosValidos = 20
// let votosEmBranco = 20
// let votosNulos = 20

// let totalDeVotos = votosEmBranco + votosNulos + votosValidos;
// let abstencoes = totalEleitores - totalDeVotos

// let percentualBrancos = (votosEmBranco / totalEleitores) * 100
// let percentualNulos = (votosNulos / totalEleitores) * 100
// let percentualValidos = (votosValidos / totalEleitores) * 100
// let percuntalAbstencoes = ( abstencoes / totalEleitores) * 100

// console.log("========== Resultado da Eleição ==============")
// console.log("total de eleitores: " + totalEleitores)
// console.log("================================")
// console.log("votos validos: " + votosValidos +"->"+ percentualValidos + "%")
// console.log("votos nulos: " + votosNulos +"->"+ percentualNulos + "%")
// console.log("votos branco: " + votosEmBranco +"->"+ percentualBrancos + "%")

//let conta = 0
// let conta = []
// for( let i = 1000 ; i <= 1999; i++ ){
//     if( i % 11 === 5 ){
//         console.log(i)
//         conta.push(i)
//     }
// }

// console.log(conta)

// let cigarrosPorDia = 100

// let anosFumando = 5

// let totalPerdidoMinutos = (10 * cigarrosPorDia) 

// let totalMesmoDias = (totalPerdidoMinutos/60)/24

// let horas = (totalPerdidoMinutos/60)
// console.log(totalPerdidoMinutos)
// console.log(totalMesmoDias)
// console.log(horas)

// let fumadosPorDia = Number(prompt("cigarros por dia:"))
// let anos = Number(prompt("anos"))

// let diasF = anos * 365
// let totalcigarros = fumadosPorDia * diasF
// let minutosPerdidos = totalcigarros * 10
// let horasPerdidos = minutosPerdidos / 60
// let diasPediduos = horasPerdidos/ 24
// let anosPerdidos = diasPediduos / 365

// console.log(fumadosPorDia.toFixed(2))
// console.log(anos.toFixed(2))
// console.log(diasF.toFixed(2)
// )
// console.log(totalcigarros.toFixed(2))
// console.log(minutosPerdidos.toFixed(2))
// console.log(horasPerdidos.toFixed(2))
// console.log(diasPediduos.toFixed(2))
// console.log(anosPerdidos.toFixed(2))


// let numeroMacas = Number(prompt('digite o numero de macas: '))

// if(numeroMacas <= 12){
//     console.log('valor total é: R$' + (numeroMacas * 0.30).toFixed(2))
// }else{
//     console.log('valor total é: R$' + (numeroMacas * 0.25).toFixed(2))
// }


// let v1 = Number(prompt('Digite um valor:'))
// let v2= Number(prompt('Digite outro valor:'))

// if(v1 === v2){
//     console.error("O numeros sao iguais")
// }
// else{
// console.log(v1>v2? v2+' '+v1 : v1+' '+v2)
// }


let numeros = [ 1, 2, 3, 4, 5]
let total = 0
let media= 0
let maior = numeros[0]
let menor = numeros[0]

for(let i = 0 ; i < numeros.length ; i++){
    total += numeros[i] 
    
    if(maior < numeros[i]){
        maior = numeros[i] 
    }

    if(menor > numeros[i]){
        menor = numeros[i]
    }

}

media = total/numeros.length

console.log(total)
console.log(media)
console.log(maior)
console.log(menor)
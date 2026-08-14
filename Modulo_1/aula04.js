// // Faça um programa que solicite ao usuário a inserção de dois valores (um de cada vez)
// // e mostre a ele duas opções: 1- somar ou 2 - subtrair.

const prompt = require("prompt-sync")()

// let op = prompt("Digite 1 - Somar \n 2 - Subtrair \n 3 - Multiplicar \n 4 - Dividir: ")

// let v1 = Number(prompt("Digite o primeiro valor: "))
// let v2 = Number(prompt("Digite o segundo valor: "))

// if((op==="4") && (v2 === 0)){
//     console.log("Não é possível dividir por zero")
//     op = null
// }


// switch (op) {
//     case "1": 
//         console.log("A soma é:" + (v1+v2))
//         break;
//     case "2":
//         console.log("A subtração é: " + (v1-v2))
//         break;
//     case "3":
//         console.log("A multiplicação é: " + (v1*v2))
//         break;
//     case "4":
//         console.log("A divisão é: " + (v1/v2))
//         break;
//     default:
//         console.log("Opção inválida")
// }


//baguio de ideade


// let idade = Number(prompt("Digite sua idade: "))

// switch (true){ //switch (idade){ vai dar erro porque o switch só aceita comparação de igualdade, e aqui a gente quer comparar se a idade é maior ou menor que um valor, então a gente tem que colocar true para o switch comparar com os casos

//     case (idade >= 0 && idade <=12):
//         console.log("Criança")
//         break;
//     case (idade > 12 && idade <= 18):
//         console.log("Adolescente")
//         break;
//     case (idade > 18 && idade <= 60):
//         console.log("Adulto")
//         break;
//     case (idade > 60):
//         console.log("Idoso")
//         break;
//     default:
//         console.log("Idade inválida")
// }

//Coalesce

let visitanteName = null;

let nomeExibido = visitanteName ?? "Nenhum nome"

console.log(nomeExibido)
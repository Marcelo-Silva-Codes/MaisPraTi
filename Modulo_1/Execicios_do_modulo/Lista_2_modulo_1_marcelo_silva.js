const prompt = require('prompt-sync')();

// 1. Peça ao usuário um número e exiba sua tabuada completa (de 1 a 10) usando um
// laço for. Em seguida, pergunte se ele deseja ver outra tabuada e repita enquanto
// a resposta for "sim".

let numTabuada = 0;
let resposta = "";

do{

numTabuada = parseInt(prompt("Digite um número para ver a sua tabuada: "))

for(let i = 1; i <=10 ; i++){
    console.log(`${numTabuada} x ${i} = ${numTabuada * i}`)
}
do{
resposta = prompt("Deseja ver outra tabuada? (sim/nao)").toLowerCase();
}while(resposta !== "sim" && resposta !== "nao")

}while(resposta === "sim")


// 2. Leia um número inteiro positivo e, usando um laço while, calcule e exiba quantos
// dígitos ele possui. Trate o caso do número zero (que possui 1 dígito).

let numero = parseInt(prompt("Digite um número inteiro positivo: "))

if(numero === 0){
    console.log("O número 0 possui 1 dígito.")
}
else if(numero > 0){
    let contador = 0;
    while(numero > 0){
        numero = Math.floor(numero / 10)
        contador++;
    }
    console.log(`O número possui ${contador} dígitos.`)
}

// 3. Peça ao usuário quantos termos da sequência de Fibonacci deseja ver e exiba-os
// usando um laço for. Exemplo: 1, 1, 2, 3, 5, 8, 13...

let termosSeq = parseInt(prompt("Quantos termos da sequência de Fibonacci deseja ver? "))

let a = 1;
let b = 1;

console.log("Sequência de Fibonacci:")
for(let i = 1; i <= termosSeq; i++){
    console.log(a);
    let temp = a;
    a = b;
    b = temp + b;
}

// 4. Defina uma senha fixa no código. Peça ao usuário que a digite e, usando um laço
// do...while, permita no máximo 3 tentativas. Exiba se ele acertou ou se esgotou as
// tentativas.

let senha = "12345"
let senhaDigitada = ""
let tentativas = 0
let flag = false

do{
    
    senhaDigitada = prompt("Digite a senha: ")
    if(senhaDigitada === senha){
        console.log("Senha correta! Acesso permitido.")
        flag = true
        break
    }
    else{
        tentativas++;
        console.log(`Senha incorreta! Tentativa ${tentativas} de 3.`)
    }
}while(tentativas < 3 && !flag)
    if(!flag)
    console.log("Número máximo de tentativas atingido. Acesso negado.")


// 5. Leia um número N e exiba todos os números primos entre 2 e N usando laços
// aninhados (for dentro de for). Exiba também a quantidade total de primos
// encontrados.

let n = parseInt(prompt("Digite um número inteiro N para encontrar os primos entre 2 e N: "))

let contadorPrimos = 0

console.log(`Números primos entre 2 e ${n}: `)

for(let i = 2; i <= n; i++){
    let primo = true;
    for(let j = 2; j < i; j++){
        if(i % j === 0){
            primo = false;
            break;
        }
    }
    if(primo){
        console.log("- " + i);
        contadorPrimos++;
    }
}

console.log(`Total de números primos encontrados: ${contadorPrimos}`)


// 6. Crie um array e leia via laço o nome e a nota de 5 alunos. Ao final, exiba: a média
// da turma, o nome do aluno com maior nota e o nome do aluno com menor nota.
// Não use funções prontas como Math.max().

let nomeArray = []
let notaArray = []
let nomeAluno = ""
let notaAluno = 0
let maiorNota = -1
let menorNota = 11
let nomeMaiorNota = ""
let nomeMenorNota = ""
let acumuladorNotas = 0

for(let i = 1; i <= 5; i++){
    nomeAluno = prompt(`Digite o nome do aluno ${i}: `)
    notaAluno = parseFloat(prompt(`Digite a nota do aluno ${i}: `))
    if(notaAluno > maiorNota){
        maiorNota = notaAluno
        nomeMaiorNota = nomeAluno
    }
    if(notaAluno < menorNota){
        menorNota = notaAluno
        nomeMenorNota = nomeAluno
    }
    acumuladorNotas += notaAluno
    nomeArray.push(nomeAluno)
    notaArray.push(notaAluno)
}

console.log(`Média da turma: ${acumuladorNotas / 5}`)
console.log(`Aluno com maior nota: ${nomeMaiorNota} -> ${maiorNota}`)
console.log(`Aluno com menor nota: ${nomeMenorNota} -> ${menorNota}`)



// 7. Simule um carrinho de compras: leia nomes e preços de produtos em um laço até
// o usuário digitar "sair". Armazene em arrays. Ao final, liste todos os itens, exiba o
// subtotal, aplique 10% de desconto se houver mais de 3 itens e mostre o total a
// pagar.

let nomeProdArray = []
let precoArray = []
let nomeProduto = ''
let precoProduto = 0
let subtotal = 0

do{
    nomeProduto = prompt("Digite o nome do produto (ou 'sair' para finalizar): ")
    if(nomeProduto.toLowerCase() !== 'sair'){
        nomeProdArray.push(nomeProduto)
        precoProduto = parseFloat(prompt("Digite o preço do produto: "))
        precoArray.push(precoProduto)
        subtotal += precoProduto
    }

}while(nomeProduto.toLowerCase() !== 'sair')

console.log("Itens no carrinho:")
for(let i = 0; i < nomeProdArray.length; i++){
    console.log(`${i + 1}. ${nomeProdArray[i]} - R$ ${precoArray[i].toFixed(2)}`)
}
console.log(`Subtotal: R$ ${subtotal.toFixed(2)}`)

let desconto = 0
if(nomeProdArray.length > 3){
    desconto = subtotal * 0.1
}
desconto > 0 ? console.log(`Desconto aplicado: R$ ${desconto.toFixed(2)}`) : ""

console.log(`Total a pagar: R$ ${(subtotal - desconto).toFixed(2)}`)


// 8. Leia uma palavra, armazene seus caracteres em um array e, percorrendo-o de
// trás para frente com um laço for, monte a palavra invertida. Exiba a palavra
// original, a invertida e informe se ela é um palíndromo.

let palavra = prompt("Digite uma palavra: ")
let caracteres = palavra.split('')
let palavraInvertida = ""

for(let i = caracteres.length - 1; i >= 0; i--){
    palavraInvertida += caracteres[i]
}

console.log(`Palavra original: ${palavra}`)
console.log(`Palavra invertida: ${palavraInvertida}`)

if(palavra.toLowerCase() === palavraInvertida.toLowerCase()){
    console.log("A palavra é um palíndromo.")
} else {
    console.log("A palavra não é um palíndromo.")
}

// 9. Sorteie um número entre 1 e 100 com Math.random(). Usando um laço do...while,
// peça ao usuário para adivinhar; a cada tentativa, diga se o número é maior ou
// menor. Registre as tentativas em um array e, ao acertar, exiba o histórico e
// quantas tentativas foram necessárias.

let numeroSorteado = Math.floor(Math.random() * 100) + 1
let numeroDigitado = 0
let historico = []
let tentativas = 0

do{
    numeroDigitado = parseInt(prompt("Tente adivinhar o número entre 1 e 100: "))
    historico.push(numeroDigitado)
    tentativas++;

    if(numeroDigitado < numeroSorteado){
        console.log("O número é maior. Tente novamente.")
    }
    else if(numeroDigitado > numeroSorteado){
        console.log("O número é menor. Tente novamente.")
    }
    else{
        console.log("Parabéns! Você acertou o número " +numeroSorteado+ " em " + (tentativas > 1 ? tentativas + " tentativas." : " 1 tentativa."))
        console.log("Histórico de tentativas: " + historico.join(", "))
    }
}while(numeroDigitado !== numeroSorteado)


// 10. Crie uma matriz 3×4 (3 alunos, 4 notas cada). Leia os valores via laços aninhados.
// Calcule e exiba a média de cada aluno, a média geral da turma e qual aluno teve
// o melhor desempenho.

let matrizNotas = []
let nomeAluno = ""
let notaAluno = 0
let somaNotas = 0
let nomesAlunos = []
let mediaAlunos = []
let mediaAluno = 0
let mediaGeral = 0
let melhorDesempenho = -1
let nomeMelhorDesempenho = ""

for(let i = 0; i < 3; i++){
        matrizNotas[i] = []
        nomeAluno = prompt(`Digite o nome do aluno: `)
        nomesAlunos.push(nomeAluno)
        somaNotas = 0
        for(let j = 0; j < 4; j++){
            notaAluno = parseFloat(prompt(`Digite a nota do aluno ${nomeAluno}: `))
            matrizNotas[i].push(notaAluno)
            somaNotas += notaAluno
        }
        mediaAluno = somaNotas / 4
        mediaAlunos.push(mediaAluno)
        if(mediaAluno > melhorDesempenho){
            melhorDesempenho = mediaAluno
            nomeMelhorDesempenho = nomeAluno
        }
}

mediaGeral = mediaAlunos.reduce((acumulador, media) => acumulador + media, 0) / mediaAlunos.length

console.log("Média de cada aluno:")
mediaAlunos.forEach((media, index) => {
    console.log(`${nomesAlunos[index]}: ${media.toFixed(2)}`)
})
console.log(`Média geral da turma: ${mediaGeral.toFixed(2)}`)
console.log(`Melhor desempenho: ${nomeMelhorDesempenho} com média ${melhorDesempenho.toFixed(2)}`)

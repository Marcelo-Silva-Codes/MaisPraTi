// let arr = [ 1,2,3]

// let arr1 = [4,5,6]

// for(let i = 0 ; i < arr.length ; i++){
//     console.log(arr[i])
// }

// for(let i = 0 ; i < arr1.length ; i++){
//     console.log(arr1[i])
// }

// function soma(a,b){
//     return a+b
// }


// let a = 20

// let b = 30

// let resultado = soma(a,b)

// console.log(resultado)



// let frutas = ['maça']

// function substituirLista(lista){
//     lista = ["Banana", "Laranja"]
// }

// substituirLista(frutas)

// console.log(frutas)

// let usuario = {nome: 'marcelo'}

// function alterarNome(usuario){
//     usuario.nome = 'DUDU'
// }

// alterarNome(usuario)

// console.log(usuario.nome)

// let usuario2 = 'bruce'

// function alterarNome2(usuario){
//     usuario = 'Batman'
// }
// alterarNome2(usuario2)
// console.log(usuario2) // ainda fica bruce pq strings são imutáveis, ou seja, não podem ser alteradas, diferente de objetos que são mutáveis, ou seja, podem ser alterados.


// //funcao que nao retorna nada, é um procedimento.

// const multiplicar = (a,b) => {
//     console.log(a*b)
// }


// setTimeout(function () {
//     console.log('Olá, mundo!')
// }, 1000)




// function somarTudo(teste){
//     let soma = 0
//     for(let i = 0 ; i < teste.length ; i++){
//         soma += teste[i]
//     }
//     return soma
// }

// function media(teste){
//     let somaTotal = somarTudo(teste)
//     return somaTotal/teste.length
// }

// function maiorValor(teste){
//     let maior = teste[0]
//     for(let i=0 ; i < teste.length ; i++){
//         if(maior < teste[i]){
//             maior = teste[i]
//         }
//     }
//     return maior
// }

// function menorValor(teste){
//     let menor = teste[0]
//     for(let i=0 ; i < teste.length ; i++){
//         if(menor > teste[i]){
//             menor = teste[i]
//         }
//     }
//     return menor
// }

// let teste = [1,2,3,4,5,6]

// console.log(somarTudo(teste))
// console.log(media(teste))
// console.log(maiorValor(teste))
// console.log(menorValor(teste))


let serie = {
    nome: "Two and a Half Men",
    temporadas: 12,
    genero: "Comédia",
    classificacao: "14 anos",
    nrEpisodeios: {
        temporada1: 24,
        temporada2: 24,
        temporada3: 24,
    },

    // mostrarCaracteristicas: function(){
    //     return `Série: ${this.nome} | Classificação: ${this.classificacao}`

    // }
    mostrarCaracteristicas: () =>{
        return `Série: ${this.nome} | Classificação: ${this.classificacao}`
    }// nesse caso, a função arrow não tem acesso ao this, ou seja, não tem acesso as propriedades do objeto, por isso, o resultado é undefined.
    //tem acesso ao this, mas o this não se refere ao objeto, e sim ao contexto global, ou seja, window no navegador ou global no node.js.
}

console.log(serie.nome)
console.log(serie.mostrarCaracteristicas())
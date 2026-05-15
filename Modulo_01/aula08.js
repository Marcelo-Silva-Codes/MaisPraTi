// let arr = new Array()

// o array é um objeto meu rei

// let arr2 = [2,3,56,5]

// console.log(arr2.length)


// let livro = {
//     titulo: "A Montanha Mágica",
//     auto: "Thomas Mann",
//     tema: "Clássico"
// }





// // console.table(livro)
// for( const chave in livro){
//     console.log(livro [chave]) //so os valores 
//     // console.log(chave) // só os atributos
//     // console.log(livro)

// }
// let frutas = ['maca', 'banana']

// for( const chave in frutas){  //funciona com objetos mas é pensado para arrays esse for in
//     console.log(frutas) 

// }

// for( const fruta of frutas){
//     console.log(fruta)
// }
// for( const [indice, fruta] of frutas.entries()){
//     console.log(indice,fruta)
// }

// for(const [chave, valor] of Object.entries(livro)){ // maneira de se usar o for of com objetos
//     console.log(chave, valor)
// }


// let livros = [ 
//     {
//     titulo: "A Montanha Mágica",
//     auto: "Thomas Mann",
//     tema: "Clássico"
// },
// {
//     titulo: "bra",
//     auto: "truman",
//     tema: "Clico"
// },
// {
//     titulo: "A Moasdasdadsntanha Mágica",
//     auto: "Thomas asasdasMann",
//     tema: "Clássadsasdsico"
// }
// ]


// // for(const {titulo, auto} of livros){
// //     console.log(titulo, auto)
// // }

// for(const i in livros){
//     console.log(i) 
//     console.log(livros)
// }

// const notas = [ 9 ,8.5, 5, 6]


// notas.forEach((nota,indice,array) => { //metodo somente para arrays
//     console.log(array.length)
// })

// let carros = {
//     marca: 'ford',
//     modelo: 'ka',
//     anoFabricacao: 2009,
//     renavan: 2148723019283,
//     cor: 'vermelho'
// }



// for( const car in carros){
//     console.log(`${car}: ${carros[car]}`)
// }


// let cidades = [ 'Pelotas', 'POA','Piratini','São Paulo', 'Sapucaia', 'Sergipe']


// for(const cdd of cidades){
//     if(cdd.startsWith('S'))
//     console.log(cdd)
// }

//array de numer0 e for each para somar

// let numeros = [1,2,4,5,7,8,4,6,8]
// let soma = 0

// numeros.forEach( (numero) => {
//     soma += numero
// })

// console.log(soma)

const turmas = [
    { nome: 'Alice', nota: 9.0},
    { nome: 'Bruno', nota: 5.5},
    { nome: 'Carla', nota: 7.0},
    { nome: 'Daniel', nota: 3.8},
    { nome: 'Elisa', nota: 8.2},
];

let aprovados = []

let reprovados = []

let soma = 0

turmas.forEach( ({nome, nota}) => {
    soma += nota
    if(nota >= 6){
        aprovados.push(nome)
    }
    else{
        reprovados.push(nome)
    }
})
let media = soma/ turmas.length

console.log('Aprovados: ' + aprovados)
console.log('Reprovados: ' + reprovados)
console.log('Media da turma: ' + media.toFixed(2))



// console.log("Hello World!");

// console.log('shakespeare said "To be or not to be "');

// // console.log(`Hello World!`);

// console.log('Meu nome é Marcelo e tenho', 22 , 'anos');


// console.log(29 + 2);


// console.log(4.6);

// console.log(true);

// console.log(null); //vazio, nulo, nada

// console.log(undefined); // nao defini nada

// console.log(typeof "olá");

// let nome = "Marcelo";

// console.log(nome);

// nome = 'maluco';

// console.log(nome);


// console.log(`Meu nome é ${nome}`);


// let placar = 0

// console.log(placar++);
// console.log(placar);


// placar += 2 ;

// let numero = "10";

// console.log(placar);

// console.log(Number(numero) + placar);

// console.log(numero + placar);

// /* Criem duas variaveis, que recebem dois valores numéricos e calcile a média */


// let v1 = 2;

// let v2 = 4;

// let media = (v1 + v2 ) / 2;

// console.log(media);

// console.log(Math.random())
// console.log(Math.random() * 10)
// console.log(Math.floor(Math.random() * 10)) // pra baixo
// console.log(Math.round(Math.random() * 10)) // mais proximo
// console.log(Math.ceil(Math.random() * 10)) // pra cima

// console.log(Math.sqrt(4))

// const agora = new Date()

// console.log(agora.toString())
// console.log("Ano: "+ agora.getFullYear())


// let frase = "Senhor dos anéis é fantástico"


// console.log(frase.toUpperCase())


// let a = 10
// let b = 5

// console.log((a>b) && (b==a))
// console.log((a>b) || (b==a))

// console.log (a == b)
// console.log (a === b)

// console.log (!(a>b))

// "para fazer uma compra voce precisa de dinheiro e cc"

// let temDinheiro = true 
// let temCArtao = false

// console.log(temDinheiro && temCArtao)

// let login = "sla124"
// let senha = "1234"

// let loginCorreto = login === 'sla124' && senha === '1234'
// let loginErrado = login !== 'sla124' || senha !== '1234'


// let v1 = 2;

// let v2 = 4;

// let media = (v1 + v2 ) / 2;

// if( media < 6){
//      console.log("reprovado");
// }

// // Verifiquem se uma pessoa pode ou nao tirar a cnh. Criterio: ter mais de 18 anos


let idade = 17;

// if((idade >= 18) && (idade >= 60)){
//     console.log("Pode tirar a CNH");
// }
// else if ((idade < 18) && (idade > 0 )){
//     console.log("Não pode tirar a CNH")
// }
// else{
//     console.log("Não informou uma idade válida!")
// }

let mensagem = idade >= 18 ? "Pode tirar a CNH" : "Ainda não pode"

console.log(mensagem)

const prompt = require('prompt-sync')()

let nome  = prompt('Informe seu nome: ')

console.log("Seu nome é " + nome)
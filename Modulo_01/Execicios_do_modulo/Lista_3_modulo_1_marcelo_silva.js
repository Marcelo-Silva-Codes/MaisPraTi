const prompt = require('prompt-sync')();

// 1. Crie um objeto representando um produto com as propriedades: nome, preço,
// categoria e quantidade em estoque. Use for...in para percorrer e exibir todas as
// propriedades e seus valores. Em seguida, adicione uma nova propriedade
// desconto ao objeto e exiba o preço final calculado.

// let produto = {
//     nome: "Camiseta do Brasil",
//     preco: 150,
//     categoria: "Roupas",
//     quantidadeEmEstoque: 100
// }


// for (const chave in produto) {
//     console.log(`${chave} : ${produto[chave]}`);
// }

// produto.desconto = 10; 


// let precoFinal = produto.preco - (produto.preco * (produto.desconto / 100));
// console.log(`Preço com desconto de (${produto.desconto}%): R$ ${precoFinal}`);


// 2. Crie dois objetos representando personagens de um jogo, cada um com as
// propriedades: nome, vida, ataque e defesa. Use for...in para exibir os atributos de
// cada personagem lado a lado e determine qual deles tem maior poder total
// (soma de vida + ataque + defesa).

// let personagem1 = {
//     nome: "Goku",
//     vida: 100,
//     ataque: 30,
//     defesa: 25
// }

// let personagem2 = {
//     nome: "Vegeta",
//     vida: 80,
//     ataque: 35,
//     defesa: 20
// }

// let poderP1 = 0;
// let poderP2 = 0;

// console.log("Atributos:");
// for (const atributo in personagem1) {
//     console.log(`${personagem1.nome}: ${atributo} = ${personagem1[atributo]} | ${personagem2.nome}: ${atributo} = ${personagem2[atributo]}`);
    
//     // Somando os atributos numéricos
//     if (atributo !== "nome") {
//         poderP1 += personagem1[atributo];
//         poderP2 += personagem2[atributo];
//     }
// }

// console.log(`\nPoder Total:\n${personagem1.nome}: ${poderP1} | ${personagem2.nome}: ${poderP2}`);
// if (poderP1 > poderP2) {
//     console.log(`${personagem1.nome} tem o maior poder total!`);
// } else if (poderP2 > poderP1) {
//     console.log(`${personagem2.nome} tem o maior poder total!`);
// } else {
//     console.log("Empate!");
// }


// 3. Crie um objeto representando um funcionário com nome, cargo, salário e anos de
// experiência. Use for...in para listar todos os dados. Com base nos anos de
// experiência, calcule e exiba o bônus anual: até 2 anos = 5% do salário, de 3 a 5
// anos = 10%, acima de 5 anos = 15%.


// let f1= {
//     nome: "Toguro",
//     cargo: "Youtuber",
//     salario: 10000,
//     anosExp: 10
// }

// for(const dados in f1){
//     console.log(`${dados}: ${f1[dados]}`)
// }

// let bonusAnual = 0
// let percentual = 0

// if(f1.anosExp <= 2){
//     percentual = 0.05
// }
// else if(f1.anosExp <= 5){
//     percentual = 0.1
// }
// else{
//     percentual = 0.15
// }

// bonusAnual = f1.salario * percentual;
// console.log(`Bônus anual: R$ ${bonusAnual}`);



// 4. Crie um objeto onde cada chave é o nome de um item e o valor é a quantidade
// no inventário do jogador (ex: { espada: 1, poção: 5, escudo: 2 }). Use for...in para
// listar o inventário completo. Permita que o usuário informe um item para usar:
// reduza a quantidade em 1 ou exiba "item esgotado" se for zero.

// let inventario = { 
//     espada: 3, 
//     pocao: 9, 
//     escudo: 4 
// }

// console.log("--- Seu Inventário ---")
// for (const item in inventario) {
//     console.log(`${item}: ${inventario[item]}`)
// }

// function usarItem(itemDesejado) {
//     if (inventario[itemDesejado] !== undefined) {
//         if (inventario[itemDesejado] > 0) {
//             inventario[itemDesejado]--;
//             console.log(`Você usou 1 ${itemDesejado}. Restam: ${inventario[itemDesejado]}`)
//         } else {
//             console.log(`Item esgotado: ${itemDesejado}`)
//         }
//     } else {
//         console.log("Você não possui esse item no inventário.")
//     }
// }

// let itemEscolhido = ''

// do {
//  itemEscolhido = prompt("escolha um item (digite sair para parar): ")

// if(itemEscolhido.toLowerCase() === 'espada' || itemEscolhido.toLowerCase() === 'pocao' || itemEscolhido.toLowerCase() === 'escudo'){
//     usarItem(itemEscolhido)
// }

// }while(itemEscolhido.toLowerCase() !== 'sair')

// console.log('Até mais!!!')


// 5. Crie um objeto representando o orçamento mensal de uma pessoa, com
// categorias como alimentação, transporte, lazer e saúde, cada uma com valor
// planejado e valor gasto. Use for...in para percorrer as categorias e exibir se cada
// uma ficou dentro ou acima do orçamento, e calcule o saldo geral do mês.

// let orcamento = {
//     alimentacao:{ valorPlanejado: 800 , valorGasto: 1550},
//     transporte:{ valorPlanejado: 300 , valorGasto: 100},
//     lazer:{ valorPlanejado: 300 , valorGasto: 300},
//     saude:{ valorPlanejado: 400 , valorGasto: 800}
// }

// let totalPlanejado = 0
// let totalGasto = 0

// for(const categoria in orcamento){

//     let p = orcamento[categoria].valorPlanejado
//     let g = orcamento[categoria].valorGasto

//     totalPlanejado += p
//     totalGasto += g

//     let status = p >= g ? 'Dentro do orcamento' : 'Estourou o orcamento'
//     console.log(`${categoria}: Valor Planejado: ${p} | Valor Gasto: ${g} -> ${status}\n`)
// }

// let valorRestante = totalPlanejado - totalGasto
// let situacao = valorRestante > 0 ? 'Sobrou' : 'Faltou'

// console.log(`Situação: ${situacao} dinheiro!\nSaldo final do mês: ${'R$' + valorRestante} `)

// 6. Crie um array de objetos representando músicas, cada uma com título, artista e
// duração em segundos. Use for...of para exibir cada música no formato "Artista —
// Título (mm:ss)". Ao final, use forEach para somar a duração total e exiba-a no
// mesmo formato.


// 7. Crie um array de objetos com nome e nota de 6 alunos. Use for...of para classificar
// cada aluno (Aprovado, Recuperação ou Reprovado) e exibir o resultado. Use
// forEach para calcular e exibir separadamente a média dos aprovados e a média
// dos reprovados.


// 8. Crie um array de objetos representando produtos com nome, preço e quantidade.
// Use forEach para calcular o valor total em estoque de cada produto (preço ×
// quantidade) e exibir um relatório. Ao final, exiba o valor total geral de todo o
// estoque.


// 9. Crie um array de objetos onde cada objeto representa um contato com nome,
// telefone e e-mail. Use forEach para listar todos os contatos formatados. Permita
// buscar um contato pelo nome usando for...of e exiba os dados encontrados ou
// uma mensagem de "não encontrado".


// 10. Implemente uma pilha usando um array para simular o histórico de um
// navegador. Crie as funções visitar(pagina) (push), voltar() (pop) e paginaAtual()
// (peek). Simule uma sessão: visite 4 páginas, volte 2 vezes e exiba a página atual a
// cada operação.


// 11. Implemente uma fila usando um array para simular o atendimento de uma
// clínica. Crie as funções chegarPaciente(nome) (enqueue), chamarProximo()
// (dequeue) e exibirFila(). Simule a chegada de 5 pacientes e o atendimento de 3,
// exibindo o estado da fila a cada operação.


// 12. Implemente uma lista ligada simples usando nós ({ valor, proximo }). Crie as
// funções adicionar(tarefa), remover(tarefa) e exibir() que percorre todos os nós.
// Simule um gerenciador de tarefas: adicione 4 tarefas, remova uma pelo nome e
// exiba a lista antes e depois.
const prompt = require('prompt-sync')();

// 1. Crie um objeto representando um produto com as propriedades: nome, preço,
// categoria e quantidade em estoque. Use for...in para percorrer e exibir todas as
// propriedades e seus valores. Em seguida, adicione uma nova propriedade
// desconto ao objeto e exiba o preço final calculado.

let produto = {
    nome: "Camiseta do Brasil",
    preco: 150,
    categoria: "Roupas",
    quantidadeEmEstoque: 100
}


for (const chave in produto) {
    console.log(`${chave} : ${produto[chave]}`)
}

produto.desconto = 10;


let precoFinal = produto.preco - (produto.preco * (produto.desconto / 100))
console.log(`Preço com desconto de (${produto.desconto}%): R$ ${precoFinal}`)


// 2. Crie dois objetos representando personagens de um jogo, cada um com as
// propriedades: nome, vida, ataque e defesa. Use for...in para exibir os atributos de
// cada personagem lado a lado e determine qual deles tem maior poder total
// (soma de vida + ataque + defesa).

let personagem1 = {
    nome: "Goku",
    vida: 100,
    ataque: 30,
    defesa: 25
}

let personagem2 = {
    nome: "Vegeta",
    vida: 80,
    ataque: 35,
    defesa: 20
}

let poderP1 = 0
let poderP2 = 0

console.log("Atributos:")
for (const atributo in personagem1) {
    console.log(`${personagem1.nome}: ${atributo} = ${personagem1[atributo]} | ${personagem2.nome}: ${atributo} = ${personagem2[atributo]}`)

    // Somando os atributos numéricos
    if (atributo !== "nome") {
        poderP1 += personagem1[atributo]
        poderP2 += personagem2[atributo]
    }
}

console.log(`\nPoder Total:\n${personagem1.nome}: ${poderP1} | ${personagem2.nome}: ${poderP2}`)
if (poderP1 > poderP2) {
    console.log(`${personagem1.nome} tem o maior poder total!`)
} else if (poderP2 > poderP1) {
    console.log(`${personagem2.nome} tem o maior poder total!`)
} else {
    console.log("Empate!")
}


// 3. Crie um objeto representando um funcionário com nome, cargo, salário e anos de
// experiência. Use for...in para listar todos os dados. Com base nos anos de
// experiência, calcule e exiba o bônus anual: até 2 anos = 5% do salário, de 3 a 5
// anos = 10%, acima de 5 anos = 15%.


let f1= {
    nome: "Toguro",
    cargo: "Youtuber",
    salario: 10000,
    anosExp: 10
}

for(const dados in f1){
    console.log(`${dados}: ${f1[dados]}`)
}

let bonusAnual = 0
let percentual = 0

if(f1.anosExp <= 2){
    percentual = 0.05
}
else if(f1.anosExp <= 5){
    percentual = 0.1
}
else{
    percentual = 0.15
}

bonusAnual = f1.salario * percentual
console.log(`Bônus anual: R$ ${bonusAnual}`)


// 4. Crie um objeto onde cada chave é o nome de um item e o valor é a quantidade
// no inventário do jogador (ex: { espada: 1, poção: 5, escudo: 2 }). Use for...in para
// listar o inventário completo. Permita que o usuário informe um item para usar:
// reduza a quantidade em 1 ou exiba "item esgotado" se for zero.

let inventario = { 
    espada: 3, 
    pocao: 9, 
    escudo: 4 
}

console.log("--- Seu Inventário ---")
for (const item in inventario) {
    console.log(`${item}: ${inventario[item]}`)
}

function usarItem(itemRequerido) {
   let itemDesejado = itemRequerido.toLowerCase()
    
    if (inventario[itemDesejado] !== undefined) {
        if (inventario[itemDesejado] > 0) {
            inventario[itemDesejado]--;
            console.log(`Você usou 1 ${itemDesejado}. Restam: ${inventario[itemDesejado]}`)
        } else {
            console.log(`Item esgotado: ${itemDesejado}`)
        }
    } else {
        console.log("Você não possui esse item no inventário.")
    }
}

let itemEscolhido = ''

do {
 itemEscolhido = prompt("escolha um item (digite sair para parar): ")

if(itemEscolhido.toLowerCase() !== 'sair'){
    usarItem(itemEscolhido)
}

}while(itemEscolhido.toLowerCase() !== 'sair')

console.log('Até mais!!!')


// 5. Crie um objeto representando o orçamento mensal de uma pessoa, com
// categorias como alimentação, transporte, lazer e saúde, cada uma com valor
// planejado e valor gasto. Use for...in para percorrer as categorias e exibir se cada
// uma ficou dentro ou acima do orçamento, e calcule o saldo geral do mês.

let orcamento = {
    alimentacao:{ valorPlanejado: 800 , valorGasto: 1550},
    transporte:{ valorPlanejado: 300 , valorGasto: 100},
    lazer:{ valorPlanejado: 300 , valorGasto: 300},
    saude:{ valorPlanejado: 400 , valorGasto: 800}
}

let totalPlanejado = 0
let totalGasto = 0

for(const categoria in orcamento){

    let p = orcamento[categoria].valorPlanejado
    let g = orcamento[categoria].valorGasto

    totalPlanejado += p
    totalGasto += g

    let status = p >= g ? 'Dentro do orcamento' : 'Estourou o orcamento'
    console.log(`${categoria}: Valor Planejado: ${p} | Valor Gasto: ${g} -> ${status}\n`)
}

let valorRestante = totalPlanejado - totalGasto
let situacao = valorRestante > 0 ? 'Sobrou' : 'Faltou'

console.log(`Situação: ${situacao} dinheiro!\nSaldo final do mês: ${'R$' + valorRestante} `)

// 6. Crie um array de objetos representando músicas, cada uma com título, artista e
// duração em segundos. Use for...of para exibir cada música no formato "Artista —
// Título (mm:ss)". Ao final, use forEach para somar a duração total e exiba-a no
// mesmo formato.

let musicas = [
    { titulo: "Bohemian Rhapsody", artista: "Queen", duracao: 355 },
    { titulo: "Stayin' Alive", artista: "Bee Gees", duracao: 284 },
    { titulo: "Beat It", artista: "Michael Jackson", duracao: 258 }
]

function formatarTempo(tempo) {
    let minutos = Math.floor(tempo / 60)
    let segundos = tempo % 60
    return `${minutos}:${segundos.toString().padStart(2, '0')}`
}

console.log("--- Lista de Musicas ---")

for (const musica of musicas){
    console.log(`${musica.artista} - ${musica.titulo} (${formatarTempo(musica.duracao)})`)
}

let duracaoTotal = 0
musicas.forEach(musica => {
    duracaoTotal += musica.duracao
})

console.log(`\nDuração Total da lista: ${formatarTempo(duracaoTotal)}`)


// 7. Crie um array de objetos com nome e nota de 6 alunos. Use for...of para classificar
// cada aluno (Aprovado, Recuperação ou Reprovado) e exibir o resultado. Use
// forEach para calcular e exibir separadamente a média dos aprovados e a média
// dos reprovados.

let alunos = [
    { nome: "Marcelo", nota: 8.5 },
    { nome: "Adam", nota: 4.5 },
    { nome: "Roberto", nota: 6.0 },
    { nome: "Willian", nota: 3.0 },
    { nome: "Harold", nota: 9.0 },
    { nome: "Scooby", nota: 5.5 }
]

console.log("--- Classificação ---")
for (const aluno of alunos) {

    let status = ""

    if (aluno.nota >= 6) 
        status = "Aprovado"
    else if (aluno.nota >= 5) 
        status = "Recuperação"
    else 
        status = "Reprovado"

    console.log(`${aluno.nome}: Nota ${aluno.nota} - ${status}`)
}

let somaAprovados = 0 
let qtdAprovados = 0
let somaReprovados = 0
let qtdReprovados = 0

alunos.forEach(aluno => {
    if (aluno.nota >= 6) {
        somaAprovados += aluno.nota
        qtdAprovados++
    } else {
        somaReprovados += aluno.nota
        qtdReprovados++
    }
})

console.log(`\nMédia dos Aprovados: ${(somaAprovados / qtdAprovados).toFixed(2)}`)
console.log(`Média dos Não Aprovados: ${(somaReprovados / qtdReprovados).toFixed(2)}`)


// 8. Crie um array de objetos representando produtos com nome, preço e quantidade.
// Use forEach para calcular o valor total em estoque de cada produto (preço ×
// quantidade) e exibir um relatório. Ao final, exiba o valor total geral de todo o
// estoque.

let produtoList = [
    { nome: "Teclado", preco: 150, quantidade: 10 },
    { nome: "Mouse", preco: 80, quantidade: 25 },
    { nome: "Monitor", preco: 900, quantidade: 5 }
];

let valorTotalGeral = 0;

console.log("--- Relatório de Estoque ---");
produtoList.forEach(prod => {
    let valorTotalProduto = prod.preco * prod.quantidade;
    valorTotalGeral += valorTotalProduto;
    console.log(`Produto: ${prod.nome} | Qtd: ${prod.quantidade} | Total: R$ ${valorTotalProduto}`);
});

console.log(`\nValor Total Geral do Estoque: R$ ${valorTotalGeral}`);


// 9. Crie um array de objetos onde cada objeto representa um contato com nome,
// telefone e e-mail. Use forEach para listar todos os contatos formatados. Permita
// buscar um contato pelo nome usando for...of e exiba os dados encontrados ou
// uma mensagem de "não encontrado".

let contatos = [
    { nome: "Alice", telefone: "9999-1111", email: "alice@email.com" },
    { nome: "Bruno", telefone: "9999-2222", email: "bruno@email.com" },
    { nome: "Carla", telefone: "9999-3333", email: "carla@email.com" }
];

console.log("--- Lista de Contatos ---")

contatos.forEach(c => console.log(`Nome: ${c.nome} | Telefone: ${c.telefone} | Email: ${c.email}`))


function buscarContato(buscarNome) {
    let encontrado = null;
    for (const c of contatos) {
        if (c.nome.toLowerCase() === buscarNome.toLowerCase()) {
            encontrado = c;
            break;
        }
    }

    if (encontrado) {
        console.log(`\nContato Encontrado: ${encontrado.nome} - Tel: ${encontrado.telefone}`);
    } else {
        console.log(`\nContato "${buscarNome}" não encontrado.`);
    }
}

let nome = ''

do {
    nome = prompt("Digite um nome (digite sair para parar): ")

    if (nome.toLowerCase() !== 'sair')
        buscarContato(nome)

} while (nome.toLowerCase() !== 'sair')


// 10. Implemente uma pilha usando um array para simular o histórico de um
// navegador. Crie as funções visitar(pagina) (push), voltar() (pop) e paginaAtual()
// (peek). Simule uma sessão: visite 4 páginas, volte 2 vezes e exiba a página atual a
// cada operação.

let historico = []

function visitar(pagina) {
    historico.push(pagina)
    console.log(`Visitou: ${pagina}`)
}

function voltar() {
    if (historico.length > 1) {
        let removida = historico.pop()
        console.log(`Voltou de: ${removida}`)
    } else {
        console.log("Não há páginas anteriores para voltar.")
    }
}

function paginaAtual() {
    let atual = historico[historico.length - 1]
    console.log(`Página Atual: ${atual || "Nenhuma"}`)
}


visitar("google.com")
visitar("github.com")
visitar("stackoverflow.com")
visitar("youtube.com")

paginaAtual()
voltar()
paginaAtual()
voltar()
paginaAtual()


// 11. Implemente uma fila usando um array para simular o atendimento de uma
// clínica. Crie as funções chegarPaciente(nome) (enqueue), chamarProximo()
// (dequeue) e exibirFila(). Simule a chegada de 5 pacientes e o atendimento de 3,
// exibindo o estado da fila a cada operação.

let fila = []

function chegarPaciente(nome) {
    fila.push(nome)
    console.log(`Paciente ${nome} chegou.`)
    exibirFila()
}

function chamarProximo() {
    if (fila.length > 0) {
        let proximo = fila.shift()
        console.log(`Chamando paciente: ${proximo}`)
        exibirFila()
    } else {
        console.log("Fila vazia! Nenhum paciente aguardando.")
    }
}

function exibirFila() {
    console.log(`Fila atual: [ ${fila.join( ' , ' )} ]\n`)
}

chegarPaciente("Arthur")
chegarPaciente("Beatriz")
chegarPaciente("Caio")
chegarPaciente("Daniela")
chegarPaciente("Eduardo")

chamarProximo()
chamarProximo()
chamarProximo()


// 12. Implemente uma lista ligada simples usando nós ({ valor, proximo }). Crie as
// funções adicionar(tarefa), remover(tarefa) e exibir() que percorre todos os nós.
// Simule um gerenciador de tarefas: adicione 4 tarefas, remova uma pelo nome e
// exiba a lista antes e depois.

let lista = {
    cabeca: null 
}

function adicionar(tarefa) {
    let novoNo = { valor: tarefa, 
        proximo: null 
    }
    
    if (lista.cabeca === null) {
        lista.cabeca = novoNo
    } else {
        let atual = lista.cabeca
        while (atual.proximo !== null) {
            atual = atual.proximo
        }
        atual.proximo = novoNo
    }
    console.log(`Adicionado: "${tarefa}"`)
}

function remover(tarefa) {
    if (lista.cabeca === null) return

    if (lista.cabeca.valor === tarefa) {
        lista.cabeca = lista.cabeca.proximo
        console.log(`Removido: "${tarefa}"`)
        return
    }

    let atual = lista.cabeca
    while (atual.proximo !== null && atual.proximo.valor !== tarefa) {
        atual = atual.proximo
    }

    if (atual.proximo !== null) {
        atual.proximo = atual.proximo.proximo
        console.log(`Removido: "${tarefa}"`)
    } else {
        console.log(`Tarefa "${tarefa}" não encontrada.`)
    }
}

function exibir() {
    let atual = lista.cabeca
    let resultado = []
    while (atual !== null) {
        resultado.push(atual.valor)
        atual = atual.proximo
    }
    console.log(`Tarefas: ${resultado.join(' , ') || "Nenhuma"}`)
}


console.log("--- Criando Tarefas ---")
adicionar("Estudar JavaScript")
adicionar("Fazer café")
adicionar("Lavar a louça")
adicionar("Treinar na academia")

console.log("\n--- Antes da Remoção ---")
exibir()

console.log("\n--- Removendo ---")
remover("Lavar a louça")

console.log("\n--- Depois da Remoção ---")
exibir()
const {adicionarItem, calcularTotal, limparCarrinho, contarItens} = NodeJS.require('./carrinho.js')

beforeEach(() => {
    limparCarrinho()
})


test("Deve adicionar um item ao carrinho", () =>{
    adicionarItem("Camiseta", 49.90)
    expect(contarItens()).toBe(1)
})

test("Deve Calcular o total corretamente com vários itens", () =>{
    adicionarItem("Camiseta", 49.90)
    adicionarItem("Calca", 89.90)
    expect(calcularTotal()).toBe(139.80)
})

test("Quando o carrinho está vazio, total deve ser zero", () =>{
    expect(calcularTotal()).toBe(0)
    expect(contarItens()).toBe(0)
})


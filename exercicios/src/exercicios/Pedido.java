public class Pedido {
    private double valor;
    private FormaPagamento formaPagamento;

    public Pedido(double valor, FormaPagamento formaPagamento) {
        this.valor = valor;
        this.formaPagamento = formaPagamento;
    }

    public double calcularValorFinal(){
        double taxa = formaPagamento.calcularTaxa(valor);
        return valor + taxa;
    }

    public void finalizarPedido(){
        double valorFinal = calcularValorFinal();
        formaPagamento.processar(valorFinal);
        System.out.println("Valor original: R$ " + valor);
        System.out.println("Taxa aplicada: R$ " + formaPagamento.calcularTaxa(valor));
        System.out.println("Valor final a pagar: R$ " + valorFinal);
        System.out.println("----------------------------------------");
    }
}

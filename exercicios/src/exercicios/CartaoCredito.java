public class CartaoCredito implements FormaPagamento{
    @Override
    public double calcularTaxa(double valor) {
        return valor * 0.03;
    }

    @Override
    public void processar(double valor) {
        System.out.println("Processando pagamento via Cartão de Crédito no valor de R$ " + valor);
    }
}

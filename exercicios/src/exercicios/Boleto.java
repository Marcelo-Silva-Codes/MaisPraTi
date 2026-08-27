public class Boleto implements FormaPagamento{
    @Override
    public double calcularTaxa(double valor) {
        return 2.50;
    }

    @Override
    public void processar(double valor) {
        System.out.println("Processando pagamento via Boleto no valor de R$ " + valor);
    }
}

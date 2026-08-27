package exercicios;

public class Pix implements FormaPagamento{
    @Override
    public double calcularTaxa(double valor) {
        return 0;
    }

    @Override
    public void processar(double valor) {
        System.out.println("Processando pagamento via exercicios.Pix no valor de R$ " + valor);
    }
}

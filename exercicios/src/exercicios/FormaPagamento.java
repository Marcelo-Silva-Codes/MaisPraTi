public interface FormaPagamento {
    void processar(double valor);
    double calcularTaxa(double valor);
}

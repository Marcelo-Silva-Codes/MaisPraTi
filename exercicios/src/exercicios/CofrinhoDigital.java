public class CofrinhoDigital {
    private double saldo = 0;

    public CofrinhoDigital(double saldoInicial) {
        if(saldoInicial > 0) {
            this.saldo = saldo;
        }
    }

    public void depositar(double valor) {
        if (valor > 0) {
            saldo += valor;
            System.out.println("Valor de R$" + valor + " depositado!");
        }
    }

    public double quebrar(){
        double valorDevolvido = this.saldo;
        this.saldo = 0;
        return valorDevolvido;
    }

    public double getSaldo(){
        return this.saldo;
    }
}

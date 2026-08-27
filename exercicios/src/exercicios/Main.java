import exercicios.*;

//TIP To <b>Run</b> code, press <shortcut actionId="Run"/> or
// click the <icon src="AllIcons.Actions.Execute"/> icon in the gutter.
public class Main {
    public static void main(String[] args) {
        //Crie exercicios.CofrinhoDigital com saldo privado, depositar(),
        // quebrar() (zera e devolve o total) e getSaldo(). Não deve existir setter de saldo.
//
//        exercicios.CofrinhoDigital c1 = new exercicios.CofrinhoDigital(1000);
//
//        c1.depositar(10);
//        System.out.println("Saldo atual: R$" + c1.getSaldo());
//
//        double totalResgatado = c1.quebrar();
//        System.out.println("Valor resgatado ao quebrar: R$" + totalResgatado);
//
//        System.out.println("Saldo após quebrar: R$" + c1.getSaldo());

//
//        double distancia = 10.0;
//
//        exercicios.MeioTransporte carro = new exercicios.Carro();
//        exercicios.MeioTransporte bicicleta = new exercicios.Bicicleta();
//        exercicios.MeioTransporte ape = new exercicios.APe();
//
//        exercicios.MeioTransporte[] meioTransportes = { carro, bicicleta , ape};
//
//        System.out.println("-----Comparação de tempo para " + distancia + " Km -------");
//
//        for(exercicios.MeioTransporte meio: meioTransportes){
//            double tempoHoras = meio.calcularTempo(distancia);
//            double tempoMinutos = tempoHoras * 60;
//
//            System.out.printf("%s (%.0f km/h): %.2f horas (%.0f minutos)%n",
//                    meio.getNome(),
//                    meio.getVelocidadeMedia(),
//                    tempoHoras,
//                    tempoMinutos);
//        }

        double valorBase = 100.00;

        FormaPagamento pix = new Pix();
        Pedido pedidoPix = new Pedido(valorBase, pix);
        pedidoPix.finalizarPedido();

        FormaPagamento cartao = new CartaoCredito();
        Pedido pedidoCartao = new Pedido(valorBase, cartao);
        pedidoCartao.finalizarPedido();

        FormaPagamento boleto = new Boleto();
        Pedido pedidoBoleto = new Pedido(valorBase, boleto);
        pedidoBoleto.finalizarPedido();



    }
}
import model.Produto;

public class Main{
    public static void main(String[] args) {
//        Pessoa p1 = new Pessoa();
//        p1.nome = "Marcelo";
//        p1.idade = 22;
//
//        Pessoa p2 = new Pessoa();
//        p2.nome = "Maryay";
//        p2.idade = 37;
//
//        p1.apresentar();
//        p2.apresentar();
//
//
//        Pessoa p3 = p1;
//        p3.nome = "Edward";
//        System.out.println(p1.nome);
//
////        Pessoa p4 = null;
////        p4.apresentar(); //vai dar erro
//
//
//        Pessoa p5 = new Pessoa("dudu", 12);
////        p5.apresentar();
////
////        int numeroTeste = 10;
////
////        double resultado = p1.calcularDesconto(numeroTeste, 10);
////        System.out.println(numeroTeste);
////        System.out.println(resultado);
////
////        int[] a = {10,20};
////
////        p1.alterar(a);
////        System.out.println(a[0]);
//
//        System.out.println(p5.getPeso());
//
//        Calculadora cal = new Calculadora();
//
//        double x = 10;
//        double y = 29;
//
//
//        System.out.printf("%.1f + %.1f = %.2f", x,y,cal.somar(x,y));
//        double[] notas = { 123,456,789};
//        Produto ventilador = new Produto("ACRE","Ventila", 80.0, 10, notas );
//
//        notas[0] = -100;
//        System.out.println(ventilador.getNfe()[0]);
        Notificador[] canais = {
                new NotificadorEmail(),
                new NotificadorSMS()
        };

        for(Notificador canal : canais){
            canal.enviar("Marcelo", "Me oube ô desgraçado");
        }
    }
}
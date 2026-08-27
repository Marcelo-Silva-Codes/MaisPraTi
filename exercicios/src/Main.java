
public class Main {
    public static void main(String[] args) {

        Funcionario[] equipe = {
            new Vendedor("Lucas",1700, "32442434" ,100),
            new Vendedor("Tão", 18000,"21323132", 100),
            new Funcionario("Viga",1000, "213212323"),
        };


        double folha = 0;

        for(Funcionario funcionario : equipe){
            System.out.println(funcionario);
            folha += funcionario.calcularSalario();
        }
        System.out.println("Folha de pagamento: " + folha);
    }
}
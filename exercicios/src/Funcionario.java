public class Funcionario {
    protected String nome;
    protected double salario;
    protected String cpf;

    public Funcionario(String nome, double salario, String cpf) {
        this.nome = nome;
        this.salario = salario;
        this.cpf = cpf;
    }

    public  double calcularSalario(){
        return this.salario;
    }

    @Override
    public String toString() {
        return "Funcionario{" +
                "nome='" + nome + '\'' +
                ", salario=" + salario +
                ", cpf='" + cpf + '\'' +
                '}';
    }
}

public class Pessoa {
    public String nome;
    protected int idade;
    private float peso = 90;

    public Pessoa(String nome, int idade){
        this.nome = nome;
        this.idade = idade;
    }

    public Pessoa(){

    }

    void apresentar(){
        System.out.println("Olá, meu nome é: " + nome + " sou " );
    }

    double calcularDesconto(double valor, double percentual){
        return valor - (valor * percentual/100);
    }

    void alterar(int [] array){
        array[0] = 99;
    }

    public float getPeso(){
        return this.peso;
    }

    public void setPeso(float peso){
        this.peso = peso;
    }
}

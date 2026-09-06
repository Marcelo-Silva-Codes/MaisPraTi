package exemplos;

public class Animal {
    protected String nome;
    protected int idade;

    public Animal(String nome, int idade){
        this.nome = nome;
        this.idade = idade;
    }

    public void respirar(){
        System.out.println(nome + "esta respirando.");
    }

    public void emitirSom(){
        System.out.println(nome + "faz um som generico.");
    }

}

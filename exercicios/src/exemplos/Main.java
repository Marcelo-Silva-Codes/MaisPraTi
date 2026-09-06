package exemplos;

class Animal {
    protected String nome;
    protected int idade;

    public Animal(String nome, int idade) {
        this.nome = nome;
        this.idade = idade;
    }

    public void respirar() {
        System.out.println(nome + " esta respirando.");
    }

    public void emitirSom() {
        System.out.println(nome + " faz um som generico.");
    }

}

class Mamiferos extends Animal {
    protected double temperatura = 37.0;

    public Mamiferos(String nome, int idade) {
        super(nome, idade);
    }

    public void amamentar(){
        System.out.println(nome + " esta amamentando os filhotes.");
    }

    public void setTemperatura(double novaTemperatura){
        if(novaTemperatura < 30 || novaTemperatura > 45){
            System.out.println("Temperatura fora do aceitavel");
            return;
        }
        this.temperatura = novaTemperatura;
        System.out.println(nome + " temperatura é: " + temperatura);

    }

    public double getTemperatura(){
        return temperatura;
    }
}

class Cachorro extends Mamiferos implements Nadador, Corredor {
    private String raca;

    public Cachorro(String nome, int idade, String raca){
        super(nome,idade);
        this.raca = raca;
    }

    public void getRaca(){
        System.out.println(raca);
    }

    public void abanarRabo(){
        System.out.println(nome + " esta abanando.");
    }

    @Override
    public void emitirSom(){
        System.out.println(nome + " esta latindo.");
    }

    @Override
    public void nadar(){
        System.out.println(nome + " esta nadando.");
    }

    @Override
    public void correr(){
        System.out.println(nome + " esta correndo.");
    }

}

class Gato extends Mamiferos {
    public Gato(String nome, int idade){
        super(nome, idade);
    }

    @Override
    public void emitirSom(){
        System.out.println(nome + " esta miando.");
    }
}

interface Nadador{
    void nadar();

    default void boiar(){
        System.out.println("Boiando na água");
    }
}
interface Corredor{
    void correr();
}

public class Main {

    public static void main(String[] args) {

    Cachorro caramelo = new Cachorro("Caramelo", 4, "ViraLata");
    caramelo.amamentar();
    caramelo.abanarRabo();
    caramelo.respirar();
    caramelo.emitirSom();

    Gato frajola = new Gato("Frajola", 4);

    frajola.emitirSom();

        System.out.println("Tempratura inicial: " + caramelo.getTemperatura());
        caramelo.setTemperatura(38.5);
        caramelo.setTemperatura(48);

    }
}


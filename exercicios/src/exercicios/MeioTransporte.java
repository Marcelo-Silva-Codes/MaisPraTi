public abstract class MeioTransporte {
        private String nome;
        private double velocidadeMedia;

    public MeioTransporte(String nome, double velocidadeMedia) {
        this.nome = nome;
        this.velocidadeMedia = velocidadeMedia;
    }
    public double calcularTempo(double distancia){
        return distancia / velocidadeMedia;
    }

    public String getNome() {
        return nome;
    }

    public double getVelocidadeMedia() {
        return velocidadeMedia;
    }
}

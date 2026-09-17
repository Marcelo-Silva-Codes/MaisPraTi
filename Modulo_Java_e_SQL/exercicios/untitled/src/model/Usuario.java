package model;

public abstract class Usuario {
    protected String nome;
    protected int quantidadeEmprestada;

    public Usuario(String nome) {
        this.nome = nome;
        this.quantidadeEmprestada = 0;
    }

    public abstract int getLimiteItens();

    public boolean podeEmprestar() {
        return quantidadeEmprestada < getLimiteItens();
    }

    public void registrarEmprestimo() { this.quantidadeEmprestada++; }
    public void registrarDevolucao() { this.quantidadeEmprestada--; }

    public String getNome() { return nome; }
}

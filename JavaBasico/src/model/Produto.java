package model;

import java.util.Arrays;

public class Produto {
    private final String codigo;
    private String nome;
    private double preco;
    private int estoque;
    private double[] nfe;

    public Produto(String codigo, String nome, double preco, int estoque, double[] nfe) {
        if(codigo == null || codigo.isBlank()){
            throw new IllegalArgumentException("Codigo é Obrigatório");
        }

        if( preco <= 0){
            throw new IllegalArgumentException("Preço deve ser positivo");
        }

        this.codigo = codigo;
        this.nome = nome;
        this.preco = preco;
        this.estoque = estoque;
        this.nfe = Arrays.copyOf(nfe, nfe.length);
    }

    public void vender(int quantidade){
        if(quantidade <= 0){
            throw new IllegalArgumentException("Quantidade inválida");
        }

        estoque -= quantidade;
    }

    public int getEstoque() { return  estoque;}
    public double[] getNfe() { return Arrays.copyOf(nfe, nfe.length);}
}

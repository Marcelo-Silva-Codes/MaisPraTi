package exercicio_biblioteca.contrato.modelo;

import exercicio_biblioteca.contrato.contrato.Reservavel;
//O ItemEmprestavel está sendo um middleWare entre Livro e a interface Emprestavel. olha que top!

public class Livro extends ItemEmprestavel implements Reservavel {
    private final String autor;
    private final String isbn;
    private int renovacoesUtilizadas;
    private String nomeReservante;

    private static final int MAXIMO_RENOVACOES = 2;

    public Livro(String codigo, String titulo, int ano, String autor, String isbn){
        super(codigo, titulo, ano);

        if(autor == null || autor.isBlank()) {
            throw new IllegalArgumentException("Autor inválido!");
        }

        this.autor = autor;
        this.isbn = isbn;
        this.renovacoesUtilizadas = 0;
        this.nomeReservante = null;
    }

    @Override
    public int getPrazoEmprestimoDias(){
        return 14;
    }

    @Override
    public double getMultaPorDia(){
        return 0.50;
    }

    @Override
    public boolean permiteRenovacao(){
        return renovacoesUtilizadas <  MAXIMO_RENOVACOES;
    }

}

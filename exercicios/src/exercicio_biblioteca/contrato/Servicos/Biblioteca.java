package exercicio_biblioteca.contrato.Servicos;

import exercicio_biblioteca.contrato.contrato.Config;
import exercicio_biblioteca.contrato.modelo.ItemAcervo;
import exercicio_biblioteca.contrato.modelo.Usuario;

public class Biblioteca {
    private final String nome;
    private final ItemAcervo[] itemAcervo;
    private int totalItens;
    private final Usuario[] usuarios;
    private int totalUsuarios;

    public Biblioteca(String nome){
        this.nome = nome;
        this.itemAcervo = new ItemAcervo[Config.CAPACIDADE_ACERVO];
        this.usuarios = new Usuario[Config.CAPACIDADE_USUARIOS];
        this.totalItens = 0;
        this.totalUsuarios = 0;
    }

    public void cadastrar(ItemAcervo itemAcervo){
        acervo[totalItens++] = item;
    }
}

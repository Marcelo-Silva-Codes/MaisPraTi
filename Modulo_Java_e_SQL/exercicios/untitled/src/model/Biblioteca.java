package model;

public class Biblioteca {
    private ItemBiblioteca[] acervo;
    private int totalItens;

    public Biblioteca(int capacidadeMax) {
        this.acervo = new ItemBiblioteca[capacidadeMax];
        this.totalItens = 0;
    }

    public void adicionarAoAcervo(ItemBiblioteca item) {
        if (totalItens < acervo.length) {
            acervo[totalItens++] = item;
        }
    }

    public boolean emprestar(ItemBiblioteca item, Usuario usuario) {
        if (item.isDisponivel() && usuario.podeEmprestar()) {
            item.emprestarItem();
            usuario.registrarEmprestimo();
            System.out.println("SUCESSO: '" + item.getTitulo() + "' emprestado para " + usuario.getNome());
            return true;
        }
        System.out.println("RECUSADO: Limite atingido ou item indisponível para " + usuario.getNome());
        return false;
    }

    public void devolver(ItemBiblioteca item, Usuario usuario) {
        if (!item.isDisponivel()) {
            item.devolverItem();
            usuario.registrarDevolucao();
            System.out.println("DEVOLUÇÃO: '" + item.getTitulo() + "' devolvido por " + usuario.getNome());
        }
    }

    public void listarAcervo() {
        System.out.println("\n--- Lista do Acervo ---");
        // Laço único e polimórfico (sem ifs verificando "instanceof")
        for (int i = 0; i < totalItens; i++) {
            ItemBiblioteca item = acervo[i];
            System.out.println("Código: " + item.getCodigo() + " | Título: " + item.getTitulo()
                    + " | Disponível: " + item.isDisponivel() + " | Prazo: " + item.getPrazo() + " dias");
        }
        System.out.println("-----------------------\n");
    }

}

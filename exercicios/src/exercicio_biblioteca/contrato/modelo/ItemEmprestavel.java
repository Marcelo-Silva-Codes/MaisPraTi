package exercicio_biblioteca.contrato.modelo;

import exercicio_biblioteca.contrato.contrato.Emprestavel;

public abstract class ItemEmprestavel extends ItemAcervo implements Emprestavel {
    private Usuario usuario;

    protected ItemEmprestavel(String codigo, String titulo, int ano) {
        super(codigo, titulo, ano);
        this.usuarioAtual = null;
    }

    @Override
    public boolean emprestar(Usuario usuario){
        if(usuario == null){
            throw new IllegalArgumentException("Usuario não poder ser nulo.");
        }

        if(!isDisponivel()){
            System.out.println("Item indisponivel!");
        }
        marcarComoEmprestado();
        return true;
    }

}

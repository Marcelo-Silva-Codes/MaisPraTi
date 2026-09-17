package model;

public abstract class ItemBiblioteca {
    protected String codigo;
    protected String titulo;
    protected boolean disponivel;

    public ItemBiblioteca(String codigo, String titulo) {
        this.codigo = codigo;
        this.titulo = titulo;
        this.disponivel = true;
    }

    // Métodos Abstratos (Polimorfismo)
    public abstract int getPrazo();
    public abstract double calcularMulta(int diasAtraso);

    // Métodos para controle de disponibilidade
    public void emprestarItem() { this.disponivel = false; }
    public void devolverItem() { this.disponivel = true; }

    public boolean isDisponivel() { return disponivel; }
    public String getTitulo() { return titulo; }
    public String getCodigo() { return codigo; }
}

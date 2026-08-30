package exercicio_biblioteca.contrato.contrato;

public interface Reservavel {
    void reservar(Usuario usuario);
    boolean temReserva();
    String getReserbante();

    default void cancelarReserva(){

    }
}

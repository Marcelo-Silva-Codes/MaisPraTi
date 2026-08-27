public class NotificadorEmail implements Notificador{

    public void enviar(String destinatário, String mensagem) {
        System.out.println("[E-mail] para: " + destinatário);
        System.out.println("         " + mensagem);
    }
}

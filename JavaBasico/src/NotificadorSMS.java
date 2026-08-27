public class NotificadorSMS implements Notificador{

    public void enviar(String destinatário, String mensagem) {
        System.out.println("Enviando mensagem via SMS" + destinatário + "Mensagem: " + mensagem);
    }
}

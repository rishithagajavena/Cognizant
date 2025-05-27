import java.io.*;
import java.net.*;

public class TCPClient {
    public static void main(String[] args) throws IOException {
        Socket socket = new Socket("localhost", 1234);

        BufferedReader reader = new BufferedReader(new InputStreamReader(socket.getInputStream()));
        PrintWriter writer = new PrintWriter(socket.getOutputStream(), true);
        BufferedReader console = new BufferedReader(new InputStreamReader(System.in));

        String input;
        while (true) {
            System.out.print("You: ");
            String message = console.readLine();
            writer.println(message);
            input = reader.readLine();
            System.out.println("Server: " + input);
        }
    }
}

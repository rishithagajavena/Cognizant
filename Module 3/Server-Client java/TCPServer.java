import java.io.*;
import java.net.*;

public class TCPServer {
    public static void main(String[] args) throws IOException {
        ServerSocket server = new ServerSocket(1234);
        System.out.println("Server started, waiting for client...");

        Socket client = server.accept();
        System.out.println("Client connected!");

        BufferedReader reader = new BufferedReader(new InputStreamReader(client.getInputStream()));
        PrintWriter writer = new PrintWriter(client.getOutputStream(), true);
        BufferedReader console = new BufferedReader(new InputStreamReader(System.in));

        String input;
        while ((input = reader.readLine()) != null) {
            System.out.println("Client: " + input);
            System.out.print("You: ");
            String response = console.readLine();
            writer.println(response);
        }

        server.close();
    }
}

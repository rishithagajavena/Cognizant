class MessagePrinter extends Thread {
    String message;

    MessagePrinter(String message) {
        this.message = message;
    }

    public void run() {
        for (int i = 1; i <= 5; i++) {
            System.out.println(message + " - " + i);
        }
    }
}

public class ThreadExample {
    public static void main(String[] args) {
        MessagePrinter thread1 = new MessagePrinter("Hello from Thread 1");
        MessagePrinter thread2 = new MessagePrinter("Hello from Thread 2");

        thread1.start();
        thread2.start();
    }
}

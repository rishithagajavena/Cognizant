public class VirtualThreadsDemo {
    public static void main(String[] args) {
        long start = System.currentTimeMillis();

        for (int i = 0; i < 100; i++) {
            Thread.startVirtualThread(() -> {
                System.out.println("Hello from virtual thread: " + Thread.currentThread());
            });
        }

        long end = System.currentTimeMillis();
        System.out.println("Completed in " + (end - start) + " ms");
    }
}

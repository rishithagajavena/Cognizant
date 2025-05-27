import java.util.HashMap;
import java.util.Scanner;

public class HashMapExample {
    public static void main(String[] args) {
        HashMap<Integer, String> studentMap = new HashMap<>();
        Scanner scanner = new Scanner(System.in);

        System.out.println("Enter student ID and name (type -1 to stop):");
        while (true) {
            System.out.print("Enter ID: ");
            int id = scanner.nextInt();
            scanner.nextLine(); // consume newline
            if (id == -1) break;

            System.out.print("Enter name: ");
            String name = scanner.nextLine();
            studentMap.put(id, name);
        }

        System.out.print("\nEnter ID to search: ");
        int searchId = scanner.nextInt();
        String result = studentMap.get(searchId);

        if (result != null)
            System.out.println("Student Name: " + result);
        else
            System.out.println("Student ID not found.");

        scanner.close();
    }
}

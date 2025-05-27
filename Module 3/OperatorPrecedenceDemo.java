public class OperatorPrecedenceDemo {
    public static void main(String[] args) {
        int result1 = 10 + 5 * 2;
        int result2 = (10 + 5) * 2;
        int result3 = 20 / 5 + 3 * 2;
        int result4 = 20 / (5 + 3) * 2;

        System.out.println("Result 1 (10 + 5 * 2): " + result1);
        System.out.println("Result 2 ((10 + 5) * 2): " + result2);
        System.out.println("Result 3 (20 / 5 + 3 * 2): " + result3);
        System.out.println("Result 4 (20 / (5 + 3) * 2): " + result4);

        System.out.println("\n--- Explanation ---");
        System.out.println("Result 1: Multiplication has higher precedence, so 5 * 2 = 10; then 10 + 10 = 20.");
        System.out.println("Result 2: Parentheses evaluated first: 10 + 5 = 15; then 15 * 2 = 30.");
        System.out.println("Result 3: 20 / 5 = 4 and 3 * 2 = 6; then 4 + 6 = 10.");
        System.out.println("Result 4: Parentheses first: (5 + 3) = 8; then 20 / 8 = 2 (integer division), and 2 * 2 = 4.");
    }
}

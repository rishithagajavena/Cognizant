public class MethodOverloadingDemo {
    public static int add(int a, int b) {
        return a + b;
    }
    public static double add(double a, double b) {
        return a + b;
    }
    public static int add(int a, int b, int c) {
        return a + b + c;
    }

    public static void main(String[] args) {
        int sum1 = add(5, 10);
        double sum2 = add(3.5, 4.8);
        int sum3 = add(2, 4, 6);
        System.out.println("Sum of two integers (5 + 10): " + sum1);
        System.out.println("Sum of two doubles (3.5 + 4.8): " + sum2);
        System.out.println("Sum of three integers (2 + 4 + 6): " + sum3);
    }
}

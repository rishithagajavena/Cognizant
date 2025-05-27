public class TypeCastingExample {
    public static void main(String[] args) {
        double originalDouble = 9.75;
        int castedInt = (int) originalDouble;

        int originalInt = 15;
        double castedDouble = (double) originalInt;

        System.out.println("Original double: " + originalDouble);
        System.out.println("Double casted to int: " + castedInt);
        System.out.println("Original int: " + originalInt);
        System.out.println("Int casted to double: " + castedDouble);
    }
}

public class PatternMatchingSwitch {
    public static void main(String[] args) {
        printType(42);
        printType("Hello");
        printType(3.14);
        printType(true);
    }

    static void printType(Object obj) {
        String result = switch (obj) {
            case Integer i -> "It's an Integer: " + i;
            case String s -> "It's a String: " + s;
            case Double d -> "It's a Double: " + d;
            case Boolean b -> "It's a Boolean: " + b;
            default -> "Unknown type";
        };
        System.out.println(result);
    }
}

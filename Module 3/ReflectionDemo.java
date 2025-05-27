import java.lang.reflect.*;

class Sample {
    public void greet(String name) {
        System.out.println("Hello, " + name);
    }
}

public class ReflectionDemo {
    public static void main(String[] args) throws Exception {
        Class<?> clazz = Class.forName("Sample");
        Object instance = clazz.getDeclaredConstructor().newInstance();

        Method[] methods = clazz.getDeclaredMethods();
        for (Method method : methods) {
            System.out.println("Method: " + method.getName());
            for (Parameter param : method.getParameters()) {
                System.out.println(" - Parameter: " + param.getType().getSimpleName());
            }

            if (method.getName().equals("greet")) {
                method.invoke(instance, "Java Reflection");
            }
        }
    }
}

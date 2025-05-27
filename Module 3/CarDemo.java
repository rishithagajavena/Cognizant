class Car {
    String make;
    String model;
    int year;
    void displayDetails() {
        System.out.println("Car Make: " + make);
        System.out.println("Car Model: " + model);
        System.out.println("Manufacturing Year: " + year);
    }
}

public class CarDemo {
    public static void main(String[] args) {
        Car car1 = new Car();
        car1.make = "Toyota";
        car1.model = "Camry";
        car1.year = 2020;
        car1.displayDetails();

        System.out.println();
        Car car2 = new Car();
        car2.make = "Tesla";
        car2.model = "Model 3";
        car2.year = 2023;
        car2.displayDetails();
    }
}

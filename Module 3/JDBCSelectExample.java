import java.sql.*;

public class JDBCSelectExample {
    public static void main(String[] args) {
        String url = "jdbc:mysql://localhost:3306/school"; 
        String user = "root";
        String password = "your_password";

        try {
            Class.forName("com.mysql.cj.jdbc.Driver");
            Connection conn = DriverManager.getConnection(url, user, password);
            Statement stmt = conn.createStatement();
            ResultSet rs = stmt.executeQuery("SELECT * FROM students");
            while (rs.next()) {
                System.out.println(rs.getInt("id") + ": " + rs.getString("name") + ", Age: " + rs.getInt("age"));
            }

            conn.close();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}

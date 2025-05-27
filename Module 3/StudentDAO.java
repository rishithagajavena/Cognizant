import java.sql.*;

public class StudentDAO {
    private Connection conn;

    public StudentDAO() throws SQLException {
        conn = DriverManager.getConnection("jdbc:mysql://localhost:3306/school", "root", "your_password");
    }

    public void insertStudent(int id, String name, int age) throws SQLException {
        String query = "INSERT INTO students (id, name, age) VALUES (?, ?, ?)";
        PreparedStatement ps = conn.prepareStatement(query);
        ps.setInt(1, id);
        ps.setString(2, name);
        ps.setInt(3, age);
        ps.executeUpdate();
        System.out.println("Student inserted.");
    }

    public void updateStudent(int id, String name) throws SQLException {
        String query = "UPDATE students SET name = ? WHERE id = ?";
        PreparedStatement ps = conn.prepareStatement(query);
        ps.setString(1, name);
        ps.setInt(2, id);
        ps.executeUpdate();
        System.out.println("Student updated.");
    }
}

import java.sql.SQLException;
public class TestStudentDAO {
    public static void main(String[] args) {
        try {
            StudentDAO dao = new StudentDAO();
            dao.insertStudent(1, "Alice", 20);
            dao.updateStudent(1, "Alice Smith");
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
}

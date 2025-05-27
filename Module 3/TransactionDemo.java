import java.sql.*;

public class TransactionDemo {
    public static void main(String[] args) {
        try (Connection conn = DriverManager.getConnection("jdbc:mysql://localhost:3306/bank", "root", "your_password")) {
            conn.setAutoCommit(false);

            try {
                PreparedStatement debit = conn.prepareStatement("UPDATE accounts SET balance = balance - ? WHERE id = ?");
                PreparedStatement credit = conn.prepareStatement("UPDATE accounts SET balance = balance + ? WHERE id = ?");

                debit.setDouble(1, 1000);
                debit.setInt(2, 1);
                debit.executeUpdate();

                credit.setDouble(1, 1000);
                credit.setInt(2, 2);
                credit.executeUpdate();

                conn.commit();
                System.out.println("Transfer successful!");

            } catch (Exception e) {
                conn.rollback();
                System.out.println("Transfer failed. Transaction rolled back.");
                e.printStackTrace();
            }

        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
}

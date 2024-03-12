import { db } from "../connection.js";

export const login = (req, res) => {
  const { username, password } = req.body;
  // menggunakan parameterized query untuk mencegah SQL injection
  const query = "SELECT * FROM users WHERE username = ? AND password = ?";
  db.query(query, [username, password], (err, results) => {
    if (err) {
      console.log("error executing query", err);
      res
        .status(500)
        .json({ success: false, message: "Internal Server Error" });
    } else {
      if (results.length > 0) {
        res.json({ success: true, message: "Login successful" });
      } else {
        res.json({ success: false, message: "Invalid credentials" });
      }
    }
  });
};

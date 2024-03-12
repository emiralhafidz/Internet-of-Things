import { db } from "../connection.js";

export const send = (req, res) => {
  const { http_sensor1, http_sensor2 } = req.query;

  // Validasi input
  if (!http_sensor1 || !http_sensor2) {
    return res.status(400).json({ error: "Invalid input" });
  }

  // Prepared statement untuk mencegah SQL injection
  const query = `
    INSERT INTO http(http_sensor1, http_sensor2, timestamp) 
    VALUES (?, ?, NOW())`;

  db.query(query, [http_sensor1, http_sensor2], (err, results) => {
    if (err) {
      console.error("Error inserting data:", err);
      return res.status(500).json({ error: "Internal Server Error" });
    }
    console.log("Data inserted successfully");
    return res.json({ message: "Data inserted successfully" });
  });
};

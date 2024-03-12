import { db } from "../connection.js";
import moment from "moment";

// Function to fetch data
export const fetchDataHttp = (req, res, column) => {
  const query = `SELECT ${column} FROM http ORDER BY timestamp DESC LIMIT 1`;
  db.query(query, (err, results) => {
    if (err) {
      console.error("Error fetching data from MySQL:", err);
      res.status(500).json({ error: "Internal Server Error" });
    } else {
      res.json(results);
    }
  });
};

// Fetching data for cards
export const fetchDataCardHttp = (req, res) => {
  const { column } = req.params;
  fetchDataHttp(req, res, column);
};

// Fetching data table
export const fetchDataTableHttp = (req, res) => {
  const query = `SELECT * FROM http ORDER BY timestamp DESC LIMIT 100`;
  db.query(query, (err, results) => {
    if (err) {
      console.error("Error fetching data from MySQL:", err);
      res.status(500).json({ error: "Internal Server Error" });
    } else {
      const formatedResults = results.map((row) => {
        row.timestamp = moment(row.timestamp).format("YYYY-MM-DD HH:mm:ss");
        return row;
      });
      res.json(formatedResults);
    }
  });
};



const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const app = express();
const bodyParser = require("body-parser");
const port = 3000;
const cors = require("cors");

// Enable CORS for all routes
app.use(cors());

// Body-parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Connect to SQLite database
const db = new sqlite3.Database(
  "attendance25.db",
  sqlite3.OPEN_READWRITE,
  (err) => {
    if (err) {
      console.error(err.message);
    }
    console.log("Connected to the SQLite database.");
  }
);

// API endpoint to fetch attendance records
app.get("/api/attendance", (req, res) => {
  db.all("SELECT * FROM attendance_records", [], (err, rows) => {
    if (err) {
      throw err;
    }
    res.json(rows);
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

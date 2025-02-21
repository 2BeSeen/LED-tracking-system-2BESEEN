const express = require("express");
const cors = require("cors");
const { Client } = require("pg");

const app = express();
app.use(express.json());
app.use(cors());

const db = new Client({
  connectionString: process.env.DATABASE_URL,  // Je database URL hier.
});
db.connect();

app.get("/", (req, res) => {
  res.send("Backend draait!");
});

app.listen(5000, () => console.log("Backend draait op poort 5000"));


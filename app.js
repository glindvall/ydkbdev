// Import required modules
const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

// Create an Express application
const app = express();
app.use(cors());
const port = 3306;

// Set up database connection parameters
const dbConfig = {
  host: 'ydkb-1.cremy6ma0s89.us-east-2.rds.amazonaws.com',
  user: 'ydkb_worker',
  password: 'Go2XzMB2t7uGRm',
  database: 'ydkb',
};

// Create a database connection pool
const pool = mysql.createPool(dbConfig);

// API endpoint to handle database queries
app.use(express.json());

app.post('/api/query', (req, res) => {
  const { query } = req.body;

  // Execute the query using the connection pool
  pool.query(query, (error, results) => {
    if (error) {
      console.error('Error executing query:', error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }

    res.json(results);
  });
});

// Start the Express server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
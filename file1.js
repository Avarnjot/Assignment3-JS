// Import the express module
const express = require('express');

// Import the JSON data
const data = require('./data/data.json');

// Create an instance of the express application
const app = express();

// Define the port number
const PORT = 3000;

// Define a route for the home page
app.get('/', (req, res) => {
    // displaying group names
  res.send('<h1>Group Names:</h1><ul>Avarnjot Singh</ul><ul>Manpreet Singh</ul><ul>Sohail Sharma</ul>')
});

// Start the server and listen on the defined port
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})
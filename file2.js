// Import the express module
const express = require('express');

// Import the JSON data
const data = require('./data/data.json');

// Create an instance of the express application
const app = express(); 

// Define the port number
const PORT = 3000;

// Define a route to handle GET requests 
app.get('/data', (req, res)=>{ 
      // Send the JSON data as a response
    res.json(data);
})
  
// Start the server and listen on the defined port
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
});
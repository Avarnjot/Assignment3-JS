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
    // Send a simple HTML response for the home page
    res.send('<h1>Hello Express JS framework! The minimal framework<h1>');
});

// Define a route to retrieve the JSON data
app.get("/data", (req, res) => {
    // Send the JSON data as a response
    res.json(data);
});

// Define a route to handle POST requests
app.post("/data", (req, res) => {
    // Send a message indicating that new data is being created using POST
    res.send('Creating new data using POST');
});

// Define a route to handle PUT requests
app.put("/data/:id", (req, res) => {
    // Extract the ID from the url
    const id = req.params.id;
    // Send a message indicating that data with the specified ID is being updated using PUT
    res.send(`Updating data with ID ${id} using PUT`);
});

// Define a route to handle DELETE requests
app.delete("/data/:id", (req, res) => {
    // Extract the ID from the url
    const id = req.params.id;
    // Send a message indicating that data with the specified ID is being deleted using DELETE
    res.send(`Deleting data with ID ${id} using DELETE`);
});

// Start the server and listen on the defined port
app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});

// Create web server
// Create a new Express app
const express = require('express');
const app = express();

// Create a new route for GET requests to /comments
app.get('/comments', (req, res) => {
  res.send('This is the comments route');
});

// Start the server on port 4001
app.listen(4001, () => {
  console.log('Your app is listening on port 4001!');
});
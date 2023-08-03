const express = require('express')
const test = require('test');
const app = express();
const port=3000

app.get('/', (req, res) => {
    res.send('Hello, world!');
});

app.listen(port, (err) => {
    if (err) {
      console.error('Error starting the server:', err);
    } else {
      console.log(`Server is running on http://localhost:${port}`);
    }
  });
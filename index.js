const express = require('express')
const test = require('test');
const app = express();
const port=3000

app.get('/', (req, res) => {
    res.send('Hello, world!');
});

app.post('/', (req, res) => {
  res.send('just received a POST request')
})

app.use('/static', express.static('public'))
app.use(express.static('files'))


app.listen(port, (err) => {
    if (err) {
      console.error('Error starting the server:', err);
    } else {
      console.log(`Server is running on http://localhost:${port}`);
    }
  });
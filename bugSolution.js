const express = require('express');
const app = express();
// Middleware to parse JSON bodies must be placed BEFORE the route handler
app.use(express.json());
app.post('/data', (req, res) => {
  if (Object.keys(req.body).length === 0) {
    return res.status(400).send('Request body is empty or invalid JSON');
  }
  console.log(req.body); 
  res.send('Data received');
});
app.listen(3000, () => console.log('Server listening on port 3000'));
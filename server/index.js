const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 8080;

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Welcome to myGuests Server!!');
});

app.listen(PORT, () => {
  console.log(`myGuests server listening at http://localhost:${PORT}`);
});
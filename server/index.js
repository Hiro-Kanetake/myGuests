const express = require('express');
const bodyParser = require('body-parser');
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('Welcome to myGuests Server!!');
});

app.listen(PORT, () => {
  console.log(`myGuests server listening at http://localhost:${PORT}`);
});

const accountRouter = require('./routes/account');
app.use('/account', accountRouter);

const guestInfoRouter = require('./routes/guest');
app.use('/guest', guestInfoRouter);

const propertyRouter = require('./routes/property');
app.use('/property', propertyRouter);

// const guestPreferenceRouter = require('./routes/guestPreference');
// app.use('/guest/:id/preference', guestPreferenceRouter);
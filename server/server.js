const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3002;

app.use(bodyParser.json());
app.use(express.static('dist'))

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
});
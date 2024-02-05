const helper = require('./services/dataProvider.js');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
app.use(bodyParser.json());
app.use(cors());

app.get('/', async (req, res) => {
  try {
    const resp = await helper();
    res.json({ data: resp });
  } catch(e) {
    res.status(500).json({ error: e });
  }
});

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

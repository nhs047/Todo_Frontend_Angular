const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());
const route = require('./route/route');
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.get('/', async (req, res) => {
    try {
      res.send("i'm working");
    } catch (err) {
      res.send(err);
    }
  });

app.use('/api', route);

const port = process.env.PORT || 3003;
app.listen(port, () => console.log(`listening on port ${port}`));
const express = require('express');
const mongoose = require('../database/connection');
const model = require('../database/model');
const todoModel = model.getSchema();
const router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.json());

router.post('/todo', async (req, res) => {
  try {
    await mongoose.connect();
    const title = req.body.title;
    const username = req.body.username;
    const description = req.body.description;
    const state = req.body.state;
    if (!title || !username || !description || !state) {
      res.send("Please provide valid object!!!");
      return;
    }

    const obj = {
      title: title,
      username: username,
      description: description,
      state: state
    }

    const toDo = new todoModel(obj);
    await toDo.save();
    res.send("Saved Successfully");
  } catch (err) {
    res.send(err);
  }
});


router.put('/todo/:id', async function (req, res) {
  try {
    await mongoose.connect();
    const dataObject = { state: req.body.state };
    const result = await todoModel.update({
      _id: req.params.id
    }, dataObject);
    res.send("Updated successfully");
  }
  catch (ex) {
    res.send(ex.message);
  }
});

router.get('/todo', async function (req, res) {
  try {
    await mongoose.connect();
    const result = await todoModel.find();
    res.send(result);
  }
  catch (ex) {
    res.send(ex.message);
  }
});

module.exports = router;
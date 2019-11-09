const mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');
const toDoSchema = new mongoose.Schema({
    id: mongoose.Schema.ObjectId,
    title: {
        type: String,
    },
      username: {
        type: String,
      },
      description:{
        type: String,
      },
      state: {
        type: String,
      },
}, {
    versionKey: false // You should be aware of the outcome after set to false
});

module.exports = {
    getSchema: () => {
        toDoSchema.plugin(uniqueValidator);
        return mongoose.model("ToDoSchema", toDoSchema)
    }
}
const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const TodoListSchema = new Schema({
  title: {
    type: String,
    unqiue: true,
    require: [true, "title is require"],
    maxlength: [50, "please inter 50 characters"],
  },
  manager: {
    type: Array,
    // maxlength: [5, "please inter maximom 50 charachter"],
    require: [true, "manager is require"],
  },
  createdOn: { type: Date, default: Date.now },
  updatedOn: { type: Date, default: Date.now },
  complete: {
    type: Boolean,
  },
});

module.exports = model("task", TodoListSchema);
// const mongoose = require("mongoose");

// const { Schema, model } = mongoose;

// const TodoListSchema = new Schema({
//   title: {
//     type: String,
//     require: [true, "title is require"],
//     maxlength: [50, "please inter 50 characters"],
//   },
// });

// module.exports = model("APS-todo-list", TodoListSchema);

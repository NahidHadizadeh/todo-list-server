const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const histoySchema = new Schema({
  title: {
    type: String,
    unqiue: true,
    // require: [true, "title is require"],
    // maxlength: [50, "please inter 50 characters"],
  },
  newTodo: {
    type: Object,
    default: {},
    // maxlength: [50, "please inter maximom 50 charachter"],
    // require: [true, "manager is require"],
  },
  todoForEdit: {
    type: Object,
    default: {},

    // maxlength: [50, "please inter maximom 50 charachter"],
    // require: [true, "manager is require"],
  },
  newMember: {
    type: Object,
    default: {},

    // maxlength: [50, "please inter maximom 50 charachter"],
    // require: [true, "manager is require"],
  },
  createdOn: { type: Date, default: Date.now },
});

module.exports = model("history", histoySchema);
// const mongoose = require("mongoose");

// const { Schema, model } = mongoose;

// const histoySchema = new Schema({
//   title: {
//     type: String,
//     require: [true, "title is require"],
//     maxlength: [50, "please inter 50 characters"],
//   },
// });

// module.exports = model("APS-todo-list", histoySchema);

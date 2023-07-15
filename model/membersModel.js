const mongoose = require("mongoose");

const { Schema, model } = mongoose;
const MembersSchema = new Schema({
  name: {
    type: String,
    unqiue: true,
    require: [true, "title is require"],
    maxlength: [50, "please inter 50 characters"],
  },
  age: {
    type: Number,
    min: [16, "minimom age is 16"],
    max: [90, "maximom age is 90"],
    require: [true, "manager is require"],
  },
  github: {
    type: String,
    trim: true,
    lowercase: true,
    require: [true, "date is require"],
  },
  email: {
    type: String,
    trim: true,
    lowercase: true,
    validate: {
      validator: function (v) {
        return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
      },
      message: "Please enter a valid email",
    },
    require: [true, "Email required"],
  },
  language: {
    type: Array,
    default: [],
    require: [true, "language is require"],
    minlength: [1, "language is 1 or more item"],
  },
  imageFile: {
    type: String,

    // require: [true, "image is require"],
  },
  admin: {
    type: Boolean,
  },
  skills: {
    type: Array,
    default: [],
    // require: [true, "skills is require"],
    minlength: [2, "skills are 2 or more"],
  },
  tasks: {
    type: Array,
    default: [],
  },
  bgColor: {
    type: Number,
  },
});

module.exports = model("member", MembersSchema);

const todoListModel = require("../model/todoListModel");

const createNewTodo = async (req, res) => {
  try {
    const newTodo = req.body;
    const todoLists = await todoListModel.create(newTodo);
    return res.status(200).json(todoLists);
  } catch (err) {
    return res.status(500).json({ msg: { err } });
  }
};

////

const getAllTodos = async (req, res) => {
  try {
    const todos = await todoListModel.find({});
    return res.status(200).json(todos);
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const getOneTodos = async (req, res) => {
  try {

    const { id } = req.params;
    const todos = await todoListModel.findOne({ _id: id });
    return res.status(200).json(todos);
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const deleteTodo = async (req, res) => {
  try {

    const { id } = req.params;
    const todos = await todoListModel.findOneAndDelete({ _id: id });
    return res.status(200).json(todos);
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const updateTodo = async (req, res) => {
  try {

    const { id: _id } = req.params;
    const newCourseData = req.body;

    const todos = await todoListModel.findByIdAndUpdate(
      _id,
      { ...newCourseData, _id },
      { new: true }
    );
    return res.status(200).json(todos);
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

module.exports = {
  getAllTodos,
  getOneTodos,
  createNewTodo,
  deleteTodo,
  updateTodo,
};


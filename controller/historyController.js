const historyModel = require("../model/historyModel");

const createNewHistory = async (req, res) => {
  try {
    const newHistory = req.body;
    const history = await historyModel.create(newHistory);
    return res.status(200).json(history);
  } catch (err) {
    return res.status(500).json({ msg: { err } });
  }
};

//////

const getAllHistorys = async (req, res) => {
  try {
    const AllHistory = await historyModel.find({});
    return res.status(200).json(AllHistory);
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const deleteHistory = async (req, res) => {
  try {
    // const { id } = req.params;
    const history = await historyModel.deleteMany({});
    return res.status(200).json(history);
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

module.exports = {
  getAllHistorys,
  createNewHistory,
  deleteHistory,
};

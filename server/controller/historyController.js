const membersModal = require("../model/historyModel");

const createNewHistory = async (req, res) => {
  try {
    const newHistory = req.body;
    const history = await membersModal.create(newHistory);
    return res.status(200).json(history);
  } catch (err) {
    return res.status(500).json({ msg: { err } });
  }
};

////

const getAllHistorys = async (req, res) => {
  try {
    const AllHistory = await membersModal.find({});
    return res.status(200).json(AllHistory);
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

// const getOneMember = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const members = await membersModal.findOne({ _id: id });
//     return res.status(200).json(members);
//   } catch (error) {
//     res.status(500).json({ msg: error });
//   }
// };

// const deleteTodo = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const members = await membersModal.findOneAndDelete({ _id: id });
//     return res.status(200).json(members);
//   } catch (error) {
//     res.status(500).json({ msg: error });
//   }
// };

// const updateMember = async (req, res) => {
//   try {
//     const { id: _id } = req.params;
//     const newCourseData = req.body;

//     const members = await membersModal.findByIdAndUpdate(
//       _id,
//       { ...newCourseData, _id },
//       { new: true }
//     );
//     return res.status(200).json(members);
//   } catch (error) {
//     res.status(500).json({ msg: error });
//   }
// };

module.exports = {
  getAllHistorys,
  createNewHistory,
  //   getOneMember,
  //   createNewMember,
  //   updateMember,
  //   deleteTodo,
  //   updateTodo,
};

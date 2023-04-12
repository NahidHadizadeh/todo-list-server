const membersModal = require("../model/membersModel");

const createNewMember = async (req, res) => {
  try {
    const newMember = req.body;
    const member = await membersModal.create(newMember);
    return res.status(200).json(member);
  } catch (err) {
    return res.status(500).json({ msg: { err } });
  }
};

////

const getAllMembers = async (req, res) => {
  try {
    const Allmembers = await membersModal.find({});
    return res.status(200).json(Allmembers);
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const getOneMember = async (req, res) => {
  try {
    const { id } = req.params;
    const members = await membersModal.findOne({ _id: id });
    return res.status(200).json(members);
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

// const deleteTodo = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const members = await membersModal.findOneAndDelete({ _id: id });
//     return res.status(200).json(members);
//   } catch (error) {
//     res.status(500).json({ msg: error });
//   }
// };

const updateMember = async (req, res) => {
  console.log("back update");
  try {
    const { id: _id } = req.params;
    const newCourseData = req.body;

    const members = await membersModal.findByIdAndUpdate(
      _id,
      { ...newCourseData, _id },
      { new: true }
    );
    return res.status(200).json(members);
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

module.exports = {
  getAllMembers,
  getOneMember,
  createNewMember,
  updateMember,
  //   deleteTodo,
  //   updateTodo,
};

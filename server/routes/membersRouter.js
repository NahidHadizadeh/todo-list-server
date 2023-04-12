const Router = require("express");
const {
  createNewMember,
  getAllMembers,
  getOneMember,
  updateMember,
  //   deleteTodo,
  //   updateTodo,
} = require("../controller/membersController");
const router = Router();
//

/**
 * @URL : /
 * @Method : GET
 * @Status : PUBLIC
 * @Description : get all data
 */
router.get("/", getAllMembers);

/**
 * @URL : /:id
 * @Method : GET
 * @Status : PUBLIC
 * @Description : get one data
 */
router.get("/:id", getOneMember);

/**
 * @URL : /create
 * @Method : POST
 * @Status : PUBLIC
 * @Description : create one data
 */
router.post("/", createNewMember);

/**
 * @URL : /:id
 * @Method : DELETE
 * @Status : PUBLIC
 * @Description : delete one course data
 */
// router.delete("/:id", deleteTodo);

/**
 * @URL : /:id
 * @Method : PATCH
 * @Status : PUBLIC
 * @Description : update one course data
 */
router.patch("/:id", updateMember);

module.exports = router;

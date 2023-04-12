const Router = require("express");
const {
  createNewTodo,
  getAllTodos,
  getOneTodos,
  deleteTodo,
  updateTodo,
} = require("../controller/todolistController");
const router = Router();
//

/**
 * @URL : /
 * @Method : GET
 * @Status : PUBLIC
 * @Description : get all courses data
 */
router.get("/", getAllTodos);

/**
 * @URL : /:id
 * @Method : GET
 * @Status : PUBLIC
 * @Description : get one course data
 */
router.get("/:id", getOneTodos);

/**
 * @URL : /create
 * @Method : POST
 * @Status : PUBLIC
 * @Description : create one course data
 */
router.post("/create", createNewTodo);

/**
 * @URL : /:id
 * @Method : DELETE
 * @Status : PUBLIC
 * @Description : delete one course data
 */
router.delete("/:id", deleteTodo);

/**
 * @URL : /:id
 * @Method : PATCH
 * @Status : PUBLIC
 * @Description : update one course data
 */
router.patch("/:id", updateTodo);

module.exports = router;

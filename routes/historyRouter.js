const Router = require("express");

const {
  getAllHistorys,
  createNewHistory,
  deleteHistory,
} = require("../controller/historyController");
const router = Router();
//

/**
 * @URL : /
 * @Method : GET
 * @Status : PUBLIC
 * @Description : get all data
 */
router.get("/", getAllHistorys);

/**
 * @URL : /create
 * @Method : POST
 * @Status : PUBLIC
 * @Description : create one data
 */
router.post("/", createNewHistory);
/**
 * @URL : /:id
 * @Method : DELETE
 * @Status : PUBLIC
 * @Description : delete one history
 */
router.delete("/", deleteHistory);

module.exports = router;

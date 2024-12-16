const express = require("express");
const router = express.Router();
const { getAllUsers,findUser,deleteUser,addUser,updateUser} = require("../controller/user");

router.get("/", getAllUsers);
router.get("/:id", findUser);
router.delete("/:id", deleteUser);
router.post("/", addUser);
router.put("/:id",updateUser)

module.exports = router;

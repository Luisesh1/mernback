const express = require("express");
const router = express.Router();
const {
	register,
	login,
	getUsers,
	getUser,
	updateUser,
	deleteUser,
} = require("../controllers/userController");
const { protect, admin } = require("../middlewares/auth");
router.post("/register", register);
router.post("/login", login);
router.get("/", protect, admin, getUsers);
router.get("/:id", protect, admin, getUser);
router.put("/:id", protect, admin, updateUser);
router.delete("/:id", protect, admin, deleteUser);
module.exports = router;

const express = require("express");
const router = express.Router();
const { protect, admin, organizer } = require("../middlewares/auth");
const {
	createCategory,
	getCategories,
	updateCategory,
	deleteCategory,
	createEvent,
	getEvents,
	getEvent,
	updateEvent,
	deleteEvent,
} = require("../controllers/eventController");

router.post("/categories", protect, admin, createCategory);
router.get("/categories", protect, getCategories);
router.put("/categories/:id", protect, admin, updateCategory);
router.delete("/categories/:id", protect, admin, deleteCategory);
router.post("/", protect, organizer, createEvent);
router.get("/", protect, getEvents);
router.get("/:id", protect, getEvent);
router.put("/:id", protect, organizer, updateEvent);
router.delete("/:id", protect, admin, deleteEvent);
module.exports = router;

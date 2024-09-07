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
	subscribeUserToEvent,
	listUserEvents
} = require("../controllers/eventController");
const upload = require('../config/multer');
let uploadConfig = upload.fields([{ name: 'logo', maxCount: 1 }, { name: 'cover', maxCount: 1 }]);

router.post("/categories", protect, organizer, createCategory);
router.get("/categories", protect, getCategories);
router.put("/categories/:id", protect, admin, updateCategory);
router.delete("/categories/:id", protect, admin, deleteCategory);
router.post("/", protect, organizer, uploadConfig, createEvent);
router.get("/", protect, getEvents);
router.get("/:id", protect, getEvent);
router.put("/:id", protect, organizer, uploadConfig, updateEvent);
router.delete("/:id", protect, admin, deleteEvent);
router.post('/subscribe', protect, subscribeUserToEvent);
router.get('/:eventId/subscribers', protect, listUserEvents);
module.exports = router;

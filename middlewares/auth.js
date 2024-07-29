const passport = require("passport");

exports.protect = passport.authenticate("jwt", { session: false });

exports.admin = (req, res, next) => {
	if (req.user.role !== "ticket_office") {
		return res.status(403).json({ message: "Access denied" });
	}
	next();
};
exports.organizer = (req, res, next) => {
	if (req.user.role !== "organizer" && req.user.role !== "ticket_office") {
		return res.status(403).json({ message: "Access denied" });
	}
	next();
};

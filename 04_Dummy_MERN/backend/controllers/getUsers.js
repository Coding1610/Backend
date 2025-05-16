// import model
const User = require("../models/userModel");

// route handler
exports.getUser = async (req, res) => {
	
    try {
		const userData = await User.find({});
		res.json({ success: true, data: userData });
	} catch (error) {
		res.status(500).json({ success: false, error: error });
    }

};
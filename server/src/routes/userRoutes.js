const express = require("express");
const router = express.Router();
const passport = require("passport");
const {createUser, logoutUser, currentUser} = require('../contoller/userController')
const {isAuthenticated} = require('../Middelware/isAuthenticated')


router.post('/register', createUser)

router.post(
	"/login",
	passport.authenticate("local"),
	(request, response) => {
		try {
			return response.status(200).json({
				message:"User Logged in"
			});
		} catch (error) {
			console.log(error)
			return response.status(400).json({
				message: "Bad Credentials"
			})
		}
	}
);
router.post("/logout", logoutUser)
router.get('/current',isAuthenticated, currentUser)

module.exports = router;
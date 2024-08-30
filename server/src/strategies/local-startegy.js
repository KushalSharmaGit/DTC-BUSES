const passport = require("passport");
const { Strategy } = require("passport-local");

const User = require("../model/User");
const { comparePassword } = require("../utils/helpers");

passport.serializeUser((User, done) => {
	done(null, User.id);
});

passport.deserializeUser(async (id, done) => {
	try {
		const findUser = await User.findById(id);
		if (!findUser) throw new Error("User Not Found");
		done(null, findUser);
	} catch (err) {
		done(err, null);
	}
});

passport.use( 
	new Strategy({usernameField : "email"}, async (email, password, done) => {
		try {
			const findUser = await User.findOne({email})
			if (!findUser) return done("User not found");
			if (!comparePassword(password, findUser.password)) return done("Bad Credentials");
			done(null, findUser);
		} catch (err) {
			done(err, null);
		}
	})
);

module.exports = passport;
const express = require("express");
const router = express.Router();
const passport = require("passport");
const {findBusesBetweenStops} = require('../contoller/busController')

router.get('/', findBusesBetweenStops)

module.exports = router;
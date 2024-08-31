const express = require("express");
const router = express.Router();
const passport = require("passport");
const {findBusesBetweenStops, getDetailedPathBetweenStops} = require('../contoller/busController')

router.get('/', findBusesBetweenStops)
router.get('/detail',getDetailedPathBetweenStops)

module.exports = router;
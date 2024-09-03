const express = require("express");
const router = express.Router();
const passport = require("passport");
const {findBusesBetweenStops, getDetailedPathBetweenStops, getBuses} = require('../contoller/busController')

router.get('/', findBusesBetweenStops)
router.get('/detail',getDetailedPathBetweenStops)
router.get('/buses', getBuses);
module.exports = router;
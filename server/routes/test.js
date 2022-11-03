const express = require("express");
const router = express.Router();

router.get("/", function (req, res) {
  res.send("Welcome to UMP-INT3117-40's API Server!");
});

module.exports = router;

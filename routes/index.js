const express = require("express");
const router = express.Router();
const { location } = require("./models/location");
const fs = require("fs");
/* GET home page. */
router.post("/location", async (req, res) => {
  let newLocation = await new location({
    lat: req.body.lat,
    long: req.body.long
  });
  await newLocation.save();
  console.log(newLocation)
  console.log("written")
  res.send("saved");
});

module.exports = router;

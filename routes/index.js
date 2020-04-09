var express = require("express");
var router = express.Router();
var fs = require("fs");
/* GET home page. */
router.post("/location", (req, res) => {
  fs.appendFile(__dirname + "/scammer.txt", req.body.location, err => {
    if (err) {
      console.error(err);
      return;
    }
    console.log("written");
    //file written successfully
  });
  res.send("written");
});

module.exports = router;

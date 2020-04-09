var express = require("express");

var indexRouter = require("./routes/index");
var cors = require("cors");
var app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", indexRouter);

var listener = app.listen(process.env.PORT, function() {
  console.log("Listening on port " + listener.address().port);
});

var express = require("express");
const mongoose = require("mongoose");
var indexRouter = require("./routes/index");
var cors = require("cors");
var app = express();

mongoose
  .connect(
    `mongodb+srv://admin:3wpYJsFNQAkkviwX@cluster0-rjroo.mongodb.net/test?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
      useFindAndModify: false
    }
  )
  .then(() => console.log("Connected to MongoDB..."))
  .catch(err => {
    console.log("Could not connect to MongoDB...");
    console.log(err);
  });

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", indexRouter);

var listener = app.listen(process.env.PORT, function() {
  console.log("Listening on port " + listener.address().port);
});

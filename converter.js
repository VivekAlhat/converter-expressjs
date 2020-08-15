const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

var percentage;

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");

app.listen(3000, function () {
  console.log("Server is up and running");
});

app.get("/", function (request, response) {
  response.render("index", { percentage: "00.00" });
});

app.post("/", function (request, response) {
  var sgpa = Number(request.body.sgpa);
  percentage = (sgpa * 8.8).toFixed(2);
  response.render("index", { percentage: percentage });
});

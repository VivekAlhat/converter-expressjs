const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(3000, function () {
  console.log("Server started successfully on port 3000");
});

app.get("/", function (request, response) {
  response.sendFile(__dirname + "/index.html");
});

app.post("/", function (request, response) {
  var sgpa = Number(request.body.sgpa);
  var percentage = sgpa * 10 - 7.5;
  response.send("Your percentage : " + percentage);
});

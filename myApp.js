let express = require("express");
let app = express();

app.get("/", (req, res) => {
  //   res.send("Hello Express!");
  const absolutePath = __dirname + "/views/index.html";
  res.sendFile(__dirname + "/views/index.html");
});

module.exports = app;

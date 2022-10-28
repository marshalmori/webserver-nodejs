const express = require("express");
const app = express();
const port = 8080;

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send("Home page");
});

app.get("/hola-mundo", (req, res) => {
  res.send("Route hola-mundo");
});

app.get("*", (req, res) => {
  res.sendFile(__dirname + "/public/404.html");
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});

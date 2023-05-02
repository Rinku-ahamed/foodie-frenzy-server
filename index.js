const express = require("express");
const cors = require("cors");
const app = express();
const port = 5000;
const chefs = require("./chef/data.json");

app.use(cors());
app.get("/", (req, res) => {
  res.send("Create this server for test purpose");
});

app.get("/chefs", (req, res) => {
  res.send(chefs);
});
app.get("/chef/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const singleChef = chefs.find((chef) => chef.id === id);
  res.send(singleChef);
});

app.listen(port, () => {
  console.log(`My server running on port ${port}`);
});

const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

let items = [];

//Return a list of items
app.get("/items", (req, res) => {
  res.json(items);
});

//Accept JSON body with name and price fields, add a new item to the list, and return the added item with a generated id
app.post("/items", (req, res) => {
  items.push(req.body);
  res.status(201).json(req.body);
});

//Return the item with the given id
app.get("/items/:id", (req, res) => {
  const item = items.find((b) => b.id === parseInt(req.params.id));
  if (!item) return res.status(404).json({ message: "Item not found" });
  res.json(item);
});

//Accept a JSON body with name and price fields, update the item with the given id, and return the updated item
app.put("/items/:id", (req, res) => {
  const item = items.find((b) => b.id === parseInt(req.params.id));
  if (!item) return res.status(404).json({ message: "Item not found" });

  Object.assign(item, req.body);
  res.json(item);
});

//Delete the item with the given id and return the deleted item
app.delete("/items/:id", (req, res) => {
  const index = items.findIndex((b) => b.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ message: "Item not found" });

  items.splice(index, 1);
  res.sendStatus(204);
});

app.listen(port, () => {
  console.log(`I'm all ears on port ${port}`);
});

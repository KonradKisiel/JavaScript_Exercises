const bodyParser = require("body-parser");

let data = [
  { item: "get milk" },
  { item: "walk dog" },
  { item: "code something" }
];

const urlencodedParser = bodyParser.urlencoded({ extend: false });

//passing express app to todoController function in app.js
module.exports = app => {
  //request handlers
  app.get("/todo", (req, res) => {
    res.render("todo", { todos: data });
  });

  app.post("/todo", urlencodedParser, (req, res) => {
    data.push(req.body);
    res.json(data);
  });

  app.delete("/todo/:item", (req, res) => {
    data = data.filter(todo => {
      return todo.item.replace(/ /g, "-") !== req.params.item;
    });
    res.json(data);
  });
};

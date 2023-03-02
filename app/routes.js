module.exports = (app) => {
  const Todo = require("./controller");
  app.post("/todo", Todo.addTask);
};

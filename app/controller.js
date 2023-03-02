const Task = require("./structure");
exports.addTask = (req, res) => {
  const task = new Task({
    task: req.body.task,
    who: req.body.who,
    due: req.body.due,
    done: req.body.done,
  });
  task
    .save()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Error in saving the data",
      });
    });
};

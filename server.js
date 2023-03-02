const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const dbConfig = require("./dbSetup/dbConfig");
const mongoose = require("mongoose");
mongoose
  .connect(dbConfig.url, { useNewUrlParser: true })
  .then(() => {
    console.log("Connection Successfully Established with MongoDB");
    require("./app/routes")(app);
    // app.use(require("./app/routes"));
    app.listen(3000, () => {
      console.log("Server is listening on port localhost:3000");
    });
  })
  .catch((err) => {
    console.log(
      "Error in establishing Connectioin with MongoDB :" + err.message
    );
  });

app.get("/", (req, res) => {
  res.json({
    message: "Welcome to the TODO application",
  });
});

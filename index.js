const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

// const { connect } = require("./config/Database");
// connect();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

const express = require('express');
const handl = require('./user');

const app = express();

app.use("/", (req, res, next) => {
  console.log(" Come in first Middle ware", req.url);
  res.send(" <p>Hello World </p> ");
  next();
});

app.use("/submit-details", (req, res, next) => {
  console.log(" Come in Second Middle ware", req.url);
});








const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on address http://localhost:${PORT}`);
});
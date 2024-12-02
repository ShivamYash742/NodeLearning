const express = require('express');
const userRouter = express.Router();

const path = require('path');
const root = require('../utils/path')


userRouter.get("/", (req, res, next) => {
  res.sendFile(path.join(root, 'views', 'home.html'))
});

module.exports = userRouter;

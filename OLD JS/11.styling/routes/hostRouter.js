const express = require('express');
const hostRouter = express.Router();
const path = require('path');
const root = require('../utils/path')


hostRouter.get("/add-home", (req, res, next) => {
  res.sendFile(path.join(root, 'views', 'addHome.html'))

});

hostRouter.post("/add-home", (req, res, next) => {
  res.sendFile(path.join(root, 'views', 'homeAdded.html'));
});



module.exports = hostRouter;

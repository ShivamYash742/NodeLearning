const express = require('express');
const userRouter = require('./routes/userRouter')
const hostRouter = require('./routes/hostRouter')
const app = express();
const path = require('path')
const root = require('./utils/path');
const exp = require('constants');

app.use(express.static(path.join(root, 'public')))


app.use((req, res, next) => {
  console.log(req.url, req.method);
  next();
})

app.use(express.urlencoded());
app.use(userRouter);
app.use('/host', hostRouter);


app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
})



const port = 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port} http://localhost:${port}`);
});

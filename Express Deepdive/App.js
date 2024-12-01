const bodyParser = require('body-parser');
const express = require('express');
const app = express();

app.use("/", (req, res, next) => {
  console.log("first Dummy Middle ware", req.url, req.method);
  next();
});

app.use("/", (req, res, next) => {
  console.log("Second Dummy Middle ware", req.url, req.method);
  next();
});

app.get("/", (req, res, next) => {
  console.log("First Route '/' ");
  res.send("<h1>Hello World</h1>");
  next();

})

app.use(bodyParser.urlencoded());


app.get("/contact-us", (req, res, next) => {
  console.log("Second Route '/contact-us for get' ");
  res.send(`<h1>Please Submit your Details</h1>
  
  <form action="/contact-us" method="POST">
    <input type="text" name="name" , placeholder="Enter Your Name" />
    <input type="email" name="email" , placeholder="Enter Your Email" />
    <input type="submit">Submit </input>
  </form>`);
});

app.post("/contact-us", (req, res, next) => {
  console.log("Third Route '/contact-us for post' ");
  res.send(`<h1>We will Contact You Soon</h1>`);
});







const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on address http://localhost:${PORT}`);
});
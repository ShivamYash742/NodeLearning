const { sumRequest } = require('./sum')

const requestHandler = (req, res) => {
  console.log(req.url, req.method);
  if (req.url === '/') {
    res.setHeader('Content-Type', 'text/html')
    res.write(`<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
      <h1>Welcome TO Calculator</h1>
      <a href=" /calculator"> Go to Calculator</a>
  </body>
</html>`);
    return res.end();
  } else if (req.url === '/calculator') {
    res.setHeader('Content-Type', 'text/html')
    res.write(`<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
  <h1>Calculator</h1>
  <form action = "/caculate-result" method = "POST">
    <input id="1" type="number" placeholder = 'first num' name ="num1"/>
    <input id="2" type="number" placeholder = 'sec num' name ="num2"/>
    <input id="2" type="submit" value ="Add"/>
    
  </form>
  </body>
</html>
`);
    return res.end();
  } else if (req.url === '/caculate-result' && req.method === 'POST') {
    return sumRequest(req, res);
  }
  res.setHeader('Content-Type', 'text/html')
  res.write(`<html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Document</title>
    </head>
    <body>
        <h1>Server not found</h1>
        <a href="/"> Go to Home</a>
    </body>
  </html>`);
  res.end();
}

exports.requestHandler = requestHandler;
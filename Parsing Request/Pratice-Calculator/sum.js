const sumRequest = (req, res) => {
  console.log("In Sum handler")
  const body = [];
  req.on('data', chunk => {
    body.push(chunk);
  })
  req.on('end', () => {
    const bodyStr = Buffer.concat(body).toString();
    const params = new URLSearchParams(bodyStr);
    const bodyObj = Object.fromEntries(params.entries());
    const sum = Number(bodyObj.num1) + Number(bodyObj.num2);
    console.log(sum)
    res.setHeader('Content-Type', 'text/html')
    res.write(`<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
      <h1>Welcome TO Calculator Result</h1>
      <h1>${sum}</h1>
      <a href=" /calculator"> Go to Calculator again</a>
  </body>
</html>`);
  })
}

exports.sumRequest = sumRequest;
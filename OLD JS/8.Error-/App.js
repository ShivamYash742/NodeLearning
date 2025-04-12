const http = require('http');
const func = require('./syntax');


const server = http.createServer((req, res) => {
  console.log(req.url, req.method);
  func();
});



const PORT = 3001;
server.listen(PORT, () => {
  console.log(`Server running on address http://localhost:${PORT}`);
});
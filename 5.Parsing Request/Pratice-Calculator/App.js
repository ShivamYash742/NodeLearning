const http = require('http');
const { requestHandler } = require('./handler');

const server = http.createServer(requestHandler);


const Port = 3000;
server.listen(Port, () => {
  console.log(`Server running on http://localhost:${Port}`);
});


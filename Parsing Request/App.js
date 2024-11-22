const http = require('http');
const handl = require('./user');


const server = http.createServer(handl);



const PORT = 3001;
server.listen(PORT, () => {
  console.log(`Server running on address http://localhost:${PORT}`);
});
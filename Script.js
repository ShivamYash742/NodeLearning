const http = require('http');



const server = http.createServer((request, response) => {
  console.log(request);
})
const port = 3000;
server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

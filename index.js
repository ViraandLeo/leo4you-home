const http = require('http');
const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Leo4You is alive!');
});

server.listen(PORT, () => {
  console.log(`Server running at port ${PORT}`);
});

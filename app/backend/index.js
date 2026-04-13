const http = require('http');

const PORT = process.env.PORT || 3000;
const VERSION = process.env.APP_VERSION || 'v1';

const server = http.createServer((req, res) => {
  if (req.url === '/health') {
    res.writeHead(200);
    res.end('ok');
  } 
  else if (req.url === '/version') {
    res.writeHead(200);
    res.end(`orbit v4 - versioned`);
  } 
  else {
    res.writeHead(404);
    res.end('not found');
  }
});

server.listen(PORT, () => {
  console.log(`🚀 Orbit API running on port ${PORT}`);
});

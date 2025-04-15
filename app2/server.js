// server.js
const http = require('http');
const PORT = process.env.PORT || 3001;
const ID = process.env.ID || 'App';

const server = http.createServer((req, res) => {
  res.end(`Response from ${ID} on port ${PORT}`);
});

server.listen(PORT, () => {
  console.log(`${ID} is running on port ${PORT}`);
});


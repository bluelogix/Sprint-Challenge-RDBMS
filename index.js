const server = require('./server')


const port = 4000;
server.listen(port, function() {
  console.log(`\n=== Project Tracker Running on http://localhost:${port} ===\n`);
});
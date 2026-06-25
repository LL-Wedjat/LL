const http = require('http');

async function start() {
  const serverModule = await import('./server/server.mjs');
  const server = http.createServer((req, res) => {
    serverModule.reqHandler(req, res);
  });

  const port = process.env.PORT || 4000;
  server.listen(port, () => {
    console.log(`App listening on port ${port}`);
  });
}
start();

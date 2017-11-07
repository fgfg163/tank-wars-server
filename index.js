const http = require('http')
const program = require('commander');

program
  .version('0.0.1')
  .option('-p, --port [number]', 'Server listen port, default 8000', '8000')
  .parse(process.argv);
if (parseInt(process.version.slice(1)) < 8) {
  console.log('Node Version must greater than v8.0.0 .')
} else {
  http.createServer(function (request, response) {

    response.writeHead(200, { 'Content-Type': 'text/plain' });
    response.end('Hello World\n');
  }).listen(program.port);
}

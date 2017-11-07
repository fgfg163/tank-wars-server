if (parseInt(process.version.slice(1)) < 8) {
  console.log('Node Version must greater than v8.0.0 .')
  process.exit(1)
}

const program = require('commander');
const express = require('express');
const app = express();

program
  .version('0.0.1')
  .option('-p, --port [number]', 'Server listen port, default 8000', '8000')
  .parse(process.argv);

app.use(express.static('public'));

const serverv = app.listen(program.port, function () {
  const host = server.address().address;
  const port = server.address().port;
  console.log('server running at http://%s:%s', host, port);
});

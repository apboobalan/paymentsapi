const restify = require('restify');
const restifyPlugins = require('restify-plugins');
const routes = require('./routes/');
const mongoose = require('mongoose');

const server = restify.createServer();
server.use(restifyPlugins.bodyParser({ mapParams: true }));

mongoose.connect('mongodb://localhost/test',{ useNewUrlParser: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error!'));
db.once('open', function() {
  routes(server);
});

server.listen(8080, function() {
  console.log('%s listening at %s', server.name, server.url);
});
const restify = require('restify');
const restifyPlugins = require('restify').plugins;
const routes = require('./routes/');
const mongoose = require('mongoose');

const server = restify.createServer();
server.use(restifyPlugins.bodyParser({ mapParams: true }));

const mongoURL = process.env.MONGO === "docker" ? "mongodb://mongo:27017" : "mongodb://localhost";
mongoose.connect(mongoURL+'/test',{ useNewUrlParser: true });

const db = mongoose.connection;
db.on('error', (err)=>{throw err;});
db.once('open', function() {
  routes(server);
});

server.listen(8080, function() {
  console.log('%s listening at %s', server.name, server.url);
});
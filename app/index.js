const restify = require('restify'),
    config = require('./config/params');
    path = require('path');

const server = restify.createServer();

server.use(restify.fullResponse());
server.use(restify.bodyParser());
server.use(restify.queryParser());

server.use(function (req, res, next) {
    console.log(req.method + ' ' + req.url);
    next();
});

server.listen(config.port, function () {
    console.log('listening: %s', server.url);
});

server.get(/\/$/, restify.serveStatic({
    directory: path.join(__dirname, 'public'),
    default: 'index.html'
}));

const routes = require('./api/routes')(server);

module.exports = server;

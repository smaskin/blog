module.exports = function(server) {
    const articles = require('./article/controller');

    server.get('api/articles', articles.get);
    // server.get('api/articles/:id', articles.getById);
    // server.post('api/articles', articles.post);
    // server.put('api/articles/:id', articles.put);
    // server.del('api/articles/:id', articles.del);
};

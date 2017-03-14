const ArticleModel = require('./model');

function ArticlesController() {
    const that = this;
          that.store = [];

    that.get = function (req, res, next) {
        ArticleModel.find(function (err, articles) {
            if (!err) {
                return res.send(200, articles);
            } else {
                res.statusCode = 500;
                console.log('Internal error(%d): %s', res.statusCode, err.message);
                return res.send({error: 'Server error'});
            }
        });
        next();
    }
}

module.exports = new ArticlesController();

// app.get('/api/articles', function (req, res) {
//     return ArticleModel.find(function (err, articles) {
//         if (!err) {
//             return res.send(articles);
//         } else {
//             res.statusCode = 500;
//             console.log('Internal error(%d): %s', res.statusCode, err.message);
//             return res.send({error: 'Server error'});
//         }
//     });
// });
//
// app.post('/api/articles', function (req, res) {
//     const article = new ArticleModel({
//         title: req.body.title,
//         author: req.body.author,
//         description: req.body.description,
//         images: req.body.images
//     });
//
//     article.save(function (err) {
//         if (!err) {
//             console.log("article created");
//             return res.send({status: 'OK', article: article});
//         } else {
//             console.log(err);
//             if (err.name == 'ValidationError') {
//                 res.statusCode = 400;
//                 res.send({error: 'Validation error'});
//             } else {
//                 res.statusCode = 500;
//                 res.send({error: 'Server error'});
//             }
//             console.log('Internal error(%d): %s', res.statusCode, err.message);
//         }
//     });
// });
//
// app.get('/api/articles/:id', function (req, res) {
//     return ArticleModel.findById(req.params.id, function (err, article) {
//         if (!article) {
//             res.statusCode = 404;
//             return res.send({error: 'Not found'});
//         }
//         if (!err) {
//             return res.send({status: 'OK', article: article});
//         } else {
//             res.statusCode = 500;
//             console.log('Internal error(%d): %s', res.statusCode, err.message);
//             return res.send({error: 'Server error'});
//         }
//     });
// });
//
// app.put('/api/articles/:id', function (req, res) {
//     return ArticleModel.findById(req.params.id, function (err, article) {
//         if (!article) {
//             res.statusCode = 404;
//             return res.send({error: 'Not found'});
//         }
//
//         article.title = req.body.title;
//         article.description = req.body.description;
//         article.author = req.body.author;
//         article.images = req.body.images;
//         return article.save(function (err) {
//             if (!err) {
//                 console.log("article updated");
//                 return res.send({status: 'OK', article: article});
//             } else {
//                 if (err.name == 'ValidationError') {
//                     res.statusCode = 400;
//                     res.send({error: 'Validation error'});
//                 } else {
//                     res.statusCode = 500;
//                     res.send({error: 'Server error'});
//                 }
//                 console.log('Internal error(%d): %s', res.statusCode, err.message);
//             }
//         });
//     });
// });
//
// app.delete('/api/articles/:id', function (req, res) {
//     return ArticleModel.findById(req.params.id, function (err, article) {
//         if (!article) {
//             res.statusCode = 404;
//             return res.send({error: 'Not found'});
//         }
//         return article.remove(function (err) {
//             if (!err) {
//                 console.log("article removed");
//                 return res.send({status: 'OK'});
//             } else {
//                 res.statusCode = 500;
//                 console.log('Internal error(%d): %s', res.statusCode, err.message);
//                 return res.send({error: 'Server error'});
//             }
//         });
//     });
// });
//

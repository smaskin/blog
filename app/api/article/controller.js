const ArticleModel = require('./model');

function ArticlesController() {
    const that = this;

    that.get = function (req, res, next) {
        ArticleModel.find(function (err, articles) {
            res.send(200, articles);
        });
        return next();
    };

    that.getById = function (req, res, next) {
        ArticleModel.findById(req.params.id, function (err, article) {
            if (err) {
                res.statusCode = 500;
                console.log('Internal error(%d): %s', res.statusCode, err.message);
                res.send({error: 'Server error'});
            }
            if (article) {
                res.send({status: 'OK', article: article});
            }else{
                res.statusCode = 404;
                res.send({error: 'Not found'});
            }
        });
        return next();
    };

    that.post = function (req, res, next) {
        const article = new ArticleModel({
            title: req.body.title,
            author: req.body.author,
            description: req.body.description,
            images: req.body.images
        });

        article.save(function (err) {
            if (!err) {
                console.log("article created");
                res.send({status: 'OK', article: article});
            }else{
                console.log(err);
                if (err.name == 'ValidationError') {
                    res.statusCode = 400;
                    res.send({error: 'Validation error'});
                } else {
                    res.statusCode = 500;
                    res.send({error: 'Server error'});
                }
                console.log('Internal error(%d): %s', res.statusCode, err.message);
            }
        });
        return next();
    };

    that.put = function (req, res, next) {
        ArticleModel.findById(req.params.id, function (err, article) {
            if (!article) {
                res.statusCode = 404;
                res.send({error: 'Not found'});
            }

            article.title = req.body.title;
            article.description = req.body.description;
            article.author = req.body.author;
            article.images = req.body.images;
            article.save(function (err) {
                if (!err) {
                    console.log("article updated");
                    res.send({status: 'OK', article: article});
                } else {
                    if (err.name == 'ValidationError') {
                        res.statusCode = 400;
                        res.send({error: 'Validation error'});
                    } else {
                        res.statusCode = 500;
                        res.send({error: 'Server error'});
                    }
                    console.log('Internal error(%d): %s', res.statusCode, err.message);
                }
            });
        });
        return next();
    };

    that.del = function (req, res, next) {
        ArticleModel.findById(req.params.id, function (err, article) {
            if (!article) {
                res.statusCode = 404;
                res.send({error: 'Not found'});
            }
            article.remove(function (err) {
                if (!err) {
                    console.log("article removed");
                    res.send({status: 'OK'});
                } else {
                    res.statusCode = 500;
                    console.log('Internal error(%d): %s', res.statusCode, err.message);
                    res.send({error: 'Server error'});
                }
            });
        });
        return next();
    };
}

module.exports = new ArticlesController();

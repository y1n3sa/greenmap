module.exports = function(app) {
    app.get('/check/wakeup', function (req, res, next) {
        res.status(200).send({message: "I am awake"});
    });
};
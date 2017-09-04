var     passportFacebook    = require('../../middlewares/auth/github');

module.exports = function(app) {
    app.get('/auth/facebook', passportFacebook.authenticate('facebook', { scope: ['user_friends'] }));

    app.get('/auth/facebook/callback',
        passportFacebook.authenticate('facebook', { failureRedirect: '/login' }),
        function(req, res) {
            res.json(req.user);
        }
    );
};
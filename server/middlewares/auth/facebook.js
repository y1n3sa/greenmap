var     passport            = require('passport')
    ,   FacebookStrategy    = require('passport-facebook').Strategy
    ,   config              = require('../../config/appconfig').auth
    ,   init                = require('./init')
    ,   UserController      = require('../../controllers/usercontroller');


passport.use(new FacebookStrategy({
        clientID: config.facebook.clientID,
        clientSecret: config.facebook.clientSecret,
        callbackURL: config.facebook.callbackURL
    },
    function(accessToken, refreshToken, profile, done) {

        var userController = new UserController();
        userController.authenticateFacebook(profile, function (err, user) {
            if(err) {
                console.log(err);
                return done(err);
            } else {
                return done(null, user);
            }
        });
    }

));

init();

module.exports = passport;

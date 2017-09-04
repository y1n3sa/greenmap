module.exports = {
    db : {
        url : 'mongodb://localhost/greenmap'
    },
    auth: {
        facebook: {
            clientID: process.env.GREENMAP.facebook_clientID,
            clientSecret: process.env.GREENMAP.facebook_clientSecret,
            callbackURL: "http://127.0.0.1:8080/auth/facebook/callback"
        }
    }
};


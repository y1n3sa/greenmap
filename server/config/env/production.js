module.exports = {
    db : {
        url : process.env.GREENMAP.mongo_url
    },
    auth: {
        facebook: {
            clientID: process.env.GREENMAP.facebook_clientID,
            clientSecret: process.env.GREENMAP.facebook_clientSecret,
            callbackURL: "http://127.0.0.1:8080/auth/facebook/callback"
        }
    }
};



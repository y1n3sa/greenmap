var     mongoose  	= require('mongoose')
    ,	moment 		= require('moment')
    ,   base        = require('./base');

var UserSchema = new base({
    name: {
        type: String
    },
    facebook: {
        id: String,
        name: String
    },
    roles: [String]
});

var User = mongoose.model('User', UserSchema);

module.exports = User;

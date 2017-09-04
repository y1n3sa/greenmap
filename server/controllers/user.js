"use strict";

var     ObjectId 	    = require('mongoose').Types.ObjectId
    ,   BaseController  = require('./base')
    ,   User            = require('./user');

class UserController extends BaseController {
    constructor(systemCode, ignoreSystemCode) {
        super(systemCode, User);
    }

    authenticateFacebook(profile, callback) {
        var updates = {
            facebook: {
                name: profile.displayName,
                id: profile.id
            }
        };
        super.findAndUpdate({'facebook.id': profile.id}, updates, callback);
    }
}

module.exports = UserController;


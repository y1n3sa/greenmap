"use strict";

var     ObjectId 	= require('mongoose').Types.ObjectId
    ,   uuidV4      = require('uuid/v4');

class BaseController {
    constructor(systemCode, model) {
        if (!model) {
            throw "no model provided";
        }
        this.systemCode = systemCode;
        this.Schema = model;
    }

    checkSystemCode(query) {
        return {$and: [{_systemCode: this.systemCode}, query]};
    }

    findById(id, callback) {
        this.Schema.findOne(this.checkSystemCode({_id: ObjectId(id)}), callback);
    }

    findAndUpdate(query, updates, callback) {
        var that = this;
        this.Schema.findOne(that.checkSystemCode(query), function (err, record) {
            if (err) {
                callback(err);
            } else {
                if (record) {
                    query = {$and: [{_id: record.id}, {_systemCode: that.systemCode}, query]};
                } else {
                    updates._systemCode = uuidV4();
                }
                var options = {
                    upsert: true
                };
                that.Schema.findOneAndUpdate(query, updates, options, callback);
            }
        });
    }
}

module.exports = BaseController;

"use strict";

var     mongoose  	= require('mongoose')
    ,	moment 		= require('moment');

class BaseSchema extends mongoose.Schema {
    constructor(args) {
        super(args);

        this.add({
            _systemCode: {
                type: String,
                required: true
            },
            _createdAt: {
                type: Date,
                default: moment.utc()
            }
        });

        this.virtual('id')
            .get(function(){ return this._id; });

        this.virtual('systemCode')
            .get(function(){ return this._systemCode; })
            .set(function(value) {this.set('_systemCode', value)});

        this.virtual('createdAt')
            .get(function(){ return this._createdAt; })
            .set(function(value) {this.set('_createdAt', value)});
    }
}

module.exports = BaseSchema;

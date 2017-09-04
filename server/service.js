var     path 			= require('path')
    ,	express 		= require('express')
    ,	config 			= require('././appconfig')
    ,	passport 		= require('passport')
    , 	compression 	= require('compression');


module.exports = function(app) {
    var root = __dirname;

    ///compression
    app.use(compression());

    ///public directory
    app.use(express.static(path.join(root, '/public')));

    ///mongoose
    var mongoose 	= require('mongoose');
    mongoose.connection.on("error", function(err) {
        console.error('Failed to connect to DB on startup ', err);
    });
    mongoose.connection.on('disconnected', function () {
        console.log('Mongoose default connection to DB disconnected');
    });
    mongoose.connection.on("connected", function(ref) {
        console.log("Connected to DB!");
    });
    var gracefulExit = function() {
        mongoose.connection.close(function () {
            console.log('Mongoose default connection with DB is disconnected through app termination');
            process.exit(0);
        });
    };
    process.on('SIGINT', gracefulExit).on('SIGTERM', gracefulExit);
    mongoose.connect(config.db.url);

    ///passport
    app.use(passport.initialize());
    app.use(passport.session());

    ///api
    require('./../src/routes')(app);
};

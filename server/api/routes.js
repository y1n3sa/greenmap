module.exports = function(app) {
    require('./endpoints/check')(app);
    require('./endpoints/auth')(app);
};

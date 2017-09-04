module.exports = process.env.GREENMAP_ENV == 'production' ? require('./env/production') : require('./env/development');

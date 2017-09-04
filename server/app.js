var     express 	= require('express')
    ,	server	    = express();

require('./app')(server);

console.log(process.env.PORT);

server.listen(process.env.PORT || 3000);

module.exports = server;
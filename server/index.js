'use strict';

const app = require('./app');

require('./routes')(app);

const startServer = () => {
    app.listen(8081, () => console.log('Sikayet var server 8081 listening'));
}

startServer();

module.exports = app;
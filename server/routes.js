'use strict';

const routes = (app) => {
    app.use('/sikayets', require('./api/sikayet'));
}

module.exports = routes;
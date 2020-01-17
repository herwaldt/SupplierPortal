const proxy = require('http-proxy-middleware');

// eslint-disable-next-line func-names
module.exports = function (app) {
  app.use(proxy(['/api'], { target: 'http://localhost:5001' }));
};

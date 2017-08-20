const compose = require('koa-compose');
const router = require('../routes');

module.exports = compose([
  router.routes,
  router.allowedMethods
]);

const compose = require('koa-compose');

module.exports = compose([
  router.routes,
  router.allowedMethods
]);

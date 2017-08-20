const router = require('koa-router')();

router.get('/', async (ctx, next) => {
  ctx.response.boyd = 'Hello world';
});

module.exports = router;

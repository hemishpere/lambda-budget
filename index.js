const Koa = require('koa');
const app = new Koa();

// response
app.use(ctx => {
  ctx.body = 'Welcome to Lambda Budget';
});

app.listen(3000);
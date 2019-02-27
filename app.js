const { port } = require('config');

const Koa = require('koa');
const router = require('koa-router')();
const convert = require('koa-convert');
const passport = require('koa-passport');
const json = require('koa-json');
const bodyparser = require('koa-bodyparser')();
const logger = require('koa-logger');
const error = require('koa-json-error');

const initRoutes = require('./routes');

require('./models');
require('./services/passport');

const app = new Koa();

app.use(error(({ status, message }) => ({ status, message })));
app.use(convert(bodyparser));
app.use(convert(json()));
app.use(convert(logger()));
app.use(passport.initialize());

initRoutes(router);

app.use(router.routes(), router.allowedMethods());

app.on('error', (err, ctx) => {
  console.error('Error:', err, ctx);
});

app.listen(port, () => {
  console.log('App is running on port', port);
});

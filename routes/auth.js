const { jwt: { secret } } = require('config');
const jwt = require('jsonwebtoken');
const passport = require('koa-passport');

const authService = require('../services/auth');

const login = async ctx => passport.authenticate('local', (err, user, info) => {
  if (user) {
    const token = jwt.sign(user, secret);
    ctx.body = { user, token };
  } else {
    ctx.status = 401;
    ctx.body = { message: info ? info.message : 'Login failed' };
  }
})(ctx);

const reset = async (ctx) => {
  const { email } = ctx.request.body;
  await authService.reset(email);
  ctx.status = 200;
  ctx.body = { message: 'Check your email, please' };
};

const verify = async (ctx) => {
  ctx.status = 200;
  ctx.body = { user: ctx.state.user };
};

module.exports = (router) => {
  router.post('/auth/login', login);
  router.post('/auth/reset', reset);
  router.get('/auth/verify', passport.authenticate('jwt', { session: false }), verify);
};

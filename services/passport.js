const { jwt: { secret } } = require('config');

const passport = require('koa-passport');
const { Strategy: LocalStrategy } = require('passport-local');
const { ExtractJwt, Strategy: JWTStrategy } = require('passport-jwt');

const { login } = require('./auth');
const { findAdminByEmail } = require('./admin');
const { makeHash } = require('../utils');


passport.use(
  new LocalStrategy(
    { usernameField: 'email', passwordField: 'password' },
    (email, password, cb) => login(email, password)
      .then(user => ({ ...user.toJSON(), hash: makeHash(user.password + user.email) }))
      .then(user => cb(null, user)).catch(err => cb(err)),
  ),
);
passport.use(
  new JWTStrategy(
    { jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(), secretOrKey: secret },
    (jwt, cb) => findAdminByEmail(jwt.email)
      .then(user => (jwt.hash !== makeHash(user.password + user.email)
        ? Promise.reject() : Promise.resolve(user)))
      .then(user => cb(null, user.toJSON())).catch(err => cb(err)),
  ),
);

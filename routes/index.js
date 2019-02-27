const auth = require('./auth');
const club = require('./club');
const admin = require('./admin');

module.exports = (router) => {
  auth(router);
  club(router);
  admin(router);
};

const { smtp } = require('config');

const { sendMail } = require('./email');
const admin = require('../models/admin');
const { makeHash, makeRandomPass } = require('../utils');

const reset = async (email) => {
  const newPass = makeRandomPass();
  const passwordHash = makeHash(newPass);
  await admin.update({ email }, { password: passwordHash });
  await sendMail({
    ...smtp,
    to: email,
    subject: 'Password reset',
    text: `Your new password is ${newPass} .`,
  });
};

const login = async (email, password) => {
  const u = await admin.findOne({ email, password: makeHash(password) }).select('+password').exec();
  if (!u) {
    throw new Error('Login failed');
  }
  return u;
};

module.exports = {
  reset,
  login,
};

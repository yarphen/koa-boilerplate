const crypto = require('crypto');

const parseJSON = (str) => {
  try {
    return JSON.parse(str);
  } catch (e) {
    return undefined;
  }
};

const filterUndefined = obj => Object.keys(obj)
  .filter(key => obj[key] !== undefined)
  .reduce((prev, curr) => ({ ...prev, [curr]: obj[curr] }), {});

const makeHash = password => crypto.createHash('sha512')
  .update(password, 'utf-8')
  .digest()
  .toString('hex');

const makeRandomPass = () => crypto.randomBytes(6).toString('base64');

module.exports = {
  parseJSON,
  filterUndefined,
  makeHash,
  makeRandomPass,
};

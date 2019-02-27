const { parseJSON } = require('../utils');

module.exports = {
  port: parseInt(process.env.PORT, 10) || 8088,
  mongo: {
    host: process.env.DB_HOST || 'localhost',
    port: parseInt(process.env.DB_PORT, 10) || 27017,
    db: process.env.DB_NAME,
    url: process.env.DB_URL,
    options: { useNewUrlParser: true, ...parseJSON(process.env.DB_OPTIONS) },
  },
  jwt: {
    secret: process.env.JWT_SECRET,
  },
  smtp: {
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT, 10),
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
    from: process.env.SMTP_FROM,
    secure: process.env.SMTP_SECURE === 'true',
  },
};

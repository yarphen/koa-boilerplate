const adminService = require('../services/admin');

const { connection } = require('../models');

const {
  DEFAULT_EMAIL,
  DEFAULT_PASSWORD,
  DEFAULT_FIRST_NAME,
  DEFAULT_LAST_NAME,
} = process.env;

connection.on('open', async () => {
  await adminService.createAdmin({
    email: DEFAULT_EMAIL || 'admin@example.com',
    password: DEFAULT_PASSWORD || 'changeme',
    firstName: DEFAULT_FIRST_NAME || 'ADMIN',
    lastName: DEFAULT_LAST_NAME || 'ADMIN',
  });
  connection.close();
});

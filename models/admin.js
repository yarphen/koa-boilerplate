const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, index: true, select: false },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
}, {
  collection: 'admins',
});

module.exports = mongoose.model('Admins', adminSchema);

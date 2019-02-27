const mongoose = require('mongoose');

const clubSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true, default: '' },
}, {
  collection: 'clubs',
});

clubSchema.index({ title: 1 });

module.exports = mongoose.model('Clubs', clubSchema);

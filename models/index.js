const mongoose = require('mongoose');
const { mongo: { db, host, port, url, options } } = require('config');

mongoose.Promise = global.Promise;

if (url) {
  mongoose.connect(url, options);
} else {
  mongoose.connect(`mongodb://${host}:${port}/${db}`, options);
}
mongoose.connection.on('error', () => {
  console.error('mongoose connection error');
});

['close', 'disconnected', 'disconnecting', 'connected', 'connecting', 'reconnected', 'open'].forEach((event) => {
  mongoose.connection.on(event, () => console.log('mongoose event', event));
});

module.exports = {
  connection: mongoose.connection,
};

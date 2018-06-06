const mongoose = require('mongoose');
const config = require('configuration');

mongoose.Promise = global.Promise;

const DB_NAME = config.get('DB_NAME');
const DB_ID = config.get('DB_ID');
const DB_PW = config.get('DB_PW');

exports.connect = () => {
  return new Promise((resolve, reject) => {
    mongoose.connect(`mongodb://${DB_ID}:${DB_PW}@ds247430.mlab.com:47430/${DB_NAME}`)
    const connection = mongoose.connection;

    connection.on('error', reject);
    connection.once('open', resolve);
  });
}
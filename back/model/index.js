const mongoose = require('mongoose');
const { Schema } = mongoose;

const TalkSchema = new Schema({
  user: { type: String, required: true },
  message: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
}, { collection: 'talk' });

const Talk = mongoose.model('Talk', TalkSchema);

module.exports = { Talk };
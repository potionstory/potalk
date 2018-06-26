const mongoose = require('mongoose');
const { Schema } = mongoose;

// mongoose를 이용한 Schema & collection 설정
const TalkSchema = new Schema({
  user: { type: String, required: true },
  message: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
}, { collection: 'talk' });

const AuthSchema = new Schema({
  id: { type: String, required: true },
  email: { type: String, required: true },
  pw: { type: String, required: true },
  created: { type: Date, default: Date.now }
}, { collection: 'auth' })


// Schema를 사용하여 model 생성
const Talk = mongoose.model('Talk', TalkSchema);
const Auth = mongoose.model('Auth', AuthSchema);

module.exports = { Talk, Auth };
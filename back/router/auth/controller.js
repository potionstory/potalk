// 사용할 model을 추가
const { Auth } = require('model');

// Auth 찾기
exports.login = (req, res) => {
  Auth.find({}).exec((error, data) => {
    if (error) throw new Error(error);
    res.send(data);
  });
}

// Auth 생성
exports.join = (req, res) => {
  const data = req.body;
  const auth = new Auth(data);
  console.log(data);

  auth.save((error, data) => {
    if (error) throw new Error(error);
    res.send(data);
  });
}
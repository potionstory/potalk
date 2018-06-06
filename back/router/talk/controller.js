// 사용할 model을 추가
const { Talk } = require('model');

// Talk 찾기
exports.find = (req, res) => {
  Talk.find({}).exec((error, data) => {
    if (error) throw new Error(error);
    res.send(data);
  });
}

// Talk 생성
exports.create = (req, res) => {
  const data = req.body;
  const talk = new Talk(data);

  talk.save((error, data) => {
    if (error) throw new Error(error);
    res.send(data);
  });
}
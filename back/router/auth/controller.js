// 사용할 model을 추가
const { Auth } = require('model');
const SHA256 = require('crypto-js/sha256');


// Auth 찾기
exports.login = (req, res) => {
  const _id = req.body.id;
  
  Auth.findOne({ id: _id }, (error, data) => {
    if (error) throw new Error(error);

    if (!data) {
      return res.status(409).json({
        error: 'ID NOT EXISTS',
        code: 0
      });
    }

    let pw = SHA256(req.body.pw).toString();
    if (pw !== data.pw) {
      return res.status(409).json({
        error: 'PASSWORD INCORRECT',
        code: 1
      });
    }
    res.send(data);
  });
}

// Auth 생성
exports.join = (req, res) => {
  let idRegex = /^[a-z0-9]+$/;

  if (!idRegex.test(req.body.id)) {
    return res.status(400).json({
      error: 'BAD ID',
      code: 0
    });
  }

  if (req.body.pw.length < 4 || typeof req.body.pw !== 'string') {
    return res.status(400).json({
      error: 'BAD PASSWORD',
      code: 1
    });
  }

  if (req.body.pw !== req.body.re_pw) {
    return res.status(400).json({
      error: 'NOT SAME PASSWORD',
      code: 2
    });
  }

  Auth.findOne({ id: req.body.id }, (error, exists) => {
    if (error) throw err;
    if (exists) {
      return res.status(409).json({
        error: 'ID EXISTS',
        code: 3
      });
    }

    let pw = SHA256(req.body.pw).toString();

    let auth = new Auth({
      id: req.body.id,
      email: req.body.email,
      pw: pw
    });

    auth.save((error, data) => {
      if (error) throw new Error(error);
      res.send(data);
    });
  });
}
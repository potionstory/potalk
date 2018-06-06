const { Talk } = require('model');

exports.find = (req, res) => {
  Talk.find({}).exec((error, data) => {
    if (error) throw new Error(error);
    res.send(data);
  });
}

exports.create = (req, res) => {
  const data = req.body;
  console.log(data);
  const talk = new Talk(data);

  talk.save((error, data) => {
    if (error) throw new Error(error);
    res.send(data);
  });
}
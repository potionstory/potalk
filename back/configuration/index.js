// NODE_ENV의 값에 따라 서버의 환경이 변경(함수 형태로 내보냄)
exports.get = key => {
  let config = require('./config.dev');
  if (process.env.NODE_ENV === 'production') {
    config = require('./config.prod');
  }
  return config[key];
}
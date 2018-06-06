// mongoDB를 컨트롤하기 위해 mongoose를 사용
const mongoose = require('mongoose');
const config = require('configuration');

// mongoose 내부의 Promise를 사용하는데, 어떤 종류의 Promise를 사용할것이지 설정
mongoose.Promise = global.Promise;

// 서버 환경 & DB정보 가져오기(코드상에 ID, PW등 개인정보를 남기지 않음)
const DB_NAME = config.get('DB_NAME');
const DB_ID = config.get('DB_ID');
const DB_PW = config.get('DB_PW');

// DB를 연결하기 위한 함수를 내보냄(database의 접속 여부는 비동기성이기 때문에 Promise를 사용)
exports.connect = () => {
  return new Promise((resolve, reject) => {
    mongoose.connect(`mongodb://${DB_ID}:${DB_PW}@ds247430.mlab.com:47430/${DB_NAME}`)
    const connection = mongoose.connection;

    connection.on('error', reject);
    connection.once('open', resolve);
  });
}
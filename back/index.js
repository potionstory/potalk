require('dotenv').config();

// 서버 구성에 필요한 모듈 불러오기
const express = require('express');
const http = require('http');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const router = require('router');
const database = require('database');
const config = require('./configuration');

// 서버 구성하기
const app = express();
const server = http.createServer(app);
const { startWebSocket } = require('socket');
const PORT = config.get('PORT');

// 미들웨어
app.use(cors());
app.use(bodyParser.json());
app.use(morgan('combined'));
app.use(router);

server.listen(PORT, async () => {
  try {
    await database.connect();
    console.log(`server connected: ${PORT}`);
  } catch(error) {
    console.error(error);
  }
});

// socket 사용
startWebSocket(server);
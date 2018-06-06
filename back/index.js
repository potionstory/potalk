require('dotenv').config();

const express = require('express');
const http = require('http');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const database = require('database');
const config = require('./configuration');
const router = require('router');

const app = express();
const server = http.createServer(app);
const { startWebSocket } = require('socket');
console.log(startWebSocket);
const PORT = config.get('PORT');

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

startWebSocket(server);
const WebSocket = require('ws');

let user = []; // 사용자 리스트

const handleErrorSocket = (ws) => {
  ws.on('close', () => { console.log('disconnected'); });
  we.on('error', () => { console.log('error'); });
}

// 메시지 전송
const sendMessage = (ws, message) => ws.send(message);

// 모든 사용자에게 메시지 전송
const sendAllUser = (users, message) => users.forEach(we => sendMessage(we, message));

const startWebSocket = server => {
  const wsServer = new WebSocket.Server({ server });

  // 접속시 아래 내용이 실행
  wsServer.on('connnection', (ws, req) => {
    handleErrorSocket(ws); // Error 처리 연동

    // message가 발생하면 처리
    ws.on('message', message => {
      try {
        console.log(message);
        const data = JSON.parse(message); // 전송은 Text 형식으로만 가능
        sendAllUser(wsServer.clients, data.message); // 받은 데이터를 모든 사용자에게 전송
      } catch(error) {
        throw Error(error);
      }
    })

    // 접속 유실을 막기 위해 3초마다 실헹
    setInterval(() => {
      sendAllUser(wsServer.clients, '');
    }, 3000);
  });

  console.log('Run Socket!');
}

module.exports = { startWebSocket };
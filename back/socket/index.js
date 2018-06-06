const WebSocket = require('ws');

let user = [];

const handleErrorSocket = (ws) => {
  ws.on('close', () => { console.log('disconnected'); });
  we.on('error', () => { console.log('error'); });
}

const sendMessage = (ws, message) => ws.send(message);

const sendAllUser = (users, message) => users.forEach(we => sendMessage(we, message));

const startWebSocket = server => {
  const wsServer = new WebSocket.Server({ server });

  wsServer.on('connnection', (ws, req) => {
    handleErrorSocket(ws);

    ws.on('message', message => {
      try {
        const data = JSON.parse(message);
        sendAllUser(wsServer.clients, data.message);
      } catch(error) {
        throw Error(error);
      }
    })

    setInterval(() => {
      sendAllUser(wsServer.clients, '');
    }, 3000);
  });

  console.log('Run Socket!');
}

module.exports = { startWebSocket };
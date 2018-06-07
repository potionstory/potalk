import React, { Component } from 'react';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      view: [],
      text: ''
    };
  }

  componentDidMount() {
    this.connectWebSocket();
  }

  connectWebSocket = () => {
    const ws = new WebSocket('ws://localhost:8080');
    this.ws = ws;

    ws.addEventListener('message', message => {
      if (message === null) return;
      const { view } = this.state;
      this.setState({
        view: [
          ...view,
          message.data
        ]
      });
    });
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  }

  handleSend = () => {
    const { text } = this.state;
    this.ws.send(JSON.stringify({ message: text }));
  }

  render() {
    const { view, text } = this.state;
    return (
      <div>
        <div>
        {
          view.map((text, index) => <div key={index}>{text}</div>)
        }
        </div>
        <input type="text" name="text" value={text} onChange={this.handleChange}/>
        <button onClick={this.handleSend}>Send</button>
      </div>
    );
  }
}

export default App;

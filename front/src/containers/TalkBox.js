import React, { Component } from 'react';
import { TalkBoxStyle } from '../styles/talkbox';

class TalkBox extends Component {

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
      <TalkBoxStyle>
        <div>
        {
          view.map((text, index) => <div key={index}>{text}</div>)
        }
        </div>
        <div className="enter_area">
          <input type="text" placeholder="SEARCH TALK" name="text" value={text} onChange={this.handleChange}/>
          <a className="waves-effect waves-light btn" onClick={this.handleSend}>SEND</a>
        </div>
      </TalkBoxStyle>
    );
  }
}

export default TalkBox;
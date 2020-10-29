import React from "react";
export default class ChatBox extends React.Component {
  state = {
    message: ""
  };

  sendMessage() {
    this.props.onSend(this.state.message);
  }

  updateMessage(event) {
    this.setState({message: event.target.value});
  }

  render() {
    return (
      <div className="chatBox-container">
        <form onSubmit={this.sendMessage}>
          <input className="chat-input"
                 type="text"
                 placeholder="Say something..."
                 onChange={this.updateMessage}/>
          <button className="chat-submit" type="submit" value="submit">
            Send
          </button>
        </form>
      </div>
    );
  }
}

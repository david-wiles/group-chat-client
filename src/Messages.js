import React from "react";

export default class Messages extends React.Component {
  render() {
    return (
      <div className="messages-container">
        { this.props.chats }
      </div>
    );
  }
}

import React from "react";

export default class ChatHeader extends React.Component {
  setGroup(event) {
    this.props.onGroupChange({
      name: event.name,
      id: event.id
    });
  }

  render() {
    return (
      <div className="headerContainer">
        <strong>{this.props.groupName}</strong>
        <select onChange={this.setGroup}></select>
      </div>
    );
  }
}

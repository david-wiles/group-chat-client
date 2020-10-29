import React from "react";
import axios from "axios";

import './App.css';
import AuthModal from "./AuthModal";
import ChatHeader from "./ChatHeader";
import Messages from "./Messages";
import ChatBox from "./ChatBox";
import Utils from "./Utils";

export default class App extends React.Component {
  state = {
    auth: "",
    groupName: "",
    groupId: "",
    chats: []
  }

  updateGroup(group) {
    axios.get(Utils.funcUrl + group.id)
      .then((resp) => {
        if (resp.status === 200) {
          return JSON.parse(resp.data);
        }
      })
      .then((body) => {
        this.setState({
          groupName: group.name,
          groupId: group.Id,
          chats: body.chats
        });
      })
      .catch((err) => console.error(err));
  }

  sendMessage(message) {
    axios.post(Utils.funcUrl, {
      message: message
    }, {
      authorization: this.props.auth
    })
      .then((resp) => {
        if (resp.status === 200) {
          return JSON.parse(resp.data);
        }
      })
      .then((data) => {
        this.setState({
          chats: data.chats
        });
      })
      .catch((err) => console.error(err));
  }

  mount(auth) {
    this.setState({
      auth: auth
    });

    // Gather saved chats, if any
  }

  render() {
    return (
      <div className="App">
        {/*<AuthModal onAuthentication={this.mount}/>*/}
        <ChatHeader groupName={this.state.groupName} onGroupChange={this.updateGroup}/>
        <Messages chats={this.state.chats}/>
        <ChatBox onSend={this.sendMessage}/>
      </div>
    );
  }
}

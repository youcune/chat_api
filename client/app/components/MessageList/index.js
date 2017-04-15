import React, { Component } from 'react'
import $ from 'jquery'
import Message from '../Message'
import MessageForm from '../MessageForm'

class MessageList extends Component {
  componentDidMount() {
    const { actions } = this.props // stands for const actions = this.props.actions
    $.ajax({
      type: 'GET',
      url: '/api/messages',
      success: ((data) => { actions.createMessageList(data) })
    })
  }

  renderMessage(message) {
    return (
      message.displayState ?
      <Message key={message.id} id={message.id} text={message.text} actions={this.props.actions} /> :
      <MessageForm key={message.id} text={message.text} />
    )
  }

  render() {
    const { messages } = this.props
    return (
      <div>
        {messages.map((message) => this.renderMessage(message) )}
      </div>
    )
  }
}

export default MessageList

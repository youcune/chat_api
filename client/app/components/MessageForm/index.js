import React, { Component } from 'react'
import $ from 'jquery'

// extends ComponentするとLifecycle methodsが使える
class MessageForm extends Component {
  onSubmit() {
    const { actions } = this.props
    $.ajax({
      type: 'POST',
      url: '/api/messages',
      data: {
        message: { text: this.textMessage.value }
      },
      success: ((data) => actions.addMessage(data))
    })
    actions.addMessage(this.textMessage.value)
  }

  render() {
    return (
      <div>
        <textarea rows="4" cols="40" ref={(input) => { this.textMessage = input }} />
        <input type="submit" value="送信" onClick={this.onSubmit.bind(this)} />
      </div>
    )
  }
}

export default MessageForm

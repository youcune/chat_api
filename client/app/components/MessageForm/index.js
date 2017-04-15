import React, { Component } from 'react'
import $ from 'jquery'

class MessageForm extends Component {
  onSubmit() {
    const { actions } = this.props
    if (this.messageId) {
      $.ajax({
        type: 'PUT',
        url: `/api/messages/${this.messageId}`,
        data: {
          message: {text: this.textMessage.value}
        },
        success: ((data) => actions.updateMessage(data))
      })
    }
    else {
      $.ajax({
        type: 'POST',
        url: '/api/messages',
        data: {
          message: {text: this.textMessage.value}
        },
        success: ((data) => actions.addMessage(data))
      })
    }
  }

  render() {
    const { message, onCancelClick } = this.props
    const cancelButton = message ? <input type='button' value='キャンセル' onClick={onCancelClick} /> : null
    return (
      <div>
        <textarea rows="4" cols="40" ref={(input) => { this.textMessage = input; this.messageId = message ? message.id : null }} defaultValue={message ? message.text : ''} />
        {cancelButton}
        <input type="button" value={message ? '更新' : '登録'} onClick={this.onSubmit.bind(this)} />
      </div>
    )
  }
}

export default MessageForm

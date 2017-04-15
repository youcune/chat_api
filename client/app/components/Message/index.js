import React, { Component } from 'react'

const Message = ({text, id, actions}) => {
  return(
    <div onClick={actions.toggleDisplayState} data-message-id={id}>
      {text}
    </div>
  )
}

// const Message = ({text}) => { }
// は、下記のショートカット
// var Message = function(prop){ var text = prop.text; }

export default Message

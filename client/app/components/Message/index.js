import React, { PropTypes } from 'react'

const Message = ({actions, id, text, onClick}) => {
  return (
    <div>
      <span onClick={onClick}>{text}</span>
    </div>
  )
}

export default Message

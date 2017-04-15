import React from 'react'

const Message = ({text}) => {
  return(
    <div>
      {text}
    </div>
  )
}

// const Message = ({text}) => { }
// は、下記のショートカット
// var Message = function(prop){ var text = prop.text; }

export default Message

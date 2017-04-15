import { combineReducers } from 'redux'
import { ADD_MESSAGE, CREATE_MESSAGE_LIST, TOGGLE_DISPLAY_STATE } from '../constants/chat'

export const chatInitialState = [{"id":2,"text":"message2"},{"id":1,"text":"message1"}]

const toggleDisplayState = (id, message) => {
  if (id === message.id) {
    message.displayState = !message.displayState
  }
  return message
}

const chat = (state = '', action) => {
  switch (action.type) { // どのアクションを呼ぶか
    case CREATE_MESSAGE_LIST:
      return action.messages.map((_) => {
        _['displayState'] = true
        return _
      })
    case ADD_MESSAGE: // ADD_MESSAGEのアクションを呼ぶ場合
      const message = action.message
      message['displayState'] = true
      return [...state, message ]
    case TOGGLE_DISPLAY_STATE:
      return state.map((message) => toggleDisplayState(action.id, message))
    default:
      return state
  }
}

export default chat

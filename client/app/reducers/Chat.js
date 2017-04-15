import { combineReducers } from 'redux'
import { ADD_MESSAGE, CREATE_MESSAGE_LIST } from '../constants/chat'

export const chatInitialState = [{"id":2,"text":"message2"},{"id":1,"text":"message1"}]

const chat = (state = '', action) => {
  switch (action.type) { // どのアクションを呼ぶか
    case ADD_MESSAGE: // ADD_MESSAGEのアクションを呼ぶ場合
      return [...state, action.message ]
    case CREATE_MESSAGE_LIST:
      return action.messages
    default:
      return state
  }
}

export default chat

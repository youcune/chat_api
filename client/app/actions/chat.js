import { ADD_MESSAGE, CREATE_MESSAGE_LIST } from '../constants/chat'

export const addMessage = (message) => ({
  type: ADD_MESSAGE,
  message, // stands for message: message
})

export const createMessageList = (messages) => ({
  type: CREATE_MESSAGE_LIST,
  messages, // stands for message: message
})

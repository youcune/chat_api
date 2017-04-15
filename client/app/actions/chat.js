import { ADD_MESSAGE, CREATE_MESSAGE_LIST, TOGGLE_DISPLAY_STATE } from '../constants/chat'

export const addMessage = (message) => ({
  type: ADD_MESSAGE,
  message, // stands for message: message
})

export const createMessageList = (messages) => ({
  type: CREATE_MESSAGE_LIST,
  messages, // stands for messages: messages
})

export const toggleDisplayState = (message) => ({
  type: TOGGLE_DISPLAY_STATE,
  message
})

import { ADD_MESSAGE } from '../constants/chat'

export const addMessage = (message) => ({
  type: ADD_MESSAGE,
  message, // stands for message: message
})

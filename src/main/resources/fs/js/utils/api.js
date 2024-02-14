import { chatBotClient } from './client';

export const ChatBotService = {
  search: notes => {
    return chatBotClient.post("/ESG", { notes })
      .then(({ product_description }) => ({ answer: product_description }))
  }
}

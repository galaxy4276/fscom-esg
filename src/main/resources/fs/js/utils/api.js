import { chatBotClient } from './client';

export const ChatBotService = {
  search: note => {
    return chatBotClient.post("/ESG", { note })
      .then(({ product_description }) => ({ answer: product_description }))
  }
}

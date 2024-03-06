import client, { chatBotClient } from './client';

export const ChatBotService = {
  search: notes => {
    return chatBotClient.post("/ESG", { notes })
      .then(({ product_description }) => ({ answer: product_description.result }))
  }
}

export const UserService = {
  login: (email, password) => client.post('/auth/login', { email, password }),
  getUser: () => client.get('/user'),
};

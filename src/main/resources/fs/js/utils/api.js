import client from './client';

export const ChatBotService = {
  search: notes => {
    return client.post("/chatbot", { notes })
      .then(({ product_description }) => ({ answer: product_description.result }))
  }
}

export const UserService = {
  login: (email, password) => client.post('/auth/login', { email, password }),
  getUser: () => client.get('/user'),
};


export const PostService = {
  create: body => client.post('/posts', body),
};

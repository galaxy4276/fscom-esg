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
  create: body => {
    const formData = new FormData();
    formData.append("title", body.title);
    formData.append("content", body.content);
    formData.append("category", body.category);
    formData.append("representFile", body.representFile);
    return client.post('/posts', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  },
  getList: (category, offset) => client.get(`/posts?category=${category}&page=${offset}&size=10`),
  getDetails: id => client.get(`/posts/${id}`),
  delete: id => client.delete(`/posts/${id}`),
  update: (id, body) => client.put(`/posts/${id}`, body, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  }),
};


export const FileService = {
  upload: file => {
    const formData = new FormData();
    formData.set('file', file);
    return client.post('/file', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      },
    });
  }};

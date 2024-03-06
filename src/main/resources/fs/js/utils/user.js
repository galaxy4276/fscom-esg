import { UserService } from './api';

const userUtils = {
  get: () => {
    const storage = localStorage.getItem("user");
    if (!storage) return null;
    return JSON.parse(storage);
  },
  save: user => {
    const managed = {
      ...user,
      isLoggedIn: true
    };
    localStorage.setItem("user", JSON.stringify(managed));
  },
  update: user => {
    const storage = localStorage.getItem("user")
    if (!storage) {
      userUtils.save(user)
      return;
    }

    // TODO: user update (PUT) API
  },
  login: async (email, password) => {
    try {
      await UserService.login(email, password);
      const user = await UserService.getUser();
      userUtils.save(user);
    } catch (error) {
      throw Error(error);
    }
  },
  logout: () => {
    localStorage.removeItem('user');
  },
  checkLoggedIn: () => {
    return localStorage.getItem("user") !== null;
  }
}

export default userUtils;
